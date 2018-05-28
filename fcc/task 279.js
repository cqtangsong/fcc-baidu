
function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);
  arr = collection.filter(function(item){
    for (var i = 0; i < keys.length; i++) {
      if ( !item.hasOwnProperty(keys[i]) || item[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}
