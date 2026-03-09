import aboutHero from '../assets/about-hero.png';

const AboutUs = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <div
        className="relative h-96 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-stone-200 text-xl max-w-xl">
            Born from a love of exceptional coffee and community
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-stone-900 mb-6">
          How It All Started
        </h2>
        <p className="text-stone-600 text-lg leading-relaxed mb-4">
          King's Coffee was founded on the belief that great coffee starts with
          great relationships. We work directly with farmers across Ethiopia,
          Colombia, and Japan to source the finest beans the world has to offer.
        </p>
        <p className="text-stone-600 text-lg leading-relaxed mb-4">
          Every bag we sell tells a story — of the hands that picked it, the
          soil that grew it, and the care that went into roasting it to
          perfection. We believe you deserve to know exactly where your coffee
          comes from.
        </p>
        <p className="text-stone-600 text-lg leading-relaxed">
          Whether you're a seasoned pour-over enthusiast or just discovering
          specialty coffee, we're here to guide your journey one brew at a time.
        </p>
      </div>

      {/* Values */}
      <div className="bg-stone-900 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Ethically Sourced',
                desc: 'Direct relationships with farmers who share our values.',
              },
              {
                icon: '🔥',
                title: 'Small Batch Roasted',
                desc: 'Every roast is carefully crafted for maximum flavor.',
              },
              {
                icon: '📚',
                title: 'Brew Education',
                desc: 'We teach you how to make the perfect cup at home.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-stone-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
