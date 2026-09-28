function linearSearch(searchTerm, arr) {
  for (let i of arr){
    console.log(`Current value is: ${i} with index of ${arr.indexOf(i)}. We're looking for ${searchTerm}`)
    if (i === searchTerm){
      console.log(`We found ${i}!`)
      return arr.indexOf(i);
    } else{
      console.log(`Nope, not it!`)
      continue;
    }
  }
  return undefined
}

function globalLinearSearch(searchTerm, arr) {
  let indx=-1;
  let indexesWeWant= [];
  let noIndexes = [];
  for (let i of arr){
    indx++
    console.log(`Current value is ${i}, we want ${searchTerm}, index is ${arr.indexOf(i)}`);
    if (indexesWeWant.includes(arr.indexOf(i))){
      console.log("SEEN IT!");
      console.log(`Its actually ${indx}`)
      indexesWeWant.push(indx);
    }else if (i === searchTerm){
      console.log("Haven't seen it before!")
      indexesWeWant.push(arr.indexOf(i))
      console.log(indexesWeWant);
    } else{
      continue;
    }
  }
  if (arr[indexesWeWant[0]]===searchTerm){
    return indexesWeWant;
  } else{
    return noIndexes;
  };
}


module.exports = { linearSearch, globalLinearSearch };
