/*
Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 
Input:"fun&!! time"
Output:"time"

Input:"I love dogs"
Output:"love"
*/

function LongestWord(str) { 

  var regex_a_z = /[^a-z|^A-Z]/g;
  var str_a_z = str.replace(regex_a_z, " ");
  var regex_one_space =  /\s+/g;
  var str_formatted = str_a_z.replace(regex_one_space, " ");
  var str_splitted = str_formatted.split(" ")
  max_lenght = -1
  max_index = -1
  for (index = 0; index < str_splitted.length; ++index) {
        curr_lenght = str_splitted[index].length
        if (curr_lenght > max_lenght){
            max_lenght = curr_lenght
            max_index = index
        }
        
        
  }

  return str_splitted[max_index]
         
}
   
// keep this function call here 
LongestWord(readline());
