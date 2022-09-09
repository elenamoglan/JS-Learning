const colors = ["blue", "red", "green", "black"];
//for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//while loop
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

//forEach 
colors.forEach((element) => { console.log(element) });

//for in loop
for (let key in colors) {
    console.log(colors[key]);
}

//for of loop
for (let element of colors) {
    console.log(element);
}

//map
colors.map((item) => console.log(item));

//do...while loop
let j = 0;
do {
    console.log(colors[j]);
    j++;
} while (colors.length != j)

//toString
console.log(colors.toString());