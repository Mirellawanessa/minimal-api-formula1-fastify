const drivers = require('../data/drivers.json');

async function driversRoutes(fastify) {

  fastify.get('/drivers', async () => {
    return drivers;
  });

  fastify.get('/drivers/:id', async (request, reply) => {

    const { id } = request.params;

    const driver = drivers.find(
      d => d.id === Number(id)
    );

    if (!driver) {
      return reply.status(404).send({
        message: 'Driver not found'
      });
    }

    return driver;
  });
}

module.exports = driversRoutes;