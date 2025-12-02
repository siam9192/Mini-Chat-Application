

function HomePage() {
  const user = {
    name: "Siam Hasan",
    email: "siam@example.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    joinedAt: "Jan 2024",
    status: "Online",

    // newly added metadata
    totalChannels: 8,
    ownChannels: 3,
  };

  const channels = [
    {
      id: 1,
      name: "General Chat",
      description: "Talk about anything with the community!",
      members: 150,
    },
    {
      id: 2,
      name: "Developers Hub",
      description: "Coding discussions, help, tips & more.",
      members: 82,
    },
    {
      id: 3,
      name: "Gaming Zone",
      description: "Esports, tournaments & casual gaming chat.",
      members: 210,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Profile Section */}
      <div className="bg-base-200 p-6 rounded-2xl shadow-md">
        <div className="flex items-center gap-6">
          <img
            src={user.avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full object-cover border-2 border-primary"
          />

          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm opacity-70">{user.email}</p>

            <div className="flex gap-4 mt-3 text-sm">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Joined: {user.joinedAt}
              </span>
              <span className="px-3 py-1 rounded-full bg-success/10 text-success font-medium">
                {user.status}
              </span>
            </div>
          </div>
        </div>

        {/* Metadata Stats */}
        <div className="grid grid-cols-2 mt-6 gap-4">
          <div className="p-4 bg-base-300 rounded-xl text-center">
            <h4 className="text-2xl font-bold">{user.totalChannels}</h4>
            <p className="text-sm opacity-70">Total Channels Joined</p>
          </div>

          <div className="p-4 bg-base-300 rounded-xl text-center">
            <h4 className="text-2xl font-bold">{user.ownChannels}</h4>
            <p className="text-sm opacity-70">Your Own Channels</p>
          </div>
        </div>
      </div>

      {/* Public Channels */}
      <h3 className="text-xl font-bold">Public Channels</h3>

      <div className="grid md:grid-cols-2 gap-6">
        {channels.map((ch) => (
          <div
            key={ch.id}
            className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold">{ch.name}</h4>
            <p className="text-sm opacity-70 mt-1">{ch.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm font-medium opacity-80">
                👥 {ch.members} Members
              </span>

              <button className="btn btn-primary btn-sm">Join</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
