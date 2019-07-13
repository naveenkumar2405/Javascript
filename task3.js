var object = { name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(a) {
  var obj = Object.entries(object);
  console.log(obj);
}
convertListToObject(object);
