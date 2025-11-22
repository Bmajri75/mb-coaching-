// src/components/StripeCheckout.jsx
import { useState } from "react";
import { envoyerEmailConfirmation } from "../utils/emailjs";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { sauvegarderReservation } from "../utils/firebase";

function StripeCheckout({ formData, onSuccess, onBack }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Crée un Payment Intent (en production, ça se fait côté serveur)
      // Pour le MVP, on simule juste le paiement

      const cardElement = elements.getElement(CardElement);

      // Crée le paiement
      const { error: stripeError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name: formData.nom,
            email: formData.email,
            phone: formData.tel,
          },
        });

      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }

      // Paiement réussi !
      console.log("Paiement réussi !", paymentMethod);

      // Sauvegarde dans Firebase
      await sauvegarderReservation({
        ...formData,
        paymentId: paymentMethod.id,
        amount: 70,
      });

      // Envoie l'email de confirmation
      await envoyerEmailConfirmation(formData);

      // Callback de succès
      onSuccess({
        ...formData,
        paymentId: paymentMethod.id,
        amount: 70,
      });
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">Paiement sécurisé</h3>

      {/* Récapitulatif */}
      <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
        <h4 className="text-white font-bold mb-3">
          Récapitulatif de votre commande :
        </h4>
        <div className="space-y-2 text-gray-300 text-sm mb-4">
          <p>
            🥋 <strong>Discipline :</strong> {formData.discipline}
          </p>
          <p>
            📅 <strong>Date :</strong>{" "}
            {new Date(formData.date).toLocaleDateString("fr-FR", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p>
            🕐 <strong>Heure :</strong> {formData.heure}
          </p>
          <p>
            📍 <strong>Lieu :</strong> 15 bd Gouvion-Saint-Cyr, 75017 Paris
          </p>
        </div>
        <div className="border-t border-primary/30 pt-4">
          <div className="flex justify-between text-white text-xl font-bold">
            <span>Total à payer :</span>
            <span>70,00 €</span>
          </div>
        </div>
      </div>

      {/* Formulaire de paiement */}
      <form onSubmit={handleSubmit}>
        <div className="bg-black/50 border-2 border-primary/30 rounded-xl p-4 mb-6">
          <label className="block text-white font-semibold mb-3">
            Informations de paiement
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#ffffff",
                  "::placeholder": {
                    color: "#9CA3AF",
                  },
                },
                invalid: {
                  color: "#DC2626",
                },
              },
            }}
          />
        </div>

        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-6">
            <p className="text-red-300 text-sm">⚠️ {error}</p>
          </div>
        )}

        {/* Info test */}
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
          <p className="text-accent text-sm mb-2">
            <strong>🧪 Mode Test :</strong> Utilisez ces cartes de test
          </p>
          <p className="text-gray-300 text-xs">
            • Succès : 4242 4242 4242 4242
            <br />
            • Date : n'importe quelle date future
            <br />• CVC : n'importe quel 3 chiffres
          </p>
        </div>

        {/* Boutons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            disabled={loading}
            className="px-6 py-3 bg-black/50 hover:bg-black text-white font-semibold rounded-lg border-2 border-primary/30 transition-all disabled:opacity-50"
          >
            ← Retour
          </button>
          <button
            type="submit"
            disabled={!stripe || loading}
            className="flex-1 px-6 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin">⏳</span>
                <span>Traitement...</span>
              </>
            ) : (
              <>
                <span>🔒</span>
                <span>Payer 70€</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Sécurité */}
      <div className="mt-6 text-center text-gray-400 text-xs">
        <p>🔒 Paiement sécurisé par Stripe • SSL/TLS</p>
        <p>
          Vos informations bancaires ne sont jamais stockées sur nos serveurs
        </p>
      </div>
    </div>
  );
}

export default StripeCheckout;
