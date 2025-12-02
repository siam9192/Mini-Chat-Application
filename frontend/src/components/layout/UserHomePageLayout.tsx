

import ChannelPage from '../pages/ChannelPage'
import Header from '../shared/Header'
import Sidebar from '../shared/Sidebar'

function UserHomePageLayout() {
  return (
    <div>
        <Header/>
        <div className=' h-[calc(100vh-64px)] flex  overflow-hidden'>
          <div className='w-[20%]'>
           <Sidebar/>
          </div>

          <div className='grow h-full'>
          <ChannelPage/>
          </div>
        </div>
    </div>
  )
}

export default UserHomePageLayout