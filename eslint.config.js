import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsEslint from "typescript-eslint";
export default tsEslint.config(
    js.configs.recommended,
    ...tsEslint.configs.recommended,
    {
        ignores: [
            "**/dist/**",
            "**/node_modules/**",
            "**/build/**",
            "**/eslint.config.js",
        ],
        rules: {
            "no-unused-vars": "off",
            semi: "error", // 强制使用分号
            "prefer-const": "error", // 强制使用 const 声明变量
            "no-console": "error", // 禁用 console
        },
        languageOptions: {
            parser: tsParser,
            globals: {
                window: true,
                document: true,
                console: true,
                process: true,
                module: true,
                require: true,
                __dirname: true,
                __filename: true,
            },
            parserOptions: {
                project: ["./tsconfig.eslint.json", "**/*/tsconfig.json"],
                tsconfigRootDir: import.meta.dirname,
            },
            overrides: [
                {
                    files: ["*.js", "*.mjs"],
                    parser: "espree",
                },
            ],
        },
    }
);
