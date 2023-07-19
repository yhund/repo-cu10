export function regexValidate(string) {
  const regEx =
    /^(?=.*[a-z]+)(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).\S{10,64}$/;
  const matcher = string.match(regEx);

  const result = Array.isArray(matcher) ? matcher["input"] : null;
  console.log(result);
  return result;
}
