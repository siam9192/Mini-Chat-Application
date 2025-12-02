import { useState } from "react";
import AddChannelModal from "../ui/AddChannelModal";

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  lastMessage: {
    content: string;
    at: Date;
  };
}

// Fake data
const fakeChannels: Channel[] = [
  {
    id: "1",
    name: "general",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: { content: "Welcome to the general channel!", at: new Date() },
  },
  {
    id: "2",
    name: "random",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: { content: "Check out this funny meme 😂", at: new Date() },
  },
  {
    id: "3",
    name: "development",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: { content: "Pushed the latest updates to GitHub.", at: new Date() },
  },
  {
    id: "4",
    name: "design",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: { content: "New UI mockups are ready.", at: new Date() },
  },
  {
    id: "5",
    name: "team-updates",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: { content: "Meeting at 3 PM today.", at: new Date() },
  },
];

function Sidebar() {
  const [activeChannelId, setActiveChannelId] = useState<string | null>("1");

  return (
    <aside className="bg-base-200 border-r border-base-300 flex flex-col h-full">
      
      {/* Sidebar Header */}
      <div className="p-4 border-b border-base-300">
        <h2 className="text-lg font-semibold">Your Chats</h2>
      </div>

      {/* Channel List */}
      <div className="flex-1 overflow-y-auto p-2">
        <ul className=" bg-base-200 rounded-box">
          {fakeChannels.map((channel) => (
            <li key={channel.id}>
              <a
                className={`flex items-center gap-3 p-2 rounded hover:bg-base-300 ${
                  activeChannelId === channel.id ? "bg-base-300 font-semibold" : ""
                }`}
                onClick={() => setActiveChannelId(channel.id)}
              >
                <img
                  src={channel.avatar}
                  alt={channel.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span>#{channel.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {channel.lastMessage.content}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Add New Channel */}
      <div className="p-4 border-t border-base-300">
        <AddChannelModal/>
      </div>
   
    </aside>
  );
}

export default Sidebar;
