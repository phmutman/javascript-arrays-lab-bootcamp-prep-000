var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(kittens){
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(kittens){
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(kittens){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(kittens){
  return kittens.shift()
}

function removeLastKitten(kittens){
  return kittens.slice(0, (kittens.length - 1))
}

function appendKitten(kitten){
  return kittens.concat(kitten)
}

function prependKitten(kitten){
  return ([kitten,...["Milo", "Otis", "Garfield"]])
}

function removeFirstKitten(kittens){
  return (kittens.slice(1))
}