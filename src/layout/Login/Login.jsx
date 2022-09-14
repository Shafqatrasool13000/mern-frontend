import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitData=async()=>{
    try {
      let res =await axios.post(process.env.REACT_APP_BASE_URL+'/login',{email,password},{
        headers:{
          'Content-Type':'application/json',
        },
        
       });
       if(res.status===200){
        alert('Logged in Successfully')
        navigate('/');
       }
       console.log(res.data,'res of login')
    } catch (err) {
      console.log(err,'error occur');
    }
  
  }
  return (
    <div className="mt-4 w-25 mx-auto">
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" onClick={submitData}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;


