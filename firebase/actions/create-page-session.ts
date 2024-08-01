'use server'

import { addDoc, collection } from "firebase/firestore";
import { headers } from "next/headers";
import { FireDB } from "../fire-db";

export async function createPageSession(url: string) {
  const pageSessionCollection = collection(FireDB, 'pageSession'); 
  const ipAddress = await headers().get("x-forwarded-for");

  const response = await addDoc(pageSessionCollection, {
    url: url.trim(),
    ipAddress: ipAddress || null,
    createdAt: new Date(),
  });

  return response.id;
}
