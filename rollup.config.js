import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import commonjs from 'rollup-plugin-commonjs'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import eslintConf from './.eslintrc.json'
import { terser } from 'rollup-plugin-terser'

const babelConf = {
    exclude: ['/node_modules/'],
    plugins: ['external-helpers']
}

export default {
    input: 'index.js',
    external: ['chroma-js', 'gradient-base'],
    output: [
        {
            extend: true,
            format: 'umd',
            file: './gradient-css.js',
            name: 'Css',
            globals: {
                'chroma-js': 'chroma',
                'gradient-base': 'Base'
            }
        }
    ],
    plugins: [
        resolve(),
        eslint(eslintConf),
        babel(babelConf),
        cleanup({
            comments: 'none',
            extensions: '.js'
        }),
        commonjs(),
        terser()
    ]
}