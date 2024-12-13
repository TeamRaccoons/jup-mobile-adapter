import { defineConfig, Options } from 'tsup';
const watchMode = process.argv.includes('--watch');

const config: Options = {
  entry: {
    'adapters': './src/adapters/index.tsx',
  },
  sourcemap: true,
  external: ['react', 'react-dom'],
  format: ['esm'],
  target: 'es6',
  cjsInterop: true,
};

const buildConfig: Options = {
  clean: true, // Clean the output directory before building
  outDir: './dist',
  dts: true,
};

const startConfig: Options = {
  clean: false, // Do not clean the output directory, so compiler can reuse previous entry points
  outDir: './dist',
  dts: true,
};

export default defineConfig({
  ...config,
  ...(watchMode ? startConfig : buildConfig),
});
