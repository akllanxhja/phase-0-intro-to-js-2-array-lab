// const cats = ['Milo', 'Otis', 'Garfield'];

// function destructivelyAppendCat(name) {
//     cats.push(name);
// }

// function destructivelyPrependCat(name) {
//     cats.unshift(name);
// }
//  function destructivelyRemoveLastCat() {
//      cats.pop();
//  }

//  function destructivelyRemoveFirstCat() {
//      cats.shift();
//  }

//  function appendCat(name) {
//      return [...cats, name];
//  }
//  function prependCat(name) {
//      return [name, ...cats];
//  }

//  function removeFirstCat() {
//      return cats.slice(1);
//  }

//  function removeLastCat() {
//      return cats.slice(0, cats.length - 1);
//  }

const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(name) {
    destructivelyAppendCat = cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    destructivelyPrependCat = cats.unshift('Bob');
}
function destructivelyRemoveLastCat(name) {
    destructivelyRemoveLastCat = cats.pop(-1);
}
function destructivelyRemoveFirstCat(name) {
    destructivelyRemoveFirstCat = cats.shift(0);
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(name) {
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}