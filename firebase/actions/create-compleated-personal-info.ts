'use server'

import { addDoc, collection } from "firebase/firestore";
import { headers } from "next/headers";
import { FireDB } from "../fire-db";

interface Args {
  sessionId: string,
  formInfo: string,
}
export async function createCompleatedPersonalInfo(args: Args) {
  const compleatedPersonalInfoCollection = collection(FireDB, 'comleatedPersonalInfo'); 
  const ipAddress = await headers().get("x-forwarded-for");

  const response = await addDoc(compleatedPersonalInfoCollection, {
    sessionId: args.sessionId.toLowerCase().trim(),
    formInfo: args.formInfo,
    ipAddress: ipAddress || null,
    createdAt: new Date(),
  });

  return response.id;
}