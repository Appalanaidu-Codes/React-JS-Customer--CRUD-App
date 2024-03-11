import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';
import CustomerService from './CustomerService';
// import { Navigate } from 'react-router-dom';

function BasicExample() {

const [customername, setcustomerName] = useState('');
const [customerphone, setcustomerPhno] = useState('');
const [customerage,  setcustomerAge] = useState('');
const [customerproduct, setcustomerProduct ] = useState('');
const [customerquantity, setcustomerQuantity] = useState('');
const [customeraddress,  setcustomerAddress] = useState('');

// const baseURL = "http://localhost:3000/Customer";

// const navigate = Navigate();

//     const customerNameChangeHandler = (e) => {
       
//         setcustomerName(e.target.value);
//         // console.log(e.target.value);
//       };

//       const customerPhnoChangeHandler = (e) => {
//          setcustomerPhno(e.target.value);
//         // console.log(event.target.value);
//       };

const Submit = (e) =>{
  e.preventDefault();
  // axios.post(baseURL,{
  //   Name:customerName,
  //   Phno:customerPhno,
  //   Age:customerAge,
  //   Product:customerProduct,
  //   Quantity:customerQuantity,
  //   Address:customerAddress
  // })
  CustomerService.createCustomer({name:customername,
    phone:customerphone,
    age:customerage,
    product:customerproduct,
    quantity:customerquantity,
    address:customeraddress})
  .then((response)=>{
    alert(customername+"added");   
    
  })
  
  .catch(error=>{
    alert("error==="+error);
  
  });
};

  return (
    <div className='addcust'>
    <Form className='form' onSubmit={Submit}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className='text-white'>Name</Form.Label> 
        <Form.Control type="text" placeholder="Enter Name" value={customername} onChange={(e)=>setcustomerName(e.target.value)} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder=" Enter Ph No." value={customerphone} onChange={(e)=>setcustomerPhno(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" value={customerage} onChange={(e)=>setcustomerAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" value={customerproduct} onChange={(e)=>setcustomerProduct(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Product Quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Quantity" value={customerquantity} onChange={(e)=>setcustomerQuantity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" value={customeraddress} onChange={(e)=>setcustomerAddress(e.target.value)} />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className='text-white' label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={Submit} type="submit" className='position'>
        Submit
      </Button>
    </Form>
    </div>
  ); 
}

export default BasicExample;