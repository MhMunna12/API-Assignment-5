

document.getElementById('search-button').addEventListener('click', function () {
    const inputFoodName = document.getElementById('input-food-name');
    let url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFoodName.value}`;
    
    if (inputFoodName.value.length === 1){
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFoodName.value}` 
    }
    else {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFoodName.value}` 
    } 
    displayFood(url);      // calling function
})

const displayFood = link => {
    fetch(link)
        .then(res => res.json())
        .then(data => {
            const foods = data['meals'];
            const foodsContainer = document.getElementById('foods-container');
            foodsContainer.innerHTML = '';
            foods.forEach(food => {  
                const foodDiv = document.createElement('div');      
                foodDiv.className = "food" 
                const foodInfo = `
                    <img src = ${food.strMealThumb}>
                    <h4>${food.strMeal}</h4>
                `
                foodDiv.innerHTML = foodInfo;   
                foodsContainer.appendChild(foodDiv); 

                //ingredients 
                let ingredients = document.getElementById('ingredients');
                foodDiv.addEventListener('click',function(){
                    ingredients.innerText = '';
                    const infoIngredient = document.createElement('div');
                    infoIngredient.className = "info-ingredient";
                    
                    infoIngredient.innerHTML = `
                        <img src = ${food.strMealThumb}>
                        <h2>${food.strMeal}</h2>
                        <p><h4>Ingredients</h4></p>                        
                        <p>${food.strIngredient1} : ${food.strMeasure1}</p>
                        <p>${food.strIngredient2} : ${food.strMeasure2}</p>
                        <p>${food.strIngredient3} : ${food.strMeasure3}</p>
                        <p>${food.strIngredient4} : ${food.strMeasure4}</p>
                        <p>${food.strIngredient5} : ${food.strMeasure5}</p>
                        <p>${food.strIngredient6} : ${food.strMeasure6}</p>
                        <p>${food.strIngredient7} : ${food.strMeasure7}</p>
                        <p>${food.strIngredient8} : ${food.strMeasure8}</p>

                    `
                    ingredients.appendChild(infoIngredient);  
                });
            });
        })
        .catch(error => alert('Food item not Found!'))
}

