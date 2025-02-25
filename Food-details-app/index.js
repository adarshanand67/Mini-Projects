let foodbutton = document.getElementById("foodbutton");
foodbutton.addEventListener("click", getOption);

function getOption() {
  var select = document.getElementById("fooditem");
  var text = select.options[select.selectedIndex].text;
  console.log(text);

  document.getElementById("cardlist1").innerHTML = "";
  document.getElementById("cardlist2").innerHTML = "";
  document.getElementById("cardlist3").innerHTML = "";

  url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${text}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // clear html
      let meals = data.meals;
      // console.log(meals);
      for (let i = 0; i < meals.length; i++) {
        let cardlist = document.getElementById(`cardlist${(i % 3) + 1}`);
        let strMeal = meals[i].strMeal;
        let strMealThumb = meals[i].strMealThumb;
        let idMeal = meals[i].idMeal;
        // console.log(strMeal, strMealThumb, idMeal);

        // create card
        let card = document.createElement("span");
        card.innerHTML = `<div class="card w-75 my-3">
      <div class="card-body shadow-lg">
      <h4 class="card-title fw-bold text-center text-capitalize"> #${idMeal} - ${strMeal}</h4>
      <img src="${strMealThumb}" class="card-img-top" alt="${strMeal}">
      <div class="text-center"> <a href="https://www.themealdb.com/meal/${idMeal}" class="btn btn-secondary mt-3">Know more</a> </div>
      </div>`;

        // append card to the DOM
        cardlist.appendChild(card);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

// {
//     "strMeal": "Baingan Bharta",
//     "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
//     "idMeal": "52807"
// }
