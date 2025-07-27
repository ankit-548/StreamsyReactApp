import userIcon from '../assets/icons/user.png'
import {Button} from './index.js';

function Channel() {
    return (
        <div className='w-full h-full'>
            <div className='bg-purple-200 rounded-2xl mx-2 flex items-center justify-center w-full h-50'>
                <img className='w-20 h-20' src={userIcon}></img>
            </div>
            <div>
                <Button>upload video</Button>
            </div>
        </div>
    )
}

export default Channel;