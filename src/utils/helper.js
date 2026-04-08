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