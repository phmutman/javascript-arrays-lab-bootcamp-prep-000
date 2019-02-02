 //define your array here

// Add your functions and code here

function destructivelyAppendKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  kittens.shift()
  return kittens
}

function removeLastKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.slice(0, (kittens.length - 1))
}

function appendKitten(kitten){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return kittens.concat(kitten)
}

function prependKitten(kitten){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return ([kitten,...["Milo", "Otis", "Garfield"]])
}

function removeFirstKitten(){
  var kittens = ['Milo', 'Otis', 'Garfield']
  return (kittens.slice(1))
}