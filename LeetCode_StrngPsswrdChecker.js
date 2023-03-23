
////// 27/53 test cases

let strongPasswordChecker = function(password) {
    let steps = 0;
    let lowerCase = false, upperCase = false, digit = false;
    let repeatCount = 1, maxRepeat = 0;
  
    for (let i = 0; i < password.length; i++) {
      if (password[i].match(/[a-z]/)) lowerCase = true;
      if (password[i].match(/[A-Z]/)) upperCase = true;
      if (password[i].match(/\d/)) digit = true;
  
      if (i > 0 && password[i] === password[i - 1]) {
        repeatCount++;
      } else {
        maxRepeat = Math.max(maxRepeat, repeatCount);
        repeatCount = 1;
      }
    }
    maxRepeat = Math.max(maxRepeat, repeatCount);
  
    if (password.length < 6) {
      steps += 6 - password.length;
      if (!lowerCase) steps--;
      if (!upperCase) steps--;
      if (!digit) steps--;
    } else if (password.length > 20) {
      steps += password.length - 20;
    }
  
    if (maxRepeat >= 3) {
      steps += Math.floor(maxRepeat / 3);
    }
  
    if (!lowerCase) steps++;
    if (!upperCase) steps++;
    if (!digit) steps++;
  
    return steps;
  }

