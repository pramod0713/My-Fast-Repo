let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let even=arr.filter(function(el,index){
  return index%2==1;
  
})
let sum=0;
for (let i=0;i<even.length;i++){
  sum+=even[i];
}
console.log(sum/even.length)

