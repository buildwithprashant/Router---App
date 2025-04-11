import{ React,  useState } from 'react'
import { useNavigate } from 'react';

function Login() {
  const [name,setName] = useState('');
  const  navigate = useNavigate();

 function handleSubmit(e){
  e.preventDefault();
  if(name === 'Prashant'){
    navigate('/user/Prashant');
  }
  else{
    navigate('/about')
  }
 }


  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input type ="text" onChange={(e) => setName(e.target.value)}/>
      </form>
    </div>
  )
}

export default Login