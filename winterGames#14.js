//Date: September 19, 2026

/*
Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".
Return "Safe" or "Risky" based on this table:

             "Shallow"	"Moderate"	"Deep"
"Gentle"	 "Safe"	    "Safe"	    "Safe"
"Steep"	     "Safe"	    "Risky"	    "Risky"
"Very Steep" "Safe"	    "Risky"	    "Risky"
*/

function avalancheRisk(snowDepth, slope) {
    switch(snowDepth){
        case 'Shallow':
            switch(slope){
                case 'Gentle':
                case 'Steep':
                case 'Very Steep':
                    return 'Safe';
            }
        case 'Moderate':
            switch(slope){
                case 'Gentle':
                    return 'Safe'; 
                case 'Steep':
                case 'Very Steep':
                    return 'Risky';
            }   
        case 'Deep':
            switch(slope){
                case 'Gentle':
                    return 'Safe'; 
                case 'Steep':
                case 'Very Steep':
                    return 'Risky';
            }   
    }
}

console.log(avalancheRisk("Shallow", "Gentle"));
console.log(avalancheRisk("Moderate", "Very Steep"));
