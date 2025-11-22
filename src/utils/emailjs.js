// src/utils/emailjs.js
import emailjs from "@emailjs/browser";

// ⚠️ REMPLACE CES VALEURS PAR LES TIENNES
const EMAILJS_PUBLIC_KEY = "sBL6TTB1cM1NUU0Ni"; // De Account > General
const EMAILJS_SERVICE_ID = "service_rpvt59c"; // De Email Services
const EMAILJS_TEMPLATE_ID = "template_x39lhvt"; // De Email Templates

// Initialise EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Fonction pour envoyer l'email de confirmation
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
