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
