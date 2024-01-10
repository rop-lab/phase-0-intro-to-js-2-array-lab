let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift(); 
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat 
};

function appendCat(name) {
  
  const newCatsArray = [...cats, name];
  return newCatsArray; 
}

module.exports = {
  cats,
  appendCat 
};

function prependCat(name) {
  const newCatsArray = [name, ...cats];
  return newCatsArray;
}

module.exports = {
  cats,
  prependCat
};

function removeLastCat() {
  const newCatsArray = cats.slice(0, -1);
  return newCatsArray; 
}

module.exports = {
  cats,
  removeLastCat 
};

function removeFirstCat() {
  const newCatsArray = cats.slice(1);
  return newCatsArray; 
}

module.exports = {
  cats,
  removeFirstCat
};
