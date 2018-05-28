function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var a=arr1.concat(arr2);
  for(var i=0;i<a.length;i++){
    if(a.indexOf(a[i])==a.lastIndexOf(a[i])){
      newArr.push(a[i]);
    }
  }
  return newArr;
  
}