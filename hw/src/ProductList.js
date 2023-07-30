import React from 'react'

import Product from './Product';


function renderList(list,UpdateBtn) {
    
    return list.map((item) => {
        if (item != null) {
          return <Product produc={item} UpdateBtn={UpdateBtn}></Product>;
        }
      });
      
}

export default function ProductList({Productlist,UpdateBtn}) {

    return (
        <div className='ArtLists p-0 m-0'>
            {renderList(Productlist,UpdateBtn)}
        </div>
    )
}
