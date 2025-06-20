import { Link } from 'react-router-dom';
import { Logo, Input } from '../index.js'
import { useSelector } from 'react-redux';

function Header() {
    const isUserLoggedIn = useSelector(state => state.isLoggedIn)

    const navBar = [
        {
            name: 'SignIn',
            slug: '/login',
            isActive: isUserLoggedIn,
        }
    ]

    return (
        <>
            <ul>
                <li>
                    <Logo></Logo>
                </li>
                <li>                    
                    <Input placeholder="Search" className="rounded-4xl w-25"/>
                </li>
                {
                    navBar.map(item => {
                        return item.isActive && <li><Link to={`/${item.slug}`}>{item.name}</Link></li>
                    })
                }                
            </ul>
        </>
    )
}

export default Header;