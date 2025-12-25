
const loadMeals=(foodName)=>{
   toggleSpinner(true)
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}

const displayMeals=(meals)=>{
const mealsContainer=document.getElementById('meal-container')
mealsContainer.innerHTML=''
const noFood = document.getElementById('no-found-message');
    if(!meals.length == 0){
        noFood.classList.remove('hidden');
    }
    else{
        noFood.classList.add('hidden');
    }
meals.forEach(meal=>{
    const mealDiv=document.createElement('div')
    mealDiv.innerHTML=`
    <div>
        <img src=${meal.strMealThumb}></img>
        <div>
        <h1 class="text-2xl">${meal.strMeal}</h1>
        <p>${meal.strInstructions.slice(0,200)}</p>
        </div>
        <button class="text-2xl border text-center px-1 text-blue-600">Details more</button> 
    </div>
    
    `;
    mealsContainer.appendChild(mealDiv)
})
toggleSpinner(false)
}

const handleSearch=()=>{
    
    const value=document.getElementById('search-box').value
    if(value){
        loadMeals(value)
    }
    else{
        alert('please enter search items ')
    }
}

const search = () =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText);
}
document.getElementById('btn-search').addEventListener('click', function(){
    
    search(10);
})

document.getElementById('search-box').addEventListener('keypress', function (e) {
    if (e.key === 'enter') {
        search();
    }
});

const toggleSpinner=(isLoading)=>{
    const loaderSection=document.getElementById('loader-spiner')
    if(isLoading){
        loaderSection.classList.remove('hidden')
    }else{
        loaderSection.classList.add('hidden')
    }
}

loadMeals("")