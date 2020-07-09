
const FetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const arr = Array.from({length:10}, () => Math.round(Math.random() * 50));
  //console.log(arr)
  const sum = arr.reduce((a, c) => a + c ** 2, 0);
  console.log(sum)
  sum < 8000 ? resolve(sum) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
  });
  myPromise
  .then((sum) =>{
    const t = [2,3,5,10].map(num => sum/num);
    console.log(t);
    return t;
  })
  .then(sum => {
    const total =sum.reduce((a, c) => a + c);
    console.log(total);
    return total;
  })
  .catch((text)=> console.log(text));
};
FetchPromise();