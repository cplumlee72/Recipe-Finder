var foodPic = document.querySelector("#mealimg");


document.addEventListener('DOMContentLoaded', function() {    
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);    
    var mealID = (window.location.search.split("=")[1]);

    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID)
    .then (function (resp) {
      return resp.json();
    }) // Convert data to JSON
    .then (function (data) {
      console.log(data);      
      var mainArr = data.meals[0];
      var mealImg = mainArr.strMealThumb;
      var mealName = mainArr.strMeal;
      var instructions = mainArr.strInstructions;
      var measures = [mainArr.strMeasure1, mainArr.strMeasure2, mainArr.strMeasure3, mainArr.strMeasure4, mainArr.strMeasure5, mainArr.strMeasure6, mainArr.strMeasure7, mainArr.strMeasure8, mainArr.strMeasure9, mainArr.strMeasure10, mainArr.strMeasure11, mainArr.strMeasure12, mainArr.strMeasure13, mainArr.strMeasure14, mainArr.strMeasure15, mainArr.strMeasure16, mainArr.strMeasure17, mainArr.strMeasure18, mainArr.strMeasure19, mainArr.strMeasure20];
      var ingredients = [mainArr.strIngredient1, mainArr.strIngredient2, mainArr.strIngredient3, mainArr.strIngredient4, mainArr.strIngredient5, mainArr.strIngredient6, mainArr.strIngredient7, mainArr.strIngredient8, mainArr.strIngredient9, mainArr.strIngredient10, mainArr.strIngredient11, mainArr.strIngredient12, mainArr.strIngredient13, mainArr.strIngredient14, mainArr.strIngredient15, mainArr.strIngredient16, mainArr.strIngredient17, mainArr.strIngredient18, mainArr.strIngredient19, mainArr.strIngredient20];
      var combined = measures.map((e, i) => e + " " + ingredients[i]);

      var ingList = document.createElement("ul")
      ingList.setAttribute("id", "inglist")
      var instructionsEl = document.createElement("p");
      instructionsEl.textContent = instructions
      document.querySelector("#mealins").textContent = "Instructions"
      document.querySelector("#mealins").appendChild(instructionsEl)

      document.querySelector("#mealingrs").textContent = "Ingredients";
      document.querySelector("#mealingrs").appendChild(ingList)

      combined.forEach(element => {
        if(element !== " "){
        console.log(element.split()) 
        var ingItem = document.createElement("li");
        ingItem.textContent = element
        ingList.appendChild(ingItem)
        };


      });
      // console.log(ingredients)
      // console.log(measures)
      foodPic.setAttribute("src", mealImg );
      document.querySelector("#recipename").textContent = mealName      
    });
});
