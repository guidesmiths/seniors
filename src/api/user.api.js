const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const login = async (user) => {
	console.log(user);
	await sleep(1000);
	if(user.email === "admin@mail.com" && user.password === "password"){
		return {success: true, token: 'mytoken'};
	}else{
		return {success: false, error: "username or password are wrong"};
	}
	
};
