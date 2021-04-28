import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import axios from "axios";

axios.defaults.baseURL="https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"]="Auth Token";
axios.defaults.headers.post["Content-Type"]="application/token";

axios.interceptors.request.use(request=>{
    console.log(request)
    return request;
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
