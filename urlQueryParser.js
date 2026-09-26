//Date: September 15, 2026

/*
Given a URL that contains a query string, parse the query string into an object (or dictionary) of key-value pairs.

The query string begins after the "?",
each parameter is separated by "&",
each key/value pair is separated by "="
For example, given "https://example.com/search?name=Alice&age=30", return:

{
  "name": "Alice",
  "age": "30"
}
All values should be returned as strings.
*/

function parseUrlQuery(url) {
    let str = url.slice(url.indexOf('?')+1);
    let arr = str.split('&');
    let obj = {};
    for(let i = 0; i<arr.length;i++){
        let temp = arr[i].split('=');
        obj[temp[0]] = temp[1];
    }
    return obj;
}

console.log(parseUrlQuery("https://example.com/search?name=Alice&age=30"));