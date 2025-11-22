// src/utils/stripe.js
import { loadStripe } from "@stripe/stripe-js";

// ⚠️ REMPLACE CETTE CLÉ PAR TA CLÉ PUBLIQUE STRIPE (pk_test_...)
const stripePromise = loadStripe(
  "pk_test_51SWJuUI0cgfVhFh0ZvndSpZUclzUz8kfN3hRCBxvtpijz2S1VvEZRdrA7QBfhQR8Yx50XCkfVmJcVszDw6y782zJ00DVH4kcQX"
);

export default stripePromise;

// Prix du coaching
export const PRIX_SEANCE = 7000; // 70€ en centimes (Stripe utilise les centimes)

// Informations de paiement
export const PAYMENT_INFO = {
  currency: "eur",
  description: "Séance de coaching privé MB Coaching",
  amount: PRIX_SEANCE,
};
