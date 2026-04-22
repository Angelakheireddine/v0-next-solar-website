'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Milestones', href: '#milestones' },
    { label: 'Products', href: '#products' },
    { label: 'EDGE', href: '#edge' },
    { label: 'Contact', href: '#contact' },
  ];

  const products = [
    {
      title: 'Solar Panels',
      description: 'Premium solar panels from leading manufacturers including Longi and Astronergy',
      icon: '☀️',
    },
    {
      title: 'Solar Inverters',
      description: 'Advanced inverters for efficient energy conversion and smart grid integration',
      icon: '⚡',
    },
    {
      title: 'Battery Storage Systems',
      description: 'High-capacity energy storage solutions for reliable power backup',
      icon: '🔋',
      link: '#edge',
    },
    {
      title: 'Mounting Systems',
      description: 'Durable and reliable mounting structures from K2 Systems',
      icon: '🏗️',
    },
    {
      title: 'Repair Center',
      description: 'Professional maintenance and repair services for all systems',
      icon: '🔧',
    },
  ];

  const stats = [
    { number: '+1800', label: 'Satisfied Clients' },
    { number: '+50 MW', label: 'Solar Panels Sold' },
    { number: '+15 MW', label: 'Inverters Sold' },
  ];

  const testimonials = [
    {
      text: 'Next Solar provided exceptional service and high-quality components. Our installation was seamless and the support has been outstanding.',
      author: 'Mohammed Al-Rashid',
      company: 'Renewable Energy Solutions',
      rating: 5,
    },
    {
      text: 'Working with Next Solar has been a game-changer for our business. Their expertise and product quality are unmatched in the region.',
      author: 'Fatima Al-Mansouri',
      company: 'Green Tech Innovations',
      rating: 5,
    },
    {
      text: 'The professionalism and reliability of Next Solar team exceeded our expectations. Highly recommended for any solar project.',
      author: 'Ahmed Al-Suwaidi',
      company: 'Energy Solutions Ltd',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What makes Next Solar different from other distributors?',
      answer: 'Next Solar is backed by Mashriq Energy Group with years of industry experience, a vast selection of premium components, and partnerships with world-leading manufacturers like Longi and Astronergy. We prioritize reliability, excellence, and customer satisfaction.',
    },
    {
      question: 'What products and services do you offer?',
      answer: 'We offer solar panels, inverters, battery storage systems, mounting systems, repair services, and are the exclusive distributor of EDGE Power Systems products in the Middle East.',
    },
    {
      question: 'Do you provide installation support?',
      answer: 'Yes, we provide comprehensive support including technical consultations, installation guidance, and our professional repair center services to ensure optimal system performance.',
    },
    {
      question: 'What warranty do your products come with?',
      answer: 'Our products come with industry-leading warranties. Specific warranty terms depend on the manufacturer and product type. Contact us for detailed warranty information.',
    },
    {
      question: 'Can you customize solutions for my specific needs?',
      answer: 'Absolutely. Our team works with you to design custom solutions tailored to your residential, commercial, industrial, or utility-scale requirements.',
    },
    {
      question: 'What is your service area?',
      answer: 'Next Solar serves the entire Middle East region with headquarters in Beirut. We have established partnerships and distribution networks across the region.',
    },
  ];

  const milestones = [
    {
      date: 'June 10, 2023',
      title: 'Longi Distribution Agreement',
      description: 'Signed distribution agreement with the world\'s leading solar manufacturer, covering the entire Middle East market.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Longi-t44lok27JWypu7gD1WLmv4BZjEkS6t.png',
    },
    {
      date: 'September 26, 2023',
      title: 'K2 Systems Partnership',
      description: 'Strategic distribution agreement with K2 Systems for premium solar mounting structures.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/k2%20systems%20event-YdygkpXzMyN4hcPf0Nacd7tDx9BvA3.png',
    },
    {
      date: 'November 18, 2024',
      title: 'Astronergy Solar Partnership',
      description: 'Strategic cooperation agreement with global photovoltaic technology leader Astronergy Solar.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Astronergy-66DatiOTFM7VJjYD4NmBLZmYoh4T69.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/next-logo%20%20%281%29%201-2YbaCw1Z3m6258RNTQ0UglwhiRlPHj.jpg" alt="Next Solar" className="h-10" />
              <div className="hidden md:flex gap-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-orange-500 transition-colors font-medium text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Reliable Solar <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Partners</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Next Solar is the Middle East's trusted solar distributor, providing premium-quality components and sustainable energy solutions backed by decades of industry expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Products
                </Button>
                <Button 
                  variant="outline" 
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 text-lg px-8 py-6"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-3xl opacity-10 blur-3xl"></div>
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero-hMHJwDl8DBZq9CNwPgP2oixzPYfuMu.jpg" 
                alt="Next Solar Exhibition Booth" 
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Next Solar
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              Next Solar, a leading solar distributor in the Middle East, is a proud spin-off of Mashriq Energy, dedicated to providing premium-quality solar components. With years of industry experience, a vast selection of solar panels and inverters, and hundreds of satisfied customers, Next Solar continues to set the standard for reliability and excellence in solar distribution across the region. As part of the Mashriq Energy Group, we are committed to advancing sustainable energy solutions that drive the Middle East's transition to a greener, more sustainable future.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center" id="milestones">Our Partnerships</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="text-sm font-semibold text-orange-500 mb-3">{milestone.date}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium solar components from industry-leading manufacturers, backed by expert support and professional services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  {product.link && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <a 
                        href={product.link}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('edge')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-2"
                      >
                        Learn More <span>→</span>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EDGE Power Systems Section */}
      <section id="edge" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              EDGE Power Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Next Solar is the official distributor of EDGE Power Systems products in the Middle East. EDGE is a leader in energy storage solutions with a portfolio of lithium batteries catering to residential, commercial, industrial, and utility-scale applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Low-Voltage Residential Solution */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Low-Voltage Residential Solution</h3>
                <p className="text-gray-600 mb-6">Energy storage solutions for homes and small installations</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">EDGE Pro 14.33 kWh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">EDGE Mini 7.5 kWh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">EDGE Boost 7.5 kWh (Extra Pack)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* High-Voltage C&I Solution */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Voltage C&I Solution</h3>
                <p className="text-gray-600 mb-6">Commercial and industrial energy storage systems</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">EDGE Max 100 kWh ~ 215 kWh</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Forklifts Battery Solution */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Forklifts Battery Solution</h3>
                <p className="text-gray-600 mb-6">Lithium batteries for industrial forklift applications</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">24V 280Ah LFP Battery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span className="text-gray-700">48V 280Ah LFP Battery</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <Button 
              className="bg-white text-orange-500 hover:bg-gray-100 font-semibold"
              onClick={() => window.open('http://edgeess.com', '_blank')}
            >
              View Website
            </Button>
          </div>
        </div>
      </section>

      {/* Next Solar Repair Center Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Next Solar Repai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Main Repair Services */}
            <div className="flex flex-col justify-center">
              <Card className="border-0 shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Expert Inverter Repair Services</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>At Next Solar we repair all kinds of inverters. Our experienced technicians are knowledgeable and outfitted with specialized tools and equipment to best diagnose and repair your inverters.</p>
                    <p>All repairs are completed with genuine replacement parts so our clients can rest assured all components will work perfectly with their system.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Repair Center Image */}
            <div>
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Repair%201-pE1CM9H9SMCruiqfMTY8X2w8oAXpnC.png" 
                alt="Next Solar Repair Center technician" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Express Service Image */}
            <div>
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Repair%202-NxMrxLuL2ogmWKIIy7alXDc9e8nG46.png" 
                alt="Repair Center equipment and facilities" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Express Service Info */}
            <div className="flex flex-col justify-center">
              <Card className="border-0 shadow-lg h-full bg-gradient-to-br from-orange-50 to-yellow-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-orange-500">⚡</span> Express Service
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>At Next Solar, our goal is always to provide quality service promptly. To accomplish this goal, we now offer Repair Express Service!</p>
                    <p>As the name implies, the Repair Express Service is designed to offer our clients the same high-quality service they've come to expect from us, only to be received, repaired, and handed back to our esteemed clients wherever they are in Lebanon, in <span className="font-bold text-orange-600">24 hours!</span></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by hundreds of satisfied customers across the Middle East
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-orange-500 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedFaq === index && (
                    <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Go Solar?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contact our team today to learn more about our products and how Next Solar can help power your sustainable future.
              </p>
              <div className="space-y-4 text-lg">
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="opacity-90">info@nextsolarco.com</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="opacity-90">+961 1 800 914</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="opacity-90">Verdun, Rashidin Street, Andalus building, 1st floor, Beirut, Lebanon</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 bg-white">
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Next Solar</h4>
              <p className="text-gray-400 text-sm">
                Middle East's leading solar distributor providing premium components and expert solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#products" className="hover:text-orange-500">Solar Panels</a></li>
                <li><a href="#products" className="hover:text-orange-500">Inverters</a></li>
                <li><a href="#edge" className="hover:text-orange-500">Battery Storage</a></li>
                <li><a href="#products" className="hover:text-orange-500">Mounting Systems</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#milestones" className="hover:text-orange-500">Partnerships</a></li>
                <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://www.linkedin.com/company/next-solar/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/nextsolarlb/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Instagram</a></li>
                <li><a href="https://www.facebook.com/NextSolarEnergyLB/reels/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Next Solar. All rights reserved.
            </p>
            <div className="flex gap-8 text-gray-400 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500">Terms of Service</a>
              <a href="#" className="hover:text-orange-500">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/96176362988"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
        title="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
