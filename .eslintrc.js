module.exports = {
  root: true,
  ignorePatterns: ["/dist"],
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-essential",
    "plugin:jest/recommended"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        arrowParens: "avoid"
      }
    ]
  }
};
