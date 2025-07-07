import { useEffect } from 'react';
import axios from 'axios';


/*
{
  Name : Bedroom
  Temperature : 
  Humidity : 
  Lights :
  Fan : 
  AC :
}

*/

function Card({Name, Temperature, Humidity, Lights, Fan, AC}){
  return(
    <div className='Card'>
      <ul>
        <li><h3>Room: </h3>{Name}</li>
        <li><h3>Temperature: </h3> <p>{Temperature}</p> </li>
        <li ><h3>Humidity: </h3><p>{Humidity}</p></li>
        <li><h3>Lights: </h3><p className='toggle'>{Lights}</p></li>
        <li><h3>Fan: </h3><p className='toggle'>{Fan}</p></li>
        <li><h3>AC: </h3><p className='toggle'>{AC}</p></li>
      </ul>
      {(Temperature>30.0 ) && <p className='Warning'>Warning!!! Temperature is above 30 degrees</p>}
    </div>
  )
}

function App() {
  const [roomsData,setRoomsData] = useState([])
  useEffect(()=>{
    setTimeout(()=>{
      let data = axios.get('http://localhost:3000/')
    },5000)
  },[])
  return (
    <div className='CardList'>

    </div>
  );
}

export default App;
