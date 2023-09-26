module.exports = {
	root: true,
	extends: ['eslint:recommended', 'next', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
	},
	env: {
		'shared-node-browser': true,
		commonjs: true,
		es6: true,
		node: true,
	},
	ignorePatterns: ['next.config.js'],
};
