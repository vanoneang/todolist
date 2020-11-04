module.exports = {
  "extends": [
    "react-app",
    "plugin:cypress/recommended"
  ],
  "overrides": [
    {
      "files": ["**/*.js"],
      "rules": {
        "indent": ["error", 2]
      }
    },
    {
      "files": ["*.cy.js", "*.cy.jsx"],
      "globals": {
        "cy": "readonly"
      }
    },
  ]
}