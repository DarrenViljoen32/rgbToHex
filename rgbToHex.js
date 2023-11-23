//converting RGB to Hex

let red = parseInt(prompt(`Enter R value (0-255): `));
let green = parseInt(prompt(`Enter G value (0-255): `));
let blue = parseInt(prompt(`Enter B value (0-255): `));

function valToHex(i){
    let hex = i.toString(16);
    return hex;
}

function rgbToHex(r, g, b){
    return (valToHex(r) + valToHex(g) + valToHex(b));
}
window.alert(`The Converted Hexadecimal Values are: ${rgbToHex(red, green, blue)}`);
console.log(`The Converted Hexadecimal Values are: ${rgbToHex(red, green, blue)}`);