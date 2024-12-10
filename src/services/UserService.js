import axios from "axios";
import { useEffect, useState } from "react"

SHIRTAPI = "http://localhost:8080/api/products/by-category?category=Shirt"

TSHIRTAPI = "http://localhost:8080/api/products/by-category?category=T-Shirt"

// const [data, setData] = useState([]);
// useEffect(() => {
//     axios.get('http://localhost:8080/api/products/by-category?category=Shirt')
//         .then(res => setData(res.data.data))
//         .catch(err => console.log(err));
// }, [])


// const [data, setData] = useState([]);
// useEffect(() => {
//     axios.get('http://localhost:8080/api/products/by-category?category=T-Shirt')
//         .then(res => setData(res.data.data))
//         .catch(err => console.log(err));
// }, [])