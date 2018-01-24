const duties = ['lavar', 'planchar', 'cocinar', 'sacar al perro'];
const languages = ['español', 'ingles', 'aleman', 'arabe'];

export default ({
	duties: duties.reduce((total, duty) => Object.assign(total, { [duty]: false }), {}),
	languages: languages.reduce((total, lang) => Object.assign(total, { [lang]: false }), {}),
	postCode: '',
	priceRange: {
		from: 0,
		to: 1000
	}
});
