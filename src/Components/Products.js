import React from 'react'
import Productslist from './Productslist'

function Products ({Data}) {
  return (
    <div className='prod'>
       {Data.map((el,i)=>(
           <Productslist el={el} key={i}/>
       ))}
    </div>
  );
}
 export default Products;
