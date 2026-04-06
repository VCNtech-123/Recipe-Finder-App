
import axios from 'axios'

export const searchFood = async (searchResult) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`);
    return response.data;
}

export const initialRandomFoods = async() => {
    let promises = []
    for (let i = 0; i < 10; i++){
        promises.push(axios.get('https://www.themealdb.com/api/json/v1/1/random.php'));
    }

    const responses = await Promise.all(promises);

    const randomFoods = responses.map(response => {
        const meal = response.data.meals[0];
        const allIngredients = []

        for (let i = 1; i <= 20; i++) {
            const ingredientName = meal[`strIngredient${i}`]
            const measurement = meal[`strMeasure${i}`]

            if (ingredientName && measurement.trim() !== '') {
                allIngredients.push({  ingredient: ingredientName,
                                    measurement: (measurement && measurement.trim() !== '') ? measurement : "to taste"
                })
            }
        }

        return {
            id: meal.idMeal,
            picture: meal.strMealThumb,
            tags: meal.strCategory.split(', '),
            name: meal.strMeal,
            instructions: meal.strInstructions,
            ingredients: allIngredients
        }
    })
    return randomFoods
}