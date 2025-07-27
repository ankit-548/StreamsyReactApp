import { Link } from 'react-router-dom'
import homeIcon from '../assets/icons/home.svg'
import channelIcon from '../assets/icons/laptop.svg'
import profileIcon from '../assets/icons/smile.svg'
import historyIcon from '../assets/icons/history.png'
function Sidebar() {
    const navBar = [
        {
            name: 'Home',
            slug: '/',
            icon: homeIcon,
            background: 'bg-blue-300'
        },
        {
            name: 'Channel',
            slug: '/channel',
            icon: channelIcon,
            background: ''
        },
        {
            name: 'Profile',
            slug: '/profile',
            icon: profileIcon,
            background: ''
        },
        {
            name: 'History',
            slug: '/watchHistory',
            icon: historyIcon,
            background: ''
        }
    ]

    return (
        <div className='flex flex-col w-full h-full m-1 px-2 py-2  bg-blue-100 rounded-xl'>
            {
                navBar.map((item) => (
                    <Link className={`flex items-center m-2 px-4 py-2  rounded-xl ${item.background}`} to={item.slug}>
                        <img src={item.icon} className='w-10 h-10 mx-2'></img>
                        <span>{item.name}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar