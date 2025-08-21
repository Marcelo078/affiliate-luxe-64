import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Zap, Heart, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import beautyHealth from "@/assets/beauty-health.jpg";
import fintechApps from "@/assets/fintech-apps.jpg";
import webDevelopment from "@/assets/web-development.jpg";

const Index = () => {
  const products = [
    {
      title: "Ganhe R$ 20+ com Nossos Produtos Exclusivos",
      description: "Abra sua conta em poucos minutos, resgate cupons exclusivos e descubra produtos que vão revolucionar sua saúde, beleza e finanças!",
      benefits: [
        "Resgate cupons exclusivos",
        "Produtos revolucionários", 
        "Transforme sua vida",
        "Resultados garantidos"
      ],
      link: "https://renda-boost-hub.lovable.app",
      image: beautyHealth,
      badge: "Mais Popular"
    },
    {
      title: "Parceiros Financeiros Premium",
      description: "Abra sua conta em poucos minutos, resgate cupons exclusivos e faça seu dinheiro render muito mais! Aproveite essas oportunidades imperdíveis com PagBank, PicPay e Banco Neon.",
      benefits: [
        "Ganhe R$ 20 instantâneo",
        "Rendimento superior",
        "Parceiros confiáveis",
        "Oportunidades exclusivas"
      ],
      link: "https://renda-boost.lovable.app",
      image: fintechApps,
      badge: "Limitado"
    },
    {
      title: "Lovable AI - Criação de Aplicações",
      description: "A Lovable, fundada em 2023 por Anton Osika e Fabian Hedin, é uma plataforma de inteligência artificial voltada para a criação automatizada de aplicações web.",
      benefits: [
        "Criação automatizada",
        "Tecnologia avançada",
        "Interface intuitiva",
        "Resultados profissionais"
      ],
      link: "https://lovable.dev/invite/04d3a1d5-ac6c-4590-be24-e12e5e711a61",
      image: webDevelopment,
      badge: "Inovação"
    }
  ];

  const healthProducts = [
    {
      title: "Agênciagram - Seguidores no Instagram",
      description: "Aumente seus seguidores de forma orgânica e autêntica",
      link: "https://app.monetizze.com.br/r/ALZ12471991"
    },
    {
      title: "Mounja Slim MounjaSlim",
      description: "O segredo por trás da perda de peso rápida e saudável",
      link: "https://app.monetizze.com.br/r/AJZ25504136"
    },
    {
      title: "Hidraliso - Alisante de Chuveiro",
      description: "Liso em minutos. Simples e Prático! Sem formol, sem ardência e sem cheiro. Cabelos Lisos e Hidratados na primeira aplicação.",
      benefits: [
        "Sem formol, sem ardência",
        "Liso sem desbotar",
        "Para todo tipo de cabelo",
        "Efeito prolongado"
      ],
      link: "https://app.monetizze.com.br/r/AWW11504208"
    },
    {
      title: "Nutra Vida - Fertilidade Feminina",
      description: "2 CÁPSULAS AO DIA PARA ENGRAVIDAR! Indicado para mulheres com laqueaduras, ovários policísticos, endometriose e mais.",
      benefits: [
        "Testado e aprovado",
        "Para diversos diagnósticos",
        "Fórmula natural",
        "Resultados comprovados"
      ],
      link: "https://app.monetizze.com.br/r/AXC25503421"
    },
    {
      title: "Fignar - Saúde do Fígado",
      description: "Melhore a saúde do seu figado com apenas 20 gotas!",
      link: "https://app.monetizze.com.br/r/APP25503419"
    },
    {
      title: "SB2 Black - Transformação Corporal",
      description: "TRANSFORME SEU CORPO NESTE VERÃO. ENTRE EM FORMA COM SB2 BLACK E APROVEITE AO MÁXIMO!",
      link: "https://app.monetizze.com.br/r/ASS25503415"
    },
    {
      title: "New Detox - Emagrecimento Natural",
      description: "Quer emagrecer com saúde, de forma natural e sem gastar uma fortuna? O método NEW DETOX que está mudando a vida de milhares de pessoas!",
      link: "https://app.monetizze.com.br/r/ALW20871672"
    },
    {
      title: "SLIM GOTA BLACK",
      description: "Descubra o poder em cada gota do nosso tratamento revolucionário! Adeus, gordura teimosa! Seu caminho para a melhor versão do seu corpo começa agora!",
      link: "https://app.monetizze.com.br/r/AUZ21258214"
    },
    {
      title: "Kit Restart Intestinal",
      description: "Comece hoje mesmo sua jornada de desintoxicação e renascimento intestinal! Descubra o Segredo para uma Vida Livre de Inflamações!",
      link: "https://app.monetizze.com.br/r/ACN25503403"
    },
    {
      title: "Super Green Black",
      description: "O Segredo para um Corpo e Mente 10X Mais Poderosos! O Super Green Black vai muito além do emagrecimento!",
      link: "https://app.monetizze.com.br/r/ASY18248645"
    },
    {
      title: "Clareador Nutralfit",
      description: "Acabe de vez com as manchas escuras da sua pele com nosso clareador revolucionário",
      link: "https://app.monetizze.com.br/r/AJX25503066"
    },
    {
      title: "Inibe One - Emagrecimento",
      description: "Garanta seu Inibe One com até 30% de desconto + Frete Grátis. Se você ainda não está confortável com seu corpo, continua aqui que iremos te ajudar!",
      link: "https://app.monetizze.com.br/r/APZ25502897"
    },
    {
      title: "OzenVitta - Metabolismo Avançado",
      description: "Perca peso, ganhe confiança e tenha a qualidade de vida que você tanto quer! Fórmula avançada que combina Inulina e L-Carnitina.",
      link: "https://app.monetizze.com.br/r/AKA25502741"
    },
    {
      title: "Mounjax - Queima de Gordura",
      description: "Gotinhas que auxiliam a queima de gordura. Chega de evitar fotos ou se esconder em roupas largas. Emagreça de forma saudável!",
      link: "https://app.monetizze.com.br/r/AYR25502743"
    },
    {
      title: "Kit S.O.S Crescimento Capilar",
      description: "Descubra o kit Nº 1 mais potente em crescimento e no combate a queda capilar!",
      link: "https://app.monetizze.com.br/r/ACS21486499"
    },
    {
      title: "Diuriefit Black - Pó Emagrecedor",
      description: "Pó emagrecedor 10x mais eficaz com sabor de laranja. O que levaria 30 dias, agora você terá resultados nos primeiros 6 dias de uso.",
      link: "https://app.monetizze.com.br/r/APB25502772"
    },
    {
      title: "Lift Detox Black",
      description: "LIFT DETOX BLACK reúne todos os ingredientes na medida certa. Você não precisará ter o trabalho de preparar receitas complicadas. Basta apenas tomar 2 cápsulas por dia.",
      link: "https://app.monetizze.com.br/r/AQB15367580"
    },
    {
      title: "SB2 Turbo - Suplemento Exclusivo",
      description: "FINALMENTE: O Suplemento Alimentar que Funciona Quando Todos os Outros Falharam. Desenvolvido exclusivamente para pessoas exigentes.",
      link: "https://app.monetizze.com.br/r/AXC11504216"
    }
  ];

  const servicesProducts = [
    {
      title: "Replit - Criação de Códigos SaaS",
      description: "Crie seus códigos de Saas, Aplicativos em segundos...",
      link: "https://replit.com/refer/rodobens24horas"
    },
    {
      title: "Natflix Fitness",
      description: "Vida em movimento, Saúde, atividade física...",
      link: "https://go.hotmart.com/X70943392V"
    },
    {
      title: "Lovable IA",
      description: "Crie seus códigos de Saas em segundos...",
      link: "https://lovable.dev/?via=marcelo-barbosa"
    },
    {
      title: "Hostinger",
      description: "Hospedagem de sites... Domínios...",
      link: "https://hostinger.com.br?REFERRALCODE=1W8MARCELJCB"
    },
    {
      title: "Fórmula Negócio Online FNO",
      description: "Todos Eles Começaram do Zero com o Fórmula Negócio Online... Hoje Mudaram de Vida...",
      link: "https://go.hotmart.com/E11195793E?ap=305a"
    },
    {
      title: "Carteira Nacional do Estudante Digital",
      description: "Aproveite descontos exclusivos em ingressos e muito mais!",
      link: "https://app.monetizze.com.br/r/AWH25502896"
    },
    {
      title: "Carteira Nacional do Estudante Física + Digital",
      description: "Esqueça os ingressos caros! Compre todos os ingressos que quiser pela metade do preço",
      link: "https://app.monetizze.com.br/r/AEG25503067"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Transformou completamente minha vida! Resultados incríveis em poucas semanas.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Nunca imaginei que seria tão fácil. Recomendo para todos!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Produtos de qualidade excepcional. Vale cada centavo investido.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            🚀 Transforme Sua Vida Hoje Mesmo!
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Ganhe R$ 20+ e Descubra Produtos Que Vão Revolucionar Sua Vida
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">✨ Oportunidade Limitada</Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ganhe R$ 20+ e Transforme Sua Vida
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Abra sua conta em poucos minutos, resgate cupons exclusivos e descubra produtos que vão revolucionar sua saúde, beleza e finanças!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open("https://renda-boost-hub.lovable.app", "_blank")}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Começar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 border-2 hover:bg-primary/5"
                  onClick={() => window.open("https://renda-boost.lovable.app", "_blank")}
                >
                  Parceiros Financeiros
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <img 
                src={heroBanner} 
                alt="Transformação Digital e Crescimento Financeiro" 
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Produtos Exclusivos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra nossa seleção premium de produtos que estão transformando vidas ao redor do mundo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70"
                    onClick={() => window.open(product.link, "_blank")}
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Aproveitar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Beauty Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Saúde & Beleza</h2>
            <p className="text-xl text-muted-foreground">
              Produtos revolucionários para transformar sua saúde e beleza
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {product.benefits && (
                    <ul className="space-y-1 mb-4">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(product.link, "_blank")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Descobrir
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Technology */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Serviços & Tecnologia</h2>
            <p className="text-xl text-muted-foreground">
              Ferramentas e serviços para impulsionar seus projetos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(product.link, "_blank")}
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Acessar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de transformação e sucesso
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não Perca Essa Oportunidade!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas. Comece sua jornada hoje mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://renda-boost-hub.lovable.app", "_blank")}
            >
              <Zap className="mr-2 h-5 w-5" />
              Ganhar R$ 20+ Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.open("https://renda-boost.lovable.app", "_blank")}
            >
              Parceiros Financeiros
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 - Transforme sua vida com nossos produtos exclusivos. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;