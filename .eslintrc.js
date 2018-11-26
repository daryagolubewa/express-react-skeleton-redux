module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  extends: "airbnb-base",
  plugins: [
    "react"
  ],
  rules: {
    "comma-dangle": ["error", "never"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx"
        ]
      }
    }
  }
};
