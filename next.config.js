/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Landing antiga aposentada (27/09/2026, pedido do Fábio): quem chega por link antigo (anúncio, post,
  // print) vai para a bio do site novo, onde escolhe o grupo. A UTM do link segue junto.
  // Privacidade, exclusão de dados e o painel antigo continuam aqui (podem estar cadastrados no app da Meta).
  async redirects() {
    return [
      { source: '/', destination: 'https://centraldeofertas.vercel.app/bio.html', permanent: false },
      { source: '/redirect', destination: 'https://centraldeofertas.vercel.app/bio.html', permanent: false },
    ];
  },
};

module.exports = nextConfig;
