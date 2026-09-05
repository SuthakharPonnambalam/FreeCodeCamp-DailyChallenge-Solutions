//Date: September 04, 2026

/*
Given an array of objects, each with a "name" and "age" property, return an array containing the name of the oldest person.

If multiple people share the oldest age, return all of their names in the order they appear in the input.
*/

function getOldest(people) {
    let arr = [];
    let max = 0, pos = 0;
    for(let i = 0; i < people.length;i++){
        if(i === 0){
            max = people[i].age;
        }
        else {
            if(people[i].age >= max) {
                max = people[i].age;
            } else {}
        }
        
    }
    //console.log(max);
    for(let j = 0; j < people.length;j++){
        if(people[j].age === max){
            arr.push(people[j].name);
        }
    }
    return arr;
}

console.log(getOldest([{ name: "Brenda", age: 40 }]));
console.log(getOldest([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]));
console.log(getOldest([{ name: "Allison", age: 25 }, { name: "Bill", age: 30 }, { name: "Carol", age: 30 }]));
console.log(getOldest([{ name: "George", age: 50 }, { name: "Shirley", age: 42 }, { name: "Beth", age: 48 }, { name: "Holly", age: 50 }, { name: "Kevin", age: 44 }, { name: "Frank", age: 47 }, { name: "Zach", age: 50 }, { name: "Jennifer", age: 43 }]));