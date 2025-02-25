import chalk from "chalk";

const log = console.log;

const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color
const success = chalk.green;
const info = chalk.blue;

log(error("Error: This is an error message"));
log(warning("Warning: This is a warning message"));
log(success("Success: This is a success message"));
log(info("Info: This is an info message"));