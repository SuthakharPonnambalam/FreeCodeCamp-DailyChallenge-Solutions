//Date: September 22, 2026

/*
Given a string of Markdown that includes one or more inline code blocks, return the equivalent HTML string.

Inline code blocks in Markdown use a single backtick (`) at the start and end of the code block text.

Return the given string with all code blocks converted to HTML code tags.

For example, given the string "Use `let` to declare the variable.", return "Use <code>let</code> to declare the variable.".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

function parseInlineCode(markdown) {
    let result = ' ';
    for(let i = 0; i < markdown.length;i++){
        if(markdown[i] === '`'){
            let endQuotePos = markdown.indexOf('`', i+1);
            if(endQuotePos !== -1){
                let temp = markdown.slice(i, endQuotePos+1);
                temp = temp.slice(1, temp.length-1);

                result = result + '<code>' + temp + '</code>';
                i = i + temp.length+1;
            }
            //console.log(endQuotePos);
        }
        else {
            result += markdown[i];
        }
    }
    return result.trim();
}

console.log(parseInlineCode("Use `let` to declare the variable."));
console.log(parseInlineCode("Use `let` or `const` to declare a variable."));
console.log(parseInlineCode("Run `npm install` then `npm start`."));