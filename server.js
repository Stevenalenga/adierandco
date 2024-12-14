const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files from the .next directory
  server.use('/_next', express.static(path.join(__dirname, '.next')));

  // Handle API routes
  server.all('/api/*', (req, res) => {
    return handle(req, res);
  });

  // Handle page routes
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // Error handling
  server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});

