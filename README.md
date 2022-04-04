# General Readme
## Naming Conventions:
1. **Non-object oreinted features** (functions and global variables): Use underscores [an_example]
2. **Object oriented features** (classes and methods): CamelCase [AnExample]
3. **Class names:** Start with uppercase letter [Example]
4. **All other names:** Lower CamelCase [anExample]

## More detailed naming conventions:
1. **Fucntions:** Lowercase with underscores [show_data]
    1. Function parameters: lowercase
2. **Local variables:**
    1. General: Describe contents with noun, use lowercase [size]
    2. Temporary variables: Avoid single letters, use lowercase underscore [loop_counter]
3. **Global Variables:** Use uppercase with underscores [GLOBAL_VARIABLE]
4. **Classes:** Describe with noun, use CapWords conventions [LivingPatient]
5. **Methods:** Use CamelCase [recordDeathCases]
    1. Function parameters: lowercase (first instance is always "self")
6. **Attributes:** CamelCase [xCoordinate]
    1. Hidden attributes: begin with underscore [_hiddenAttribute]
7. **Properties:** CamelCase [hiddenAttribute]
8. **Packages:** lowercase names, preferably without underscores
9. **Modules:** lowercase names with underscore

## Commenting Conventions:
* **Docstring**(“““Used for specifications”””)
    * **General specifications:** Start with simple description that fits in a line (e.g. Draw a circle that fits within the rectangle given), then a blank line, and then a more detailed description of the specifications(i.e. Include details about parameters). [Note: sometimes one line is enough description.]
        * **Module specifications:** Follows general specifications
        * **Function specifications:** Indented, follows general specifications, ending with a description of the parameter and its precondition. (e.g. Parameter t: t is the number of trains, Precondition: t is a sequence of integers, a>=t)
        * **Class Specifications:** Follows general specifications, includes “Attributes:” (e.g. fname: The first name of user) and “Invariant:” (e.g. Invariant: fname is string)
            * **Hidden attributes:** Should be single line comments after specifications (e.g. #Attribute _ssn: The social security number, #Invariant: _ssn is an int.)
        * **Method specifications:** Same like function specifications but do not need to mention invariants(unless it is a getter class).
        * **Attribution Comments:** 
            * **Co-author:** Added at the last few lines of the module specifications (e.g. Authors: Han Solo (hsl2),Version: April 04, 2022)
            * **Use of algorithm or code fragments:** Added next to where the algorithm or code is (e.g. This function implements the … algorithm, as described in the article: “A fast procedure for…”, IEEE journal of Robotics, Vol 4. Issue 2, 1988.)
* **Comments**(#Used for all other comments)
    * **Statement comments:** explains what group of statements does