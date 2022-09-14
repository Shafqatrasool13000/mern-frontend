import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

 
  return (
    <div className="vh-750">

    <Container fluid>
      <div className="position-absolute" style={{
        top: '45%',
        left:'45%'
      }}>

      <h4>Welcome</h4>
      <h2>We Are Mern Stack</h2>
      </div>
      <Row>
        <Col md={6} style={{backgroundColor:"lightblue",height:'94vh'}}/>       
        <Col md={6} style={{backgroundColor:"lightcyan",height:'94vh'}}/>
      </Row>
    </Container>
    </div>
  )
}

export default Home