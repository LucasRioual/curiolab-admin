import React, { useState } from 'react';


const MainPanel = (props) => {

    

    const itemClick = (id) => {
        props.getOneStuff(id);
        console.log(id);
        
    }

    const deleteItem = async (id) => {
        const response = await fetch(`http://localhost:10400/api/stuff/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        })
        const data = await response.json();
        if (response.ok) {
            
            console.log(data);
          } else {
 
            console.error("Erreur :", data.error);
          }
    }

    const deleteClick = (id) => {
        deleteItem(id);
        props.getStuff();

    }

    const ListStuff = () => {
    return (
      <div className='flex flex-wrap p-4 '>
        {props.listStuff.map((item, index) => (
          <div onClick={() => itemClick(item._id)} key={index} className='w-1/4 bg-slate-600  m-4 aspect-square border-2 border-black cursor-pointer rounded-lg flex flex-col justify-between items-center py-2 px-12 hover:scale-110 duration-75'>
            <p className='text-white' >{item.titre}</p>
            <div className='w-full aspect-square bg-gray-200'>
            </div>
            <div onClick={()=>{deleteClick(item._id)}} className='bg-red-500 px-5 py-2 self-center rounded-full text-white  cursor-pointer'>Supprimer</div>
          </div>
        ))}
      </div>
    )
    }


  return (
    <div className='h-full w-full bg-white rounded-xl'>

        <div className='p-3 bg-slate-600 rounded-t-xl'>
          <p className='text-xl text-white text-center '>Listes des produits</p>
        </div>
        <ListStuff /> 
      </div>
  );
};

export default MainPanel;