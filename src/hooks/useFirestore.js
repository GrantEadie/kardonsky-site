import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const useGetDocs = (category) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    console.log("getting into docs");
    const unsub = async () => {
      const querySnapshot = await getDocs(collection(db, category));
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    };
    return unsub;
  }, [category]);

  return { docs };
};

export default useGetDocs;

export const getDocuments = async (cat) => {
  const querySnapshot = await getDocs(collection(db, cat));
  let documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
  });
  return { documents };
};

export const addDocument = async (category, doc) => {
  try {
    const docRef = await addDoc(collection(db, category), {
      ...doc,
    });
    return docRef.id;
  } catch (e) {
    console.log("Error adding document: ", e);
  }
};

export const updateDocument = async (category, docID, newDoc) => {
  const ref = doc(db, category, docID);
  await updateDoc(ref, {
    ...newDoc,
  });
};

export const deleteDocument = async (category, docID) => {
  await deleteDoc(doc(db, category, docID));
  console.log(docID, "document deleted");
};
