const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const login = async () => {
	await sleep(500);
	return {sucess: true, token: 'mytoken'};
};
