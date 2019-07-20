require('isomorphic-fetch');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const dotenv = require('dotenv');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { API_KEY, API_SECRET } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  server.use(session(server));
  server.keys = [API_SECRET];

  server.use(
    createShopifyAuth({
      apiKey: API_KEY,
      secret: API_SECRET,
      scopes: [
        'read_products',
        'write_products',
        'read_orders',
        'write_orders',
        'read_product_listings',
        'read_themes',
        'write_themes',
        'read_inventory',
        'write_inventory'
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.redirect('/');
      }
    })
  );

  server.use(verifyRequest());

  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  server.listen(port, () => {
    console.log(`> Listening on port ${port}`);
  });
});
