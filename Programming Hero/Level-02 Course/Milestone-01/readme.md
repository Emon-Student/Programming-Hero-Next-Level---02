# TypeScript Practice

My personal environment setup for learning and practicing TypeScript on Microsoft Windows.

## Environment Setup

### Operating System
- Microsoft Windows 10
- Command Prompt (CMD)

### Installed Tools

| Tool | Version | Status |
|---|---|---|
| NVM for Windows | 1.2.2 | Installed |
| Node.js | 24.12.0 | Installed and active |
| npm | 11.6.2 | Installed |
| Node.js 26 | 26.13.0 | Installed, not active |

## What is NVM?

NVM (Node Version Manager) allows me to install and switch between multiple Node.js versions on my computer.

## Verify Installation

Open Command Prompt and run:

```cmd
nvm version
nvm list
node -v
npm -v
```

## Switch Node.js Versions

Use Node.js 24:

```cmd
nvm use 24.12.0
```

Use Node.js 26:

```cmd
nvm use 26.13.0
```

Check the active version:

```cmd
node -v
```

## Create a TypeScript Project

```cmd
mkdir typescript-practice
cd typescript-practice
npm init -y
npm install -D typescript
npx tsc --init
```

## TypeScript Configuration

After running `npx tsc --init`, update the `tsconfig.json` file with the following configuration:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

### Configuration Explanation

| Option | Purpose |
|---|---|
| `target` | Compiles TypeScript into ES2020 JavaScript |
| `module` | Uses ES module syntax |
| `rootDir` | Specifies the source code directory |
| `outDir` | Specifies the compiled JavaScript directory |
| `strict` | Enables strict type checking |
| `skipLibCheck` | Skips type checking of declaration files |
| `include` | Includes TypeScript files inside the `src` directory |

## Compile and Run TypeScript

Create a `src` folder and a `hello.ts` file inside it.

Write your TypeScript code in `hello.ts`.

Compile the TypeScript files:

```cmd
npx tsc
```

Run the compiled JavaScript:

```cmd
node dist/hello.js
```

## Watch Mode

Watch mode automatically recompiles TypeScript files whenever you save changes.

Start the TypeScript compiler in watch mode:

```cmd
npx tsc --watch
```

Or use the short command:

```cmd
npx tsc -w
```

Keep the terminal running while working. Press `Ctrl + C` to stop watch mode.

## Learning Goals

- Learn TypeScript fundamentals
- Understand types, functions, and interfaces
- Practice classes and object-oriented programming
- Learn asynchronous programming
- Build small projects with TypeScript and Node.js

---

**Status:** Development environment installed and ready for TypeScript practice.

**Current Node.js version:** 24.12.0