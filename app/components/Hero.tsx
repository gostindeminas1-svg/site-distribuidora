export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">

      <div className="absolute inset-0 bg-[#2D1E17]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        <p className="text-[#C29B40] uppercase tracking-[0.4em] text-sm mb-6 font-semibold">
          TRADIÇÃO MINEIRA
        </p>

        <h1 className="text-[#F2E8D5] text-6xl md:text-8xl font-black leading-none">
          DISTRIBUIDORA
          <br />
          <span className="text-[#C29B40]">
            MINEIRA
          </span>
        </h1>

        <p className="text-[#F2E8D5]/80 text-xl md:text-3xl italic mt-8">
          O sabor de Minas que faz seu cliente voltar
        </p>

      </div>

    </section>
  );
}