function getVolume() {
    let radius = Number(document.getElementsByName("radius")[0].value);

    let result = 4 / 3 * Math.PI * Math.pow(radius, 3);

    let inputResult = document.getElementsByName("volume")[0];
    inputResult.value = result.toFixed(2);
}