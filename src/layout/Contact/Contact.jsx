import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const [key, setKey] = useState('ab httpOnly: true,out');
  const [data, setData] = useState("");
  const [contactData,setContactData]=useState({
    name:'',email:'',phone:'',message:''
  });


  const checkUserAuth = async () => {
    try {
      let res = await axios.get('/contact', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: 'include'
      });
      setData(res.data)
    } catch (err) {
      console.log(err.response.data, 'error occure');
      navigate('/login');
    }

  }

  useEffect(() => {
    checkUserAuth();
  }, [])
  return (
    <Container>
      <div className="d-flex justify-content-between mt-4">
        <div className="d-flex justify-content-center align-items-center">
          <h6>img</h6>
          <div>
            <h5>Phone</h5>
            <p>+987654321</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h6>img</h6>
          <div>
            <h5>Email</h5>
            <p>contact@gmail.com</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h6>img</h6>
          <div>

            <h5>Address</h5>
            <p>plot 2 lahore</p>
          </div>
        </div>
      </div>
      <div className="get-into-touch">
        <h4>Get in Touch</h4>
        <Form>
          <Row className="d-flex justify-content-center">
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" placeholder="Your Phone Number" />
            </Form.Group>
            </Col>
          </Row>

          <textarea className="w-100 mt-3" name="message" id="" cols="30" rows="10" placeholder="Message" />
          <Button variant="primary" className="mt-3" type="submit">
            Send Message
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default Contact