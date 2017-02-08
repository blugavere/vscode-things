module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "parser": "babel-eslint",
    "rules": {
        "eol-last": [1],
        "quotes": [2, "single"],
        "linebreak-style": [2, "unix"],
        "new-cap": [0],
        "no-path-concat": [0],
        "no-mixed-requires": [0],
        "no-underscore-dangle": [0],
        "no-trailing-spaces": [1],
        "no-unused-vars": [1],
        "semi": [2, "always"],
        "no-console": [0],
        "no-dupe-keys": [1],
        'handle-callback-err': 2,
        'valid-typeof': 2,
        'no-new-require': 1,
        'no-lonely-if': 1,
        'prefer-arrow-callback': 1,
        'no-extra-parens': 1,
        'arrow-parens': [1, "as-needed"],
        'arrow-body-style': ["error", "as-needed"]
    },
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "ecmaFeatures": {
        "blockBindings": true,
        "forOf": true,
        "jsx": true,
        "modules": true
    }
};