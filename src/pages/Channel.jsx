import { Header as HeaderComponent,Sidebar as SidebarComponent, Channel as ChannelComponent  } from "../components/index.js"

function Channel() {
    return (
        <div className='w-full h-full'>
            <div className='w-full'>
                <HeaderComponent/>
            </div>
            <div className='flex w-full h-full'>
                <div className='w-60 h-full'>
                    <SidebarComponent/>
                </div>
                <div className='w-full h-full'>
                    <ChannelComponent/>
                </div>                
            </div>
        </div>
    )
}

export default Channel;