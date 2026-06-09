export function FriendsScreen() {
  const friends = [
    { name: "Sarah Chen", balance: "owes you $24.50", avatar: "SC", positive: true },
    { name: "Mike Johnson", balance: "you owe $18.00", avatar: "MJ", positive: false },
    { name: "Emma Wilson", balance: "settled up", avatar: "EW", positive: null },
    { name: "Alex Rivera", balance: "owes you $56.25", avatar: "AR", positive: true },
  ];

  return (
    <div className="flex h-full flex-col bg-[#f8f8f8]">
      <div className="px-5 pt-14 pb-4">
        <p className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
          Friends
        </p>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-black">
          Your Friends
        </h2>
      </div>

      <div className="mx-4 mb-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-sm">
        <div className="h-4 w-4 rounded-full bg-black/10" />
        <span className="text-xs text-black/30">Search friends...</span>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden px-4 pb-4">
        {friends.map((friend) => (
          <div
            key={friend.name}
            className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-breezy-green-muted text-xs font-bold text-breezy-green-dark">
              {friend.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-semibold text-black">
                {friend.name}
              </p>
              <p
                className={`text-[11px] ${
                  friend.positive === true
                    ? "text-breezy-green"
                    : friend.positive === false
                      ? "text-red-500"
                      : "text-black/40"
                }`}
              >
                {friend.balance}
              </p>
            </div>
            <div className="text-[10px] text-black/20">2 groups</div>
          </div>
        ))}
      </div>

      <div className="border-t border-black/5 bg-white px-4 py-3">
        <div className="flex justify-around">
          {["Groups", "Friends", "Activity", "You"].map((tab, i) => (
            <div key={tab} className="flex flex-col items-center gap-0.5">
              <div
                className={`h-5 w-5 rounded-md ${
                  i === 1 ? "bg-breezy-green" : "bg-black/10"
                }`}
              />
              <span
                className={`text-[9px] font-medium ${
                  i === 1 ? "text-breezy-green" : "text-black/30"
                }`}
              >
                {tab}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
