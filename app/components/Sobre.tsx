export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-[#F2E8D5] py-24"
    >

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <section id="sobre"></section>
          <section id="produtos"></section>

          <span className="text-[#C29B40] uppercase tracking-[0.3em] font-semibold">
            Quem Somos
          </span>

          <h2 className="text-5xl text-[#2D1E17] mt-4 mb-8">
            De Minas, direto para o seu negócio.
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Levamos o melhor da terra mineira para mesas e
            balcões de todo o país. Tradição que se prova, qualidade que se
            sente e parceria que faz o seu comércio crescer.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h3 className="text-2xl font-bold text-[#2D1E17] mb-4">
              Tradição Mineira
            </h3>

            <p className="text-gray-600">
              Produtos selecionados da terra onde o sabor nasce:
              Minas Gerais.
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h3 className="text-2xl font-bold text-[#2D1E17] mb-4">
              Qualidade Selecionada
            </h3>

            <p className="text-gray-600">
              Cada produto passa por critérios rigorosos antes de chegar ao
              seu balcão.
            </p>

          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h3 className="text-2xl font-bold text-[#2D1E17] mb-4">
              Foco em Revenda
            </h3>

            <p className="text-gray-600">
              Pensado para padarias, pizzarias, hamburguerias,
              lanchonetes e revendedores.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}