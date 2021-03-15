import React from "react";


const card=({id,name,email})=>
{
    return(
     <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img alt='robo' src={`https://robohash.org/${id}?200x200`}/>
     <h2>{name}</h2>
     <p>{email}</p>
    </div>);
}
export default card;