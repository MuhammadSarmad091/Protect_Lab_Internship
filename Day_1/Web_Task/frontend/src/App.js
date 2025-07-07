import { useEffect, useState } from 'react';
import axios from 'axios';

function Card({Name, Temperature, Humidity, Lights, Fan, AC}){
  return (
    <div className='Card'>
      <ul>
        <li><span>Room: </span>{Name}</li>
        <li><span>Temperature: </span><span>{Temperature}</span></li>
        <li><span>Humidity: </span><span>{Humidity}</span></li>
        <li><span>Lights:</span> <span className='toggle'>{Lights}</span></li>
        <li><span>Fan: </span><span className='toggle'>{Fan}</span></li>
        <li><span>AC: </span><span className='toggle'>{AC}</span></li>
      </ul>
      {(Temperature > 30.0) && <p className='Warning'>Warning!!! Temperature is above 30°C</p>}
    </div>
  );
}

function App() {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setRoomsData(response.data);
      } catch (err) {
        console.error('Failed to load rooms:', err);
      }
    };

    // fetch once immediately
    fetchRooms();

    // then repeat every 5 seconds
    const intervalId = setInterval(fetchRooms, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='CardList'>
      {roomsData.map((room, idx) =>
        <Card
          key={idx}
          Name={room.Name}
          Temperature={room.Temperature}
          Humidity={room.Humidity}
          Lights={room.Lights}
          Fan={room.Fan}
          AC={room.AC}
        />
      )}
    </div>
  );
}

export default App;
