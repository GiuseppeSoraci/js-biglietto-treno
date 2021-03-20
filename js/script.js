// Kilometers
var kilometers = parseInt( prompt("How many kilometers do you have to travel?") );

// Age
var age = parseInt( prompt("What's your age?") );

// Calculate price of ticket
var price = parseInt(kilometers * 0.21);

// Discount
if (age < 18) {
    var discountValue1 = ( (price / 100) * 20 );
    response = price - discountValue1;   
} else if (age > 65) {
    var discountValue2 = ( (price / 100) * 40 );
    response = price - discountValue2;  
}
else {
    response = price;
}

// Validation
if(isNaN(age)) {
    response = alert("ERROR");
} else if (isNaN(kilometers)) {
    response = alert("ERROR");
}

// Output
document.getElementById("ticket").innerHTML = response + "€";





