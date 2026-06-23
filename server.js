const Fastify = require('fastify');
const fastify = Fastify({ logger: true });

const driversRoutes = require('./routes/drivers');

fastify.register(driversRoutes);

fastify.listen({ port: 3333 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});