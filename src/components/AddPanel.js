import React, {useEffect, useState} from 'react';



const AddPanel = ({stuff}) => {


    const [name, setName] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');

    useEffect(() => {
        if (stuff.titre !== undefined) {
            setName(stuff.titre);
            setDescription(stuff.description);
            setSubtitle(stuff.sousTitre);
            setPrice(stuff.prix);
            setDifficulty(stuff.difficulte);
          }
    },[stuff]);
    


    const createStuff = async () => {
        const response = await fetch('http://localhost:10400/api/stuff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({titre: name, sousTitre: subtitle, prix: price, description: description, difficulte: difficulty})
        })
        const data = await response.json();
        if (response.ok) {
            alert(data.message); 
            console.log(data);
          } else {
            alert(data.error); 
            console.error("Erreur :", data.error);
          }
        }

    const onSubmit = () => {
        console.log(name);
        createStuff();

    }


  return (
    <div className='h-full w-full flex flex-col bg-white rounded-xl'>
          <div className='p-3 bg-slate-600 rounded-t-xl'>
            <p className='text-xl text-white text-center'>Ajouter un produit</p>
          </div>
          <div className=' p-4'>
            <div className='flex p-2'>
              <p className='text-large font-bold'>Nom du produit : </p>
              <input value={name} onChange={(e) => {setName(e.target.value)}} className='mx-4 border-b-2 border-black'></input>
            </div>
            <div className=' flex p-2'>
              <p className='text-large'>Sous titre :</p>
              <input value={subtitle} onChange={(e) => {setSubtitle(e.target.value)}} className='mx-4 border-b-2 border-black'></input>
            </div>
            <div className=' flex p-2'>
              <p className='text-large'>Prix : </p>
              <input value={price} onChange={(e) => {setPrice(e.target.value)}} className='mx-4 border-b-2 border-black w-20'></input>
              <p className='text-large'>€</p>
            </div>
            <div className='p-2'>
              <p className='text-large'>Description : </p>
              <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} className='w-full mt-4 h-20 border-2 border-black p-2 resize-none'></textarea>
            </div>
            <div className=' flex p-2'>
              <p className='text-large'>Difficulté :</p>
              <select value={difficulty} onChange={(e) => {setDifficulty(e.target.value)}} className=" mx-4 w-10 border-2 border-black ">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className='p-2'>
              <p>Ajoutez les images : </p>
              <div className='flex justify-between mt-4'>
                <div className='w-1/5 aspect-square bg-gray-400 cursor-pointer rounded-md'>
                </div>
                <div className='w-1/5 aspect-square bg-gray-400'>
                </div>
                <div className='w-1/5 aspect-square bg-gray-400'>
                </div>
                <div className='w-1/5 aspect-square bg-gray-400'>
                </div>
              </div>
            </div>
          </div>
          <div onClick={onSubmit} className=' bg-customGreen px-10 py-4 self-center rounded-full mt-4 cursor-pointer'>Ajouter</div>
        </div>
  );
};

export default AddPanel;