import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log:
            import.meta.env.NODE_ENV === "development"
                ? ["error", "warn"]
                : ["error"],
    });

export { prisma };
