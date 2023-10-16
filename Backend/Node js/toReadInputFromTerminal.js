// 1. Import the readline module using ES6 syntax
import readline from 'readline';

// 2. Create an interface to connect with the terminal/command line
const interface1 = readline.createInterface({
    input: process.stdin,   // Read input from the terminal
    output: process.stdout, // Output to the terminal
});

// 3. Read input values
interface1.question("Enter the first number: ", (num1) => {
    interface1.question("Enter the second number: ", (num2) => {
        // Perform the addition
        const sum = Number(num1) + Number(num2);
        console.log(`Sum: ${sum}`);
        console.log(sum);
        
        // Close the interface when you're done
        interface1.close();
    });
});
