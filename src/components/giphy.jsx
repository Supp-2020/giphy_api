import React, {useEffect, useState} from "react";
import axios from "axios";

import Loader from "./Loader";

const Giphy = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false) // used for loading 
    const [isError, setIsError] = useState(false) // when an eroor pops up
    useEffect(()=> {       // tells React that your component needs to do something after render.(Or else it gives a promise)
      const fetchData = async () =>{
        setIsError(false)
        setIsLoading(true)

        try {
          const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "tkVA6x21ZmbeMNtRMwgoC7NVdChuxOPw"
            
          }        
        });

        console.log(results);  // check in the developer console that we are getting the gifs or not
        setData(results.data.data);

        } catch (err) {
          setIsError(true)
          setTimeout(() => setIsError(false), 4000)
        }
        
        setIsLoading(false)

      };

      fetchData()
    }, [])  // []--> dependency array to stop looping

  const renderGifs = () => {
    if(isLoading){
      return <Loader/>
    }
    return data.map(el =>{
      return(
        <div key = {el.id} className="gif">
          <img src = {el.images.fixed_height.url} alt=""/>
        </div>
      )
    })
  }
  
  const renderError = () => {
    if(isError){
      return(
        <div className="alert alert-danger" role="alert">
          Unable to get Gifs, please try again in a few minutes
        </div>
      )
    }
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setIsError(false)
    setIsLoading(true)

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "tkVA6x21ZmbeMNtRMwgoC7NVdChuxOPw",
          q: search
            
          }          
        });
        
        setData(results.data.data);

    } catch (err) {
      setIsError(true)
      setTimeout(() => setIsError(false), 4000)
    }         
      setIsLoading(false)
    }  
  
  return (
  <div className="m-2">
    {renderError()}
    <form className="form-inline justify-content-centre m-2">
      <input value={search} onChange={handleSearchChange} type="text" placeholder="search" className="form-control" />
      <button onClick={handleSubmit}type="submit" className="btn btn-primary mx-2">Go</button>
    </form>
  <div className="container gifs">{renderGifs()}</div>
  </div>
  )
};

export default Giphy;