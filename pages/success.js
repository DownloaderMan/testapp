import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import { useStateContext } from '../context/stateContext';
import { runFireworks } from '../LIB/utils';

const Success = () => {

    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks;

    }, []);
    
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2>Thank You For Shopping</h2>
            <p className='email-msg'>Check Your Email For Conformation</p>
            <p className='description'>
                Email Us at <a className='email' href='mailto:support@example.com'>support@example.com</a>
            </p>
            <Link href='/'>
                <button type='button' width='300px' className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>

    </div>
  )
}

export default Success