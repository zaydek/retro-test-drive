const sass = {
	name: "scss",
	setup(build) {
		const path = require("path")
		const sass = require("sass")

		build.onResolve({ filter: /\.scss$/ }, args => ({
			path: args.path,
			namespace: "scss-ns",
		}))

		// const contents = require("child_process")
		// 	.execSync(`sass ${path.join(process.env.SRC_DIR, args.path)} --color`, { stdio: "inherit" })
		// 	.toString()

		build.onLoad({ filter: /.*/, namespace: "scss-ns" }, args => {
			const result = sass.renderSync({
				file: path.join(process.env.SRC_DIR, args.path),
			})
			return {
				contents: result.css.toString(),
				loader: "css",
			}
		})
	},
}

module.exports = {
	define: {
		__DEV__: process.env.ENV === "development",
		__SSR__: false,
	},
	plugins: [sass],
}
