import React from 'react';
import { addTODb, addToRemove } from '../utilitis/uitilits';

const ShowData = (props) => {
    
    const {name,email,id}=props.data;
    const addCard = id => {
      addTODb(id);

        
      }
      
      const remove = (id) => {
        addToRemove (id)
      }

    
    return (
        <div className='text-blue-600 border-2 text-center mx-7 p-8 rounded-2xl my-5' >
            <h1>Name :{name} </h1>
            <h3>email:{email}</h3>
            <h3>id:{id} </h3>
            <button type="button" onClick={()=>addCard(id)} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Set data</button>
        
            <button type="button" onClick={()=>remove(id)} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">remove data</button>
        </div>
    );
};

export default ShowData;