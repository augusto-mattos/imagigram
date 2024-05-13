// auth.js
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Usuário registrado com sucesso!');
    return userCredential;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.message);
    throw error;
  }
};
