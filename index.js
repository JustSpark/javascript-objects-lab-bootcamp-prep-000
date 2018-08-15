var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value;
  return obj;
}
function deleteFromObjectByKey(object, key) {
 return Object.keys(object);
}
function destructivelyDeleteFromObjectbyKey(object, key) {
  delete object.key;
  return object;
}