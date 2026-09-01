//Date: August 31, 2026

/*
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:
{
  username: string
}
Extra keys are allowed
*/


function isValidSchema(obj) {
  if(Object.hasOwn(obj, 'username')){
    let val = obj.username;
    if(typeof val === 'string'){
      return true;
    }
  }
  return false;
}

console.log(isValidSchema({ username: "bob" }));