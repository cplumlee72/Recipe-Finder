var foodPic = document.querySelector("#mealimg");
var ctPic = document.querySelector("#ctimg");
var searchID = window.location.search.split("=")[1];
var IDArr = searchID.split("&");
var foodID = IDArr[0];
var drinkID = IDArr[1];
console.log(IDArr);

function getMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + foodID)
    .then(function (resp) {
      return resp.json();
    }) // Convert data to JSON
    .then(function (data) {
      console.log(foodID, drinkID);
      var mealArr = data.meals[0];
      var mealImg = mealArr.strMealThumb;
      var mealName = mealArr.strMeal;
      var instructions = mealArr.strInstructions;
      var measures = [
        mealArr.strMeasure1,
        mealArr.strMeasure2,
        mealArr.strMeasure3,
        mealArr.strMeasure4,
        mealArr.strMeasure5,
        mealArr.strMeasure6,
        mealArr.strMeasure7,
        mealArr.strMeasure8,
        mealArr.strMeasure9,
        mealArr.strMeasure10,
        mealArr.strMeasure11,
        mealArr.strMeasure12,
        mealArr.strMeasure13,
        mealArr.strMeasure14,
        mealArr.strMeasure15,
        mealArr.strMeasure16,
        mealArr.strMeasure17,
        mealArr.strMeasure18,
        mealArr.strMeasure19,
        mealArr.strMeasure20,
      ];
      var ingredients = [
        mealArr.strIngredient1,
        mealArr.strIngredient2,
        mealArr.strIngredient3,
        mealArr.strIngredient4,
        mealArr.strIngredient5,
        mealArr.strIngredient6,
        mealArr.strIngredient7,
        mealArr.strIngredient8,
        mealArr.strIngredient9,
        mealArr.strIngredient10,
        mealArr.strIngredient11,
        mealArr.strIngredient12,
        mealArr.strIngredient13,
        mealArr.strIngredient14,
        mealArr.strIngredient15,
        mealArr.strIngredient16,
        mealArr.strIngredient17,
        mealArr.strIngredient18,
        mealArr.strIngredient19,
        mealArr.strIngredient20,
      ];
      var combined = measures.map((e, i) => e + " " + ingredients[i]);

      var ingList = document.createElement("ul");
      ingList.setAttribute("id", "inglist");
      var instructionsEl = document.createElement("p");
      instructionsEl.textContent = instructions;

      var instructTitle = document.createElement("div");
      instructTitle.textContent = "Instructions:";
      instructTitle.style.fontWeight = "bold";
      instructTitle.style.textDecoration = "underline";
      instructTitle.style.fontSize = "20px";

      const mealins = document.querySelector("#mealins");
      mealins.appendChild(instructTitle);
      instructionsEl.textContent = instructions;
      mealins.appendChild(instructionsEl);

      var ingredientTitle = document.createElement("div");
      ingredientTitle.textContent = "Ingredients:";
      ingredientTitle.style.fontWeight = "bold";
      ingredientTitle.style.textDecoration = "underline";
      ingredientTitle.style.fontSize = "20px";

      const Ingre = document.querySelector("#mealingrs");
      Ingre.appendChild(ingredientTitle);
      Ingre.appendChild(ingList);

      combined.forEach((element) => {
        if (
          element !== " " &&
          element !== "null null" &&
          element.includes("null") === false
        ) {
          console.log(element.split());
          var ingItem = document.createElement("li");
          ingItem.textContent = element;
          ingList.appendChild(ingItem);
        }
      });
      // console.log(ingredients)
      // console.log(measures)
      foodPic.setAttribute("src", mealImg);
      document.querySelector("#recipename").textContent = mealName;
    });
}

