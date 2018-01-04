/*
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
Input:"fun&!! time"
Output:"time"
Input:"I love dogs"
Output:"love"
*/

// In this solution we want to iterate the input string only once
function LongestWord(str) { 
  curr_start_index = -1
  max_start_index = -1
  max_end_index = -1
  curr_lenght = 0
  max_lenght = 0
  new_str = true
  for (index = 0; index < str.length; ++index) {
    if (str[index].search(/[a-z]|[\d]/i) === 0){
        if (new_str)
            curr_start_index = index;    
        new_str = false
        curr_lenght += 1
        
        if (curr_lenght > max_lenght){
            max_lenght = curr_lenght
            max_start_index = curr_start_index
            max_end_index = index
        }
    }else{
        curr_lenght = 0
        curr_start_index = -1
        new_str = true
    }
  }
  return str.substring(max_start_index, max_end_index + 1);
}

LongestWord(readline());
