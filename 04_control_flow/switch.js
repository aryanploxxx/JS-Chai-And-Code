// Syntax of switch case
switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}
// Wherever out case matched, all the lines written after it except default are exceuted, 
// this is the reason why break statement is used.