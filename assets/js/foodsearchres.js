var searchTerm = (window.location.search.split("=")[1]);

function getMealBySearch () {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchTerm)
      .then (function (resp) {
        return resp.json();
      }) // Convert data to JSON
      .then (function (data) {
        console.log(data);      
        var mealArr = data.meals;
        console.log(mealArr)
        // var mealImg = mealArr.strMealThumb;
        // var mealName = mealArr.strMeal;  
        // var mealID = mealArr.idMeal;
  
  
 
        mealArr.forEach(element => {
            console.log(element);
            var resultList = document.querySelector("main")
            resultList.setAttribute("class", "container row resultslist ");
              

            var resultEl = document.createElement("div");
            resultEl.setAttribute("class", "resultitem card col s12");  
            resultEl.setAttribute("data", element.idMeal)
            var resultImg = document.createElement("img");
            resultImg.setAttribute("src", element.strMealThumb);
            resultImg.setAttribute("class", "responsive-img col s2")
            var resultName = document.createElement("span");
            resultName.textContent = element.strMeal;
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
                window.location.href = "./results.html?currentID=" + currentId +"&"+undefined
              });


      });
  });
};

  document.addEventListener('DOMContentLoaded', function() {    
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    getMealBySearch();
  });

  


  