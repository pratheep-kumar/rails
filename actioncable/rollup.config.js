import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import uglify from "rollup-plugin-uglify"

const uglifyOptions = {
  mangle: false,
  compress: false,
  output: {
    beautify: true,
    indent_level: 2
  }
}

export default {
  input: "app/javascript/action_cable/index.js",
  output: {
    file: "app/assets/javascripts/action_cable.js",
    format: "umd",
    name: "ActionCable"
  },
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    uglify(uglifyOptions)
  ]
}
