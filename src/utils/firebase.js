// src/utils/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// Configuration Firebase depuis les variables d'environnement
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firestore (la base de données)
const db = getFirestore(app);

// Fonction pour sauvegarder une réservation
export const sauvegarderReservation = async (reservationData) => {
  try {
    // Crée un document dans la collection "reservations"
    const docRef = await addDoc(collection(db, "reservations"), {
      // Données du client
      nom: reservationData.nom,
      email: reservationData.email,
      tel: reservationData.tel,

      // Détails de la réservation
      discipline: reservationData.discipline,
      date: reservationData.date,
      heure: reservationData.heure,
      message: reservationData.message || "",

      // Informations de paiement
      montant: reservationData.amount || 70,
      paymentId: reservationData.paymentId || "",
      statut: "confirmé",

      // Horodatage automatique
      creeLe: serverTimestamp(),
    });

    console.log("✅ Réservation sauvegardée dans Firebase avec ID:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("❌ Erreur lors de la sauvegarde Firebase:", error);
    return { success: false, error };
  }
};

export { db };
