# General Readme
 
## **JavaScript Standard Styles:**
 
This is the standard Javascript conventions. It only include highlights that are not covered by [Prettier](https://prettier.io/docs/en/options.html).
 
- For var declarations: write each declaration in its own statement.
    - correct:
    > var silent = true
    - wrong:
    > var silent = true, verbose = true
- Use **camelcase** while naming variables and functions:
    > function thisFunction () { }
    > <br> var myVar = 'Yes'
- Constructor names must begin with capital letter
    > function Person () {}
    > <br>var human = new Person()
- Objects must contain getter when setter is defined:
    >var person = {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;set name (value) {
    <br>&nbsp;&nbsp;&nbsp;&nbsp;this._name = value
  <br>},
  <br>get name () {        
    &nbsp;&nbsp;&nbsp;&nbsp;return this._name
  <br>&nbsp;&nbsp;&nbsp;&nbsp;}
<br>}
- Do not modify variables of class declarations:
    > class Dog {}
    <br>Dog = 'Fido'
- Use single import statement per module:
    >import { myFunc1, myFunc2 } from 'module'
- No octal literals:
    - correct:
    > const octalString = '042'
    -   wrong:
    > const octal = 042
- Use isNaN() when checking for Nan:
    > if(isNaN(value)) { }

## **Folder Format and Organization:**

This section gives a brief explanation on how files should be named when [SvelteKit](https://kit.svelte.dev/docs/routing) is used.

### Definitions:
- Pages: Used to generate HTML that is displayed to users.
- Endpoints: Run only on the server. It is where you access the databases and APIs. Pages can request data from the endpoint. Endpoints return JSON by default.

### Rules:
- Pages are expected to end with .svelte
    - For example:
        > scr/routes/index.svelte
    - Note: src/routes/about.svelte corresponds to the /about route

- Endpoints are modules written in .js
    - For example:
        > src/routes/items/[id].js
- Page endpoints: Endpoints with same filename as a page (except for extensions) can get its props from the endpoint via fetch.
    - For example: 
        >src/routes/items/[id].svelte could get its props from src/routes/items/[id].js
- Standalone endpoints: Endpoints that exits separately from the pages has more flexibility over return body type and can return both objects and Uint8Array. 
    - They can be given file name extensions if desired, or accessed directly if not: 
     > - filename: src/routes/data/index.json.js
     <br >Endpoint:
     /data.json
     >- filename: src/routes/data.json.js
     <br >Endpoint:
     	/data.json
    >- filename: src/routes/data/index.js
     <br >Endpoint:
    /data
    >- filename: src/routes/data.js
     <br >Endpoint:
    /data
- Private modules: Files and directories with a leading _ or . are private by default. They do not create routes, but can be imported by files that do. You can configure which modules are considered public or private with routes configuration.

