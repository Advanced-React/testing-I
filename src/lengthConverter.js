// EXERCISE I

const feetToMeters = feet => {
	return feet / 3;
};
const feetToInches = feet => {
	return feet * 12;
};
const yardsToFeet = yards => {
	return yards * 3;
};

module.exports = { feetToMeters: feetToMeters, feetToInches: feetToInches, yardsToFeet: yardsToFeet };

// EXERCISE II
// go to this webpage - https://www.w3schools.com/howto/howto_js_length_converter.asp
// using the conversion formulas on the page, write two more conversion functions

// STRETCH
// write a function that uses multiple functions to convert a mesaurement in feet to inches, meters, and miles
// Write tests for each function, including the final function that returns all the measurement conversions
