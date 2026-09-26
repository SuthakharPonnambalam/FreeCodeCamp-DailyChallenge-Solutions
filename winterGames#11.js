//Date: September 19, 2026

/*
Given an array of 6 ice hockey teams and their records after the round robin games, determine the match-ups for the semi-final round.

Each array item will have a team and their record in the format "TEAM: W-OTW-OTL-L". Where:
"W" is the number of wins in regulation, worth 3 points each
"OTW" is the number of overtime wins, worth 2 points each
"OTL" is the number of overtime losses, worth 1 point each
"L" is the number of losses, worth 0 points each
For example, "FIN: 2-2-1-0" would have 11 points after adding up their record.

Find the total number of points for each team and return "The semi-final games will be (1st) vs (4th) and (2nd) vs (3rd).". For example, "The semi-final games will be FIN vs SWE and CAN vs USA."
*/

function getSemifinalMatchups(teams) {
    let map = new Map();
    for(let i = 0; i < teams.length;i++){
        let teamVariable = teams[i].split(' ');
        let teamName = teamVariable[0].slice(0,3);
        let teamScores = teamVariable[1].split('-');
        let total = getTotalScore(teamScores);
        map.set(teamName, total);
    }
    //console.log(map);

    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    //console.log(sortedMap);

    let sw1 = [...sortedMap.keys()][0];
    let sw2 = [...sortedMap.keys()][1];
    let sw3 = [...sortedMap.keys()][2];
    let sw4 = [...sortedMap.keys()][3];

    return `The semi-final games will be ${sw1} vs ${sw4} and ${sw2} vs ${sw3}.`
}

const getTotalScore = (teamScores) => {
    let W = Number(teamScores[0]) * 3;
    let OTW = Number(teamScores[1]) * 2;
    let OTL = Number(teamScores[2]) * 1;
    let L = Number(teamScores[3]) * 0;
    return W + OTW + OTL + L;
}

console.log(getSemifinalMatchups(["CAN: 2-2-0-1", "FIN: 2-2-1-0", "GER: 1-0-1-3", "SUI: 0-1-3-1", "SWE: 1-1-2-1", "USA: 2-1-0-2"]));