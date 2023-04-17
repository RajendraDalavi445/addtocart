import React, { useContext } from 'react'
import { CartContext } from './Cart';



const Items = ({id,description,title,img,price,quantity}) => {
  const {removeItem, increment, decrement}  = useContext(CartContext);
    return (
        <>
            <div className='items-info'>
                <div className='product-img'>
                    <img className='img1' src={img} alt="img" />
                </div>

                <div className='title'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className='add-minus'>
                    <span><i class="fa-solid fa-minus" onClick={()=>decrement(id)}></i></span>
                    <input type="text" placeholder={quantity} />
                    <span><i class="fa-solid fa-plus" onClick={()=>increment(id)}></i></span>
                </div>

                <div className='price'>
                    <h3>{price}</h3>
                </div>

                <div className='remove-item mx-4 '>
                    <i class="fa-solid fa-trash" onClick={()=>removeItem(id)}></i>
                </div>
            </div>
        </>
    )
}

export default Items;