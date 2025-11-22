// src/components/Footer.jsx
import { coach } from "../data/creneaux";

function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 - Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🥊</div>
              <div>
                <h3 className="text-xl font-bold text-white">MB COACHING</h3>
                <p className="text-xs text-accent">
                  MMA • Muay Thai • Grappling
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Coaching sportif privé à Paris 17ème. Développez vos compétences
              en sports de combat avec un coach diplômé BPJEPS.
            </p>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <a
                href="#accueil"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Accueil
              </a>
              <a
                href="#disciplines"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Disciplines
              </a>
              <a
                href="#tarifs"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Tarifs
              </a>
              <a
                href="#apropos"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Colonne 3 - Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>📧 {coach.email}</p>
              <p>📞 {coach.tel}</p>
              <p>
                📍 15 bd Gouvion-Saint-Cyr
                <br />
                75017 Paris
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 MB Coaching - {coach.nom}. Tous droits réservés.</p>
          <p className="mt-2">
            Développé par{" "}
            <a
              href="https://portfolio-mbtech.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              MB-Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
