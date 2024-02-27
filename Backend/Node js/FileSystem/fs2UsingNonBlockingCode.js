import fs from 'fs';
import path, { resolve } from 'path'

const filePath=path.join('src', 'home', 'data.txt')// it join the segments of path that we give

const absoluteFilePath=path.resolve('src', 'home', 'data.txt')// it will give the absolute path of the file

console.log(path.extname(absoluteFilePath)); // it will print the extension of the file


console.log(filePath)
console.log(absoluteFilePath)

 fs.readFile(filePath, (err, data)=>{
    if(err){
        console.log(err);
    
    }else{
        console.log(data.toString());
    }
 })


 // write the data and create a file 
 fs.writeFile('employee.txt', 'New Employee', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("The file is written ");
    }
 })
 console.log("this is another operation"); 


 //3. Append operation
 
 fs.appendFile('employee.txt', "\nAnother employee", (err)=>{
    if(err){
        console.group(err);
    }else{
        console.log("file is upadated");
    }
 })


 //4. Delete the file
 fs.unlink("demo.txt", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('File is deleted')
    }
 })