export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2D1E17]/90 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="text-[#C29B40] font-bold">
          DISTRIBUIDORA MINEIRA
        </h2>

        <nav className="flex gap-6 text-[#F2E8D5]">

          <a href="#produtos">
            Produtos
          </a>

          <a href="#contato">
            Contato
          </a>

        </nav>

      </div>

    </header>
  );
}