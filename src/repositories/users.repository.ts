import { PrismaClient } from "@prisma/client";
import { User } from "../models/user.model";
import { UserRole } from "../types/user.types";

const prisma = new PrismaClient();

async function count(): Promise<number> {
  return await prisma.user.count();
}

async function getAll(): Promise<User[]> {
  const pUsers = await prisma.user.findMany();

  return pUsers.map((pUser) => {
    return {
      ...pUser,
      role: pUser.role as UserRole,
    };
  });
}

async function getRange(skip: number, take: number): Promise<User[]> {
  const pUsers = await prisma.user.findMany({
    skip,
    take,
  });

  return pUsers.map((pUser) => {
    return {
      ...pUser,
      role: pUser.role as UserRole,
    };
  });
}

async function getById(id: number): Promise<User | null> {
  const pUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!pUser) return null;

  return {
    ...pUser,
    role: pUser.role as UserRole,
  };
}

async function getByEmail(email: string): Promise<User | null> {
  const pUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!pUser) return null;

  return {
    ...pUser,
    role: pUser.role as UserRole,
  };
}

async function existsById(id: number): Promise<boolean> {
  return Boolean(
    await prisma.user.findUnique({
      where: {
        id,
      },
    })
  );
}

async function existsByEmail(email: string): Promise<boolean> {
  return Boolean(
    await prisma.user.findUnique({
      where: {
        email,
      },
    })
  );
}

async function existsByEmailExcludingId(
  id: number,
  email: string
): Promise<boolean> {
  return Boolean(
    await prisma.user.findFirst({
      where: {
        id: {
          not: id,
        },
        email,
      },
    })
  );
}

async function create(user: Omit<User, "id">): Promise<void> {
  await prisma.user.create({
    data: user,
  });
}

async function updateById(id: number, user: Omit<User, "id">): Promise<void> {
  await prisma.user.update({
    where: {
      id,
    },
    data: user,
  });
}

async function removeById(id: number): Promise<void> {
  await prisma.user.delete({
    where: {
      id,
    },
  });
}

export const usersRepository = {
  count,
  getAll,
  getRange,
  getById,
  getByEmail,
  existsById,
  existsByEmail,
  existsByEmailExcludingId,
  create,
  updateById,
  removeById,
};
