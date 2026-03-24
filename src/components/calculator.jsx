import icone from "../assets/images/icon-arrow.svg";

export function Calculadora() {
  return (
    <div className="bg-gray-100 rounded-lg p-6 w-full shadow-lg">
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
      <div className="flex">
        <hr className="border-gray-400 mt-10 w-95" />
        <button className="rounded-[50PX] bg-amber-900 flex items-center gap-2 p-5 ">
          <img src={icone} alt="Ícone" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}

export default Calculadora;
