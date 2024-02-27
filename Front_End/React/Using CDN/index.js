// Create the element using the javascript and appending inside the div

/** javascript  */
const heading = document.createElement("h2");
heading.textContent = "Hello world, Creating Element with javascript";
heading.className = 'header';
document.getElementById('root1').append(heading);

console.log("Javascript Element", heading)


/**REACT */

//Heading wiht javascript
const ReactHeading = React.createElement("h1", { className: "head" }, "Hello React Created Element with react javascript");
console.log("React Element", ReactHeading);
ReactDOM.createRoot(document.getElementById("root")).render(ReactHeading);

// Creating the element of react using jsx
const jsxHeading = (<h1>Hello Jsx Heading</h1>)
// we need an another compiler here which convert the jsx into javascript
// Because browser do not understand the jsx code 
//Browser only understand the html css and javascript
// so babel comes into the picture for converting the jsx code into javascript code
//jsx is provide more convenient way to write the code in javascript
//jsx means javascript +XML which allow to write the code html and javascript code together.
const jsxPragraph = (<p>This is created using jsx </p>);
ReactDOM.createRoot(document.getElementById("root2")).render(jsxPragraph);
ReactDOM.createRoot(document.getElementById("root2")).render(jsxHeading);

/** REACT Fragment 
 React does not allow to adjacent element without any parent wrapper 
 like const jsxHeading=(<h1>Hello Jsx Heading</h1> <p>REACT is a javascript libray</p>)
*/
const ReactFeatureHeading = <>
                            <h1>About React</h1>
                            <p>React is a JavaScript library for building user interfaces.
                               React is used to build single-page applications.
                               React allows us to create reusable UI components.</p>
                               <h3>Feature of react</h3>
                               <ul>
                                     <li>One-way Data Binding</li>
                                     <li>Virtual DOM</li>
                                     <li>components</li>
                               </ul> 
                            </>
 ReactDOM.createRoot(document.getElementById("root3")).render(ReactFeatureHeading);


/** React Component
 * 
 Components are like functions that return HTML elements.
 Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, 
 but work in isolation and return HTML.
 Components come in two types, Class components and Function components, 

 */
/** Function Component the same as the fucntion in javascript
 The only diffrenece is function is not started with Upper char but component
 */

 function Name(){
    return (
        <>
        JSX is nothing but JavaScript XML
        </>
    )
 }

 function App(){
    return(
        <>
                            <h1>About React</h1>
                            <p>React is a JavaScript library for building user interfaces.
                               React is used to build single-page applications.
                               React allows us to create reusable UI components.</p>
                               <h3>Feature of react</h3>
                               <ul>
                                     <li>One-way Data Binding</li>
                                     <li>Virtual DOM</li>
                                     <li>components</li>
                               </ul> 
                            </>
    )
 }

 // Rendering more than one component we have to use the fragement that is wrapper
 ReactDOM.createRoot(document.getElementById("root4")).render(<><App /><Name /></>);

 /** functional component using the arrow function */
 const ArrowFunctionComponent=()=>
    (
        <>
        <h1>Arrow Function Component</h1>
        </>
    )
 
// use return keyword if we have to return the more element
 ReactDOM.createRoot(document.getElementById("root5")).render(<ArrowFunctionComponent />);


 /** Embedding javascript inside the jsx */



 /** When we want to js variable or function inside jsx use {var} , {sum()} 
  * 
  * 
  * any valid expression which resolves to a value like function resove to a value 15, or a=13;
 */


 function sum(){
    let a=10+5;  
    return a;   // function without return it will not show anything to JSX
 }


 /** JSX Expression 
  * jsx is itself a expression
  */

const jsxExpression=<h1>Jsx is itself a expression</h1>


