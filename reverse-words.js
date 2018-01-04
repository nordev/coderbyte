function FirstReverse(str) { 
  out = ""
  count = 0
  for (index = str.length - 1; index > -1; --index) {
    out += str[index] 
    count +=1
  }
  return out
}
// keep this function call here 
FirstReverse(readline());
