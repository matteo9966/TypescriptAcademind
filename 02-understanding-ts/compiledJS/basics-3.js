"use strict";
//aliases 
function combine(i1, i2, language) {
    let result;
    if (typeof i1 === "number" && typeof i2 === "number") {
        result = i1 + i2;
    }
    else {
        result = i1.toString() + i2.toString();
    }
    if (language === "italiano") {
        console.log("il risultato è:", result);
    }
    if (language === "inglese") {
        console.log("the result is", result);
    }
    return result;
}
const combinedAges = combine(30, 50, "italiano");
