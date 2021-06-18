// Create a function that reverses a string:
// 'I am Anirudh' should be 'hdurinA ma I'


// looping from backwards

function reverseStr(str) {
    if(!str || str.length<2 || typeof str !="string"){
        return "Thats not good bro!"
    }

    const arr = []
    const len = str.length - 1
    // in JS we can use strings as an array like this
    for(let i=len;i>=0;i--){
        arr.push(str[i]);
    }
    console.log(arr) // Array
    return arr.join(" "); // Joined to form string
}

reverseStr("I am Anirudh");

// USING BUILT IN METHODS

function reverseStr2(str) {
    if (!str || str.length < 2 || typeof str != "string") {
      return "Thats not good bro!";
    }
    return str.split("").reverse().join("");
}
 reverseStr2("I am Anirudh");

//  ES 6 using arrow func and spread operators

const reverseStr3 = str => [...str].reverse().join('');

reverseStr3("I am Anirudh")