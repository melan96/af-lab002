

var vehicleName = 'Toyota';

function printVehicleNameOuter(){
    console.log(this.vehicleName);
}

printVehicleNameOuter();

var vehicle={
    vehicleName:'Vehicle2',
    printVehicleNameInner:function(){
        return function(){
            console.log(this.vehicleName)
        }
    }
};


var innerget = vehicle.printVehicleNameInner();
//in this pont we set the object context via call funtion :explicitly called
innerget.call(vehicle);


// ●
// Create a function named
// taxCalculator
// which accepts the tax percentage as an
// argument.
// ●
// taxCalculator
// should return another function which
// accepts the amount as an argument
// and returns calculated tax percentage (amount*taxPercentage/100).
// ●
// Call
// taxCalculator
// function and assigned the returned value to a variable.
// ●
// Now, call that variable (it is a function now) with different amounts and get
// tax value
// calculated.
// ●
// Notice how you have encapsulated the tax percentage and calculation from consumers.
//     Now consumers can calculate the tax

function taxCalxulator(percentage){
    return function(amount){
        return (amount*(percentage/100));
    }
}

var executeable = taxCalxulator(25);
console.log(executeable(25000));


const fetch = require('node-fetch');

//using promises
fetch('https://api.github.com/users')
    .then(res=>res.json())
    .then(json=>console.log(json));

