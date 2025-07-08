import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function Card({Name, Temperature, Humidity, Lights, Fan, AC, Blinds}){
  const colorClass = (val)=>{ return (val==='Off') ? 'Red' : 'Green' };
  return (
    <div className='Card'>
      <ul>
        <li><span className='heading'>Room: </span> <span className='roomName'>{Name}</span></li>
        <li><span className='heading'>Temperature: </span><span>{Temperature}&deg;C</span></li>
        <li><span className='heading'>Humidity: </span><span>{Humidity}</span></li>
        <li><span className='heading'>Lights:</span> <span className={colorClass(Lights)}>{Lights}</span></li>
        <li><span className='heading'>Fan: </span><span className={colorClass(Fan)}>{Fan}</span></li>
        <li><span className='heading'>AC: </span><span className={colorClass(AC)}>{AC}</span></li>
        <li><span className='heading'>Blinds: </span><span className={colorClass(Blinds)}>{Blinds}</span></li>
      </ul>
      {(Temperature > 30.0) && <p className='Red Warning'>Warning!!! Temperature is above 30°C</p>}
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
          Blinds={room.Blinds}
        />
      )}
    </div>
  );
}

export default App;
