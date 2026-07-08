export default function Footer() {
  return (
    <footer className="bg-[#2D1E17] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          DISTRIBUIDORA MINEIRA
        </h2>

        <p className="text-gray-300 mb-2">
          São José dos Campos - SP
        </p>

        <p className="text-gray-300 mb-8">
          Produtos para revenda e food service.
        </p>

        <a
          href="https://wa.me/5512999999999"
          target="_blank"
          className="inline-block bg-[#C29B40] text-[#2D1E17] px-8 py-4 rounded-lg font-bold hover:opacity-90"
        >
          Solicitar Orçamento
        </a>

        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400">
          © 2026 Distribuidora Mineira
        </div>

      </div>
    </footer>
  );
}