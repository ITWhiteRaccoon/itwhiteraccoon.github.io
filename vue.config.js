module.exports = {
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'Edu Andrade';
			return args;
		});
	},

	outputDir: 'docs',

	transpileDependencies: [
		'vuetify'
	]
};
