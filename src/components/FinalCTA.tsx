import { Zap, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-blue-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDc3RkYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-1 bg-gradient-to-t from-blue-500 via-cyan-500 to-transparent opacity-30"
            style={{
              left: `${10 * (i + 1)}%`,
              height: '100%',
              animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-[200px] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center mb-6">
              <Zap className="w-20 h-20 text-blue-400 animate-pulse" strokeWidth={2.5} />
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase leading-tight">
              A FORÇA QUE ESTAVA DENTRO DE VOCÊ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
                AGORA TEM UM NOME — ANABOLIZE.
              </span>
            </h2>

            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Chegou o momento de atingir o corpo e a performance que você sempre quis.<br />
              <span className="text-blue-400 font-bold">O futuro da sua evolução começa agora.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToPurchase}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-black uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center gap-3"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">QUERO EXPERIMENTAR</span>
              <Zap className="relative w-5 h-5 group-hover:animate-pulse" />
            </button>

            <button className="group px-10 py-5 border-2 border-blue-500 text-blue-400 text-lg font-black uppercase rounded-full transition-all duration-300 hover:bg-blue-500/10 hover:scale-105 flex items-center gap-3">
              <a href="https://vitaminhorse.com.br/produtos/" target='_blank'>
               <span>VER MAIS PRODUTOS</span>
              </a>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">10k+</div>
                <div className="text-sm text-gray-400 uppercase">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">4.9★</div>
                <div className="text-sm text-gray-400 uppercase">Avaliação Média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase">Natural</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-2">30d</div>
                <div className="text-sm text-gray-400 uppercase">Garantia</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-500 text-sm">
              © 2024 Vitamin Horse. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
