const list = [2,3,1,2,2,1,5,5,6,4,2,7];
const listCount = {};

list.map((item)=>{
  console.log(item);   
  listCount[item] = listCount[item] ? listCount[item] += 1 : 1;
});

const arrayList = Object.entries(listCount).sort((a, b) => {
  return a[1] - b[1]
});

var mode = arrayList[arrayList.length-1];

console.log(list); 
console.log(listCount);
console.log(`Mode: ${mode}`);

