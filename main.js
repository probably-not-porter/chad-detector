var chad_levels = [
    "Pure Chad",
    "Quite Chadly",
    "Pretty Chad-ish",
    "Moderate Chad",
    "Marginally Chadly",
    "Somewhat of a Chad",
    "Un-Chadly",
    "Un-Chadly",
    "Un-Chadly",
    "Un-Chadly",
    "Less than Chadly",
    "Less than Chadly",
    "Less than Chadly",
    "Less than Chadly",
    "Less than Chadly",
    "Less than Chadly",
    "Very Un-Chadly",
    "Very Un-Chadly",
    "Very Un-Chadly",
    "Very Un-Chadly",
    "Very Un-Chadly",
    "Very Un-Chadly",
    "The Anti-Chad",
    "The Anti-Chad",
    "The Anti-Chad",
    "The Anti-Chad",
    "The Anti-Chad",
    "The Anti-Chad",
    "The Anti-Chad",
    "The Anti-Chad"
]
const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));
    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }
    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track[j - 1][i] + 1, // insertion
                track[j - 1][i - 1] + indicator, // substitution
            );
        }
    }
    return track[str2.length][str1.length];
};
function calculateAverage(array) { 
    const sum = array.reduce((acc, curr) => acc + curr, 0); 
    const average = sum / array.length; 
    return average; 
} 
function compare(val){
    let words = val.split(" ");
    let scores = [];
    for (var word in words){
        if (words[word] != ""){
            scores.push(levenshteinDistance("chad",words[word].toLowerCase()));
        }
    }
    if (scores.length < 1){
        document.getElementById('level').innerHTML = ``;
    }else{
        chad_level = Math.round(calculateAverage(scores));
        document.getElementById('level').innerHTML = `You are <strong>${chad_levels[chad_level]}</strong>`;
    }
    
}