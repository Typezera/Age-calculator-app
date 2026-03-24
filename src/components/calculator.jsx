export function Calculadora() {
  return (
    <div className="bg-gray-100 rounded-lg p-6 w-full">
      <form className="flex gap-4">
        <div className="flex flex-col font-bold">
          <p className="tracking-[3px] text-gray-500 text-[12px] mb-2">DAY</p>
          <input
            className="w-27 outline-none border-1 border-gray-400 rounded-md p-4"
            type="number"
            placeholder="DD"
          />
        </div>
        <div className="flex flex-col font-bold">
          <p className="tracking-[3px] text-gray-500 text-[12px] mb-2">MONTH</p>
          <input
            className="w-27 outline-none border-1 border-gray-400 rounded-md p-4"
            type="number"
            placeholder="MM"
          />
        </div>
        <div className="flex flex-col font-bold">
          <p className="tracking-[3px] text-gray-500 text-[12px] mb-2">YEAR</p>
          <input
            className="w-27 p-4 outline-none border-1 border-gray-400 rounded-md"
            type="number"
            placeholder="YYYY"
          />
        </div>
      </form>
    </div>
  );
}

export default Calculadora;
