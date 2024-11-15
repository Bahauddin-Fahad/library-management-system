import { Member, Prisma } from "@prisma/client";
import prisma from "../../utils/prisma";

const createMemberIntoDB = async (
  payload: Prisma.MemberCreateInput
): Promise<Member> => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};
const getAllMembersFromDB = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getSingleMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId,
    },
  });

  return result;
};
const updateMemberIntoDB = async (
  payload: Prisma.MemberUpdateInput,
  memberId: string
) => {
  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });

  const result = await prisma.member.update({
    where: { memberId },
    data: payload,
  });
  return result;
};

const deleteMemberFromDB = async (memberId: string) => {
  await prisma.member.findUniqueOrThrow({
    where: { memberId },
  });

  const result = await prisma.member.delete({
    where: { memberId },
  });

  return result;
};

export const MemberServices = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
