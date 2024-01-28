function displayRecipe(response) {
  new Typewriter("#ingredients", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let ingredientsForm = document.querySelector("#ingredients");
  ingredientsForm.innerHTML =
    "Let me think what a recipe i have for you🤔Wait a little bit...";
  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "dad25fdb15t0a6cd0337444a00580o2f";
  let prompt = `User request is: Generate a recipe with this product ${instructionInput.value}`;
  let context =
    "You are a very good cooker of simple food recipes and you like to cook fast and tasty. Your mission is to advice people in which simple recipe they can use their food. Please write in basic HTML. Make sure to follow user request, but if it is not a food product, you can write that you don't have an answer for that.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
