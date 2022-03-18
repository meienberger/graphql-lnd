module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:prettier/recommended",
    "airbnb-typescript",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "hardcore",
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "no-loops",
    "sonarjs",
    "deprecate",
    "no-secrets",
    "jest",
    "react",
  ],
  overrides: [
    {
      files: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "jest.setup.ts",
        "jest.config.js",
      ],
      rules: {
        "import/unambiguous": 0,
        "unicorn/consistent-function-scoping": 0,
      },
      env: {
        jest: true,
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "import/unambiguous": 0,
      },
    },
  ],
  rules: {
    "max-statements": 0,
    camelcase: 0,
    "unicorn/prefer-node-protocol": 0,
    "newline-per-chained-call": 0,
    "new-cap": 0,
    "security/detect-non-literal-regexp": 0,
    "promise/avoid-new": 0,
    "import/no-commonjs": 0,
    "unicorn/prefer-module": 0,
    "@typescript-eslint/no-var-requires": 0,
    "security/detect-unsafe-regex": 0,
    "unicorn/no-unsafe-regex": 0,
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["^draft"] },
    ],
    "unicorn/no-array-callback-reference": 0,
    "import/no-namespace": 0,
    "unicorn/no-null": 0,
    "unicorn/no-useless-undefined": 0,
    "import/max-dependencies": 0,
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "unicorn/no-array-for-each": 0,
    "unicorn/prevent-abbreviations": 0,
    "import/order": 0,
    "import/extensions": 0,
    "ext/lines-between-object-properties": 0,
    "putout/putout": 0,
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "deprecate/function": 1,
    "deprecate/member-expression": 1,
    "deprecate/import": 1,
    "no-secrets/no-secrets": "error",
    "arrow-body-style": 0,
    semi: 0,
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/indent": 0,
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    "operator-linebreak": 0,
    "import/no-unused-modules": [1, { unusedExports: true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    quotes: ["warn", "single"],
    "no-restricted-syntax": 2,
    "no-await-in-loop": 2,
    "object-curly-newline": 0,
    "no-constant-condition": 2,
    "no-mixed-operators": 1,
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-underscore-dangle": 0,
    "no-global-assign": 2,
    "prefer-const": [
      "error",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "max-lines": [
      "error",
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-len": [
      2,
      200,
      {
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    curly: 0,
    "arrow-parens": 0,
    "no-return-assign": 2,
    "comma-dangle": 0,
    "no-multi-str": 0,
    "newline-before-return": 2,
    "newline-after-var": 2,
    "newline-per-chained-call": 2,
    "import/newline-after-import": 2,
    "no-loops/no-loops": 2,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "id-length": 0,
    "no-magic-numbers": 0,
    "unicorn/prefer-type-error": 0,
    "unicorn/no-array-method-this-argument": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
  globals: {
    JSX: true,
  },
};
