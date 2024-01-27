/** @type {import('next').NextConfig} */
const nextConfig = {
	
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'i.goopics.net',
		  },
		]
	  },


	  async redirects() {
		return [
		  {
			source: '/',
			destination: '/home',
			permanent: true,
		  },
		]
	  },
	webpack(config, options) {

	// Ajoutez la règle pour les fichiers SVG
			  config.module.rules.push({
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			  })
		
		  
			  // Ajoutez "canvas" aux externals
		config.externals.push('canvas');
			  

  
	  return config;
	},

  };
  
  module.exports = nextConfig;
  