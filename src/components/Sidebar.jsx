import { Link } from 'react-router-dom'
import { home as homeIcon } from '../assets/icons/home.svg'
import { laptop as channelIcon } from '../assets/icons/laptop.svg'
import { smile as profileIcon } from '../assets/icons/smile.svg'
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
        <div className='flex flex-col m-2 px-4 py-2'>
            {
                navBar.map((item) => (
                    <Link to={item.slug}>
                        <img src={item.icon} className='w-10 h-10'></img><span>{item.name}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar