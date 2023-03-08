function generateRandomObjectCode() {
  const objects = [
    "Array",
    "Object",
    "String",
    "Number",
    "Boolean",
    "Date",
    "Math",
    "RegExp",
    "Set",
    "Map"
  ];

  let randomObjects = new Set();

  while (randomObjects.size < 10) {
    const randomIndex = Math.floor(Math.random() * objects.length);
    randomObjects.add(objects[randomIndex]);
  }

  return Array.from(randomObjects);
}

const randomObjectCodes = generateRandomObjectCode();
console.log(randomObjectCodes);
