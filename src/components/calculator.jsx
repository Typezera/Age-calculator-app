import { useState } from "react";
import icone from "../assets/images/icon-arrow.svg";

export function Calculadora() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [idade, setIdade] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clickou");
    calcularIdade();
  };

  const calcularIdade = () => {
    const hoje = new Date();
    const nascimento = new Date(year, month - 1, day);

    let years = hoje.getFullYear() - nascimento.getFullYear();
    let months = hoje.getMonth() - nascimento.getMonth();
    let days = hoje.getDay() - nascimento.getDay();

    setYear("");
    setMonth("");
    setDay("");

    if (days < 0) {
      months--;
      days += 30;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setIdade({ years, months, days });
  };

  return (
    <div className="bg-gray-100 rounded-lg p-6 w-full shadow-lg">
      <form onSubmit={handleSubmit} id="envio-form" className="flex gap-4">
        <div className="flex flex-col font-bold">
          <p className="tracking-[3px] text-gray-500 text-[12px] mb-2">DAY</p>
          <input
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-27 outline-none border-1 border-gray-400 rounded-md p-4"
            type="number"
            placeholder="DD"
          />
        </div>
        <div className="flex flex-col font-bold">
          <p className="tracking-[3px] text-gray-500 text-[12px] mb-2">MONTH</p>
          <input
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-27 outline-none border-1 border-gray-400 rounded-md p-4"
            type="number"
            placeholder="MM"
          />
        </div>
        <div className="flex flex-col font-bold">
          <p className="tracking-[3px] text-gray-500 text-[12px] mb-2">YEAR</p>
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-27 p-4 outline-none border-1 border-gray-400 rounded-md"
            type="number"
            placeholder="YYYY"
          />
        </div>
      </form>
      <div className="flex">
        <hr className="border-gray-400 mt-10 w-95" />
        <button
          form="envio-form"
          className="rounded-[50PX] bg-amber-900 flex items-center gap-2 p-5 cursor-pointer"
        >
          <img src={icone} alt="Ícone" className="w-10 h-10" />
        </button>
      </div>
      <div>
        <div className="flex">
          <span className="text-amber-900 font-bold text-[60px]">
            {idade.years || "--"}
          </span>
          <h1 className="font-bold text-[60px]">years</h1>
        </div>
        <div className="flex">
          <span className="text-amber-900 font-bold text-[60px]">
            {idade.months || "--"}
          </span>
          <h1 className="font-bold text-[60px]">months</h1>
        </div>
        <div className="flex">
          <span className="text-amber-900 font-bold text-[60px]">
            {idade.days || "--"}
          </span>
          <h1 className="font-bold text-[60px]">days</h1>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;
