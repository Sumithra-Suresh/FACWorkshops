// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}


// Search Params to Object
// It should take a form-encoded string like "name=oliver&email=hello@oliverjam.es"
// It should return an object like { name: "oliver", email: "hello@oliverjam.es" }

function searchParamsToObject(formEncodedStr){

let obj={};
let strArr = formEncodedStr.split("&");
// console.log(strArr);

for(let i=0; i<strArr.length; i++){
  let b = strArr[i].split('=');
  obj[b[0]] = b[1];
}
return obj;
// console.log(obj);

}

// function for leap year
//It should take a year and either return an error message or a boolean

// Leap years usually occur every 4 years, but in order to stay consistent there are 
// extra rules: years divisible by 100 are not leap years, and years divisible 
// by 400 are leap years.
"Year cannot be negative or 0"
function isLeapYear(year){
  // check for input type
  if(typeof year != 'number') return "Please enter a number";
  if(year <= 0) return "Year cannot be negative or 0";
  if(year%400 === 0) return true;
  if(year%100 === 0) return false;
  if(year%4 === 0) return true;
  return false;

}

