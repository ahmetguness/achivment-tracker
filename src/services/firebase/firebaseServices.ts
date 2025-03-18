import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const createUser = async (
  userType: string
): Promise<{ success: boolean; userId?: string; error?: string }> => {
  try {
    const userCollectionRef = collection(db, userType);

    const docRef = await addDoc(userCollectionRef, {});

    console.log(`User created successfully: ${docRef.id}`);
    return { success: true, userId: docRef.id };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error: (error as Error).message };
  }
};
