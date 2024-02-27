import fs from 'fs';

// Read the file content using blocking code
console.log("starting to read ");


// this will block the main thread 
const buffer=fs.readFileSync("data.txt");// this will return data as buffer
console.log(buffer);

// buffer is temporary storage to sotre the data which is send by the os 
// if application has ability to accept 3 char/ms and send 5char/ms then 2 char is lossed by application
// that's why buffer is needed to store these temporarly.

//we need to conver the data into string 
console.log(buffer.toString());



// but if  use {encoding :'utf8'} we donot need to conver the data into string

const buffer1=fs.readFileSync("data.txt",{encoding :'utf8'} )
console.log(buffer1+" this is encoded data")

console.log("This is another operation being performed")




// Perfom some operation on file system 

//1. Create a file as well as a write a  file 


// if user do not have permission to write the file in that directory
// try{
//     fs.writeFileSync("Rajnish.txt", "Name:Rajnish Kumar, Age:23, Postion:Sofware Developer");
// } catch(err){
//     console.log(err);
// }


//2. How to append some to existing file

fs.appendFileSync("Rajnish.txt", "Name : Sorry Das, Age:22, Position: Data Scientist");


//3. Deleting a file
try{
    fs.unlinkSync("Rajnish.txt")
} catch(err){
    console.log("File does not exist ");
}