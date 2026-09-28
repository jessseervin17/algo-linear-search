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


  //create empty list to be filled with saved indexes
  return [];
}

module.exports = { linearSearch, globalLinearSearch };
