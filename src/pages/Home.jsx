import React from 'react'
import { Header as HeaderComponent, Sidebar as SidebarComponent } from '../components/index.js'

export default function Home() {
    return (
        <div className='flex w-full h-full'>
            <div className='w-60'>
                <SidebarComponent/>                
            </div>
            <div className='w-full'>
                <HeaderComponent/>
            </div>
        </div>
    )
}