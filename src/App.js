import React, { useState, useEffect } from 'react';
import Board from './Components/Board.js';
import './App.css';
import quicksell from 'C:/Users/chara/Downloads/React/quicksell/src/Components/quicksell.png';


function App() {
  const [tickets, setTickets] = useState([]);
  const [ users,setusers] = useState([]);
  const [groupBy, setGroupBy] = useState('status') ;
  const [sortOrder, setSortOrder] = useState('priority');

  useEffect(() => {
    // Fetch data from the provided API
    document.title = "QuickSell_KanbanBoard";
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setusers(data.users) ;// Assuming the response has a 'tickets' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const getRandomColor = () => {
    const randomColor = `rgba(${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, ${Math.floor(Math.random() * 200)}, 0.8)`;
    return randomColor;
  };

  
    const [selectedOption] = useState(null);
    const handleButtonClick = (key) => {
      // Perform desired actions based on the selected button
      return setSortOrder(key);
    };
    const handleSelectChange = (event) => {
      setGroupBy(event.target.value);
    };
   

  return (
    <div className="App">
      <div className="controls">
        <div className='buttons'>
       
       <select onChange={handleSelectChange} value = {selectedOption}  >  
      
        <option value ="status"  onClick={() => setGroupBy('status')}>Group by Status </option>
        <option value = "user"  onClick={() => setGroupBy('user')}>Group by User</option>
        <option value = "priority" onClick={(e) => setGroupBy('priority')}>Group by Priority</option>
      </select>
        {selectedOption && (
        <button onClick={() => handleButtonClick(selectedOption)}>
        </button>)}
        </div>
        <img src={quicksell} alt="quicksell" width={50} height={50} />
        <select  onChange={(e) => setSortOrder(e.target.value)}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>  
        </select>
      </div>
      <Board  tickets={tickets} users={users} groupBy={groupBy} sortOrder={sortOrder} backgroundColor={getRandomColor()} />
    </div>
  );
}

export default App;
