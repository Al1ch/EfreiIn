const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.monday.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Supprime le préfixe '/api' avant de faire la requête à l'API
      },
    })
  );
};
