import { X, Check } from 'lucide-react';

const comparisons = [
  {
    feature: 'Resultados comprovados',
    others: false,
    anabolize: true
  },
  {
    feature: 'Ingredientes premium',
    others: false,
    anabolize: true
  },
  {
    feature: 'Fórmula científica',
    others: false,
    anabolize: true
  },
  {
    feature: 'Foco hormonal natural',
    others: false,
    anabolize: true
  },
  {
    feature: 'Dosagem otimizada',
    others: false,
    anabolize: true
  },
  {
    feature: 'Resultados rápidos',
    others: false,
    anabolize: true
  }
];

export default function Comparison() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDc3RkY7c3RvcC1vcGFjaXR5OjAuMSIgLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNzdGRjtzdG9wLW9wYWNpdHk6MCIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-px h-full bg-gradient-to-t from-blue-500 via-transparent to-transparent opacity-10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            O QUE TORNA O ANABOLIZE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">DIFERENTE</span>
          </h2>
          <p className="text-gray-400 text-lg">A escolha dos campeões</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-900/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <X className="w-8 h-8 text-red-500" strokeWidth={3} />
                <h3 className="text-2xl font-black text-white uppercase">Outros Suplementos</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Resultados lentos e inconsistentes</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Fórmulas genéricas e subdosadas</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Ingredientes de baixa qualidade</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Sem foco no eixo hormonal</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Promessas sem comprovação</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>Efeitos inconsistentes</span>
                </li>
              </ul>
            </div>

            <div className="relative bg-gradient-to-br from-blue-900/30 to-black border-2 border-blue-500 rounded-2xl p-8 shadow-2xl shadow-blue-500/20">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <Check className="w-8 h-8 text-blue-400" strokeWidth={3} />
                  <h3 className="text-2xl font-black text-white uppercase">ANABOLIZE</h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-semibold">Resultados reais e comprovados</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-semibold">Ingredientes premium de alta pureza</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-semibold">Fórmula científica otimizada</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-semibold">Foco total no eixo hormonal natural</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-semibold">Testado e aprovado por atletas</span>
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-semibold">Resultados visíveis em semanas</span>
                  </li>
                </ul>

                <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg">
                  <p className="text-center text-blue-400 font-bold uppercase text-sm">
                    A escolha dos campeões
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
