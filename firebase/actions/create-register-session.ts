'use server'

import { addDoc, collection } from "firebase/firestore";
import { headers } from "next/headers";
import { FireDB } from "../fire-db";

interface Args {
  sessionId: string,
  countryCode?: string,
}
export async function createRegisterSession(args: Args) {
  const registerSessionCollection = collection(FireDB, 'registerSession'); 
  const ipAddress = await headers().get("x-forwarded-for");

  const response = await addDoc(registerSessionCollection, {
    sessionId: args.sessionId.toLowerCase().trim(),
    countryCode: args.countryCode?.toLowerCase().trim() || null,
    ipAddress: ipAddress || null,
    createdAt: new Date(),
  });

  return response.id;
}