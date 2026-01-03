// import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Calendar, Search, Scissors, Heart, Bone } from 'lucide-react';

const WhatsAppButton = ({ text = "Agendar pelo WhatsApp", className = "", size = "normal" }: { text?: string, className?: string, size?: "normal" | "large" }) => (
  <a
    href="https://wa.me/5544999324635"
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-cta hover:bg-red-500 text-white font-bold rounded-full transition-transform hover:scale-105 shadow-lg ${size === 'large' ? 'px-8 py-4 text-xl' : 'px-6 py-2'} ${className}`}
  >
    <Phone className={size === 'large' ? 'w-6 h-6' : 'w-4 h-4'} />
    {text}
  </a>
);

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-8 rounded-[2rem] shadow-xl border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300">
    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6 mx-auto text-primary">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-center mb-3 text-dark">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="bg-primary/20 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold text-2xl">
            <Bone className="w-8 h-8 fill-current" />
            <span className="text-dark">Pet Mania</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-semibold text-dark">
            <a href="#home" className="hover:text-primary transition-colors">Início</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <WhatsAppButton />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-cta/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left space-y-6">
            <span className="inline-block px-4 py-1 bg-white text-primary rounded-full text-sm font-bold shadow-sm mb-2">
              🐾 O melhor cuidado para seu pet
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-tight">
              Seu melhor amigo merece <span className="text-white block">tratamento VIP!</span>
            </h1>
            <p className="text-xl text-white max-w-lg mx-auto md:mx-0">
              Banho, tosa e cuidados veterinários com muito amor e carinho. Venha conhecer o Pet Mania!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <WhatsAppButton text="Agendar Horário" size="large" />
              <a href="tel:+5544999324635" className="px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-gray-50 transition-colors shadow-md flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                (44) 99932-4635
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full">
            <div className="bg-white p-2 md:p-4 rounded-3xl md:rounded-full shadow-2xl relative z-10 overflow-hidden bg-[url('https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center aspect-square md:h-[500px] md:aspect-auto w-full max-w-md mx-auto md:max-w-none">
            </div>
            {/* Decorative items - hidden on mobile */}
            <div className="hidden md:block absolute top-10 -right-4 bg-white p-3 rounded-2xl shadow-lg animate-bounce duration-1000">
              <Heart className="w-8 h-8 text-cta fill-current" />
            </div>
            <div className="hidden md:block absolute bottom-10 -left-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                </div>
                <span className="font-bold text-sm text-dark">+500 Pets Felizes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark">Nossos Serviços</h2>
            <div className="h-2 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              Oferecemos uma estrutura completa para deixar seu pet limpo, saudável e feliz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Scissors}
              title="Banho e Tosa"
              description="Estética completa com produtos hipoalergênicos e profissionais especializados."
            />
            <ServiceCard
              icon={Search}
              title="Consultas"
              description="Atendimento veterinário para check-ups, vacinas e emergências."
            />
            <ServiceCard
              icon={Bone}
              title="Pet Shop"
              description="Rações premium, brinquedos, acessórios e farmácia completa."
            />
            <ServiceCard
              icon={Heart}
              title="Hotelzinho"
              description="Hospedagem segura e divertida para quando você precisar viajar."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Pet playing" className="rounded-3xl shadow-lg w-full h-64 object-cover transform translate-y-8" />
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Cat sleeping" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-dark">Sobre a Pet Mania</h2>
            <p className="text-gray-700 leading-relaxed">
              Somos apaixonados por animais! A Pet Mania nasceu do sonho de oferecer um espaço onde seu pet se sinta em casa.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com uma equipe treinada e amorosa, garantimos que cada banho, consulta ou hospedagem seja uma experiência positiva e sem estresse.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-center gap-3 font-semibold text-dark">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                Profissionais qualificados
              </li>
              <li className="flex items-center gap-3 font-semibold text-dark">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                Ambiente higienizado e seguro
              </li>
              <li className="flex items-center gap-3 font-semibold text-dark">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                Táxi Dog disponível
              </li>
            </ul>
            <div className="pt-6">
              <WhatsAppButton text="Fale Conosco" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-dark">O que nossos clientes dizem</h2>
            <div className="h-2 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600">
              Veja o que os tutores de pets felizes têm a dizer sobre nossos serviços!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-secondary/30 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                  🐕
                </div>
                <div>
                  <h4 className="font-bold text-dark">Maria Silva</h4>
                  <div className="flex gap-1 text-primary">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Meu cachorro adora vir aqui! A equipe é super atenciosa e o ambiente é muito limpo. Recomendo demais!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-secondary/30 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                  🐈
                </div>
                <div>
                  <h4 className="font-bold text-dark">João Santos</h4>
                  <div className="flex gap-1 text-primary">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Excelente atendimento! Minha gata sempre volta linda e cheirosa. Profissionais muito qualificados!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-secondary/30 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                  🐾
                </div>
                <div>
                  <h4 className="font-bold text-dark">Ana Costa</h4>
                  <div className="flex gap-1 text-primary">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Confio de olhos fechados! Deixei meu pet no hotelzinho e ele voltou super feliz. Muito cuidado e carinho!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map + CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map - First on mobile, second on desktop */}
            <div className="order-1 md:order-2 w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448!2d-46.633!3d-23.550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAwLjAiUyA0NsKwMzcnNTguOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Pet Mania"
                ></iframe>
              </div>
            </div>

            {/* CTA - Second on mobile, first on desktop */}
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-4xl font-bold text-dark">Venha nos visitar!</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Estamos localizados em um espaço aconchegante e de fácil acesso. Traga seu pet para conhecer nossa estrutura e equipe!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Endereço</p>
                    <p className="text-gray-600">Av. dos Animais, 123 - Centro</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Horário de Funcionamento</p>
                    <p className="text-gray-600">Seg à Sex: 08h - 18h</p>
                    <p className="text-gray-600">Sáb: 08h - 13h</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <WhatsAppButton text="Agendar Visita" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 pb-8 rounded-t-[3rem] mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 font-bold text-2xl text-primary mb-6">
                <Bone className="w-8 h-8 fill-current" />
                <span>Pet Mania</span>
              </div>
              <p className="text-gray-400 mb-6">
                Cuidando do seu melhor amigo com todo amor e carinho que ele merece.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="block text-white font-semibold">WhatsApp</span>
                    <a href="https://wa.me/5544999324635" className="hover:text-primary transition-colors">(44) 99932-4635</a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="block text-white font-semibold">Endereço</span>
                    <span>Av. dos Animais, 123 - Centro</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <span className="block text-white font-semibold">Horário</span>
                    <span>Seg à Sex: 08h - 18h<br />Sáb: 08h - 13h</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-6">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Início</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Banho e Tosa</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Veterinário</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Pet Mania. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
