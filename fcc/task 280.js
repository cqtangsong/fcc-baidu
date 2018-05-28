function myReplace(str, before, after) {
if(before[0]===before[0].toUpperCase()){
  after=after[0].toUpperCase()+after.slice(1);
} 
  var ns="";
  ns=str.replace(before,after);
  return ns;
}
