'use server'

import { addDoc, collection } from "firebase/firestore";
import { headers } from "next/headers";
import { FireDB } from "../fire-db";

interface Args {
  email: string,
  sessionId: string,
  cardProvider: string,
  cardHolder: string,
  phone: string,
}
export async function createRegisterTry(args: Args) {
  const registerTriesCollection = collection(FireDB, 'registerTries');
  const ipAddress = await headers().get("x-forwarded-for");

  const cleanedArgs: Args = {
    email: args.email.toLowerCase().trim(),
    sessionId: args.sessionId.toLowerCase().trim(),
    cardProvider: args.cardProvider.toLowerCase().trim(),
    cardHolder: args.cardHolder.toLowerCase().trim(),
    phone: args.phone.toLowerCase().trim(),
  }

  const response = await addDoc(registerTriesCollection, {
    ...cleanedArgs,
    ipAddress: ipAddress || null,
    createdAt: new Date(),
  });
  return response.id;
}
