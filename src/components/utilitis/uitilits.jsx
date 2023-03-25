 const addTODb = id => {
   let shoppingCard;
   //get
   const storeCard =localStorage.getItem('shopping-card');
   if(storeCard){
      shoppingCard = JSON.parse(storeCard);

   }
   else{
      shoppingCard={};

   }
   
//add
    const quentity = shoppingCard[id];
    if(quentity){
      const newQuenti = quentity + 1;
      shoppingCard[id]= newQuenti;
    }
    else{
      shoppingCard[id] = 1;
    }
    localStorage.setItem('shopping-card',JSON.stringify(shoppingCard));


 }

  const addToRemove = (id) => {
     const storecard = localStorage.getItem('shopping-card');
     if(storecard){
      const shoppingCard= JSON.parse(storecard)
      if(id in shoppingCard){
         delete shoppingCard[id];
         localStorage.setItem('shopping-card',JSON.stringify(shoppingCard));

      }

     }
     
  }


 export {
   addTODb,
   addToRemove 
}