
import { Instagram, Youtube, MessageCircle, Twitter, Facebook, Zap, Headphones, Plug, Star, ArrowRight, Music, Shield, Clock, Globe, Users, DollarSign, CheckCircle, XCircle, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent pointer-events-none" />
      
      {/* Glowing Orbs */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="fixed top-1/2 left-1/2 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl animate-pulse delay-500" />
      
      <div className="relative z-10 container mx-auto px-8 py-12">
        {/* Hero Section */}
        <header className="text-center mb-20">
          <div className="mb-10">
            <img 
              src="/lovable-uploads/7f912ee6-3d25-4702-b0f9-d9fcdf711374.png" 
              alt="1popularity.com" 
              className="h-28 w-auto mx-auto filter drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-['Orbitron'] relative">
            <span className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text animate-pulse">
              🚀 1POPULARITY.COM
            </span>
            <div className="absolute inset-0 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text blur-lg opacity-50 animate-pulse">
              🚀 1POPULARITY.COM
            </div>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 neon-text">
            Panel SMM Premium para Agencias y Revendedores
          </h2>
          <p className="text-lg md:text-xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-8">
            Potencia tu Presencia Social – Al Instante y Económico
          </p>
        </header>

        {/* Key Features Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: DollarSign, title: '💰 Precios Líderes en la Industria', desc: 'Desde solo $0.001 por 1,000 acciones – crece inteligente, no más caro' },
              { icon: Zap, title: '⚡ Entrega Ultra-Rápida', desc: 'La mayoría de servicios inician al instante o en pocos minutos (máx 24h)' },
              { icon: Shield, title: '♻️ Garantía de Reposición', desc: 'Servicios elegibles respaldados por 30–365 días de protección de reposición' },
              { icon: Plug, title: '🔌 API para Revendedores', desc: 'Automatiza pedidos + obtén precios especiales a través del acceso API' },
              { icon: Globe, title: '🌍 Opciones de Segmentación Global', desc: 'Obtén seguidores reales y tráfico por país e idioma (EU, LATAM, Árabe, BR...)' }
            ].map((feature, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-8 backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 group">
                <feature.icon className="w-10 h-10 text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" />
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-16 neon-text">
            🔝 Servicios Populares Incluyen:
          </h3>
          <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {[
              {
                platform: '🎯 Instagram',
                icon: Instagram,
                color: 'from-pink-500 to-purple-500',
                services: [
                  'Seguidores Geo-Localizados (EU, LATAM, BR...) – desde $2.66 / 1K',
                  'Likes Instantáneos (con reposición) – desde $0.33 / 1K',
                  'Visualizaciones – desde $0.003 / 1K'
                ]
              },
              {
                platform: '🎬 YouTube',
                icon: Youtube,
                color: 'from-red-500 to-red-600',
                services: [
                  'Visualizaciones de Ads (100% Orgánicas) – $1.19 / 1K',
                  'Tiempo de Reproducción (5+ min) – desde $9.75',
                  'Suscriptores – desde $1.91'
                ]
              },
              {
                platform: '🎵 TikTok',
                icon: MessageCircle,
                color: 'from-black to-pink-500',
                services: [
                  'Seguidores – $1.63 / 1K',
                  'Visualizaciones (reposición de por vida) – $0.001 / 1K',
                  'Comentarios / Likes / Compartidos'
                ]
              },
              {
                platform: '📘 Facebook y Más',
                icon: Facebook,
                color: 'from-blue-600 to-blue-800',
                services: [
                  'Likes de Página – $2.60 / 1K',
                  'Seguidores – desde $0.75 / 1K',
                  'Visualizaciones de Video – $0.002 / 1K'
                ]
              }
            ].map((platform, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-8 backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mr-5`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{platform.platform}</h4>
                </div>
                <ul className="space-y-3">
                  {platform.services.map((service, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">• {service}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* ForoBeta Exclusive Offers */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-16 neon-text">
            🎁 Beneficios Exclusivos para ForoBeta
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Gift, title: '✅ Saldo del Foro Bonus 5%', desc: 'Saldo del foro tiene bonus del 5% adicional en compras de más de 10$', color: 'from-purple-500 to-pink-500' },
              { icon: Plug, title: '✅ Descuentos API para Revendedores FB', desc: 'Precios especiales para usuarios de API', color: 'from-green-500 to-emerald-600' },
              { icon: Users, title: '✅ Precios al por Mayor bajo pedido', desc: 'Descuentos por volumen disponibles', color: 'from-blue-500 to-cyan-500' }
            ].map((offer, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-8 text-center backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 group">
                <div className={`w-18 h-18 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110`}>
                  <offer.icon className="w-9 h-9 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{offer.title}</h4>
                <p className="text-gray-300 text-sm">{offer.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Refund & Refill Policy */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-16 neon-text">
            🛡️ Política de Reembolso y Refill
          </h3>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-black/40 border-2 border-purple-500/30 p-10 backdrop-blur-xl mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-bold text-green-400 mb-6 flex items-center">
                    <CheckCircle className="w-7 h-7 mr-3" /> Lo que Garantizamos
                  </h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li>✔ En caso que amerite se reembolsará pero al balance dentro de 1popularity</li>
                    <li>✔ Refill en servicios elegibles claramente marcados</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-6 flex items-center">
                    <XCircle className="w-7 h-7 mr-3" /> Limitaciones
                  </h4>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    <li>✖ No aseguramos cuando usted compra en muchos paneles o usa muchos servicios para un mismo enlace ya que los contadores se alteran</li>
                    <li>⚠ En casos de update de la red social podría perder lo invertido</li>
                    <li>⚠ Irregularidades ajenas a nosotros: demoras o pérdidas derivadas de actualizaciones de la plataforma no son motivo de reembolso</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-12">💳 Opciones de Pago</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              'Crypto (BTC, ETH, USDT, BUSD)', 'Binance Pay', 'Payeer', 'Cryptomus', 'Coinpal', 'AirTM',
              'Stripe', 'WebMoney', 'PayPal', 'Tarjetas de Crédito/Débito', 'Wise', 'Payoneer',
              'Cashmaal', 'Coinbase', 'Uphold'
            ].map((payment) => (
              <div key={payment} className="bg-black/40 backdrop-blur-xl px-5 py-4 rounded-xl border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 text-center">
                <span className="text-white font-semibold text-xs">{payment}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Transferencia Bancaria (US, UK, EU, AU, CO, TR...)
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-12 neon-text">
            📬 Contáctanos
          </h3>
          <div className="text-center max-w-3xl mx-auto">
            <Card className="bg-black/40 border-2 border-purple-500/30 p-10 backdrop-blur-xl">
              <div className="space-y-5 text-gray-300 text-sm">
                <p>🌐 Sitio Web: <span className="text-purple-400 font-semibold">https://1popularity.com</span></p>
                <p>📩 Soporte por ticket: 18h/día</p>
                <div className="border-t border-purple-500/30 pt-6 mt-8">
                  <p className="text-white font-semibold mb-4 text-base">Contacto Directo:</p>
                  <div className="space-y-3">
                    <p>✈️ Telegram: <span className="text-blue-400 font-semibold">@popularity1</span></p>
                    <p>📱 WhatsApp (Solo texto): <span className="text-green-400 font-semibold">+57 300 636 1659</span></p>
                    <p>📷 Instagram: <span className="text-pink-400 font-semibold">@1popularityzz</span></p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 neon-text">
            🌟 Comienza a Escalar tu Marca o Negocio de Reventa Hoy
          </h3>
          <p className="text-base text-gray-300 mb-10">
            Únete a cientos de agencias que ya están creciendo con 1Popularity.com
          </p>
          <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white text-lg px-16 py-8 rounded-2xl font-bold transform transition-all duration-300 hover:scale-105 neon-border border-2 border-purple-500 group shadow-2xl">
            Empezar a Crecer Ahora
            <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-purple-500/30 pt-10">
          <p className="text-gray-400 text-base">
            © 2025 1popularity.com - Panel SMM Premium
          </p>
          <p className="text-gray-500 text-sm mt-3">
            <a href="#" className="hover:text-purple-400 transition-colors underline">
              Términos y Condiciones
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
