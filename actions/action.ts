"use server";
import db from "@/moduls/db";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreateAccountSchema = z.object({
  name: z.string().min(2).max(40),
});

export const createAccount = async (rawData: FormData) => {
  const res = CreateAccountSchema.safeParse({
    name: rawData.get("name"),
  });
  // console.log(res);
  if (res.success) {
    const data = res.data;
    const account = await db.account.create({
      data,
    });
    // console.log(account);
    redirect(`/accounts/${account.id}`);
  } else {
    console.log(res.error.message);
  }
};
