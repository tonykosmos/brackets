module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;
  let arr = str.split('');
  let result = [];
  for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][1] && result[result.length-1] == bracketsConfig[j][0]) result.pop();
      else if (arr[i] == bracketsConfig[j][0]) result.push(arr[i]);
    }
  }
  if (result.length == 0) return true;
  else return false;
}
