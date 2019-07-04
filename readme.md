> These ES6 Tools are needed only for browser app. 

#### Steps
1. `npm i -g webpack-cli` 

2. `webpack-cli init` 

3. `npm init -y` 

4. Add this line to the package.json in the scripts section  
`"build": webpack -w` 

Modern JavaScript Needs *Transpiler* & *Bundler*

- Transpiler: Translator + Compiler 
Translates to ES5 for compatibility. 
e.g. BABEL (Popular)

- Bundler: Combines all js files -> Single js file
e.g. WEBPACK (Popular)

> **WebPack** also does **BABEL**'s work. 