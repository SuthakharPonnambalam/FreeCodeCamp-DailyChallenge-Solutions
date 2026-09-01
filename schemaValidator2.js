//Date: August 31, 2026

/*
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

{
  username: string,
  posts: number,
  verified: boolean
}
Extra keys are allowed
*/

function isValidSchema(obj) {
  let count = 0;
  if(Object.hasOwn(obj, 'username')){
    let val = obj.username;
    if(typeof val === 'string'){
      count++;
    }
  }
  if(Object.hasOwn(obj, 'posts')){
    let val = obj.posts;
    if(typeof val === 'number'){
      count++;
    }
  }
  if(Object.hasOwn(obj, 'verified')){
    let val = obj.verified;
    if(typeof val === 'boolean'){
        count++;
    }
  }
  if(count === 3){
    return true;
  } else {
    return false;
  }
}

console.log(isValidSchema({ username: "alice", posts: 10, verified: false }));
console.log(isValidSchema({ username: "sam", posts: 17, verified: "false" }));