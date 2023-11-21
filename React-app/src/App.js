import { getRoles } from '@testing-library/react';
import './App.css';
import Table from './Table';
import Table1 from './Table1';
import Greet from './Setstate';
import ClassList from './Classlist';
import List from './component/props-function/list';

function App() {
  const flower=[
    {
      fname:"Snowdrop"
    },
      {
        fname:"peony"
    },
     {
      fname:"Aster"
    },
      {
        fname:"Dasisy"
    },
      {
        fname:"Sunflower"
    }
  ]
    const userDetails=[
      {
        name:"Sneha",
        age:21,
        profession:"Developer"
      },
      {
        name:"aarani",
        age:21,
        profession:"Tester"
      },
      {
        name:"Kaviya",
        age:21,
        profession:"Tester"
      },
      {
        name:"Dhulasi",
        age:20,
        profession:"Developer"
      }
    ]
    
      const playerName=[
        {
        name:"Mani",
        age:21,
        game:"kabadi"
      },
      {
        name:"aarani",
        age:21,
        game:"basekatball"
      },
      {
        name:"Shena",
        age:27,
        game:"batsman"
      },
      {
        name:"kaviya",
        age:20,
        game:"kabadi"
      },
      {
        name:"Ruby",
        age:23,
        game:"criket"
      },
    ]
    const fruit1=[
      {
        fruitName:"Mango",
        cost:28
      },
      {
        fruitName:"Papaya",
        cost:80
      },
      {
        fruitName:"Muskemelon",
        cost:100
      },
      {
        fruitName:"Orange",
        cost:45
      }
    ]
  return (
    <div className="App">
      <List userFlower={flower} />
      <Table userData={userDetails}/>
     <Table1 team={playerName}/>
     <ClassList detail1={fruit1}/>

    <Greet />
    </div>
  );
}

export default App;