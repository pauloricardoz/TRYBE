function verificaPalindrome(text="desenvolvimento"){
  let verificador="";
  for (let index = text.length-1; index >=0 ; index--) {
    verificador+=text.substr(index,1);
    
  }
  if (verificador===text) {
    return true;
  }
  return false;
}
console.log(verificaPalindrome());