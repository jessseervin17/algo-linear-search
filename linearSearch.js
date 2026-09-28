function linearSearch(searchTerm, arr) {
  for (let i of arr){
    const foundIt = i === searchTerm ? arr.indexOf(i):false;
    if (foundIt){
      return foundIt;
    } else{
      continue;
    }
  }
  return undefined
}

function globalLinearSearch(searchTerm, arr) {
  let savedIndexes = [];
  for (let i of arr){
    const foundIt = i === searchTerm ? arr.indexOf(i):false;
    if (foundIt in savedIndexes){
      foundIt=indexOf(arr[indexOf(i)-1])+1;
      savedIndexes.push(foundIt);
    }else if (foundIt){
      savedIndexes.push(foundIt);
    } else{
      continue;
    }
  }
  return savedIndexes;
}

module.exports = { linearSearch, globalLinearSearch };
