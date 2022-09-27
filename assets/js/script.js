var recipeCardImgs = document.querySelectorAll(".randImg");
var recipeCardNames = document.querySelectorAll(".mealName");
var recipeCardCat = document.querySelectorAll(".mealCat");
var recipeCard = document.querySelectorAll(".card");

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

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

    recipeCardImgs.forEach((element) => {
      console.log(element);
      element.setAttribute("src", mealImg);
    });

    recipeCardNames.forEach((element) => {
      console.log(element);
      element.textContent = mealName;
    });

    recipeCardCat.forEach((element) => {
      console.log(element);
      element.textContent = mealCat;
    });

    recipeCard.forEach((element) => {
      element.setAttribute("data", mealID);

      element.addEventListener("click", function (event) {
        var currentId = event.currentTarget.getAttribute("data");
        window.location.href = "./results.html?currentID="+currentId
      });
      
    });
  });
