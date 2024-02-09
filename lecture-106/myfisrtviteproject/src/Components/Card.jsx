import React from 'react';
import '../Components/Card.css';

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6MLT2lpj3M85eFPT2oNNivGYx_saZEww8Q&usqp=CAU" alt="" 
        style={{border: "2px solid black"}} />
       <h1>{props.title}</h1>
       <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Card
