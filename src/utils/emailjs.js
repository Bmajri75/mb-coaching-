// src/utils/emailjs.js
import emailjs from "@emailjs/browser";

// Utilise les variables d'environnement
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Initialise EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const envoyerEmailConfirmation = async (reservationData) => {
  try {
    const templateParams = {
      nom: reservationData.nom,
      email: reservationData.email,
      discipline: reservationData.discipline,
      date: new Date(reservationData.date).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      heure: reservationData.heure,
      tel: reservationData.tel,
      message: reservationData.message || "Aucun message",
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log("Email envoyé avec succès !", response);
    return { success: true, response };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, error };
  }
};
