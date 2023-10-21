All application code should be in the src directory

To modify the configuration, run ``` tsc --init ```

Change root dir to src 
Change outdir to dist. This will be where the output code will be stored
removeComments - This will remove all comments when compiling for shorter code
noEmitOnError - will stop typescript when there are errors and will not generate built files

## Debugging
Enable sourcemap in config file

In typescript, large numbers can be separated by underscores to make it more readable. eg 123_456_789
Also, there is no int or float type, only number, not numbers

Type can be ommited in variable declarations as long as the variable is initialized to a type

When a variable isnt initialized, the type created for it is "any"


Arrays
Elements in an array can be of different types

Adding a ? after a defined variable in an array or object makes it an optional value 


retire?

Objects, a function can return an object

Issue with tuples - the values can be overwritten and can be appended to