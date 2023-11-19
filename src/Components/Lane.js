import React from 'react';
import Ticket from './Ticket';

function Lane({ title, tickets,size }) {
  return (
    <div className="lane">
      <div className='status'>
        <h2 className='statusName'>{title}</h2>
        <div className='numberStyle'>{size}</div>
        
     </div>
      <div className="tickets">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Lane;
