import { Form, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from './CustomerService';
// import './Editstudent.css';
const EditDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();



    const [enteredcustomerName, setcustomerName] = useState('');
    const [enteredcustomerPhno, setcustomerPhno] = useState('');
    const [enteredcustomerAge, setcustomerAge] = useState('');
    const [enteredcustomerProduct, setcustomerProduct] = useState('');
    const [enteredcustomerQuantity, setcustomerQuantity] = useState('');
    const [enteredcustomerAddress, setcustomerAddress] = useState('');

    //const baseURL = "http://localhost:3000/Customer";



    const getDetails = () => {
        //axios.get(baseURL + '/' + id)
        CustomerService.getCustomerById(id)
            .then(response => {

                // console.log(response);
                const kin = response.data;
                setcustomerName(kin.name);
                console.log(kin.name);
                setcustomerPhno(kin.phone);
                setcustomerAge(kin.age);
                setcustomerProduct(kin.product);
                setcustomerQuantity(kin.quantity);
                setcustomerAddress(kin.address);
            })
            .catch(error => {
                console.error("Error fetching student data:", error);
            });
    }

    // const studentNameChangeHandler = (event) => {
    //     setStudentName(event.target.value);
    // };

    // const studentRoleChangeHandler = (event) => {
    //     setStudentRole(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Update booking data
        // axios.put(baseURL+'/' + id, {

        //   Name:enteredcustomerName,
        //   Phno:enteredcustomerPhno,
        //   Age:enteredcustomerAge,
        //   Product:enteredcustomerProduct,
        //   Quantity:enteredcustomerQuantity,
        //   Address:enteredcustomerAddress
        // })
        CustomerService.updateCustomer(id,{name:enteredcustomerName,
          phone:enteredcustomerPhno,
          age:enteredcustomerAge,
          product:enteredcustomerProduct,
          quantity:enteredcustomerQuantity,
          address:enteredcustomerAddress})
            .then((response) => {
                alert("Student " + enteredcustomerName + " updated!");
                navigate("/");
            })
            .catch(error => {
                alert("Error updating student: " + error);
            });
    }
    useEffect(() => {
        if (id)
            getDetails(id);

    }, [id]);

    return (
        <Container>
            
           <div className='addcust'>
    <Form className='form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className='text-white'>Name</Form.Label> 
        <Form.Control type="text" placeholder="Enter Name" value={enteredcustomerName} onChange={(e)=>setcustomerName(e.target.value)} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder=" Enter Ph No." value={enteredcustomerPhno} onChange={(e)=>setcustomerPhno(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age" value={enteredcustomerAge} onChange={(e)=>setcustomerAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Product Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Name" value={enteredcustomerProduct} onChange={(e)=>setcustomerProduct(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Product Quantity</Form.Label>
        <Form.Control type="text" placeholder="Enter Product Quantity" value={enteredcustomerQuantity} onChange={(e)=>setcustomerQuantity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-white'>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" value={enteredcustomerAddress} onChange={(e)=>setcustomerAddress(e.target.value)} />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className='text-white' label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit} type="submit" className='position'>
        Submit
      </Button>
    </Form>
    </div>
        </Container>
    );
}

export default EditDetails;