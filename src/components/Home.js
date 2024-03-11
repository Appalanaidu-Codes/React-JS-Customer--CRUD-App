import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
   <div className='homebg'> 
    <div className='himg'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./images/crop.jpg" />
    <Card.Body>
      <Card.Title>Crop Protection</Card.Title>
      <Card.Text>
      As a world market leader in crop protection, we help farmers to counter these threats and ensure enough safe, nutritious, affordable food for all while minimizing the use of land and other agricultural inputs.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./images/seed.jpeg" />
    <Card.Body>
      <Card.Title>Seeds</Card.Title>
      <Card.Text>
      We have a team of 12,000 seed experts from research and seed development to production to logistics to sales and marketing, serving farmers in more than 100 countries
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

 
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="./images/sarve.jpg" />
    <Card.Body>
      <Card.Title>People and Culture</Card.Title>
      <Card.Text>
      We’ve committed to invest $2 billion over five years from 2020 in innovation specifically targeted at delivering a step change in agricultural sustainability
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  
  </div>
  </div>
  
  );
}

export default GridExample;