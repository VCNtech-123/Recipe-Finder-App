
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

    const randomFoods = responses.map(response => response.data.meals[0])
    return randomFoods
}