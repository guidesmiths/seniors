
sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const async login = () => {
  await sleep(500);
  return {sucess: true, token: 'mytoken'}
};
