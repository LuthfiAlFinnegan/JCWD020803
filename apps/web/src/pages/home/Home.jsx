import { useEffect, useState } from 'react';
import axios from 'axios';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { Button, Input } from '@material-tailwind/react';
// import './Home.css';


function Home() {
const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/sample`,
      );
      setSampleData(data);
    })();
  }, []);

  return (
    <>
     
      <h1 className="font-poppins text-4xl text-main-red">
        Purwadhika Final Project Template using Vite + React
      </h1>
      <h1 className='font-poppins text-4xl text-main-blue'> INI MATERIAL TAILWIND KENAPA </h1>
      <div>
        <h1> Gatau lagi ini ajir knp </h1>
      </div>
      <Button> Button </Button>
      <h3> Test Data </h3>
      {sampleData.map((data, idx) => (
        <div key={idx.toString()}>{data.name}</div>
      ))}
    </>
  );
}

export default Home;
