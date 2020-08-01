module.exports = {
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'Edu Andrade';
			return args;
		});
	},

	devServer: {
		disableHostCheck: true,
		host: '0.0.0.0',
		port: 3000
	},

	transpileDependencies: [
		'vuetify'
	]
};
