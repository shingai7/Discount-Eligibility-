//“Create a program that determines a user’s eligibility for a discount based on their age and membership status”

//create function to checkEligibility

function checkEligibility() {
  let ageInput = document.getElementById("ageInput");
  let membershipCheckbox = document.getElementById("membershipCheckbox");

  //get the output div element
  let eligibilityOutputElement = document.getElementById("eligibilityOutput");

  let age = parseInt(ageInput.value, 10);

  //conditional statements

  if (age >= 65) {
    eligibilityOutputElement.textContent =
      "You are eligible for a Senior discount!";
  } else if (age >= 18 && membershipCheckbox.checked) {
    eligibilityOutputElement.textContent =
      "You are eligible for a member discount";
  } else {
    eligibilityOutputElement.textContent =
      "You are not eligible for a student discount";
  }
}
