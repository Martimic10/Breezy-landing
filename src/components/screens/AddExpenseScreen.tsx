export function AddExpenseScreen() {
  const people = [
    { name: "You", amount: "$45.00", active: true },
    { name: "Sarah", amount: "$15.00", active: true },
    { name: "Mike", amount: "$15.00", active: true },
    { name: "Emma", amount: "$15.00", active: true },
  ];

  return (
    <div className="flex h-full flex-col bg-[#f8f8f8]">
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <div className="h-6 w-6 rounded-full bg-black/10" />
        <p className="text-sm font-semibold text-black">Add Expense</p>
        <div className="h-6 w-6" />
      </div>

      <div className="mx-4 mb-4 rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-[10px] font-medium text-black/40 uppercase">
          Description
        </p>
        <p className="mt-1 text-lg font-semibold text-black">Dinner at Nobu</p>
        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-3xl font-bold tracking-tight text-black">
            $60.00
          </span>
        </div>
      </div>

      <div className="mx-4 mb-3">
        <p className="mb-2 text-[10px] font-medium text-black/40 uppercase">
          Split equally
        </p>
        <div className="space-y-2">
          {people.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold ${
                  person.active
                    ? "bg-breezy-green text-white"
                    : "bg-black/5 text-black/30"
                }`}
              >
                {person.name[0]}
              </div>
              <span className="flex-1 text-sm font-medium text-black">
                {person.name}
              </span>
              <span className="text-sm font-semibold text-black/60">
                {person.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-auto mb-6">
        <div className="rounded-2xl bg-breezy-green py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-breezy-green/25">
          Add Expense
        </div>
      </div>
    </div>
  );
}
