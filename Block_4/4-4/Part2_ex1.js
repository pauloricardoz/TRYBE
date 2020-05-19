function PalindromeVerifier(text_entry="arara"){
  let verifier_text="";
  for (let index = text_entry.length-1; index >=0 ; index--) {
    verifier_text+=text_entry.substr(index,1);
    
  }
  if (verifier_text===text_entry) {
    return true;
  }
  return false;
}
console.log(PalindromeVerifier());