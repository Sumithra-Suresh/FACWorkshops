
// function map(array) {
//   return array;
// }

// function map(array) {
//   array[0] += 1;
//   return array;
// }


function map(array, callback) {
  let result = [];
  array.forEach(element => {
    result.push(callback(element));
  });
  return result;
}
//=============================================

function filter(array,callback){
  let result=[];
  array.forEach((element)=>{
    if(callback(element))
      result.push(element)
  });
  return result;
}
//=============================================

// function every(array, callback){
//   let result = false;

//   array.forEach((element)=>{
//     result = callback(element) ? true : false;
//   });

//   return result;
// }

function every(array, callback){
  let result = false;

  for(let i=0; i<array.length; i++){
    result = callback(array[i]) ? true : false;
    if(result === false)
      break;
  }
  return result;
}

//=============================================

function some(array, callback){
  let result = false;
  for(let i=0; i<array.length; i++){

    result = callback(array[i])? true: false;

    if(result === true) break;
  }
  return result;
}

//=============================================

function find(array, callback){
  
  for(let i=0; i<array.length; i++){
    if (callback(array[i])){
      return array[i];
    }
  }
  return undefined;
}

//=============================================

function reduce(array, callback, accumuValue){
  for(let i=0; i<array.length; i++){
    accumuValue = callback(accumuValue,array[i]);
  }
  return accumuValue;
  
}