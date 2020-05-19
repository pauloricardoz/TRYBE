function BiggerNameInArray(arrayWithNanmes=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']) {
  let biggerName=arrayWithNanmes[0];
  for (const index in arrayWithNanmes) {
    if (arrayWithNanmes[index].length>biggerName.length) {
      biggerName=arrayWithNanmes[index];
      
    }
  }
  return biggerName;
}

console.log(BiggerNameInArray());