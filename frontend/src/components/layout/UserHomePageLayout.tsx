
import HomePage from '../pages/HomePage'
import Header from '../shared/Header'
import Sidebar from '../shared/Sidebar'
import SidebarModal from '../ui/SidebarModal'

function UserHomePageLayout() {
  return (
    <div>
        <Header/>
        <div className=' h-[calc(100vh-64px)] XZ
        flex  overflow-hidden'>
          <div className='w-[20%] h-full hidden lg:block'>
           <Sidebar/>
          </div>

          <div className='grow h-full'>
            
          <HomePage/>
          </div>
        </div>
    </div>
  )
}

export default UserHomePageLayout