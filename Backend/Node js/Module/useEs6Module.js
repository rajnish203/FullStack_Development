// import * as arithMaticModule from"./es6module.mjs"; // it import the whole module feature which is exportable in es6
import { multiply } from "./es6module.js";// it import the only that function or variable which is named in the {}
// for importing and exporting the es6 we have to write the extension mjs 
// if we want to remove the mjs extension we have to write "type":"module " in package.json file
console.log(multiply(4, 5));
// console.log(arithMaticModule.pi);