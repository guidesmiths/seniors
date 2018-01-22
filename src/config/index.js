let config;
const environment = process.env.REACT_APP_ENV || 'local';
const defaultEnvConfig = require('./environment/default.js');
const envConfig = require(`./environment/${environment}`);

const MergeRecursive = (obj1, obj2) => {
	Object.keys(obj2).forEach((p) => {
		try {
			if (obj2[p].constructor === Object) {
				obj1[p] = MergeRecursive(obj1[p], obj2[p]);
			} else {
				obj1[p] = obj2[p];
			}
		} catch (e) {
			obj1[p] = obj2[p];
		}
	});
	return obj1;
};

const layers = [defaultEnvConfig, envConfig ];

config = layers.reduce((a,b) => MergeRecursive(a,b), {});
console.log(config);

export default config;