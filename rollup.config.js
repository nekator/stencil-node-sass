import pkg from './package.json';
import rollupResolve from 'rollup-plugin-node-resolve';


export default {
    input: 'dist/index.js',

    plugins: [
        rollupResolve({
            preferBuiltins: true
        }),
    ],

    external: [
        'fs',
        'path',
        'node-sass'
    ],

    output: [
        {
            format: 'cjs',
            file: pkg.main
        },
        {
            format: 'esm',
            file: pkg.module
        }
    ]
};