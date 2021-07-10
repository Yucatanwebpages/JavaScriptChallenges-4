// Tip calculator - ternary operator

// Bills values

let bill = 275;

let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;


console.log(`The bil was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
