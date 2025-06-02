
import { Instagram, Youtube, MessageCircle, Twitter, Facebook, Zap, Clock, Headphones, CreditCard, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-black pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center mb-12">
            <img 
              src="/lovable-uploads/1af61087-2190-465e-aaa6-c33e8d7fc4a9.png" 
              alt="Popularity Logo" 
              className="h-16 w-auto mr-4"
            />
          </div>
          
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-white neon-text font-['Orbitron']">
              Grow Your <span className="gradient-text">Popularity</span> Online
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 font-medium">
              with <span className="text-pink-400 font-bold">1popularity.com</span>
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Cheap, fast, and reliable SMM services for all major platforms
            </p>
          </div>
        </header>

        {/* Social Media Icons Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-500' },
              { icon: Youtube, name: 'YouTube', color: 'from-red-500 to-red-600' },
              { icon: MessageCircle, name: 'TikTok', color: 'from-black to-pink-500' },
              { icon: Twitter, name: 'Twitter', color: 'from-blue-400 to-blue-600' },
              { icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-800' }
            ].map((platform) => (
              <div key={platform.name} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-2xl`}>
                  <platform.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-white font-semibold">{platform.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Instant Delivery',
                description: 'Get your orders processed and delivered within minutes'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Round-the-clock customer support for all your needs'
              },
              {
                icon: Users,
                title: 'Reseller API',
                description: 'Advanced API for resellers and bulk order management'
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect border-purple-500/30 p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Banner */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-2xl">
              <div className="bg-black/80 rounded-xl px-12 py-8">
                <div className="flex items-center justify-center space-x-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                  <div>
                    <p className="text-gray-300 text-lg">Starting from</p>
                    <p className="text-4xl font-black text-white neon-text">$0.001</p>
                    <p className="text-purple-300">per 1000</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="container mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Accepted Payment Methods</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            {[
              'Payoneer',
              'Perfect Money', 
              'Coinbase',
              'Credit Card'
            ].map((payment) => (
              <div key={payment} className="glass-effect px-6 py-3 rounded-lg border border-purple-500/30">
                <span className="text-white font-semibold">{payment}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-6 py-16 text-center">
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-12 py-6 rounded-2xl font-bold transform transition-all duration-300 hover:scale-105 neon-border border-purple-500 group"
          >
            Start Now
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 border-t border-purple-500/30">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 1popularity.com - 
              <a href="#" className="text-purple-400 hover:text-purple-300 ml-2 underline">
                Terms & Conditions
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
