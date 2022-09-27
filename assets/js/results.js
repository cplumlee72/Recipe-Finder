var foodPic = document.querySelector("#mealimg");


document.addEventListener('DOMContentLoaded', function() {
  
    
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    
    var mealID = (window.location.search.split("=")[1])
    // console.log(mealID);

    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID)
    .then (function (resp) {
      return resp.json();
    }) // Convert data to JSON
    .then (function (data) {
      console.log(data);
      
      var mainArr = data.meals[0]
      var mealImg = mainArr.strMealThumb;
      var mealName = mainArr.strMeal;
      var instructions = mainArr.strInstructions;
      var measures = [mainArr.strMeasure1, mainArr.strMeasure2, mainArr.strMeasure3, mainArr.strMeasure4, mainArr.strMeasure5, mainArr.strMeasure6, mainArr.strMeasure7, mainArr.strMeasure8, mainArr.strMeasure9, mainArr.strMeasure10, mainArr.strMeasure11, mainArr.strMeasure12, mainArr.strMeasure13, mainArr.strMeasure14, mainArr.strMeasure15, mainArr.strMeasure16, mainArr.strMeasure17, mainArr.strMeasure18, mainArr.strMeasure19, mainArr.strMeasure20,]
      // console.log(instructions)

      foodPic.setAttribute("src", mealImg );
      document.querySelector("#recipename").textContent = mealName
      
      console.log(measures)
      var ingList = document.createElement("ul")
      ingList.setAttribute("id", "inglist")
      document.querySelector("#mealingrs").appendChild(ingList)

      
    })

    

    // 

});
