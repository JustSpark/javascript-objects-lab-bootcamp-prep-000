var recipes = {};

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
function destructivelyDeleteFromObjectbyKey(object, key) {
  delete object.key
  return object;
}