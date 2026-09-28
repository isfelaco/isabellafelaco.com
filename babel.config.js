// Only used by Jest; the app build uses react-scripts' own Babel config.
module.exports = {
	presets: [
		"@babel/preset-env",
		// Match react-scripts' automatic JSX runtime, so files don't need to
		// import React to use JSX
		["@babel/preset-react", { runtime: "automatic" }],
		"@babel/preset-typescript",
	],
};
