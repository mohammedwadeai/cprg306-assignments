// Import necessary Firestore functions and your db instance
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

// Function to get items from Firestore
export const getItems = async (userId) => {
  const itemsCol = collection(db, "users", userId, "items");
  const itemsSnapshot = await getDocs(query(itemsCol));
  const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return itemsList;
};

// Function to add a new item to Firestore
export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id; // Returns the newly created document's ID
};
