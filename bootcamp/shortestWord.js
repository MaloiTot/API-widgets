
export default function shortestWord(sentence) {
    var words= sentence.split(' '); 
    var max = 7;
    var short = '';
   
    for (let i=0; i<words.length; i++) {
      var current = words[i];
      if (current.length <= max){
         max = current.length; 
        short = current;
    }}
  return short;
  }