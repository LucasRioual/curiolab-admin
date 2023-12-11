import React, {useEffect, useState} from 'react';
import MainPanel from './components/MainPanel';
import AddPanel from './components/AddPanel';

function App() {


  const [stuff, setStuff] = useState([]);
  const [oneStuff, setOneStuff] = useState([]);

    const getOneStuff = async (id) => {
        try{
          const response = await fetch(`http://localhost:10400/api/stuff/${id}`);
          const data = await response.json();
          console.log(data);
          setOneStuff(data);
        }
        catch(error){
          console.error(error);
        }
      }
  

  const getStuff = async () => {
    try{
      const response = await fetch('http://localhost:10400/api/stuff');
      const data = await response.json();
      setStuff(data);
      console.log(data);
    }
    catch(error){
      console.error(error);
    }
    
  }

  

  useEffect(() => {
    getStuff();
  }, []) ;


  return (
    <div className='flex h-screen '>
      <div className=' w-1/3 p-10 '>
        <AddPanel stuff={oneStuff} />
        
        
      </div>
      <div className='w-2/3 p-10 '>
        <MainPanel getStuff={getStuff} getOneStuff={getOneStuff} listStuff={stuff} />
      </div>
    </div>
  );
}

export default App;
