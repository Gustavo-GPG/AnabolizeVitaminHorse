import { Atom, Shield, Sparkles } from 'lucide-react';

import Foto1 from "../../Assets/Anabolize1.png"

export default function Formula() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#0077FF_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-blue-600/10 border border-blue-500/30 rounded-full">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-bold uppercase text-sm tracking-wider">Tecnologia Avançada</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">
            PODER ATIVADO PELA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">CIÊNCIA</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                A fórmula avançada do <span className="font-bold text-blue-400">ANABOLIZE</span> combina <span className="text-white font-semibold">Zinco, Magnésio, Ácido Fólico, Boro e Vitaminas D3, B3, B6 e B12</span> — ingredientes que atuam diretamente no eixo hormonal, proporcionando resultados reais e seguros.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-500 rounded-r-lg">
                  <Atom className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Fórmula Sinérgica</h4>
                    <p className="text-sm text-gray-400">Ingredientes que trabalham em conjunto para resultados máximos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cyan-900/20 to-transparent border-l-4 border-cyan-500 rounded-r-lg">
                  <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">100% Seguro</h4>
                    <p className="text-sm text-gray-400">Desenvolvido com ingredientes naturais e cientificamente comprovados</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-transparent border border-blue-500/30 rounded-xl">
                  <div className="text-3xl font-black text-blue-400 mb-1">8+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Ingredientes Ativos</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cyan-900/30 to-transparent border border-cyan-500/30 rounded-xl">
                  <div className="text-3xl font-black text-cyan-400 mb-1">100%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Testado</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-transparent to-transparent opacity-50 blur-3xl animate-pulse"></div>

              <div className="relative">
                <div className="absolute -inset-8">
                  <div className="w-full h-full border-2 border-blue-500/30 rounded-full animate-ping opacity-20"></div>
                </div>

                <div className="relative w-64 h-80 mx-auto">
                  <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl shadow-2xl flex items-center justify-center border-2 border-blue-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent"></div>

                    <div className="text-center z-10">
                      <img
                        src={Foto1}
                        alt="Anabolize Vitamin Horse"
                        className="absolute inset-0 w-full h-full object-cover object-center z-10"
                      />
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>
                  </div>
                </div>

                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-blue-500/20 rounded-full"
                    style={{
                      animation: `pulse ${3 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
