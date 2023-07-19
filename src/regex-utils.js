export function regexValidate(string) {
  const regEx =
    /^(?=.*[a-z]+)(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).\S{10,64}$/;
  const matcher = string.match(regEx);

  const result = Array.isArray(matcher) ? matcher["input"] : null;
  //   console.log(result);
  return result;
}

export function regexTests() {
  const string1 = "@2D3dd"
  const shortInput = regexValidate("string1");
  if (shortInput === string1) {
    console.log(`The string "${string1}" is valid.`);
  } else {
    console.log(`The string "${string1}" is not valid.`);
  }

  const string2 =
    "Hello2#ThereHello2#ThereHello2#ThereHello2#ThereHello2#ThereHello2#ThereHello2#ThereHello2#ThereHello2#ThereHello2#ThereHello2#There@";
  const longInput = regexValidate(string2);
  if (longInput === string2) {
    console.log(`The string "${string2}" is valid.`);
  } else {
    console.log(`The string "${string2}" is not valid.`);
  }

  const string3 = "ThereMustBeMoreThen10Characters@";
  const validInputLength = regexValidate(string3);
  if (validInputLength === string3) {
    console.log(`The string "${string3}" is valid`);
  } else {
    console.log(`The string "${string3}" is not valid.`);
  }


  const string4 = "ohnowhereistheuppercase?1";
  const woUppercase = regexValidate(string4);
  if (woUppercase === string4) {
    console.log(`The string "${string4}" is valid.`);
  } else {
    console.log(`The string "${string4}" is not valid.`);
  }


  const string5 = "WHERE.IS.LOWERCASE.BRUH?1";
  const woLowercase = regexValidate(string5);
  if (woLowercase === string5) {
    console.log(`The string "${string5}" is valid.`);
  } else {
    console.log(`The string "${string5}" is not valid.`);
  }

  const string6 = "NoSPECIALCHARHERE1";
  const woSpecChar = regexValidate(string6);
  if (woSpecChar === string6) {
    console.log(`The string "${string6}" is valid.`);
  } else {
    console.log(`The string "${string6}" is not valid.`);
  }

  const string7 = "No#Digit#Club";
  const woDigit = regexValidate(string7);
  if (woDigit === string7) {
    console.log(`The string "${string7}" is valid.`);
  } else {
    console.log(`The string "${string7}" is not valid.`);
  }

  const string8 = "Hello there, have a nice day!<3";
  const withWhitespaces = regexValidate(string8);
  if (withWhitespaces === string8) {
    console.log(`The string "${string8}" is valid.`);
  } else {
    console.log(`The string "${string8}" is not valid.`);
  }

  const string9 = "Hellothere,haveaniceday!<3";
  const woWhitespaces = regexValidate(string9);
  if (woWhitespaces === string9) {
    console.log(`The string "${string9}" is valid.`);
  } else {
    console.log(`The string "${string9}" is not valid.`);
  }

  const string10 = "####22####Go";
  const validString = regexValidate(string10);
  if (validString === string10) {
    console.log(`The string "${string10}" is valid.`);
  } else {
    console.log(`The string "${string10}" is not valid.`);
  }
}
