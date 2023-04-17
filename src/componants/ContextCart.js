import React, { useContext } from 'react'
import Items from './Items';
import { CartContext } from './Cart'


const ContextCart = () => {
    const { item, clearCart, totalAmount, totalItem } = useContext(CartContext);

    if (item.length === 0) {
        return (
            <>
                <div className='maindiv'>
                    <header>
                        <div className='continue-shopping'>
                            <span><i className="fa-solid fa-arrow-left"></i></span>
                            <h3 className='heading'>Continue Shopping</h3>
                        </div>
                    </header>

                    <div className='cart-icon'>
                        <span><i class="fa-solid fa-cart-shopping"></i></span>
                        <p className='para'>{totalItem}</p>
                    </div>
                </div>
                <hr />

                <section className='main-cart-section'>
                    <h1>Shopping Cart</h1>
                    <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>
                </section>
            </>
        )
    }
    return (
        <>
             <div className='maindiv'>
                    <header>
                        <div className='continue-shopping'>
                            <span><i className="fa-solid fa-arrow-left"></i></span>
                            <h3 className='heading'>Continue Shopping</h3>
                        </div>
                    </header>

                    <div className='cart-icon'>
                        <span><i class="fa-solid fa-cart-shopping"></i></span>
                        <p className='para'>{totalItem}</p>
                    </div>
                </div>
                <hr />

                <section className='main-cart-section'>
                    <h1>Shopping Cart</h1>
                    <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in shopping cart</p>
                </section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='cart-items'>
                            {
                                item.map((curItem) => {
                                    return <Items key={curItem.id} {...curItem} />
                                })
                            }

                        </div>
                        <hr />
                    </div>
                </div>
            </div>


            <div className='cart-total p-4 mb-4 '>
                <h3>Cart Total : <span>{totalAmount}</span></h3>
                <button className='btn btn-primary mx-2'>ChekOut</button>
                <button className='btn btn-danger' onClick={clearCart}>Clear Cart</button>
            </div>
        </>
    )
}

export default ContextCart