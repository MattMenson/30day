import React, { useState } from 'react';
import { Heart, Book, PenTool, Users, Send, Star, BookOpen, ShoppingCart } from 'lucide-react';

function App() {
  const handleCheckout = () => {
    // Replace this URL with your actual checkout URL
    window.location.href = "https://your-checkout-url.com";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">30 Days of Prayer</h1>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Draw Closer to Christ</h2>
          <p className="text-xl md:text-2xl mb-8">Renew your faith and find peace in Christ</p>
          <a href="#ebook" className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors">
            Get the guide
          </a>
        </div>
      </header>

      {/* E-book Section */}
      <section id="ebook" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg p-1">
                <div className="bg-white rounded-lg p-6">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
                    alt="30 Days of Prayer E-book"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-rose-500 text-white px-6 py-3 rounded-full transform rotate-12 shadow-lg">
                <span className="text-2xl font-bold">$8,99</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Prayer Life</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                  <p>200+ pages of powerful prayers and reflections</p>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                  <p>30 daily devotionals with practical applications</p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                  <p>Personal reflection journal prompts</p>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-rose-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-600 transition-colors flex items-center gap-2 text-lg"
              >
                <ShoppingCart className="w-6 h-6" />
                Get the guide - $9,97
              </button>
              <p className="text-sm text-slate-600 mt-4">
                ✨ Instant digital delivery • PDF format • Money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Transform Your Spiritual Life</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4 text-rose-500" />
              <h3 className="text-xl font-semibold mb-2">Deep Connection</h3>
              <p className="text-slate-600">Develop genuine intimacy with Christ through daily prayers</p>
            </div>
            <div className="text-center p-6">
              <Book className="w-12 h-12 mx-auto mb-4 text-rose-500" />
              <h3 className="text-xl font-semibold mb-2">Biblical Reflections</h3>
              <p className="text-slate-600">Dive into the eternal truths of God's Word</p>
            </div>
            <div className="text-center p-6">
              <PenTool className="w-12 h-12 mx-auto mb-4 text-rose-500" />
              <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
              <p className="text-slate-600">Turn knowledge into action in your daily life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About the Devotional</h2>
          <p className="text-lg text-slate-700 mb-8">
            This devotional offers 30 life-changing prayers, daily reflections to apply biblical 
            truths to your life, and a new intimacy with Christ. It is a path to deep and lasting change.
          </p>
          <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">What You Will Receive</h3>
            <ul className="text-left space-y-4">
              <li className="flex items-center">
                <Star className="w-5 h-5 text-rose-500 mr-2" />
                <span>30 carefully crafted prayers</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-rose-500 mr-2" />
                <span>Inspirational Daily Reflections</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-rose-500 mr-2" />
                <span>Practical application guide</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="w-8 h-8 text-rose-500 mb-4" />
              <p className="text-slate-700 mb-4">
                "This devotional has transformed my prayer life. I now feel a deeper connection with God every day."
              </p>
              <p className="font-semibold">Maria S.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="w-8 h-8 text-rose-500 mb-4" />
              <p className="text-slate-700 mb-4">
                "Daily reflections have helped me apply God's Word in practical ways to my life."
              </p>
              <p className="font-semibold">João P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Begin Your Spiritual Journey Today</h2>
          <p className="text-lg mb-8">
            Transform your prayer life and deepen your relationship with Christ through this 30-day guided devotional.
          </p>
          <button
            onClick={handleCheckout}
            className="bg-rose-500 text-white px-12 py-6 rounded-lg font-semibold hover:bg-rose-600 transition-colors flex items-center gap-3 text-xl mx-auto"
          >
            <ShoppingCart className="w-7 h-7" />
            Get Started Now - $9,97
          </button>
          <p className="text-sm text-slate-400 mt-6">
            ✨ Instant digital delivery • Lifetime access • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 30 Days of Prayer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;