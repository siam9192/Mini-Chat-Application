import ChannelMessages from "../shared/ChannelMessages"
import ChannelSidebar from "../shared/ChannelSidebar"
import MessageWriteBox from "../ui/MessageWriteBox"



function ChannelPage() {
  return (
     <div className='w-full flex h-full overflow-hidden '>
        <div className="grow relative">
         <ChannelMessages/>
         <div className="absolute w-full -bottom-2 left-0">
            <MessageWriteBox/>
         </div>
        </div>
        <div className="w-[20%]">
            <ChannelSidebar/>
        </div>
    </div>
  )
}

export default ChannelPage