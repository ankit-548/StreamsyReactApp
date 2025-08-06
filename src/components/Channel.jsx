import { Link } from 'react-router-dom';
import userIcon from '../assets/icons/user.png'
import {Button} from './index.js';

function Channel() {
    return (
        <div className='w-full h-full'>
            <div className='bg-purple-200 rounded-2xl mx-2 flex items-center justify-center w-full h-50'>
                <img className='w-20 h-20' src={userIcon}></img>
            </div>
            <div>
                <Link className='rounded-xl px-4 py-2 bg-blue-500 text-white hover:border-black hover:border-2 hover:bg-white hover:text-black' to='/upload'>Upload video</Link>
            </div>
        </div>
    )
}

export default Channel;