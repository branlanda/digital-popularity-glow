
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
          
          <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight font-['Orbitron'] relative">
            <span className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text animate-pulse">
              🚀 1POPULARITY.COM
            </span>
            <div className="absolute inset-0 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text blur-lg opacity-50 animate-pulse">
              🚀 1POPULARITY.COM
            </div>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Premium SMM Panel for Agencies & Resellers
          </h2>
          <p className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-8">
            Boost Your Social Presence – Instantly & Affordably
          </p>
        </header>

        {/* Key Features Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: DollarSign, title: '💰 Industry-Leading Prices', desc: 'From just $0.001 per 1,000 actions – grow smarter, not costlier' },
              { icon: Zap, title: '⚡ Ultra-Fast Delivery', desc: 'Most services start instantly or within a few minutes (max 24h ETA)' },
              { icon: Shield, title: '♻️ Refill Guarantee', desc: 'Eligible services backed by 30–365 days refill protection' },
              { icon: Plug, title: '🔌 API for Resellers', desc: 'Automate orders + get special pricing tiers via API access' },
              { icon: Globe, title: '🌍 Global Targeting Options', desc: 'Get real followers & traffic by country and language (EU, LATAM, Arab, BR...)' }
            ].map((feature, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-8 backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 group">
                <feature.icon className="w-10 h-10 text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" />
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-base">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 neon-text">
            🔝 Popular Services Include:
          </h3>
          <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {[
              {
                platform: '🎯 Instagram',
                icon: Instagram,
                color: 'from-pink-500 to-purple-500',
                services: [
                  'Geo-Targeted Followers (EU, LATAM, BR...) – from $2.66 / 1K',
                  'Instant Likes (with refill) – from $0.33 / 1K',
                  'Views – from $0.003 / 1K'
                ]
              },
              {
                platform: '🎬 YouTube',
                icon: Youtube,
                color: 'from-red-500 to-red-600',
                services: [
                  'Ads Views (100% Organic) – $1.19 / 1K',
                  'Watch-Time (5+ min) – from $9.75',
                  'Subscribers – from $1.91'
                ]
              },
              {
                platform: '🎵 TikTok',
                icon: MessageCircle,
                color: 'from-black to-pink-500',
                services: [
                  'Followers – $1.63 / 1K',
                  'Views (lifetime refill) – $0.001 / 1K',
                  'Comments / Likes / Shares'
                ]
              },
              {
                platform: '📘 Facebook & More',
                icon: Facebook,
                color: 'from-blue-600 to-blue-800',
                services: [
                  'Page Likes – $2.60 / 1K',
                  'Followers – from $0.75 / 1K',
                  'Video Views – $0.002 / 1K'
                ]
              }
            ].map((platform, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-8 backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mr-5`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{platform.platform}</h4>
                </div>
                <ul className="space-y-3">
                  {platform.services.map((service, idx) => (
                    <li key={idx} className="text-gray-300 text-base">• {service}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* BHW Exclusive Offers */}
        <section className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 neon-text">
            🎁 Exclusive BHW Perks
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Gift, title: '✅ $1 Test Balance', desc: 'Just register & comment your username', color: 'from-purple-500 to-pink-500' },
              { icon: Plug, title: '✅ API Discounts for BHW Resellers', desc: 'Special pricing tiers for API users', color: 'from-green-500 to-emerald-600' },
              { icon: Users, title: '✅ Bulk Pricing on request', desc: 'Volume discounts available', color: 'from-blue-500 to-cyan-500' }
            ].map((offer, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-8 text-center backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 group">
                <div className={`w-18 h-18 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110`}>
                  <offer.icon className="w-9 h-9 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{offer.title}</h4>
                <p className="text-gray-300 text-base">{offer.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Refund & Refill Policy */}
        <section className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 neon-text">
            🛡️ Refund & Refill Policy
          </h3>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-black/40 border-2 border-purple-500/30 p-10 backdrop-blur-xl mb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-green-400 mb-6 flex items-center">
                    <CheckCircle className="w-7 h-7 mr-3" /> What We Guarantee
                  </h4>
                  <ul className="space-y-3 text-gray-300 text-base">
                    <li>✔ 100% refund to balance for undelivered orders</li>
                    <li>✔ Refill on eligible services clearly labeled</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-6 flex items-center">
                    <XCircle className="w-7 h-7 mr-3" /> Limitations
                  </h4>
                  <ul className="space-y-3 text-gray-300 text-base">
                    <li>✖ No refunds on external wallets or mixed-panel orders</li>
                    <li>⚠ Chargebacks = permanent ban</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">💳 Payment Options</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              'Crypto (BTC, ETH, USDT, BUSD)', 'Binance Pay', 'Payeer', 'Cryptomus', 'Coinpal', 'AirTM',
              'Stripe', 'WebMoney', 'PayPal', 'Credit/Debit Cards', 'Wise', 'Payoneer',
              'Cashmaal', 'Coinbase', 'Uphold'
            ].map((payment) => (
              <div key={payment} className="bg-black/40 backdrop-blur-xl px-5 py-4 rounded-xl border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 text-center">
                <span className="text-white font-semibold text-sm">{payment}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-base">
              Bank Transfer (US, UK, EU, AU, CO, TR...)
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12 neon-text">
            📬 Contact Us
          </h3>
          <div className="text-center max-w-3xl mx-auto">
            <Card className="bg-black/40 border-2 border-purple-500/30 p-10 backdrop-blur-xl">
              <div className="space-y-5 text-gray-300 text-base">
                <p>🌐 Website: <span className="text-purple-400 font-semibold">https://1popularity.com</span></p>
                <p>📩 Support via ticket: 18h/day</p>
                <div className="border-t border-purple-500/30 pt-6 mt-8">
                  <p className="text-white font-semibold mb-4 text-lg">Direct Contact:</p>
                  <div className="space-y-3">
                    <p>✈️ Telegram: <span className="text-blue-400 font-semibold">@popularity1</span></p>
                    <p>📱 WhatsApp (Text only): <span className="text-green-400 font-semibold">+57 300 636 1659</span></p>
                    <p>📷 Instagram: <span className="text-pink-400 font-semibold">@1popularityzz</span></p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 neon-text">
            🌟 Start Scaling Your Brand or Reseller Business Today
          </h3>
          <p className="text-lg text-gray-300 mb-10">
            Join hundreds of agencies already growing with 1Popularity.com
          </p>
          <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white text-xl px-16 py-8 rounded-2xl font-bold transform transition-all duration-300 hover:scale-105 neon-border border-2 border-purple-500 group shadow-2xl">
            Start Growing Now
            <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform" />
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-purple-500/30 pt-10">
          <p className="text-gray-400 text-lg">
            © 2025 1popularity.com - Premium SMM Panel
          </p>
          <p className="text-gray-500 text-base mt-3">
            <a href="#" className="hover:text-purple-400 transition-colors underline">
              Terms & Conditions
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
