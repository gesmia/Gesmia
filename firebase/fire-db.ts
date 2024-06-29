/* 'use server' */

import { getFirestore } from "firebase/firestore";
import { FireApp } from "./fire-app";

export const FireDB = getFirestore(FireApp);
