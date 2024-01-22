import React from "react";
import config from "../../../utils/config.json";

function Stack() {
  
  return (
    <div>
        <h1 className="my-4 ">cards</h1>
      {
        config.map(config =>{
            const {title ,info}=config
            return(
                <div className="conatiner">
                    <div class="card">
                        
                            <div className="card-body">
                                 <h5 class="card-title">{title}</h5>
                                  <p class="card-text">{info}</p>
                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                                  </div>
                                  </div>


                </div>
            )
        })
      }
    </div>
  );
}

export default Stack;
