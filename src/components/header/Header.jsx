import React from 'react'
import { Link } from 'react-router-dom';
import { Logo, Input, Logout } from '../index.js'
import { useSelector } from 'react-redux';

function Header() {
    const isUserLoggedIn = useSelector(state => state.isLoggedIn)

    const navBar = [
        {
            name: 'SignIn',
            slug: '/login',
            isActive: !isUserLoggedIn,
        },
    ]

    return (
        <div className='w-full bg-white m-1 px-4 py-2'>
            <ul className='flex'>
                <li className='w-14 flex-none'>
                    <Logo></Logo>
                </li>
                <li className='w-64 flex-auto'>                    
                    <Input placeholder="Search" className="rounded-4xl w-full bg-gray-50"/>
                </li>
                {
                    navBar.map(item => {
                        return item.isActive && <li className='w-32 flex-none my-2 mx-4'><Link className='rounded-xl px-4 py-2 bg-blue-500 text-white hover:border-black hover:border-2 hover:bg-white hover:text-black' to={`${item.slug}`}>{item.name}</Link></li>
                    })
                }
                {isUserLoggedIn && (<li className='w-32 flex-none mx-4'><Logout/></li>)}
            </ul>
        </div>
    )
}

export default Header;