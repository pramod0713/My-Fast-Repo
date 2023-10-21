var name=["Rice", "Dal", "Salt"]
var quantity= [2, 3, 1]
var price=  [60, 50, 20]
var arr=[]
for (var i=0;i<name.length;i++)
  {
    var obj={}
    obj=name[i]
    obj=quantity[i]
    obj=price[i]
    
  }
for (var i=0;i<name.length;i++)
 {
   var total=quantity[i]*price[i]
   arr.push(total)
 }
var sum=0
for (var i=0;i<arr.length;i++){
  sum+=arr[i]
 }
console.log(sum)