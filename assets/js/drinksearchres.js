var searchTerm = (window.location.search.split("=")[1]);


function getCocktailBySearch () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + searchTerm)
      .then (function (resp) {
        return resp.json();
      }) // Convert data to JSON
      .then (function (data) {
        console.log(data);      
        var drinkArr = data.drinks;
        var drinkImg = drinkArr.strDrinkThumb;
        var drinkName = drinkArr.strDrink;  

  
  
        drinkArr.forEach(element => {
            console.log(element);
            var resultList = document.querySelector("main")
            resultList.setAttribute("class", "container row resultslist ");
              

            var resultEl = document.createElement("div");
            resultEl.setAttribute("class", "resultitem card col s12");  
            resultEl.setAttribute("data", element.idDrink)
            var resultImg = document.createElement("img");
            resultImg.setAttribute("src", element.strDrinkThumb);
            resultImg.setAttribute("class", "responsive-img col s2")
            var resultName = document.createElement("span");
            resultName.textContent = element.strDrink;
            resultEl.appendChild(resultImg);
            resultEl.appendChild(resultName)
            resultList.appendChild(resultEl);
              
        });

        var results = document.querySelectorAll(".card");
        results.forEach(element => {
            element.addEventListener("click", function (event) {
                event.stopPropagation();
                console.log(event.target);
                var currentId = event.currentTarget.getAttribute("data");
                window.location.href = "./results.html?currentID=" + undefined +"&"+currentId
              });
            
        });
       

      });      
  };
  

document.addEventListener('DOMContentLoaded', function() {    
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    getCocktailBySearch();
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



