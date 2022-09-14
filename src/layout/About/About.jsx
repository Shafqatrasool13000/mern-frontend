import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../../assets/profile.jpeg';
import Button from 'react-bootstrap/esm/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();
  const [key, setKey] = useState('ab httpOnly: true,out');
  const [data, setData] = useState("");

  const checkUserAuth = async () => {
    try {
      let res = await axios.get('/about', {
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

  const detailsHandler = (k) => {
    console.log({ key })
    setKey(k)
  }
  return (
    <Container>
      {
        data&&data?.map(({name,_id,email,phone,work})=>(
          <div key={_id}>
          <Row className='mt-3 align-items-center'>
        <Col md={4}>
          <img src={profile} alt="profile" />
        </Col>
        <Col md={6}>
          <h4>{name}</h4>
          <h6>{work}</h6>
          <p>Rankings : <span>1/10</span> </p>
          <div className="mt-3">
            <Tabs
              activeKey={key}
              id="uncontrolled-tab-example"
              className="mb-3"
              onSelect={(key) => detailsHandler(key)}
            >

              <Tab eventKey="about" title="About" />
              <Tab eventKey="timeline" title="Timeline" />


            </Tabs>
          </div>
        </Col>
        <Col md={2}>
          <Button variant='primary'>Edit Profile</Button>
        </Col>
      </Row>
      <div className='About mt-4'>
        {key === 'about' ? (<Row>
          <Col md={4}>
            <h6>Youtube</h6>
            <h6>Web Developer</h6>
            <h6>Thapa Technical</h6>
            <h6>Web Developer</h6>
            <h6>Figma</h6>
            <h6>Software Engineering+{_id}</h6>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <h5>User Id</h5>
                <h5>Name</h5>
                <h5>Email</h5>
                <h5>Phone</h5>
                <h5>Profession</h5>
              </Col>
              <Col md={6}>
                <h5>{phone}</h5>
                <h5>Shafqat Rasool</h5>
                <h5>{email}</h5>
                <h5>98989889</h5>
                <h5>Web Developer</h5>
              </Col>
            </Row>
          </Col>
        </Row>) : (<div className="time-line">
          <p>This is timeabout my profile</p>
        </div>)}

      </div>
          </div>
      

  ))
}
    </Container >
  )
}

export default About