var express = require('express')
var app = express()

app.use(express.json())

const roomRecords = [
  // Bedroom records
  [
    { Name: "Bedroom", Temperature: 35.7, Humidity: 40, Lights: "On",  Fan: "Off", AC: "Off", Blinds: "On"  },
    { Name: "Bedroom", Temperature: 30.3, Humidity: 45, Lights: "Off", Fan: "On",  AC: "Off", Blinds: "Off" },
    { Name: "Bedroom", Temperature: 19.8, Humidity: 50, Lights: "On",  Fan: "Off", AC: "On",  Blinds: "On"  },
    { Name: "Bedroom", Temperature: 21.0, Humidity: 42, Lights: "Off", Fan: "Off", AC: "Off", Blinds: "Off" },
    { Name: "Bedroom", Temperature: 23.5, Humidity: 48, Lights: "On",  Fan: "On",  AC: "Off", Blinds: "On"  }
  ],

  // LivingRoom records
  [
    { Name: "LivingRoom", Temperature: 24.2, Humidity: 55, Lights: "On",  Fan: "Off", AC: "On",  Blinds: "Off" },
    { Name: "LivingRoom", Temperature: 25.0, Humidity: 60, Lights: "Off", Fan: "Off", AC: "On",  Blinds: "Off" },
    { Name: "LivingRoom", Temperature: 32.1, Humidity: 58, Lights: "On",  Fan: "On",  AC: "Off", Blinds: "On"  },
    { Name: "LivingRoom", Temperature: 35.7, Humidity: 52, Lights: "Off", Fan: "Off", AC: "Off", Blinds: "Off" },
    { Name: "LivingRoom", Temperature: 24.9, Humidity: 57, Lights: "On",  Fan: "Off", AC: "On",  Blinds: "On"  }
  ],

  // Kitchen records
  [
    { Name: "Kitchen", Temperature: 32.1, Humidity: 65, Lights: "On",  Fan: "On",  AC: "Off", Blinds: "Off" },
    { Name: "Kitchen", Temperature: 27.3, Humidity: 70, Lights: "Off", Fan: "On",  AC: "On",  Blinds: "Off" },
    { Name: "Kitchen", Temperature: 36.7, Humidity: 68, Lights: "On",  Fan: "Off", AC: "Off", Blinds: "On"  },
    { Name: "Kitchen", Temperature: 39.7, Humidity: 66, Lights: "Off", Fan: "On",  AC: "Off", Blinds: "Off" },
    { Name: "Kitchen", Temperature: 28.0, Humidity: 72, Lights: "On",  Fan: "On",  AC: "On",  Blinds: "On"  }
  ]
];

const numRooms = 3;
const numRecordsPerRoom = 5;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get('/',(req,res)=>{
  data = new Array(3);
  for(let i = 0; i<numRooms; i++){
    rand = getRandomInt(numRecordsPerRoom);
    data[i] = roomRecords[i][rand];
  }
  res.send(data);
});

module.exports = app;
