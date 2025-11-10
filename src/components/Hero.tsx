import { Zap } from 'lucide-react';

import Foto1 from "../../Assets/Anabolize1.png"

export default function Hero() {
  const scrollToPurchase = () => {
    document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-blue-950 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDc3RkYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-20"
            style={{
              height: '100%',
              left: `${12.5 * (i + 1)}%`,
              animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative mt-6 md:mt-8">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <Zap className="relative w-16 h-16 text-blue-400 animate-bounce" strokeWidth={2.5} />
          </div>
        </div>


        <div className="relative mb-12">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-20 blur-2xl animate-pulse"></div>
          <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
            ATIVE SEU POTENCIAL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient">
              ANABÓLICO NATURAL
            </span>
          </h1>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            O <span className="font-bold text-blue-400">ANABOLIZE</span> da Vitamin Horse é um propulsor hormonal desenvolvido para elevar seus níveis de testosterona, aumentar o desempenho físico e acelerar o ganho de massa magra.
          </p>
        </div>

        <div className="relative w-64 h-96 mx-auto mb-12">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-transparent to-transparent opacity-50 blur-2xl animate-pulse"></div>
          <div className="relative h-full flex items-center justify-center">
            <div className="w-48 h-72 bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl shadow-2xl flex items-center justify-center border-2 border-blue-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>

              <img
                src={Foto1}
                alt="Anabolize Vitamin Horse"
                className="relative z-10 w-full h-full object-cover"
              />

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>


        <button
          onClick={scrollToPurchase}
          className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-bold uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative">QUERO O MEU AGORA</span>
          <Zap className="relative w-5 h-5 group-hover:animate-pulse" />
        </button>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
