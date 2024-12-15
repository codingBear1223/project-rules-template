/**@type {import('stylelint').Config} */

export default {
    extends: ["stylelint-config-standard"],
    plugins: ["stylelint-styled-syntax"],
    overrides: [
        {
            files: ["**/*.scss, *.scss"],
            extends: ["stylelint-config-standard-scss"],
        },
    ],
};
