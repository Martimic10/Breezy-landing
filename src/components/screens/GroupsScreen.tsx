export function GroupsScreen() {
  const groups = [
    { name: "Ski Trip", emoji: "⛷️", balance: "+$42.50", color: "bg-blue-50" },
    { name: "Roommates", emoji: "🏠", balance: "-$18.00", color: "bg-orange-50" },
    { name: "Dinner Club", emoji: "🍽️", balance: "$0.00", color: "bg-purple-50" },
    { name: "Weekend Golf", emoji: "⛳", balance: "+$125.00", color: "bg-green-50" },
  ];

  return (
    <div className="flex h-full flex-col bg-[#f8f8f8]">
      <div className="px-5 pt-14 pb-4">
        <p className="text-[10px] font-medium tracking-wide text-black/40 uppercase">
          Groups
        </p>
        <h2 className="mt-1 text-xl font-bold tracking-tight text-black">
          Your Groups
        </h2>
      </div>

      <div className="flex-1 space-y-2.5 overflow-hidden px-4 pb-4">
        {groups.map((group) => (
          <div
            key={group.name}
            className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${group.color}`}
            >
              {group.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-semibold text-black">
                {group.name}
              </p>
              <p className="text-[11px] text-black/40">4 members</p>
            </div>
            <p
              className={`text-sm font-semibold ${
                group.balance.startsWith("+")
                  ? "text-breezy-green"
                  : group.balance.startsWith("-")
                    ? "text-red-500"
                    : "text-black/40"
              }`}
            >
              {group.balance}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-black/5 bg-white px-4 py-3">
        <div className="flex justify-around">
          {["Groups", "Friends", "Activity", "You"].map((tab, i) => (
            <div key={tab} className="flex flex-col items-center gap-0.5">
              <div
                className={`h-5 w-5 rounded-md ${
                  i === 0 ? "bg-breezy-green" : "bg-black/10"
                }`}
              />
              <span
                className={`text-[9px] font-medium ${
                  i === 0 ? "text-breezy-green" : "text-black/30"
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
