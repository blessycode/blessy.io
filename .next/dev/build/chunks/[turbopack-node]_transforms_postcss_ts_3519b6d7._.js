module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/projects/blessy.io/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/ced83__pnpm_94f24885._.js",
  "chunks/[root-of-the-server]__b594d680._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/projects/blessy.io/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];