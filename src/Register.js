
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () =>{
    const [disabled , setDisabled ] = useState(true);

   

    function checkFields(){
        var fname = document.getElementById("fullName").value;
        var emailID = document.getElementById("exampleInputEmail1").value;
        var ddob = document.getElementById("dateOfBirth").value;
        var pass = document.getElementById("exampleInputPassword1").value;
        var pass2 = document.getElementById("exampleInputPassword2").value;
        if(fname.length > 0 && emailID.length >0 && ddob.length >0 && pass.length > 0 && pass2.length > 0) setDisabled(false);
        else setDisabled(true);
    }
    function onSubmit(){

        var fname = document.getElementById("fullName").value;
        var emailID = document.getElementById("exampleInputEmail1").value;
        var ddob = document.getElementById("dateOfBirth").value;
        var pass = document.getElementById("exampleInputPassword1").value;
        var pass2 = document.getElementById("exampleInputPassword2").value;

        //Name
        if(fname.length < 6 )  toast.error("Name should not be of less than 6 characters");
        //Email
        if(emailID.includes('@gmail.com')){
            let newid = emailID.split('@')[1];
            if(newid !== "gmail.com") toast.error("Email should be of gmail.com only");
        }
        else toast.error("Email should be of gmail.com only");
        //Age
        var dob = new Date(ddob);  
        var month_diff = Date.now() - dob.getTime();  
        var age_dt = new Date(month_diff);   
        var year = age_dt.getUTCFullYear();  
        var age = Math.abs(year - 1970);  
        if(age < 13) toast.error("Age should not be less than 13");
       //Password
       if(pass.length < 8 )  toast.error("Password should have strength of 8 or more characters");
        //Confirm Password
       if(pass !== pass2 )  toast.error("Password and Confirm Password entry should be the same");
       
    }
    


    return <>
    <div className="App-header ">
        <h1 className='mb-3'>Registration Form</h1>
        <form className='register'>
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter Full Name" onChange={()=>checkFields()}/>
                <small id="fullNameHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={()=>checkFields()}/>
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" className="form-control" id="dateOfBirth" aria-describedby="dobHelp" placeholder="Enter Date Of Birth" onChange={()=>checkFields()}/>
                <small id="dobHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={()=>checkFields()}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" onChange={()=>checkFields()}/>
            </div>
            
            
        </form>
        <button className="btn btn-primary mt-3" onClick={()=>onSubmit()} disabled={disabled}>Submit</button>
        </div>
        <ToastContainer/>
    </>
}

export default Register;