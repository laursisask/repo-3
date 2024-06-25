import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { exec } from 'child_process';
import gzip from 'rollup-plugin-gzip';
import { terser } from 'rollup-plugin-terser';

// The paths are relative to process.cwd(), which are packages/*
const base = '../..';

const createSnippet = () => {
  return {
    name: 'amplitude-snippet',
    options: (opt) => {
      return new Promise((resolve) => {
        opt.input = 'generated/amplitude-snippet.js';
        if (process.env.GENERATE_SNIPPET !== 'true') return resolve(opt);
        exec(`node ${base}/scripts/version/create-snippet.js`, (err) => {
          if (err) {
            throw err;
          }
          resolve(opt);
        });
      });
    },
  };
};

export const umd = {
  input: 'src/index.ts',
  output: {
    name: 'amplitude',
    file: 'lib/scripts/amplitude-min.umd.js',
    format: 'umd',inlineDynamicImports: true
  },
  plugins: [
    typescript({
      module: 'es6',
      noEmit: false,
      outDir: 'lib/umd',
      rootDir: 'src',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    terser({
      output: {
        comments: false,
      },
    }),
    gzip(),
    json(),
  ],
};

export const iife = {
  input: 'src/snippet-index.ts',
  output: {
    name: 'amplitude',
    file: 'lib/scripts/amplitude-min.js',
    format: 'iife',inlineDynamicImports: true
  },
  plugins: [
    typescript({
      module: 'es6',
      noEmit: false,
      outDir: 'lib/script',
      rootDir: 'src',
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    terser({
      output: {
        comments: false,
      },
    }),
    gzip(),
    json(),
  ],
};

iife.input = umd.input;
iife.output.name = 'ampSessionReplaySegment';

export default [umd, iife];