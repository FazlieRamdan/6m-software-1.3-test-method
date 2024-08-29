/*
    Task
    - Implement a switch statement to check against `env` environmental variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "PROD"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here


switch (env) {
    case "DEV":
        break;
    case "STAGE":
         databaseCredential = "stageuser:password"
        break;
    case "PROD":
         databaseCredential = "producer:password"
        break;
    default:
        console.log("Unknown environment");
        break;
}

console.log(`Database credential for environment ${env} is ${databaseCredential}`);

//reference link : https://htmlcheatsheet.com/js/