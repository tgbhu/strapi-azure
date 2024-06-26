module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: 'https://strap-birdie.azurewebsites.net',
    auth: {
        secret: env('ADMIN_JWT_SECRET'),
    },
    admin: {
        url: '/',
        serveAdminPanel: false
    }
  });
