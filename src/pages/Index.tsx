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
        <header className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/7f912ee6-3d25-4702-b0f9-d9fcdf711374.png" 
              alt="1popularity.com" 
              className="h-24 w-auto mx-auto filter drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight font-['Orbitron'] relative">
            <span className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text animate-pulse">
              GLOW
            </span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text ml-4 neon-text">
              UP
            </span>
            <div className="absolute inset-0 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text blur-lg opacity-50 animate-pulse">
              GLOW UP
            </div>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text">
            Your Social Presence
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text mb-6">
            with 1popularity.com
          </p>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Trusted SMM services. Cheap, fast, and scalable for all platforms.
          </p>
        </header>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12 neon-text">
            ✅ Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: DollarSign, title: 'Competitive Pricing', desc: 'Services from as low as $0.03 / 1K' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Most services start instantly or within ETA' },
              { icon: Shield, title: 'Refill Guarantee', desc: 'On eligible services (up to 30–365 days)' },
              { icon: Plug, title: 'API Support', desc: 'Full integration & 10% API discount for BHW members' },
              { icon: Globe, title: 'Global Reach', desc: 'Targeted followers by region & language' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Ticket system active 18h/day' }
            ].map((feature, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-6 backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 group">
                <feature.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:text-pink-400 transition-colors" />
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Services Section */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12 neon-text">
            🎯 Top Services
          </h3>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                platform: 'Instagram',
                icon: Instagram,
                color: 'from-pink-500 to-purple-500',
                services: [
                  'EU, Spanish, Latin, Arab, Brazilian Followers — From $2.66 / 1K',
                   'Instagram Views — $0.003 / 1K',
                  '365 Days Refill Followers — $1.64 / 1K',
                  'Country-targeted Likes — $0.27 / 1K',
                  'Instant No-Drop Likes — $0.03 / 1K'
                  
                ]
              },
              {
                platform: 'YouTube',
                icon: Youtube,
                color: 'from-red-500 to-red-600',
                services: [
                  'Ads Views (100% Real, Organic) — $1.19 / 1K',
                    'Youtube WatchTime [5 Minutes+ Video] — From $9.75',
                  'Youtube Likes — From $0.08',
                  '	YouTube Subscribers — From $	1.917'
                  
                ]
              },
              {
                platform: 'TikTok',
                icon: MessageCircle,
                color: 'from-black to-pink-500',
                services: [
                  'Global Followers (200K/day) — $1.63 / 1K',
                  'Lifetime Refill Views — $0.001 / 1K'
                ]
              },
              {
                platform: 'Twitter/X',
                icon: Twitter,
                color: 'from-blue-400 to-blue-600',
                services: [
                  'Followers — $8.155 / 1K',
                   'Twitter Retweet — $0.959 / 1K',
                   'Twitter Tweet Views — $0.024 / 1K',
                   'Twitter Likes — $2.501 / 1K',
                  
                ]
              },
              {
                platform: 'Spotify',
                icon: Spotify,
                color: 'from-blue-600 to-blue-800',
                services: [
                  'Spotify Followers — $0.244 / 1K',
                  'Spotify - 𝐅𝐑𝐄𝐄 Plays  — $0.244 / 1K',
                  'Spotify - Plays ~ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌  — $0.641 / 1K',
                   'Spotify - Targeted  Plays — $0.002 / 1K'
                ]
              }
            ].map((platform, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-6 backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center mr-4`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{platform.platform}</h4>
                </div>
                <ul className="space-y-2">
                  {platform.services.map((service, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">• {service}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Refund & Refill Policy */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12 neon-text">
            🔄 Refund & Refill Policy
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/40 border-2 border-purple-500/30 p-8 backdrop-blur-xl mb-6">
              <p className="text-gray-300 text-lg mb-6 text-center">
                At 1Popularity.com, transparency is our promise:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2" /> What We Guarantee
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>✅ Refill Guarantee: If your service drops and includes refill, just open a ticket.</li>
                    <li>✅ Undelivered Orders: If a service fails to start, you'll receive a refund to your account balance.</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                    <XCircle className="w-6 h-6 mr-2" /> No Refunds For
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>❌ No refunds to wallet – Deposits are final</li>
                    <li>❌ Orders placed to private or incorrect accounts</li>
                    <li>❌ Orders mixed with other panels</li>
                    <li>❌ Services marked "No Refill" or "No Guarantee"</li>
                   <li> In the event of a major update to a social network and it affects all servers, you could even lose the server backup and warranty.</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-4">
                <p className="text-red-300 text-center font-semibold">
                  ⚠️ Opening a chargeback will result in immediate account ban and reversal of delivered services.
                </p>
              </div>
              
              <p className="text-yellow-300 text-center font-semibold">
                📌 Reminder: "No Drop" ≠ Guaranteed refill unless stated explicitly.
              </p>
            </Card>
          </div>
        </section>

        {/* BHW Exclusive Offers */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12 neon-text">
            🎁 BHW Exclusive Offers
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: DollarSign, title: '10% API Discount', desc: 'Contact support to activate', color: 'from-green-500 to-emerald-600' },
              { icon: Gift, title: 'Free $1 Test Balance', desc: 'Sign up and comment your username below', color: 'from-purple-500 to-pink-500' },
              { icon: Users, title: 'Bulk Discounts', desc: 'Contact us for private reseller deals', color: 'from-blue-500 to-cyan-500' }
            ].map((offer, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-6 text-center backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110`}>
                  <offer.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{offer.title}</h4>
                <p className="text-gray-300">{offer.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h3 className="text-4xl font-bold text-center text-white mb-12 neon-text">
            🧩 How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your account at 1popularity.com/signup', icon: Users },
              { step: '2', title: 'Add Funds', desc: 'Choose your preferred payment method', icon: DollarSign },
              { step: '3', title: 'Select Service', desc: 'Enter link + quantity for your order', icon: MessageCircle },
              { step: '4', title: 'Watch Results', desc: 'Most services start instantly', icon: Clock }
            ].map((step, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-6 text-center backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 relative">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Instant Delivery',
                emoji: '🚀',
                description: 'Lightning-fast order processing and delivery'
              },
              {
                icon: Headphones,
                title: '24/7 Human Support',
                emoji: '💬',
                description: 'Real human support around the clock'
              },
              {
                icon: Plug,
                title: 'API for Resellers',
                emoji: '🔌',
                description: 'Advanced API for bulk order management'
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-black/40 border-2 border-purple-500/30 p-8 text-center backdrop-blur-xl hover:border-pink-500/50 transition-all duration-300 group">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Platforms Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12 neon-text">
            Supported Platforms
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-500' },
              { icon: Youtube, name: 'YouTube', color: 'from-red-500 to-red-600' },
              { icon: MessageCircle, name: 'TikTok', color: 'from-black to-pink-500' },
              { icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-800' },
              { icon: Twitter, name: 'Twitter', color: 'from-blue-400 to-blue-600' },
              { icon: MessageCircle, name: 'Discord', color: 'from-indigo-500 to-purple-600' },
              { icon: Music, name: 'Spotify', color: 'from-green-500 to-green-600' },
              { icon: MessageCircle, name: 'Twitch', color: 'from-purple-500 to-purple-700' },
              { icon: MessageCircle, name: 'Telegram', color: 'from-blue-500 to-cyan-500' },
              { icon: MessageCircle, name: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
              { icon: MessageCircle, name: 'Threads', color: 'from-black to-gray-700' },
              { icon: Music, name: 'SoundCloud', color: 'from-orange-500 to-orange-600' },
              { icon: MessageCircle, name: 'WhatsApp', color: 'from-green-500 to-green-600' },
              { icon: MessageCircle, name: 'Reddit', color: 'from-orange-600 to-red-600' }
            ].map((platform, index) => (
              <div key={`${platform.name}-${index}`} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-2xl neon-border`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-bold text-sm">{platform.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Banner */}
        <section className="mb-16">
          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-lg opacity-75" />
              <div className="relative bg-black/80 rounded-3xl px-16 py-12 border border-purple-500/50">
                <div className="flex items-center justify-center space-x-6">
                  <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
                  <div>
                    <p className="text-gray-300 text-xl mb-2">From</p>
                    <p className="text-6xl font-black text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text neon-text">
                      $0.001
                    </p>
                    <p className="text-purple-300 text-xl">per 1000 actions</p>
                  </div>
                  <Star className="w-12 h-12 text-yellow-400 animate-pulse delay-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">💳 Payment Methods</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              'Cryptos (BTC, ETH, USDT, BUSD)', 'Payeer', 'Cryptomus', 'Binance', 'KuCoin', 'PayPal',
              'Stripe', 'Coinpal', 'AirTM', 'Uphold', 'Wise', 'Payoneer',
              'Coinbase', 'Perfect Money', 'Credit/Debit Cards', 'WebMoney', 'Cashmaal'
            ].map((payment) => (
              <div key={payment} className="bg-black/40 backdrop-blur-xl px-4 py-3 rounded-xl border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 text-center">
                <span className="text-white font-semibold text-sm">{payment}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Bank transfers available in: Colombia, USA, Australia, China, Europe, United Kingdom
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-8 neon-text">
            📬 Contact Us
          </h3>
          <div className="text-center max-w-2xl mx-auto">
            <Card className="bg-black/40 border-2 border-purple-500/30 p-8 backdrop-blur-xl">
              <div className="space-y-4 text-gray-300">
                <p>🌐 Website: <span className="text-purple-400 font-semibold">https://1popularity.com</span></p>
                <p>📨 Support: Available via ticket system 18h/day</p>
                <p>🛠️ API: Available in your dashboard with documentation</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6 neon-text">
            🌟 Ready to grow your brand or reseller business?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join 1Popularity.com today – Experience quality, speed, and honest service.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white text-2xl px-16 py-8 rounded-2xl font-bold transform transition-all duration-300 hover:scale-105 neon-border border-2 border-purple-500 group shadow-2xl">
            Start Growing Now
            <ArrowRight className="w-8 h-8 ml-3 group-hover:translate-x-2 transition-transform" />
          </Button>
          <p className="text-purple-300 mt-4 text-lg">
            Sign up now and comment your username below to get your test balance!
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-purple-500/30 pt-8">
          <p className="text-gray-400 text-lg">
            © 2025 1popularity.com - SMM PANEL Glow up your digital presence
          </p>
          <p className="text-gray-500 text-sm mt-2">
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
