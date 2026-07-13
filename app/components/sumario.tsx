export default function Sumario() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Catálogo Rápido
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#paodequeijo" className="bg-[#C29B40] px-4 py-2 rounded">
            Pão de Queijo
          </a>

          <a href="#bacon" className="bg-[#C29B40] px-4 py-2 rounded">
            Bacon
          </a>

          <a href="#batata" className="bg-[#C29B40] px-4 py-2 rounded">
            Batata Palha
          </a>
        </div>
      </div>
    </section>
  );
}