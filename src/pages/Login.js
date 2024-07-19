import axios from 'axios'
import React, { useState } from 'react'

export default function Login() {

    const defaultParams={
        email:'',
        password:''
    }
    const [params,setParams]=useState(JSON.parse(JSON.stringify(defaultParams)));
    const[error,setError]=useState({});
    const[isLoading,setIsLoading]=useState(false);

    console.log(params)
    const changeValue=(e)=>{
        const {name, value}=e.target;
        setError({...error, [name]:''});
        setParams({...params, [name]:value})

    }
    

    const validate=()=>{
        // setError=({});
        let error={};
        if(!params.email){
            error={...error, email:'The firls is requires'}
        }

        setError(error);
        return {totalErrors:Object.keys(error).length}
    }
    
    const loginApi = async() => {
        alert(9999)
        const response= await axios({
            method:'post',
            url:'',
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(response)

    }
    return (
        <div>
            <form  >
                <input type='text' placeholder='Enter Email' name='email' value={params.email} onChange={(e)=>{changeValue(e)}} /><br/>
                {/* <span className=' text-red-500' >{error}</span><br/> */}
                <input type='text' placeholder='Enter password' name='password' value={params.password} onChange={(e)=>{changeValue(e)}} /><br/>
                {/* <span className=' text-red-500' >{error}</span><br/> */}
                <button className=' bg-blue-500' type='button' onClick={()=>{validate()}}  >Login</button>
            </form>
        </div>
    )
}
