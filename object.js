var name=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"]
 var age=[32, 30, 26, 28, 44]
let arr=[];
for(let i=0;i<=name.length-1;i++){
  let obj={};
  obj["name"]=name[i];
  obj["age"]=age[i];
  arr.push(obj);
  
  
}
for (var i=0 ; i<=arr.length-1;i++){
  if (arr[i]["age"]>30){
    console.log(arr[i]["name"])
  }
}