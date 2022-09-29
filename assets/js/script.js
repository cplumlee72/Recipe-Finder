var recipeCardImgs = document.querySelectorAll(".randImg");
var recipeCardNames = document.querySelectorAll(".mealName");
var recipeCardCat = document.querySelectorAll(".mealCat");
var recipeCard = document.querySelectorAll(".card");

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);



for (let i = 0; i < recipeCard.length; i++) {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(function (resp) {
    return resp.json();
  }) // Convert data to json
  .then(function (data) {
    console.log(data);
    // console.log(data.meals[0].strMealThumb);
    // console.log(data.meals[0].idMeal);
    // console.log(data.meals[0].strCategory);
    // console.log(data.meals[0].strMeal);

    var mealImg = data.meals[0].strMealThumb;
    var mealID = data.meals[0].idMeal;
    var mealCat = data.meals[0].strCategory;
    var mealName = data.meals[0].strMeal;

    recipeCardImgs[i].setAttribute("src", mealImg);
    recipeCardNames[i].innerHTML = mealName;
    recipeCardCat[i].textContent = mealCat;
    recipeCard[i].setAttribute("data-food", mealID);
  });  
};




  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(function (resp) {
    return resp.json();
  }) // Convert data to json
  .then(function (data) {
    var drinkID = data.drinks[0].idDrink; 
    recipeCard.forEach((element) => {
      element.setAttribute("data-drink", drinkID);
      element.addEventListener("click", function (event) {
        var foodID = event.currentTarget.getAttribute("data-food");
        var drinkID = event.currentTarget.getAttribute("data-drink");
        window.location.href = "./results.html?currentID="+foodID+"&"+drinkID
      });
    });
  });

  var mealSearchField = document.querySelector("#food-search");
  var mealSearchButton = document.querySelector("#mealsearchbutton");
  var drinkSearchField = document.querySelector("#drink-search");
  var drinkSearchButton = document.querySelector("#drinksearchbutton");


  mealSearchButton.addEventListener("click", function(event) {
    console.log(mealSearchField.value);
    var mealSearchTerm = mealSearchField.value
    window.location.href = "./foodsearchres.html?SearchTerm="+mealSearchTerm
  });

  

  drinkSearchButton.addEventListener("click", function(event) {
    console.log(drinkSearchField.value);
    var drinkSearchTerm = drinkSearchField.value
    window.location.href = "./drinksearchres.html?SearchTerm="+drinkSearchTerm;
  });

});


  
