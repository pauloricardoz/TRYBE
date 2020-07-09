
const sumRandomNumbers = () => {
  
  const arr = Array.from({length:10}, () => Math.round(Math.random() * 50));
  //console.log(arr)
  const sum = arr.reduce((a, c) => a + c ** 2, 0);
  console.log(sum)
  if(sum < 8000)
   return sum;
  throw new Error();
}

const divisao = (sum) =>{
    const t = [2,3,5,10].map(num => sum/num);
    console.log(t);
    return t;
}

const FetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const arr = await divisao(sum);
    console.log(arr);
  } catch (e) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}
  
FetchPromise();