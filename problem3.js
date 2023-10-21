let arr = [3,4,5,6,7];
// Output ==> 3 - 5 - 7;
let bag="";
arr.forEach(function(element,index){
  if(index%2==0){
    bag+=element+"- ";
  }
})
console.log(bag)
// for (let i=0;i<arr.length;i++){
//   if(i%2==0){
//     bag+=arr[i]+" "
//   }
// }
// console.log(bag)