function EmbeddJavascript(){
    var name="Alexa";
    var age =10;
    let demo;
    var Boolean=true;

    /** Rendering Arrays and Objects inside the jsx */
    let arr=[1,2,3,4];
    let obj={
        name:'React',
        version:3
    }
   
    
    return(
        <>
        <h1>Arrays and Objects in JavaScript</h1>
        {arr.map((nums)=><h2>{nums}</h2>)}
        {/* Directly whole object can not be render */}
        <h2>{obj.name}</h2>
        <h1>Hello{name}</h1>
        {jsxExpression} 
        <p>Your age is {age}</p>
        <p>{demo}</p>
        <p>{Boolean}</p>
        <h2>Calling a fucntion {sum()}</h2>   // fucntion call inside the jsx
       
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<EmbeddJavascript />);
  

                                                        /** Assignment -1 */

/**Create an array of class which has name of the car and render it into the jsx to show like a list 4
 * for example const class=[bmw, scorpio, verna, rangerover]
 * display like 
 * .bmw 
 * .scorpio and so on 
 */

function Mycomponents(){
    let car=["BMW", "Scorpio", "Verna", "Rangerover"];
    return(
        <>
        <h1> We are going to display the new Brand car </h1>
        {/* Assign keys to the each element of the array, It is not manadatory */}
        {car.map((i, index)=>(<ul><li key={index}>{i}</li></ul>))}
        </>
    )
}
ReactDOM.createRoot(document.getElementById("root7")).render(<Mycomponents />);


                                                                /** Assignment -2 */
                                          /**Render the student object detail in jsx in the form of table  */

            function Mycomponents2(){
                const student=[{
                    name:"Prabhjot kaur",
                    class:"IT-B1",
                    roll_no:1921079
                },
                {
                    Name:"Rajnish Kumar",
                    class:"IT-B1",
                    roll_no:1921084
                }
            ]
            return(
                <>
                <h1>Student Record</h1>
                 <table>
                    <thead>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Roll Number</th>
                    </thead>
                    <tbody>
                    {student.map((student)=>(
                        <tr>
                        <td>{student.name}</td>
                        <td>{student.class}</td>
                        <td>{student.roll_no}</td>
                        </tr>
                    ))}
                    </tbody>
                    
                 </table>
                </>
            )}
 ReactDOM.createRoot(document.getElementById("root8")).render(<Mycomponents2 />)



                                                    /** Assignment-3 */
                                                    
                        /**Render the car object detail in jsx in the form of table  */
                        function Mycomponent3(){
                            const car=[
                                {
                                name:"Scorpio",
                                Brand:"Mahindra",
                                feature:" certified IP 54 dust and water resistan",
                                image:"https://imgd.aeplcdn.com/1920x1080/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-47.jpeg?isig=0&q=80&q=80"
                            },
                            {
                                name:"Verna",
                                Brand:"Hyundai",
                                feature:"So Smarty and looking so smooth",
                                image:"data:image/jpeg;base64,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"
                            },
                        ]
                         let loggedIn=true;
                         var name=""
                         var firstName="";
                         var lastName=""
                        return (
                            <>
                            <h1>Hello {loggedIn?"Prabhjot":"User"}! </h1>  
                            {loggedIn && <p>Welcome to my heart ❤</p>} 
                            <h1>Hello {loggedIn? lastName || firstName || name:"User"}! </h1> 
                                            
                             <h1>Car Details</h1>
                            <table>
                                <thead>
                                    <th>Name</th>
                                    <th>Brand</th>
                                    <th>Feature</th>
                                    <th>Image</th>
                                </thead>
                                <tbody>
                                    {car.map((car)=>(
                                        <tr>
                                           
                                           <td>{car.name }</td>
                                           <td>{car.Brand }</td>
                                           <td>{car.feature }</td>
                                           <td>{car.image}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </>

                        )
                        }
                /** Compose more than one component in a component */
                function Composecomponet(){
                    // return (
                    //     <>
                    //     < Mycomponent3 />
                    //     <Mycomponents2 />
                    //     </>
                    // )


                    // condtional rendering 
                    if(false){
                        return <Mycomponents2 />
                    }
                    return (
                        <>
                        < Mycomponent3 />
                        
                        </>
                    )
                }
                    ReactDOM.createRoot(document.getElementById("root9")).render(<Composecomponet />)