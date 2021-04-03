const sass = {
	name: "scss",
	setup(build) {
		const sass = require("sass")

		build.onLoad({ filter: /\.scss$/ }, args => {
			const result = sass.renderSync({ file: args.path })
			return {
				contents: result.css.toString(),
				loader: "css",
			}
		})
	},
}

module.exports = {
	plugins: [sass],
}
