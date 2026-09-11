//Date: September 2, 2026

/*
Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles
}
The pipe (|) symbol means "or". role must be one of the listed Roles values.
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
    if(Object.hasOwn(obj, 'role')){
        let val = obj.role;
        if((val === 'user' || val === 'creator' || val === 'moderator' || val === 'staff' || val === 'admin') && (typeof val === 'string')){
            count++;
        }
        else {
            count = count + 0;
        }
    }
    if(count === 4){
        return true;
    }
    return false;
}

console.log(isValidSchema({ username: "henry", posts: 0, verified: true, role: "staff" }));
console.log(isValidSchema({ username: 8, posts: 1, verified: true, role: "user" }));
console.log(isValidSchema({ username: "david", posts: 0, verified: false, role: "guest" }));
