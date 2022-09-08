export default function wordLengths(sentence){
    var words= sentence.split(' ');
    var long = 0;
    
    
    for (let i=0; i<words.length; i++) {
      var current = words[i];
      var count = current.length;
    long = long+ count;
    }
  
  return long;
}