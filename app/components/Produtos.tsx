import { categorias } from "../data/produtos";

export default function Produtos() {
  return (
    <section id="produtos" className="bg-[#F2E8D5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {categorias.map((categoria) => (
          <div key={categoria.nome} className="mb-24">

            <div className="text-center mb-12">

              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-[2px] bg-[#C29B40]" />

                <h2 className="text-5xl text-[#2D1E17] font-bold">
                  {categoria.nome}
                </h2>

                <div className="w-16 h-[2px] bg-[#C29B40]" />
              </div>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {categoria.descricao}
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {categoria.produtos.map((produto) => {

                const mensagem = `Olá!

Tenho interesse no produto:

${produto.nome}
${produto.peso}

Gostaria de receber mais informações e orçamento.`;

                const whatsappLink = `https://wa.me/5512988669667?text=${encodeURIComponent(
                  mensagem
                )}`;

                return (
                  <div
                    key={`${produto.nome}-${produto.peso}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
                  >

                    <img
                      src={produto.imagem}
                      style={{
                        width: "100%",
                        height:"108px",
                        objectFit: "cover", 
                        borderRadius: "10px"
                      }}

                      />
                    

                    

                    <div className="p-6">

                      <h3 className="text-2xl font-bold text-[#2D1E17]">
                        {produto.nome}
                      </h3>

                      <p className="text-gray-600 mt-2">
                        {produto.peso}
                      </p>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-6 bg-[#C29B40] text-[#2D1E17] py-3 rounded-lg font-bold hover:opacity-90"
                      >
                        Solicitar Orçamento via WhatsApp
                      </a>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}