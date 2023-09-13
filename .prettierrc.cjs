// https://prettier.io/docs/en/options.html#svelte-strict-mode

module.exports = {
    // pluginSearchDirs: false, // you can omit this when using Prettier version 3
    plugins: [require('prettier-plugin-svelte', "prettier-plugin-tailwindcss")],
    overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
    editorconfig: true,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'none',
    arrowParens: 'always',
    printWidth: 120,
    endOfLine: 'auto',
    svelteStrictMode: false,
    svelteBracketNewLine: false,
    svelteAllowShorthand: true,
    svelteIndentScriptAndStyle: true,
    svelteSortOrder: "options-scripts-markup-styles",
};
