export function SettleUpScreen() {
  const methods = [
    { name: "Venmo", color: "bg-[#3D95CE]", initial: "V" },
    { name: "Cash App", color: "bg-[#00D632]", initial: "$" },
    { name: "PayPal", color: "bg-[#003087]", initial: "P" },
    { name: "Zelle", color: "bg-[#6D1ED4]", initial: "Z" },
  ];

  return (
    <div className="flex h-full flex-col bg-[#f8f8f8]">
      <div className="flex items-center justify-between px-5 pt-14 pb-4">
        <div className="h-6 w-6 rounded-full bg-black/10" />
        <p className="text-sm font-semibold text-black">Settle Up</p>
        <div className="h-6 w-6" />
      </div>

      <div className="mx-4 mb-6 rounded-2xl bg-white p-6 text-center shadow-sm">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-breezy-green-muted text-lg font-bold text-breezy-green-dark">
          SC
        </div>
        <p className="text-sm text-black/50">You owe Sarah</p>
        <p className="mt-1 text-4xl font-bold tracking-tight text-black">
          $24.50
        </p>
      </div>

      <div className="mx-4 mb-4">
        <p className="mb-3 text-[10px] font-medium text-black/40 uppercase">
          Pay with
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {methods.map((method) => (
            <div
              key={method.name}
              className="flex items-center gap-2.5 rounded-2xl bg-white p-3.5 shadow-sm"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white ${method.color}`}
              >
                {method.initial}
              </div>
              <span className="text-xs font-semibold text-black">
                {method.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-auto mb-6">
        <div className="rounded-2xl bg-black py-3.5 text-center text-sm font-semibold text-white">
          Record Payment
        </div>
      </div>
    </div>
  );
}
