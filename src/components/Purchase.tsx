import { ShoppingCart, Shield, Truck, BadgeCheck } from 'lucide-react';
import Foto1 from "../../Assets/Anabolize1.png"

export default function Purchase() {
  return (
    <section id="purchase" className="relative py-24 bg-gradient-to-b from-black via-blue-950/20 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-transparent to-transparent opacity-50 blur-3xl"></div>

                <div className="relative w-full aspect-[3/4]">
                  <div className="absolute -inset-4">
                    <div className="w-full h-full border-2 border-blue-500/30 rounded-full animate-ping opacity-20"></div>
                  </div>

                  <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-blue-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-transparent"></div>

                    <div className="text-center z-10">
                      <img
                        src={Foto1}
                        alt="Anabolize Vitamin Horse"
                        className="absolute inset-0 w-full h-full object-cover object-center z-10"
                      />
                    </div>

                    <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>
                  </div>
                </div>

                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-500/10 rounded-full"
                    style={{
                      width: `${120 + i * 40}%`,
                      height: `${120 + i * 40}%`,
                      animation: `pulse ${4 + i}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full mb-6">
                    <BadgeCheck className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-bold uppercase text-sm">Produto Premium</span>
                  </div>

                  <h3 className="text-4xl font-black text-white mb-2 uppercase">ANABOLIZE</h3>
                  <p className="text-xl text-gray-300 mb-6">Propulsor Hormonal - 60 Tabletes</p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Shield className="w-5 h-5 text-blue-400" />
                      <span>Fórmula cientificamente comprovada</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <BadgeCheck className="w-5 h-5 text-blue-400" />
                      <span>Ingredientes premium de alta pureza</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Truck className="w-5 h-5 text-blue-400" />
                      <span>Entrega rápida e segura</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-black text-white">R$ 137</span>
                      <span className="text-gray-400 text-lg">,90</span>
                    </div>
                    <p className="text-blue-400 text-sm font-semibold">ou 4x de R$ 31,98 sem juros</p>
                  </div>

                  <button className="group w-full relative py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xl font-black uppercase rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center gap-3">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <ShoppingCart className="relative w-6 h-6" />
                    <a href="https://vitaminhorse.com.br/produtos/anabolize-pre-hormonal-estimulante-testo-60-tabletes/"
                    target='_blank'
                    >
                      <span className="relative">COMPRAR AGORA</span>
                    </a>
                    
                  </button>

                  <p className="text-center text-gray-400 text-sm mt-4">
                    Envio rápido e seguro para todo o Brasil
                  </p>

                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-800">
                    <div className="text-center">
                      <div className="text-2xl font-black text-blue-400 mb-1">24h</div>
                      <div className="text-xs text-gray-400 uppercase">Envio Rápido</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-blue-400 mb-1">100%</div>
                      <div className="text-xs text-gray-400 uppercase">Seguro</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-blue-400 mb-1">30d</div>
                      <div className="text-xs text-gray-400 uppercase">Garantia</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
