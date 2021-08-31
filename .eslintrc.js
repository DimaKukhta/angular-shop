module.exports = {
    root: true,
    overrides: [
      {
        files: ["*.ts"],
        parserOptions: {
          project: [
            "tsconfig.*?.json",
            "e2e/tsconfig.json"
          ],
          createDefaultProgram: true,
          project: "tsconfig.json",
          tsconfigRootDir: __dirname,
          sourceType: "module",
        },
        extends: ["plugin:@angular-eslint/recommended", 'airbnb-typescript/base'],
        "plugins": ["import"],
        rules: {
            "import/prefer-default-export": "off"
        }
      },
      {
        files: ["*.component.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        rules: {
          "max-len": ["error", { "code": 140 }]
        }
      },
      {
        files: ["*.component.ts"],
        extends: ["plugin:@angular-eslint/template/process-inline-templates"]
      },
      {
        files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
        parserOptions: {
          project: './src/tsconfig.spec.json',
        },
        // Jasmine rules
        extends: ['plugin:jasmine/recommended'],
        // Plugin to run Jasmine rules
        plugins: ['jasmine'],
        env: { jasmine: true },
        // Turn off 'no-unused-vars' rule
        rules: {
          '@typescript-eslint/no-unused-vars': 'off'
        }
      }
    ]
}