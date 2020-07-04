//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  string = string.toLowerCase().split("").sort().join();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  var res = "";
  for(var i =0; i<string.length; i++){
    for(var j =0;j<alphabet.length; j++){
      if(string[i]==alphabet[j] && res[res.length-1]!=string[i]){
        res += string[i];
      }
    }
  }
  if(alphabet!=res){
    return false;
    }
  else{
    return true;
    }
}

isPangram("The quick brown fox jumps over the lazy dog.");
