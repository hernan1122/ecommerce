import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/Context';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const {count} = useContext(ShoppingCartContext)
  const activeStyle = 'text-sky-500 font-medium'

  const active = ({isActive}) => isActive ? activeStyle : undefined

  return (
    <nav className='w-full fixed top-0 flex justify-between items-center py-6 px-10 text-sm text-white font-light z-10 bg-black'>
      <ul className='flex items-center gap-3'>
        <li className='mr-2 font-bold text-base text-sky-500'>
          <NavLink to={'/'}>ECOMMERCE</NavLink>
        </li>
        <li>
          <NavLink to={'/'} className={active}>All</NavLink>
        </li>
        <li>
          <NavLink to={'/clothes'} className={active}>Clothes</NavLink>
        </li>
        <li>
          <NavLink to={'/electronics'} className={active}>Electronics</NavLink>
        </li>
        <li>
          <NavLink to={'/furnitures'} className={active}>Furnitures</NavLink>
        </li>
        <li>
          <NavLink to={'/toys'} className={active}>Toys</NavLink>
        </li>
        <li>
          <NavLink to={'/others'} className={active}>Others</NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-white/60'>
          axel@ecommerce.com
        </li>
        <li>
          <NavLink to={'/my-orders'} className={active}>My Orders</NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'} className={active}>My Account</NavLink>
        </li>
        <li>
          <NavLink to={'/signin'} className={active}>Sign In</NavLink>
        </li>
        <li>
          🛒 {count}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
