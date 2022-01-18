import React, {useState} from 'react'
import axios from 'axios'
import { Button} from 'react-bootstrap'
import Http from '../axiosConfig'
import $ from 'jquery';

function Serverdata(props) {
    const [data, setData] = useState(props.data);
    console.log(data)
    let addProduct = async () => {

        try {
            const res = await axios.get("http://localhost:8080/api/data");

        console.log(res)
          let response = await axios.put(
            "http://localhost:8080/api/data",data
          );
          console.log("add api response", response);
          if (response.data.error) {
            alert(response.data.message);
          } else {
            // to close the modal
            // props.hideShowAddModal();
            //to fetch the products after adding new product
            // props.fetchProducts();
            alert(response.data.message);
          }
        } catch (err) {
          alert(err.message);
        }
        
      };
    return (
        <div>
            <Button md={12} onClick={()=>{addProduct()}} varient="primary">Download Resume</Button>
        </div>
    )
}

export default Serverdata