function getCocktail() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID)
    .then(function (resp) {
      return resp.json();
    }) // Convert data to JSON
    .then(function (data) {
      console.log(data);
      var ctArr = data.drinks[0];
      var ctImg = ctArr.strDrinkThumb;
      var ctName = ctArr.strDrink;
      var ctInstructions = ctArr.strInstructions;
      var ctMeasures = [
        ctArr.strMeasure1,
        ctArr.strMeasure2,
        ctArr.strMeasure3,
        ctArr.strMeasure4,
        ctArr.strMeasure5,
        ctArr.strMeasure6,
        ctArr.strMeasure7,
        ctArr.strMeasure8,
        ctArr.strMeasure9,
        ctArr.strMeasure10,
        ctArr.strMeasure11,
        ctArr.strMeasure12,
        ctArr.strMeasure13,
        ctArr.strMeasure14,
        ctArr.strMeasure15,
        ctArr.strMeasure16,
        ctArr.strMeasure17,
        ctArr.strMeasure18,
        ctArr.strMeasure19,
        ctArr.strMeasure20,
      ];
      var ctingredients = [
        ctArr.strIngredient1,
        ctArr.strIngredient2,
        ctArr.strIngredient3,
        ctArr.strIngredient4,
        ctArr.strIngredient5,
        ctArr.strIngredient6,
        ctArr.strIngredient7,
        ctArr.strIngredient8,
        ctArr.strIngredient9,
        ctArr.strIngredient10,
        ctArr.strIngredient11,
        ctArr.strIngredient12,
        ctArr.strIngredient13,
        ctArr.strIngredient14,
        ctArr.strIngredient15,
        ctArr.strIngredient16,
        ctArr.strIngredient17,
        ctArr.strIngredient18,
        ctArr.strIngredient19,
        ctArr.strIngredient20,
      ];
      var combined = ctMeasures.map((e, i) => e + " " + ctingredients[i]);

      var ctIngList = document.createElement("ul");
      ctIngList.setAttribute("id", "ctinglist");
      var ctInstructionsEl = document.createElement("p");

      var instructionTitle = document.createElement("div");
      instructionTitle.textContent = "Instructions:";
      instructionTitle.style.fontWeight = "bold";
      instructionTitle.style.textDecoration = "underline";
      instructionTitle.style.fontSize = "20px";

      const ctIns = document.querySelector("#ctins");
      ctIns.appendChild(instructionTitle);

      ctInstructionsEl.textContent = ctInstructions;
      ctIns.appendChild(ctInstructionsEl);

      var ingredientsTitle = document.createElement("div");
      ingredientsTitle.textContent = "Ingredients:";
      ingredientsTitle.style.fontWeight = "bold";
      ingredientsTitle.style.textDecoration = "underline";
      ingredientsTitle.style.fontSize = "20px";

      const ctIngrs = document.querySelector("#ctingrs");
      ctIngrs.appendChild(ingredientsTitle);
      ctIngrs.appendChild(ctIngList);
      document.querySelector("#ctingrs").appendChild(ctIngList);

      combined.forEach((element) => {
        if (
          element.includes("undefined") === false &&
          element !== " " &&
          element !== "null null" &&
          element.includes("null") === false
        ) {
          console.log(element.split());
          var ingItem = document.createElement("li");
          ingItem.textContent = element;
          ctIngList.appendChild(ingItem);
        }
      });
      // console.log(ingredients)
      // console.log(measures)
      ctPic.setAttribute("src", ctImg);
      document.querySelector("#cocktailname").textContent = ctName;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);

  // var ctIngSearch = (window.location.search.split("="))
  console.log(isNaN(foodID));
  if (foodID !== "undefined") {
    getMeal();
  }
  if (drinkID !== "undefined") {
    getCocktail();
  }
});

var mealSearchField = document.querySelector("#food-search");
var mealSearchButton = document.querySelector("#mealsearchbutton");
var drinkSearchField = document.querySelector("#drink-search");
var drinkSearchButton = document.querySelector("#drinksearchbutton");

mealSearchButton.addEventListener("click", function (event) {
  console.log(mealSearchField.value);
  var mealSearchTerm = mealSearchField.value;
  window.location.href = "./foodsearchres.html?SearchTerm=" + mealSearchTerm;
});

drinkSearchButton.addEventListener("click", function (event) {
  console.log(drinkSearchField.value);
  var drinkSearchTerm = drinkSearchField.value;
  window.location.href = "./drinksearchres.html?SearchTerm=" + drinkSearchTerm;
});
