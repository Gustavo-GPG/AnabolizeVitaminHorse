import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Santos',
    age: 32,
    rating: 5,
    text: 'Depois de 2 meses usando ANABOLIZE, ganhei 4kg de massa magra e minha disposição no treino mudou completamente. Produto sensacional!',
    result: '+4kg massa magra'
  },
  {
    name: 'Felipe Martins',
    age: 28,
    rating: 5,
    text: 'A diferença na recuperação pós-treino foi imediata. Consigo treinar com mais intensidade e frequência. Recomendo demais!',
    result: 'Recuperação 2x mais rápida'
  },
  {
    name: 'Marcos Oliveira',
    age: 35,
    rating: 5,
    text: 'Além dos ganhos na academia, minha energia no dia a dia melhorou absurdamente. Me sinto 10 anos mais jovem!',
    result: '+35% energia diária'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            RESULTADOS REAIS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">QUEM USA</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="text-5xl font-black text-blue-400">4.9</div>
            <div className="text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-400">Baseado em 1.247 avaliações</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative">
                <Quote className="w-12 h-12 text-blue-500/30 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg mb-6">
                  <div className="text-sm font-bold text-blue-400">{testimonial.result}</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.age} anos</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            Junte-se a <span className="text-blue-400 font-bold">milhares de homens</span> que já transformaram suas vidas
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
    </section>
  );
}
