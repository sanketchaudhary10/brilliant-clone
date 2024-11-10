// src/pages/Authentication/authHelpers.ts
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../src/firebaseConfig';

export const checkAuth = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, callback);
};
