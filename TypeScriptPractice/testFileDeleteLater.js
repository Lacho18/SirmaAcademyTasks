async function fetchWeather() {
    return await Promise.resolve('It is sunny!');
}

const data = fetchWeather();
console.log(data);