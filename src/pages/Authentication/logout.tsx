import { getAuth, signOut } from 'firebase/auth';

const logout = () => {
  const auth = getAuth();
  return signOut(auth);
};

export default logout;
