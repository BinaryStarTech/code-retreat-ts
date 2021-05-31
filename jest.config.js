module.exports = {
  preset: "ts-jest",
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
    jsx: "react",
    sourceMap: true,
    experimentalDecorators: true,
    noImplicitUseStrict: true,
    removeComments: true,
    moduleResolution: "node",
    lib: ["es2017", "dom"],
    typeRoots: ["node_modules/@types", "src/@types"],
  },
  exclude: ["node_modules", "out", ".next"],
};
