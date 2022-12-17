export function randomChoice(array) {
    if (array[Math.floor(Math.random() * array.length)] == undefined) {
        randomError("Array can't have no contents.")
    } else {
        return array[Math.floor(Math.random() * array.length)];
    }
}
export function printf(text) {
    console.log(text);
}
export function Exception(message="Unknown") {
    console.error("Exception: " + message);
}
function randomError(message) {
    console.error("Error: " + message);
}