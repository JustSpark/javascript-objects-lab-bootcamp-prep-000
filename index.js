var recipes = new Object({fudge: 'chocolate'}, {cake: 'flour'});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value)  {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(object, key) {
 return Object.keys(object);
}
var myObj = newObj
function destructivelyDeleteFromObjectbyKey(object, key) {
  
}