export default function Diferenciais() {
  const itens = [
    {
      titulo: "Produtos Selecionados",
      descricao:
        "Trabalhamos apenas com produtos de qualidade comprovada."
    },

    {
      titulo: "Alta Rotatividade",
      descricao:
        "Itens com grande procura para aumentar suas vendas."
    },

    {
      titulo: "Atendimento Personalizado",
      descricao:
        "Orçamentos e suporte direto pelo WhatsApp."
    },

    {
      titulo: "Entrega Programada",
      descricao:
        "Mais praticidade para o abastecimento do seu negócio."
    },

    {
      titulo: "Ideal para Revenda",
      descricao:
        "Produtos pensados para padarias, mercados e lanchonetes."
    },

    {
      titulo: "Parcerias Duradouras",
      descricao:
        "Relacionamento próximo e confiança em cada pedido."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-[#C29B40] uppercase tracking-[0.2em]">
            Diferenciais
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2D1E17] mt-4">
            Por que escolher a Distribuidora Mineira?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {itens.map((item) => (
            <div
              key={item.titulo}
              className="bg-[#F9F6EF] p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-[#2D1E17] mb-3">
                ✓ {item.titulo}
              </h3>

              <p className="text-gray-600">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}