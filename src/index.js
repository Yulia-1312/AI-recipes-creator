function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#ingredients", {
    strings: ` 2 pounds carrots (15 to 20 small to medium), 1 small yellow onion, 3
            cloves garlic, 2 to 4 sprigs fresh dill, 1 medium lemon, 3 tablespoons
            unsalted butter, 1 1/2 teaspoons kosher salt, 1/4 teaspoon freshly
            ground black pepper, plus more for serving, 1 (32-ounce) carton
            low-sodium vegetable or chicken broth (4 cups), 1/2 cup heavy cream
            (optional) `,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
