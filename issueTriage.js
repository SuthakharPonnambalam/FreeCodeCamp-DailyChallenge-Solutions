//Date: August 29, 2026
/*
Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:

If the last message is less than 7 days ago, return "leave it"
If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
Otherwise, return "bump it"
*/


function triageIssue(ms, message) {
  let days = ms/86400000;
  console.log(days);
  if(days < 7){
    return 'leave it'
  } else {
    if(message.toLowerCase().includes('bump')){
      return 'close it';
    }
    else {
      return 'bump it';
    }
  }
}

console.log(triageIssue(86400000, "Lets fix it"));