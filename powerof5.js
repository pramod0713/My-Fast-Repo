let arr = [2, 3, 4, 6, 7, 8, 9];
// Output = [32, 243, 1024, 7776, 16807];
let arr1=[];
let ans=arr.forEach(function(element,index){
  arr1.push(element**5);
});
console.log(arr1);
// let arr1=[]
// for (var i=0;i<arr.length;i++){
//   arr1.push(arr[i]**5)
// }
// console.log(arr1)

