export default function Sumario() {
  return (
    <section className="bg-white py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#paodequeijo"
            className="bg-[#C29B40] text-[#2D1E17] px-4 py-2 rounded-lg font-bold"
          >
            🧀 Pão de Queijo
          </a>

          <a
            href="#bacon"
            className="bg-[#C29B40] text-[#2D1E17] px-4 py-2 rounded-lg font-bold"
          >
            🥓 Bacon
          </a>

          <a
            href="#batata"
            className="bg-[#C29B40] text-[#2D1E17] px-4 py-2 rounded-lg font-bold"
          >
            🥔 Batata Palha
          </a>

          <a
            href="#contato"
            className="bg-[#2D1E17] text-white px-4 py-2 rounded-lg font-bold"
          >
            📞 Contato
          </a>

        </div>

      </div>
    </section>
  );
}