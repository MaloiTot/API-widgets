
export default function longestWord(sentence) {
    var words= sentence.split(' '); 
    var long = '';
   
    for (let i=0; i<words.length; i++) {
    var current = words[i].trim();
      if (current.length >= long.length){
          long = current;
      
    }}
  return long;
  }