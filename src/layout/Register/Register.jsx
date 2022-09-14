import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();

  const [userData, setUserData] = useState({
    name: '', email: '', phone: '', work: '', password: '', cpassword: ''
  });

  const formData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const saveData = async () => {

    try {
      let res = await axios.post(process.env.BASE_URL+'/register',userData,{
        headers:{
          "Content-Type": 'application/json'
        },
      });
      if(res.status===201){
        alert('User Register Successfull');
        navigate('/login')
      }
      console.log(res,'response of register');
  
    } catch (err) {
      console.log(err.response.data,'error message');
      alert('Invalid Credentails')
    }
  
  }

  return (
    <div className="mt-4 w-25 mx-auto">
      <Container>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={userData.name} onChange={formData} placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={userData.email} onChange={formData} placeholder="Enter Email" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="phone" name="phone" value={userData.phone} onChange={formData} placeholder="Enter Mobile" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Work</Form.Label>
            <Form.Control type="text" name="work" value={userData.work} onChange={formData} placeholder="Enter Profession" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={userData.password} onChange={formData} placeholder="Password" />
          </Form.Group>  <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="cpassword" value={userData.cpassword} onChange={formData} placeholder="confirm Password" />
          </Form.Group>
          <Button variant="primary" onClick={saveData}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;


