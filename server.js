import next from 'next';
import fs from 'fs';
import http from 'http';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = app.port;

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname.startsWith('/api')) {
      // Enable CORS for API routes
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );

      if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
      }
    }

    handle(req, res, parsedUrl);
  });

  server.on('request', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    if (req.method === 'GET' && pathname === '/api/get-dart-extenxion') {
      const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
      res.end(JSON.stringify(data));
      return;
    }
  });

  server.listen(port, () => {
    console.log(
      `> Ready on http://${process.env.VERCEL_URL || 'localhost'}:${port}`
    );
  });
});
