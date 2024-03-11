import axios from 'axios';

   const baseURL = "http://localhost:8080/api/v1/customers";
 //const baseURL = "http://localhost:3000/Customer";


class StudentService {
    // CRUD operation

    getCustomer(){
        return axios.get(baseURL);
    }
    
    getCustomerById(id){
        return axios.get(baseURL + '/' + id);
    }
    

    createCustomer(data){
       
        return axios.post(baseURL, data);
    }
    
    updateCustomer(id,customer){
               return axios.put(baseURL+'/'+id, customer);
    }

    deleteCustomer(id){
      
        
        return axios.delete(baseURL + '/' + id);
    }
}

export default new StudentService();