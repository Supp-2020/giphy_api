import  React  from 'react';   //case sensitive. Careful with
// +
import  { createRoot }  from 'react-dom/client';
//- import  ReactDOM  from 'react-dom';  
import App from './app'

//- ReactDOM.render(<App/>, document.getElementById("root"))

//+ Instead of ReactDom use this for React 18
const container = document.getElementById("root"); 
const root = createRoot(container);               

root.render(<React.StrictMode><App/></React.StrictMode>);