"use client";
import { useState } from "react";
import { createAccount } from "@/actions/action";
import { revalidatePath } from "next/cache";

function AccountCreater() {
  const [modAdd, setModAdd] = useState(false);

  if (!modAdd)
    return (
      <div className="inline-flex p-0 m-0 group items-center  justify-center  ">
        <div className="inline-flex p-0 m-0 group gap-1">
          <button
            className="hover:underline hover:opacity-80 "
            onClick={() => {
              setModAdd(true);
            }}
          >
            +Add Account{" "}
          </button>
          <span className=" block  group-hover:rotate-45  transition-all group-hover:text-yellow-500">
            &rarr;
          </span>
        </div>
      </div>
    );
  const handleAction = async (formData: FormData) => {
    await createAccount(formData);
    setModAdd(false);
    revalidatePath("/");
  };
  return (
    <>
      <div>
        <h1>Create Account</h1>
        <form className=" flex flex-col gap-1" action={handleAction}>
          <label
            htmlFor="Username"
            className="px-12 py-3 relative block rounded-md border border-gray-200 shadow-sm focus-within:border-white  mt-2"
          >
            <input
              type="text"
              id="Username"
              name="name"
              className="peer border-none bg-transparent placeholder-transparent  focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Account"
            />

            <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-transparent p-0.5 text-xs text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
              Account
            </span>
          </label>

          <div className="flex gap-2 mt-4 justify-between items-center">
            <button
              className="inline-block rounded border border-slate-400 bg-slate-400 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-slate-400 focus:outline-none focus:ring active:text-indigo-500"
              type="submit"
            >
              Create
            </button>

            {/* Border */}

            <button
              type="button"
              className="inline-block rounded border border-slate-400 px-12 py-3 text-sm font-medium text-slate-400 hover:bg-slate-400 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
              onClick={() => {
                setModAdd(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountCreater;
