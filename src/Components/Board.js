import React from 'react';
import Lane from './Lane';

function Board({ tickets, users,groupBy, sortOrder }) {
  const getTickets = (key) => [...new Set(tickets.map((ticket) => ticket[key])) ];
  const priorities={
    0: "No priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent"
  }

  const GroupedTickets = () => {
    switch (groupBy) {
      case 'status':
        return getTickets('status').map((status) => ({
          title: status,
          tickets: tickets.filter((ticket) => ticket.status === status),
          size: tickets.filter((ticket) => ticket.status === status).length
        }));

      case 'user':
        return getTickets('userId').map((user) => ({
          title: users.find(user_list => user_list.id === user).name,
          tickets: tickets.filter((ticket) => ticket.userId === user),
          size: tickets.filter((ticket) => ticket.userId === user).length
        }));

      case 'priority':
        return getTickets('priority').map((priority) => ({
          title: priorities[priority],
          tickets: tickets.filter((ticket) => ticket.priority === priority),
          size: tickets.filter((ticket) => ticket.priority === priority).length
        }));
      default:
        return [];
    }
  };
  
  const sortedTickets = GroupedTickets().map((group) => ({
    ...group,
    tickets: group.tickets.sort((a, b) => {
      if (sortOrder === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    }),
  }));
  

  return (
    <div className="board">
      {sortedTickets.map((group) => (
        <Lane  title={group.title} tickets={group.tickets} size ={group.size}/>
      ))}
    </div>
  );
}

export default Board;
