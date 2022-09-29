var mealID = (window.location.search.split("=")[1]);

function getMealBySearch () {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + mealID)
      .then (function (resp) {
        return resp.json();
      }) // Convert data to JSON
      .then (function (data) {
        console.log(parseInt(mealID));      
        var mealArr = data.meals[0];
        var mealImg = mealArr.strMealThumb;
        var mealName = mealArr.strMeal;  

  
  
        combined.forEach(element => {
            var resultList = document.querySelector("ul")
            ingList.setAttribute("id", "resultslist");
            var listItem = document.createElement("li");  
            var resultEl = document.createElement("div");
            resultEl.setAttribute("class", "resultitem col s12");  
            var resultImg = document.createElement("img");
            resultImg.setAttribute("src", mealImg);  
            var resultName = document.createElement("span");
            resultName.textContent = mealName;
            resultEl.appendChild(resultImg, resultName);
            listItem.appendChild(resultEl);
            resultList.appendChild(listItem);

          console.log(element.split());       
        });
      });
  };

  function getCocktailBySearch () {
    fetch("www.thecocktaildb.com/api/json/v1/1/search.php?i" + mealID)
      .then (function (resp) {
        return resp.json();
      }) // Convert data to JSON
      .then (function (data) {
        console.log(parseInt(mealID));      
        var mealArr = data.meals[0];
        var mealImg = mealArr.strMealThumb;
        var mealName = mealArr.strMeal;  

  
  
        combined.forEach(element => {
            var resultList = document.querySelector("ul")
            ingList.setAttribute("id", "resultslist");
            var listItem = document.createElement("li");  
            var resultEl = document.createElement("div");
            resultEl.setAttribute("class", "resultitem col s12");  
            var resultImg = document.createElement("img");
            resultImg.setAttribute("src", mealImg);  
            var resultName = document.createElement("span");
            resultName.textContent = mealName;
            resultEl.appendChild(resultImg, resultName);
            listItem.appendChild(resultEl);
            resultList.appendChild(listItem);
            
          console.log(element.split());       
        });
      });
  };