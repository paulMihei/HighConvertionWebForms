/*
Your code goes here!
 */
function MySubmit() {
  return true;
}
/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */
submit.onclick = function() {
  ThePasswordsAreValid();
};

function ThePasswordsAreValid() {
  var invalidityMessage = "";
  if (!AreThePasswordsMatching()) {
    invalidityMessage += "The passwords don't match\n";
  }

  if (!ThePasswordsAreAtLeast16Characters()) {
    invalidityMessage += "The password needs to be at least 16 characters\n";
  }

  if (!ThePasswordsAre100CharactersOrLess()) {
    invalidityMessage += "The password needs to be 100 characters or less\n";
  }

  if (!ThePasswordsContainAtLeastOneSpecialCharacter()) {
    invalidityMessage += "The password needs to contain at least one of these symbol: !, @, #, $, %, ^, &, *\n";
  }

  if (!ThePasswordsContainAtLeastOneNumber()) {
    invalidityMessage += "The password needs at least one number\n";
  }

  if (!ThePasswordsContainAtLeastOneLowerCaseLetter()) {
    invalidityMessage += "The password needs at least one lowercase letter\n";
  }

  if (!ThePasswordsContainAtLeastOneUppercaseLetter()) {
    invalidityMessage += "The password needs at least one uppercase letter\n";
  }

  if (ThePasswordsContainIllegalCharacters()) {
    invalidityMessage += "The passwords contain an illegal character\n";
  }

  if (invalidityMessage.length == 0)
    SetCustomValidityForBothPasswords("");
  else
    SetCustomValidityForBothPasswords(invalidityMessage);

}

function SetCustomValidityForBothPasswords(invalidityMessage) {
  SetCustomValidityForFirstPassword(invalidityMessage);
  SetCustomValidityForSecondPassword(invalidityMessage);
}

function SetCustomValidityForFirstPassword(invalidityMessage) {
  firstPasswordInput.setCustomValidity(invalidityMessage);
}

function SetCustomValidityForSecondPassword(invalidityMessage) {
  secondPasswordInput.setCustomValidity(invalidityMessage);
}

function AreThePasswordsMatching() {
  return firstPasswordInput.value == secondPasswordInput.value;
}

function ThePasswordsAreAtLeast16Characters() {
  var isFirstGood = firstPasswordInput.value.length >= 16;
  var isSecondGood = secondPasswordInput.value.length >= 16;
  return isFirstGood && isSecondGood;
}

function ThePasswordsAre100CharactersOrLess() {
  var isFirstGood = firstPasswordInput.value.length <= 100;
  var isSecondGood = secondPasswordInput.value.length <= 100;
  return isFirstGood && isSecondGood;
}

function ThePasswordsContainAtLeastOneSpecialCharacter() {
  return isPatternMatching(/[\!\@\#\$\%\^\&\*]/g);
}

function ThePasswordsContainAtLeastOneNumber() {
  return isPatternMatching(/\d/g);
}

function ThePasswordsContainAtLeastOneLowerCaseLetter() {
  return isPatternMatching(/[a-z]/g);
}

function ThePasswordsContainAtLeastOneUppercaseLetter() {
  return isPatternMatching(/[A-Z]/g);
}

function ThePasswordsContainIllegalCharacters() {
  return isPatternMatching(/[^A-z0-9\!\@\#\$\%\^\&\*]/g);
}

function isPatternMatching(pattern) {
  var patternChecker = new RegExp(pattern);
  return patternChecker.test(firstPasswordInput.value);
}
