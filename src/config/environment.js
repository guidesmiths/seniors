import { config } from "./config.js";

const environment = process.env.REACT_APP_ENV;
const currentURL = window.location.href; //TODO: check on IE9

let configOption = "default";

switch (environment) {
  case "local":
    configOption = "local";
    break;
  case "beta":
    configOption = "beta";
    break;
  case "prod":
    configOption = "prod";
    break;
  default:
    configOption = "default";
    break;
}

export const myConfig = config[configOption]
