import { useEffect, useState } from "react";
 import axios from "axios";

import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CustomerService from "./CustomerService";


 
function Customerdata(){
    const[customer, setCustomer] = useState([]);
    // const baseURL = "http://localhost:3000";

    const navigate = useNavigate();

    

    const setCustomerData = () =>{  
       // axios.get(baseURL + "/Customer")
       CustomerService.getCustomer()

        .then((response) =>{
            setCustomer(response.data);
        })
        .catch(error => {
            alert("Error occured while loading data:"+ error)
        });
    }

    useEffect(() =>{
        setCustomerData();
    },[]);

    const removeCustomer = (id) => {
         console.log(id);
        //axios.delete(baseURL + "/Customer/" +id)
        CustomerService.deleteCustomer(id)
        .then((response) => {
          alert("Customer deleted");
          setCustomerData();
          
        })
        .catch(error => {
          alert("error==="+error);
        });
    }

    return(
        <div className="bg">
            <h3 className="head ">Customer Details</h3>



            <table>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>MOBILE-NO</th>
                        <th>AGE</th>
                        <th>PRODUCT-NAME</th>
                        <th>PRODUCT-QUANTITY</th>
                        <th>ADDRESS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer && 
                        customer.map((customer,index) => (
                            <tr>
                                <td>{index+1}</td>
                                
                                <td>{customer.name}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.age}</td>
                                <td>{customer.product}</td>
                                <td>{customer.quantity}</td>
                                <td>{customer.address}</td>
                                <td><button className="but" onClick={()=> navigate ("/edit/"+customer.id)}><FaEdit /></button>
                                    <button onClick={() => removeCustomer(customer.id)} className="but1"><FaTrash /></button>
                                </td>

                            </tr>
                        ))
                    }


                
                </tbody>
            </table>
        </div>
    );
}
export default Customerdata;