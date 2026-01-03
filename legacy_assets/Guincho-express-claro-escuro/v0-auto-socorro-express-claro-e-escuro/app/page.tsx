import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Truck, Phone, MapPin, Clock, Shield, Wrench, CheckCircle, Award, MessageCircle } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auto Socorro Express - Guincho 24h em Maringá | (44) 99999-9999",
  description:
    "Guincho 24 horas em Maringá e região. Atendimento rápido e seguro para carros, motos, caminhões e vans. Socorro emergencial disponível a qualquer hora do dia ou da noite. Ligue agora: (44) 99999-9999",
  keywords:
    "guincho maringá, auto socorro 24h, guincho leve, guincho pesado, socorro emergencial, reboque maringá, guincho rodovia, guincho noturno, remoção veículos",
  openGraph: {
    title: "Auto Socorro Express - Guincho 24h em Maringá",
    description:
      "Seu carro quebrou? Atendimento rápido e seguro 24h. Guincho leve e pesado em Maringá e região. Ligue: (44) 99999-9999",
    url: "https://autosocorroexpress.vercel.app",
    siteName: "Auto Socorro Express",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auto Socorro Express - Guincho 24h",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Socorro Express - Guincho 24h em Maringá",
    description: "Seu carro quebrou? Atendimento rápido e seguro 24h. Guincho leve e pesado em Maringá e região.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://autosocorroexpress.vercel.app",
  },
}

