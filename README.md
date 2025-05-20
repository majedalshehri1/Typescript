# 📘 TypeScript Setup – Local & Global Installation + Best Practices

Welcome to the ultimate guide for setting up TypeScript in your project the **right way**.  
This guide will help you install TypeScript either **locally** (project-only) or **globally** (system-wide), and set up your project to start coding cleanly and professionally.

---

## 📦 Install TypeScript

### 🌐 Global Installation (Optional – for using `tsc` everywhere)

Use this if you want to run `tsc` from any folder via terminal:

```bash
sudo npm install -g typescript

```

> 💡 You might need to use sudo on macOS/Linux to avoid permissions issues.

- Check if it's installed:
  `tsc --version`

---

### 📁 Local Installation (Recommended)

Install TypeScript only inside your project:

```bash
npm install typescript --save-dev
```

> This is the recommended and safe way for project-based development.

---

### 🛠️ Initialize the Project

If you haven't already, create a new project folder and initialize `package.json`:

```
mkdir my-ts-project
cd my-ts-project
npm init -y
```

---

### Create TypeScript Configuration

Generate the default TypeScript config:

```
npx tsc --init
```

Then update the `tsconfig.json` file to follow best practices:

```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

> This configuration ensures strict typing, clean folder structure, and compatibility.

---

### 🧪 4. Write Your First TypeScript Code

Create the source folder and a starter file:

```
mkdir src
touch src/index.ts
```

Example code in `src/index.ts`:

```
const greet = (name: string): void => {
  console.log(`Hello, ${name}!`);
};

greet("Majed");
```

---

### Compile TypeScript

To compile your code into JavaScript:

```
npx tsc
```

> This will generate the dist/ folder with the compiled index.js file.

---

### Add NPM Scripts for Ease

Open `package.json` and add:

```
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js"
}
```

Now you can run:

```
npm run build     # To compile TypeScript
npm run start     # To run the compiled code
```

---

### Enable Watch Mode (Optional)

Automatically recompile when files change:

```
npx tsc --watch
```

---

### Project Folder Structure

```
my-ts-project/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js (auto-generated)
│
├── package.json
├── tsconfig.json
└── node_modules/
```

---

### Optional: Add ESLint + Prettier for Clean Code

Install tools:

```
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier
```

Then initialize ESLint:

```
npx eslint --init
```

> Choose the TypeScript and Prettier options when prompted.
