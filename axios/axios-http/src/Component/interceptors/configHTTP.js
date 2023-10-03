

import axios from 'axios';


/**
 *Axios interceptors are a feature within Axios that allow you to intercept and modify HTTP requests and responses globally, across your application.
 * They are especially useful for tasks such as adding authentication headers, handling errors, or logging requests and responses consistently throughout your application.
 * Axios provides two types of interceptors: request interceptors and response interceptors.
 */

//Request Interceptors:

/**
 * Request interceptors are functions that run before an HTTP request is sent to the server.
 * You can use request interceptors to perform actions like adding headers, logging the request, or modifying the request data. 
 */
 

  const authFetch=axios.create();

  authFetch.interceptors.request.use(
  function(config){

    config.url ='http://localhost:8080/api/lecture-byId/505';
    config.headers.Accept='application/json';
    config.data=new Date();
    config.method='GET'
    
    return config;
}
,
function(error){
  return Promise.reject(error);
});

export default authFetch;


// Response Interceptors:
/*
 * Response interceptors are functions that run after a response is received from the server but before it's passed to  calling code.    
 *You can use response interceptors to handle common tasks like error handling, logging responses, or transforming the response data. 
*/

/**
 *authFetch interceptors.response.use(function (response) {
  // Log the response or modify the response data
  console.log('Response:', response.data);
  return response;
}, function (error) {
  // Handle errors globally
  console.error('Error:', error);
  return Promise.reject(error);
});
 */