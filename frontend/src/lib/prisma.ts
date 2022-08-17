import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export function toObject(obj) {
  return JSON.parse(
    JSON.stringify(
      obj,
      (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
    )
  );
}

export default prisma;
