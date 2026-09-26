//Date: September 25, 2026

/*
Given a 2D array representing the inventory of your store, and another 2D array representing a shipment you have received, return your updated inventory.

Each element in the arrays will have the format: [quantity, "item"], where quantity is an integer and "item" is a string.
Update items in the inventory by adding the quantity of any matching items from the shipment.
If a received item does not exist in the current inventory, add it as a new entry to the end of the inventory.
Return inventory in the order it was given with new items at the end in the order they appear in the shipment.
For example, given an inventory of [[2, "apples"], [5, "bananas"]] and a shipment of [[1, "apples"], [3, "bananas"]], return [[3, "apples"], [8, "bananas"]].
*/
function updateInventory(inventory, shipment) {
  let result = [];
  let map = new Map();

  for(let i = 0; i <inventory.length;i++){
    let item = inventory[i][1];
    let count = inventory[i][0];
    if(map.has(item)){
        map.set(item, map.get(item)+count);
    } else {
        map.set(item, count);
    }
  }
  
  for(let j = 0; j < shipment.length;j++){
    let item = shipment[j][1];
    let count = shipment[j][0];
    if(map.has(item)){
        map.set(item, map.get(item)+count);
    } else {
        map.set(item, count);
    }
  }
  for(const [key, value] of map){
    let temp = [];
    temp.push(value);
    temp.push(key);
    result.push(temp);
  }
  return result;
}

console.log(updateInventory([[2, "apples"], [5, "bananas"]], [[1, "apples"], [3, "bananas"]]))