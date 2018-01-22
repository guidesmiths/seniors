let config;
const environment = process.env.REACT_APP_ENV || 'local';
const defaultEnvConfig = require('./environment/default.js');
const envConfig = require(`./environment/${environment}`);
config = Object.assign(defaultEnvConfig, envConfig);

export default config;