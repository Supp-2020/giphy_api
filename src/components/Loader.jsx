import React from "react";

const Loader = () => {
  return(         // fas fa-spinner is type of spinner and its class name %% fa-4x makes it 4 times bigger %% fa-spin makes it spin for animation  
    <div className="loader">    
     <i class="fa fa-spinner fa-4x fa-spin"></i>
    </div>
  )
}

export default Loader