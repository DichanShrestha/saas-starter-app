import { PrismaClient } from "@prisma/client";

const prismaClient = () => {
  return new PrismaClient();
};

type prismaClient = ReturnType<typeof prismaClient>

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

const prisma = globalForPrisma.prisma ?? prismaClient()

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;