const {PrismaClient} = required('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;