import './App.css';
import Card from './Card';

function App() {
  const swiggy=[
    {
      image:"./image/a1.jpeg" ,
      branch:"Star Briyani",
      rating:4.3,
      time:27,
      dish:"Briyani",
      location:"Melavakkam"  
     },
     {
      image:"./image/a2.jpeg"  ,
      branch:" MR.Burger",
      rating:4.0,
      time:15,
      dish:"Burgers, Beverages",
      location:"Anna Nagar",  
     },
     {
      image:"./image/a3.jpeg"  ,
      branch:"Mani's Briyani",
      rating:4.3,
      time:31,
      dish:"Briyani, Italian",
      location:"Savadi",  
     },
     {
      image:"./image/a4.jpeg"  ,
      branch:"KFC",
      rating:4.5,
      time:21,
      dish:"South Indian",
      location:"Thuraipakkam (OMR)",  
     },
     {
      image:"./image/a5.jpeg"  ,
      branch:"Astoria Veg",
      rating:4.1,
      time:30,
      dish:"Indian food",
      location:"Kancheepuram",  
     },
     {
      image:"./image/a6.jpeg"  ,
      branch:"Pizza Hunt",
      rating:4.1,
      time:16,
      dish:"Pizza",
      location:"OMR-Perungudi",  
     },
     {
      image:"./image/a7.jpeg"  ,
      branch:"Dominos",
      rating:4.0,
      time:20,
      dish:"Indian, Chinese, Beverages",
      location:"Thuraipakkam",  
     },
     {
      image:"./image/a8.jpeg"  ,
      branch:"Andhra Gunpowder",
      rating:4.2,
      time:22,
      dish:"Andhra, Biryani, South Indian",
      location:"OMR Perungudi",  
     },
     {
      image:"./image/a9.jpeg"  ,
      branch:"Astoria Veg",
      rating:4.3,
      time:21,
      dish:"Andhra, North Indian",
      location:"Pakkam",  
     },
     {
      image:"./image/a10.jpeg"  ,
      branch:"The Royal's Food",
      rating:4.1,
      time:22,
      dish:"Mughlai, North Indian",
      location:"Perungudi",  
     },
  ]
  return (
    <div className="App">
      <Card menu={swiggy}/>
    </div>
  );
}

export default App;