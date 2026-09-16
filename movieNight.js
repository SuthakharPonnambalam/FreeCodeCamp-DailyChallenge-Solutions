//Date: September 16, 2026

/*
Given a string for the day of the week, another string for a showtime, and an integer number of tickets, return the total cost of the movie tickets for that showing.

The given day will be one of:

"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
"Sunday"
The showtime will be given in the format "H:MMam" or "H:MMpm". For example "10:00am" or "10:00pm".

Return the total cost in the format "$D.CC" using these rules:

Weekend (Friday - Sunday): $12.00 per ticket.
Weekday (Monday - Thursday): $10.00 per ticket.
Matinee (before 5:00pm): subtract $2.00 per ticket (except on Tuesdays).
Tuesdays: all tickets are $5.00 each.
*/

function getMovieNightCost(day, showtime, numberOfTickets) {
    let price;
    if(day === 'Tuesday'){
        price = (numberOfTickets * 5).toFixed(2);
        return `$${price}`
    }

    else {
        if(day === 'Friday' || day === 'Saturday' || day === 'Sunday'){
            price = numberOfTickets * 12;
        } else if(day === 'Monday' || day === 'Wednesday' || day === 'Thursday'){
            price = numberOfTickets * 10;
        } else{}
    }
    let timeArr = showtime.split(':');
    let hours = Number(timeArr[0]);
    if(timeArr[1].includes('p')){
        hours = hours + 12;
    }
    //console.log(hours);

    if(hours < 17){
        price = price - (2 * numberOfTickets);
    }
    price = price.toFixed(2);
    return `$${price}`
}

console.log(getMovieNightCost("Saturday", "10:00pm", 1));
console.log(getMovieNightCost("Sunday", "10:00am", 1));
console.log(getMovieNightCost("Tuesday", "7:20pm", 2));
console.log(getMovieNightCost("Wednesday", "5:40pm", 3));
console.log(getMovieNightCost("Monday", "11:50am", 4));