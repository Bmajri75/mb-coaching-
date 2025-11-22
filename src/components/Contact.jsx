// src/components/Contact.jsx
import { coach, tarif } from "../data/creneaux";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Prêt à <span className="text-primary">Commencer ?</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Contactez-moi pour toute question ou pour réserver votre première
              séance
            </p>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Colonne gauche - Infos */}
            <div className="space-y-6">
              <div className="bg-black/50 border border-primary/20 rounded-xl p-6">
                <h3 className="text-white font-bold mb-4">📍 Adresse</h3>
                <p className="text-gray-300 mb-2">{tarif.lieu}</p>
                <p className="text-accent text-sm">{tarif.metro}</p>
              </div>

              <div className="bg-black/50 border border-primary/20 rounded-xl p-6">
                <h3 className="text-white font-bold mb-4">📞 Téléphone</h3>
                <a
                  href={`tel:${coach.tel}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {coach.tel}
                </a>
              </div>

              <div className="bg-black/50 border border-primary/20 rounded-xl p-6">
                <h3 className="text-white font-bold mb-4">📧 Email</h3>
                <a
                  href={`mailto:${coach.email}`}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {coach.email}
                </a>
              </div>

              <div className="bg-black/50 border border-primary/20 rounded-xl p-6">
                <h3 className="text-white font-bold mb-4">⏰ Horaires</h3>
                <p className="text-gray-300">Lundi - Dimanche : 9h - 20h</p>
                <p className="text-gray-400 text-sm mt-2">Dimanche : Fermé</p>
              </div>
            </div>

            {/* Colonne droite - Map (placeholder) */}
            <div className="bg-black/50 border border-primary/20 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-400 mb-2">Google Maps à intégrer</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=15+bd+Gouvion-Saint-Cyr+75017+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors text-sm"
                >
                  Voir sur Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* CTA final */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Première séance découverte offerte !
            </h3>
            <p className="text-white/90 mb-6">
              30 minutes pour essayer et discuter de vos objectifs, sans
              engagement
            </p>
            <a
              href="#reservation"
              className="inline-block bg-secondary hover:bg-black text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
            >
              Réserver mon cours d'essai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
