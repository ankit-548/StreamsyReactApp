import { Link } from 'react-router-dom'
import homeIcon from '../assets/icons/home.svg'
import channelIcon from '../assets/icons/laptop.svg'
import profileIcon from '../assets/icons/smile.svg'
function Sidebar() {
    const navBar = [
        {
            name: 'Home',
            slug: '/',
            icon: homeIcon,
        },
        {
            name: 'Channel',
            slug: '/channel',
            icon: channelIcon,
        },
        {
            name: 'Profile',
            slug: '/profile',
            icon: profileIcon,
        },
    ]

    return (
        <div className='flex flex-col w-full h-full m-1 px-4 py-2  bg-blue-100 rounded-xl'>
            {
                navBar.map((item) => (
                    <Link className='flex items-center m-2 px-4 py-2 hover:bg-blue-200 rounded-xl' to={item.slug}>
                        <img src={item.icon} className='w-10 h-10 mx-2'></img>
                        <span>{item.name}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar