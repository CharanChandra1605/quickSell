import React from 'react';
//import { rgba } from 'polished';
import { FaCircle } from 'react-icons/fa';


function Ticket({ ticket }) {
  const getRandomColor = () => {
    const randomColor = `rgba(${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, 0.09)`;
    return randomColor;
  };
  const ticketStyle = {
    backgroundColor: getRandomColor(),
    padding: '10px', // Adjust other styles as needed
    margin: '7px',
    borderRadius: '8px',
  };

  return (
    
    <div  className="ticket" style={ticketStyle}>
       

      <h3 className='tickettitle' >{ticket.title}</h3>
      
      <div className='feature'>
       
        <p className='Feature'>  <FaCircle className='dot' size={10} /> {`${ticket.tag}` }</p>
      </div> </div>
  );
}

export default Ticket;
