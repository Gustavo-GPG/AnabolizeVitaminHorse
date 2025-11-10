import { TrendingUp, Dumbbell, Zap, Heart, Activity, Brain } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Estimula a produção natural de testosterona',
    description: 'Ativa o eixo hormonal para níveis otimizados'
  },
  {
    icon: Dumbbell,
    title: 'Aumenta força e massa muscular',
    description: 'Resultados visíveis no ganho de massa magra'
  },
  {
    icon: Zap,
    title: 'Melhora a recuperação pós-treino',
    description: 'Reduz o tempo de recuperação muscular'
  },
  {
    icon: Heart,
    title: 'Aumenta libido e vitalidade',
    description: 'Mais energia e disposição no dia a dia'
  },
  {
    icon: Activity,
    title: 'Regula o equilíbrio hormonal',
    description: 'Mantém seus hormônios em perfeita harmonia'
  },
  {
    icon: Brain,
    title: 'Reduz o cansaço e melhora o foco mental',
    description: 'Clareza mental e concentração elevada'
  }
];

export default function Benefits() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5"></div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            POR QUE ESCOLHER O <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ANABOLIZE?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-blue-900/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              <div className="relative">
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
                  <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight leading-tight">
                  {benefit.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
}
