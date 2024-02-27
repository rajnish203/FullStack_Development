import React from "react";

export default class Input1 extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            lastname:""
        }
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleLastName=(e)=>{
        this.setState({
            lastname:e.target.value
        })
    }

    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input value={this.state.name} onChange={this.handleName}/>
                </Row >
                <Row label="Last Name">
                        <input value={this.state.lastname} onChange={this.handleLastName}/>
                </Row >
            </div>
    
            <h2>Hello, {this.state.name +" "+ this.state.lastname} </h2>
            
            </>
            )

    }
   
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
