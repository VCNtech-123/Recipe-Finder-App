export const debounce = (func, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay)
    }
}

export const recipeFinder = (id, arr) => {
    return arr.find (meal => +meal.id === +id); 
}

export const saveFavorites = (arr) => {
    localStorage.setItem('savedFavorites', JSON.stringify(arr));
}

export const loadFavorites = () => {
    const savedData = localStorage.getItem('savedFavorites')
    return savedData ? JSON.parse(savedData) : []
}

