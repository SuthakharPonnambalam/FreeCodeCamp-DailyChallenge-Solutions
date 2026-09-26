//Date: September 2, 2026

/*
Given a 2D array where each inner array contains (in this order) an idea name, an optimistic estimate, a realistic estimate, and a pessimistic estimate (in days), return an array of the idea names sorted by expected time to completion, shortest first.

Calculate the expected time to completion for each idea using the following formula:

expected = ((optimistic + 4 * realistic + pessimistic) / 6) * length of idea name
*/


function analyzeIdeas(ideas) {
    let map = new Map();
    for(let i =0; i < ideas.length;i++){
        let time = calculateCost(ideas[i]);
        map.set(ideas[i][0], time);
    }
    const mapArray = Array.from(map);
    const sortedMap = new Map(mapArray.sort((a,b) => a[1] - b[1]));
    //console.log(sortedMap);
    const resultTasksArray = []
    sortedMap.forEach((value, key) => {
        resultTasksArray.push(key);
    });
    return (resultTasksArray);
}

const calculateCost = (idea) => {
    let length = idea[0].length;
    let time = ((idea[1] + (4 * idea[2]) + idea[3]) / 6) * length;
    time = Math.floor(time);
    //console.log(time);
    return time;
}

console.log(analyzeIdeas([["Add logging", 2, 5, 15], ["SEO optimization", 4, 8, 20], ["Fix bug", 1, 3, 5]]));

console.log(analyzeIdeas([["Add email notifications", 3, 7, 10], ["Migrate deployment flow", 6, 10, 16], ["Add push notifications", 2, 6, 10], ["Optimize continuous integration", 5, 8, 15], ["Analyze user patterns", 5, 10, 18], ["Create onboarding curriculum", 6, 15, 25]]));

console.log(analyzeIdeas([["Migrate database", 14, 25, 40], ["Add chat assistant", 8, 15, 24], ["Redesign onboarding flow", 3, 7, 13], ["Add language support", 6, 11, 18]]));

console.log(analyzeIdeas([["Update user profile page", 3, 7, 14], ["Add pagination", 2, 5, 10], ["Add tags", 2, 3, 6], ["Fix login bug", 1, 4, 8]]));
