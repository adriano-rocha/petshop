# 🐾 Pet Shop - Landing Page

Uma landing page moderna e responsiva desenvolvida para um pet shop localizado em São Paulo, oferecendo serviços de banho, tosa, consultas veterinárias, taxi pet e hospedagem para animais de estimação.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para apresentar os serviços de um pet shop estabelecido desde 2007, com foco em design moderno, experiência do usuário e integração direta com WhatsApp para facilitar o contato com os clientes.

## ✨ Funcionalidades

- **Hero Section**: Apresentação impactante com call-to-action direto para WhatsApp
- **Sobre Nós**: Informações sobre a história e missão do pet shop desde 2007
- **Serviços**: Carrossel interativo apresentando os principais serviços oferecidos
  - Banho & Tosa
  - Consulta Veterinária 24h
  - Taxi Pet
  - Hotel para Pets
- **Depoimentos**: Carrossel com feedback de clientes satisfeitos
- **Footer**: Informações de contato, endereço e marcas parceiras
- **Integração WhatsApp**: Botões de contato direto em todas as seções
- **Localização**: Link direto para Google Maps

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** - Framework React para produção
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Embla Carousel](https://www.embla-carousel.com/)** - Biblioteca de carrossel
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[Phosphor Icons](https://phosphoricons.com/)** - Conjunto adicional de ícones
- **[AOS](https://michalsnik.github.io/aos/)** - Biblioteca de animações on scroll

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos para instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/petshop-landing.git

# Entre no diretório
cd petshop-landing

# Instale as dependências
npm install
# ou
yarn install

# Execute o projeto em modo de desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
petshop-landing/
├── src/
│   ├── app/
│   │   └── components/
│   │       ├── Hero.tsx          # Seção principal
│   │       ├── About.tsx         # Sobre nós
│   │       ├── Services.tsx      # Serviços oferecidos
│   │       ├── Testimonials.tsx  # Depoimentos
│   │       └── Footer.tsx        # Rodapé
│   └── ...
├── public/
│   ├── hero-dog.webp
│   ├── cat-hero.png
│   ├── about-1.png
│   ├── about-2.png
│   ├── tutor1.png
│   └── ...                       # Imagens de marcas
├── package.json
└── README.md
```

## 🎨 Componentes Principais

### Hero
Seção inicial com apresentação do pet shop, imagens de destaque e botão de contato via WhatsApp.

### About
Informações sobre a história do pet shop desde 2007, missão e valores, com links para contato e localização.

### Services
Carrossel interativo exibindo os 4 principais serviços com descrições, duração e preços estimados.

### Testimonials
Carrossel com depoimentos reais de clientes, incluindo fotos e informações dos tutores.

### Footer
Informações de contato, marcas parceiras e links para redes sociais.

## 🔧 Configuração

### WhatsApp
Para alterar o número de WhatsApp, edite o link em todos os componentes:

```typescript
https://wa.me/5511990143011?text=Sua mensagem aqui
```

### Google Maps
Para alterar a localização, atualize o link no componente `About.tsx`:

```typescript
href="https://www.google.com/maps/place/[SEU-ENDEREÇO]"
```

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎯 Melhorias Futuras

- [ ] Sistema de agendamento online
- [ ] Galeria de fotos dos pets atendidos
- [ ] Blog com dicas de cuidados pet
- [ ] Sistema de avaliações
- [ ] Integração com sistema de gestão
- [ ] Multi-idioma

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Pet Shop - [@petshop](https://instagram.com/petshop)

Email: petshop@gmail.com

Telefone: (11) 99149-3011

Endereço: Rua Girassol, 230 - Vila Madalena - São Paulo/SP

---

⭐ Desenvolvido com 💙 para amantes de pets
