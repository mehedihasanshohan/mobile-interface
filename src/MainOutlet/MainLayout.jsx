import React, { useEffect, useState } from 'react'
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router';
import HomeMenu from './../components/HomeMenu';
import Keypad from '../components/Keypad';
import Logo from '../components/Logo';

const MainLayout = () => {

   const [battery, setBattery] = useState(6);
   const [userName, setUserName] = useState('Mehedi Hasan SHohan');


  useEffect(() => {
    const interval = setInterval(() => {
      setBattery(prev => (prev > 0 ? prev - 1 : 0)); // 0% theke kom hobe na
    }, 5000); // 5 sec por por 1% charge kome jabe

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full max-w-xs mx-auto mt-8'>
      <div>
        <Logo></Logo>
        <Navbar battery={battery}></Navbar>
        <Outlet context={{ userName, setUserName , battery, setBattery}}></Outlet>
        <HomeMenu></HomeMenu>
      </div>
      <Keypad></Keypad>
    </div>
  )
}

export default MainLayout