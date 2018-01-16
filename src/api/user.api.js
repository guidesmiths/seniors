const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const login = async (user) => {
	console.log(user);
	console.log(user.email);
	console.log(user.password);
	await sleep(500);
	return {sucess: true, token: 'mytoken'};
};
