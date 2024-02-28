import db from "@/moduls/db";
import React from "react";

type accountType = { id: string; name: string } | null;
async function Account({ params }: { params: { id: string } }) {
  let account: accountType = { id: "", name: "" };
  try {
    account = await db.account.findFirst({
      select: { id: true, name: true },
      where: { id: params.id },
    });
  } catch (error) {
    console.error(error);
  }

  let workSessions: {
    id: string;
    startsOn: Date | null;
    description: string | null;
    hours: number | null;
  }[] = [];
  try {
    workSessions = await db.workSession.findMany({
      select: { id: true, startsOn: true, description: true, hours: true },
      where: { accountId: params.id },
    });
    console.log(workSessions);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="px-10 py-4 border min-w-full min-h-10 space-y-10">
      <h1 className=" text-center text-5xl font-bold ">{account?.name} </h1>
      {workSessions?.map((wks) => (
        <div key={wks.id} className="flex flex-col gap-4">
          <h1>{wks.description}</h1>
          <h1>{wks.startsOn?.toString()}</h1>
          <h1>{wks.hours}</h1>
        </div>
      ))}
    </div>
  );
}

export default Account;
