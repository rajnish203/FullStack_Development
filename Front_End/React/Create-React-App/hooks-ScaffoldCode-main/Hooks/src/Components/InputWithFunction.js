import { useState ,useEffect} from "react";
export default function Input(){
   const[name,setName]=useState("");
   const[lastname,setlastname]=useState("");

   // This function is same work as component did mount ans component did upadte in class 
   // Both functionality provide by the single method
   // we can also used as cdm only by passing an empty array, but if pass any element then component did update according to that element only 
   useEffect(()=>{
    document.title=name+" "+lastname
   });

   useEffect(()=>{
    let timer=setInterval(()=>{
        console.log("windows width",window.innerWidth);
    },2000);
    return (clearInterval(timer));
   })
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input value={name} onChange={(e)=>setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello, {name+" "+lastname} </h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
