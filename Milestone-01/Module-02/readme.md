{
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "esnext",
    "target": "esnext",
    "strict": true,
    "skipLibCheck": true,
    "moduleDetection": "force"
  }
}
import "./hello.config.js";  in folder script.ts
const name:string = "Emon Hossain Hira"; 

console.log("My name is ",name);

{
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "esnext",
    "target": "esnext",
    "strict": true,
    "skipLibCheck": true,
    "moduleDetection": "force"
  }
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module-02</title>
</head>
<body>
    
    <section>
        <h1>Hello World</h1>
    </section>
    <!-- Script -->
     <script type="module" src="./dist/script.js"></script>

</body>
</html>

const name = "Emon Hossain Hira";
console.log("My name is ", name);
export {};