export default function Home() {
  const services = [
    {
      icon: Truck,
      title: "Guincho Leve",
      description: "Remoção de carros, motos e veículos de pequeno porte",
    },
    {
      icon: Truck,
      title: "Guincho Pesado",
      description: "Transporte de caminhões, vans e veículos de grande porte",
    },
    {
      icon: Wrench,
      title: "Socorro Emergencial",
      description: "Atendimento rápido para pneu furado, bateria descarregada e mais",
    },
    {
      icon: MapPin,
      title: "Atendimento em Rodovias",
      description: "Cobertura completa em rodovias e estradas da região",
    },
    {
      icon: Shield,
      title: "Remoção Segura",
      description: "Equipamentos modernos para transporte sem danos",
    },
    {
      icon: Clock,
      title: "Disponível 24h",
      description: "Atendimento a qualquer hora do dia ou da noite",
    },
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      text: "Serviço rápido e profissional. Meu carro quebrou na rodovia e em 20 minutos já estavam me atendendo!",
      rating: 5,
      image: "/images/pedro.png",
    },
    {
      name: "Ana Paula",
      text: "Equipe muito atenciosa e preço justo. Super recomendo o Auto Socorro Express!",
      rating: 5,
      image: "/images/marina.png",
    },
    {
      name: "Roberto Santos",
      text: "Precisei de guincho pesado para minha van. Fizeram o trabalho com muito cuidado e eficiência.",
      rating: 5,
      image: "/images/antonio.png",
    },
    {
      name: "Sueli Oliveira",
      text: "Atendimento excelente! Tive um problema com pneu furado tarde da noite e eles chegaram super rápido. Muito profissionais!",
      rating: 5,
      image: "/images/sueli.png",
    },
    {
      name: "Marcos e Carla",
      text: "Ficamos presos na estrada voltando de viagem. O Auto Socorro Express nos salvou! Serviço de confiança e preço honesto.",
      rating: 5,
      image: "/images/9.png",
    },
    {
      name: "Juliana Costa",
      text: "Já usei o serviço duas vezes e sempre fui muito bem atendida. Equipe educada e cuidadosa com o veículo. Recomendo!",
      rating: 5,
      image: "/images/6.png",
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Entre em Contato",
      description: "Ligue ou chame no WhatsApp (44) 99999-9999",
    },
    {
      step: "2",
      title: "Envie sua Localização",
      description: "Compartilhe onde você está para agilizar o atendimento",
    },
    {
      step: "3",
      title: "Aguarde o Guincho",
      description: "Nossa equipe chega rapidamente ao local",
    },
    {
      step: "4",
      title: "Destino Seguro",
      description: "Transportamos seu veículo com segurança até o destino",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/design-mode/reboque-man.jpg"
            alt="Auto Socorro Express"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/40 via-[#8B0000]/60 to-[#8B0000]/95" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50/80 border border-red-200/60 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 animate-fade-in-up">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
            <span className="text-red-700 text-xs sm:text-sm font-semibold">Atendimento 24 horas</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-4 sm:mb-6 text-balance animate-fade-in-up [animation-delay:100ms] px-2 text-card-foreground">
            Seu carro <span className="text-[#8B0000] text-amber-400">quebrou?</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4a4a4a] mb-6 sm:mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up [animation-delay:200ms] px-4 text-white">
            Estamos prontos para ajudar.
            <br />
            Atendimento 24h com rapidez, confiança e preço justo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up [animation-delay:300ms] px-4">
            <Button
              asChild
              size="lg"
              className="bg-[#8B0000] hover:bg-[#600000] text-white text-base sm:text-lg px-6 sm:px-8 shadow-lg shadow-[#8B0000]/20 hover:shadow-[#8B0000]/30 transition-all hover:scale-105 w-full sm:w-auto leading-7 h-12"
            >
              <a
                href="https://wa.me/5544999999999?text=Olá,%20preciso%20de%20socorro!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-amber-400" />
                Chamar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 backdrop-blur-sm transition-all hover:scale-105 w-full sm:w-auto bg-transparent"
            >
              <a href="tel:+5544999999999">
                <Phone className="w-6 h-6 mr-2 text-amber-400" />
                (44) 99999-9999
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#fdfcfb] border-y border-[#d4d1cc]">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                <div className="text-3xl sm:text-4xl font-bold text-[#2c2c2c]">24h</div>
              </div>
              <p className="text-sm sm:text-base text-[#6b6b6b]">Disponível Sempre</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                <div className="text-3xl sm:text-4xl font-bold text-[#2c2c2c]">10.000+</div>
              </div>
              <p className="text-sm sm:text-base text-[#6b6b6b]">Atendimentos Realizados</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                <div className="text-3xl sm:text-4xl font-bold text-[#2c2c2c]">15 min</div>
              </div>
              <p className="text-sm sm:text-base text-[#6b6b6b]">Tempo Médio de Resposta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-[#8B0000] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-300/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              Como Podemos Ajudar
            </h2>
            <p className="text-gray-300 text-base sm:text-lg px-4">
              Atendimento rápido e seguro para qualquer situação
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-red-950/40 border border-red-800/50 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group animate-fade-in-up rounded-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="bg-red-600/20 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-red-600/30 transition-colors">
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-red-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Como Funciona
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] mt-2 mb-3 sm:mb-4 px-4">
              Atendimento em 4 Passos
            </h2>
            <p className="text-[#6b6b6b] text-base sm:text-lg px-4">Rápido, simples e eficiente</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg shadow-red-600/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#2c2c2c] mb-2">{item.title}</h3>
                <p className="text-[#6b6b6b] text-sm">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-red-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-12 sm:py-16 lg:py-20 bg-[#8B0000]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">Galeria</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-3 sm:mb-4 px-4">
              Nosso Trabalho
            </h2>
            <p className="text-gray-300 text-base sm:text-lg px-4">
              Equipamentos modernos e profissionais qualificados
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="relative aspect-square sm:col-span-2 sm:row-span-2 rounded-xl overflow-hidden group border border-[#d4d1cc] shadow-sm">
              <Image
                src="/tow-truck-highway-night.jpg"
                alt="Guincho na rodovia"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-3 sm:p-4">
                  <span className="text-red-400 font-semibold text-xs sm:text-sm mb-1 sm:mb-2">DESTAQUE</span>
                  <p className="text-white font-bold text-xl sm:text-2xl mb-1 sm:mb-2">Atendimento em Rodovias</p>
                  <p className="text-gray-200 text-xs sm:text-sm">Cobertura completa 24 horas</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden group border border-[#d4d1cc] shadow-sm">
              <Image
                src="/tow-truck-loading-vehicle.jpg"
                alt="Carregamento seguro"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-3 sm:p-4">
                  <span className="text-red-400 text-xs font-semibold">GUINCHO LEVE</span>
                  <p className="text-white font-semibold text-sm sm:text-base">Carros e Motos</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden group border border-[#d4d1cc] shadow-sm">
              <Image
                src="/emergency-towing-service.jpg"
                alt="Socorro emergencial"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                <div className="p-3 sm:p-4">
                  <span className="text-red-400 text-xs font-semibold">EMERGÊNCIA</span>
                  <p className="text-white font-semibold text-sm sm:text-base">Resposta Rápida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-red-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Depoimentos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c2c2c] mt-2 mb-3 sm:mb-4 px-4">
              O Que Dizem Nossos Clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 border border-[#d4d1cc] shadow-sm rounded-lg animate-fade-in-up hover:shadow-md hover:border-red-600 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#d4d1cc]">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[#2c2c2c] font-semibold">{testimonial.name}</p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-amber-500 text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/design-mode/reboque-1200x675.jpg" alt="Socorro 24h" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-gray-900/50 to-gray-900/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Precisa de <span className="text-amber-400">socorro agora?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Estamos prontos para atender você 24 horas por dia, 7 dias por semana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5544999999999?text=Olá,%20preciso%20de%20socorro!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-2 text-amber-400" />
                Pedir Socorro Agora
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 backdrop-blur-sm transition-all hover:scale-105 w-full sm:w-auto bg-transparent"
            >
              <a href="tel:+5544999999999">
                <Phone className="w-6 h-6 mr-2 text-amber-400" />
                (44) 99999-9999
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B0000] text-[#ffffff] py-12 border-t border-[#600000]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#ffffff] mb-3 sm:mb-4">Auto Socorro Express</h3>
              <p className="text-sm sm:text-base text-[#d4d4e8] leading-relaxed mb-4">
                Atendimento 24 horas para guincho leve e pesado, socorro emergencial e remoção de veículos em Maringá e
                região.
              </p>
              <div className="flex gap-3">
                <Button asChild size="sm" className="bg-[#B22234] hover:bg-[#8a1a28] text-[#ffffff] bg-red-600">
                  <a href="https://wa.me/5544999999999" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2 text-amber-400" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="border-[#d4d4e8] text-[#ffffff] hover:bg-[#600000] bg-transparent"
                >
                  <a href="tel:+5544999999999">
                    <Phone className="w-4 h-4 mr-2 text-amber-400" />
                    Ligar
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#ffffff] mb-3 sm:mb-4">Nossos Serviços</h4>
              <ul className="space-y-2 text-sm sm:text-base text-[#d4d4e8]">
                <li>Guincho Leve</li>
                <li>Guincho Pesado</li>
                <li>Socorro Emergencial</li>
                <li>Atendimento em Rodovias</li>
                <li>Remoção de Veículos</li>
                <li>Disponível 24h</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-[#ffffff] mb-3 sm:mb-4">Contato</h4>
              <div className="space-y-3 text-sm sm:text-base text-[#d4d4e8]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#ffffff]">Área de Atendimento:</p>
                    <p>Maringá - PR e região</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#ffffff]">Telefone:</p>
                    <a href="tel:+5544999999999" className="hover:text-[#ffcccc] transition-colors">
                      (44) 99999-9999
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#ffffff]">WhatsApp:</p>
                    <a
                      href="https://wa.me/5544999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#ffcccc] transition-colors"
                    >
                      (44) 99999-9999
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#600000] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-[#d4d4e8]">
            <p className="text-amber-400">
              Criado por{" "}
              <a
                href="https://webstudiomga.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors underline"
              >
                WebStudio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
