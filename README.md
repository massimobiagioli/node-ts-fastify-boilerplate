# NodeJs - Fastify - Typescript Boilerplate

## Setup

```
yard init -y
yarn add fastify fastify-plugin fastify-cli fastify-print-routes
yarn add --dev typescript @types/node ts-node nodemon

npx tsc --init
```

Add `dotenv` module:

```
yarn add dotenv
yarn add @fastify/env
```

Duplicate and customize `.env.example` into `.env`

Populate `tsconfig.json` with this content:

```
{
  "compilerOptions":
    {
      "target": "es2018",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true,
    },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"],
}
```

Create file `nodemon.json` with this content:

```
{
    "execMap": {
        "ts": "ts-node"
    }
}
```

Add ESLint:

```
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev
```

Create file `.eslintrc` with this content:

```
{
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended"],
  "parserOptions": { "ecmaVersion": 2018, "sourceType": "module" },
  "rules": {}
}
```

Add Prettier:

```
yarn add prettier --dev
yarn add --dev @trivago/prettier-plugin-sort-imports
```

Create file `.prettierrc` with this content:

```
{
    "semi": false,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 120,
    "tabWidth": 2,
    "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true
}
```

Add Husky:

```
yarn add husky --save-dev
```

Add Husky configuration in `package.json`:

```
{
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint"
    }
  }
}
```

Add logger:

```
yarn add pino
yarn add --dev @types/pino
```

Add dependency injection:

```
yarn add fastify-awilix awilix
```

Add Typebox and ajv for validation:

```
yarn add @sinclair/typebox ajv ajv-formats
```

Testing:

```
yarn add --dev jest ts-jest @types/jest sinon ts-sinon
```

Create file `jest.config.js` with this content:

```
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [
        '<rootDir>/test/testSetup.ts'
    ]
};
```

Execute Jest with this option enabled:

```
NODE_OPTIONS=--experimental-vm-modules
```

Create file `test/testSetup.ts` with this content:

```
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env.test') })
```

Authentication:

```
yarn add @fastify/jwt
```

fp-ts:

```
yarn add fp-ts
```

## TODO

-   Add Swagger
-   Add MongoDB (for production and test)
-   Add Serverless Deploy (with ClaudiaJs)
