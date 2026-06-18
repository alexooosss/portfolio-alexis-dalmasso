var BUT3_DATA = {
  families: [

    /* ─────────────────────────────────── SITE WEB ─────────────────────────────────── */
    {
      name: 'Site web',
      subfamilies: [
        {
          title: 'Site IUT de Toulon',
          type: 'site',
          href: 'https://site-iut-tln.netlify.app/',
          src: 'public/assets/site-accueil2.png',
          alt: 'Site IUT Toulon — page d\'accueil',
          caption: 'Refonte des contenus — site officiel de l\'IUT de Toulon'
        },
        {
          title: 'Guide de Maintenance Prévisionnelle',
          type: 'book',
          caption: 'Guide de maintenance du site Web IUT · 22 pages',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 22; i++) {
              a.push({ src: 'public/assets/maintenance-' + i + '.png', alt: 'Guide maintenance — page ' + i });
            }
            return a;
          })()
        }
      ]
    },

    /* ─────────────────────────────── SIGNALÉTIQUE ──────────────────────────────────── */
    {
      name: 'Signalétique',
      subfamilies: [
        {
          title: 'Panneaux extérieurs',
          type: 'carousel',
          caption: 'Rendus 3D — signalétique directionnelle extérieure par département',
          images: [
            { src: 'public/assets/panneau-ext-iut.png',  alt: 'Panneau extérieur IUT' },
            { src: 'public/assets/panneau-ext-iut2.png', alt: 'Panneau extérieur IUT — vue alternative' },
            { src: 'public/assets/panneau-ext-tc.png',   alt: 'Panneau extérieur TC' },
            { src: 'public/assets/panneau-ext-gbio.png', alt: 'Panneau extérieur GBIO' },
            { src: 'public/assets/panneau-ext-geat.png', alt: 'Panneau extérieur GEAT' },
            { src: 'public/assets/panneau-ext-gmp.png',  alt: 'Panneau extérieur GMP' }
          ]
        },
        {
          title: 'Photos in situ',
          type: 'carousel',
          caption: 'Photomontages — signalétique installée dans l\'environnement réel de l\'IUT',
          images: [
            { src: 'public/assets/insitu-iut-0.png',  alt: 'In situ IUT — vue 0' },
            { src: 'public/assets/insitu-iut-1.png',  alt: 'In situ IUT — vue 1' },
            { src: 'public/assets/insitu-iut-2.png',  alt: 'In situ IUT — vue 2' },
            { src: 'public/assets/insitu-iut-3.png',  alt: 'In situ IUT — vue 3' },
            { src: 'public/assets/insitu-iut-4.png',  alt: 'In situ IUT — vue 4' },
            { src: 'public/assets/insitu-tc-1.png',   alt: 'In situ TC — vue 1' },
            { src: 'public/assets/insitu-tc-2.png',   alt: 'In situ TC — vue 2' },
            { src: 'public/assets/insitu-tc-3.png',   alt: 'In situ TC — vue 3' },
            { src: 'public/assets/insitu-tc-4.png',   alt: 'In situ TC — vue 4' },
            { src: 'public/assets/insitu-gbio-0.png', alt: 'In situ GBIO — vue 0' },
            { src: 'public/assets/insitu-gbio-1.png', alt: 'In situ GBIO — vue 1' },
            { src: 'public/assets/insitu-gbio-2.png', alt: 'In situ GBIO — vue 2' },
            { src: 'public/assets/insitu-gbio-3.png', alt: 'In situ GBIO — vue 3' },
            { src: 'public/assets/insitu-gbio-4.png', alt: 'In situ GBIO — vue 4' },
            { src: 'public/assets/insitu-gbio-5.png', alt: 'In situ GBIO — vue 5' },
            { src: 'public/assets/insitu-gmp-0.png',  alt: 'In situ GMP — vue 0' },
            { src: 'public/assets/insitu-gmp-1.png',  alt: 'In situ GMP — vue 1' },
            { src: 'public/assets/insitu-gmp-2.png',  alt: 'In situ GMP — vue 2' },
            { src: 'public/assets/insitu-gmp-3.png',  alt: 'In situ GMP — vue 3' },
            { src: 'public/assets/insitu-gmp-4.png',  alt: 'In situ GMP — vue 4' },
            { src: 'public/assets/insitu-gmp-5.png',  alt: 'In situ GMP — vue 5' },
            { src: 'public/assets/insitu-gea-1.png',  alt: 'In situ GEA — vue 1' },
            { src: 'public/assets/insitu-gea-2.png',  alt: 'In situ GEA — vue 2' }
          ]
        },
        {
          title: 'Coworking',
          type: 'carousel',
          caption: 'Signalétique complète — espace coworking de l\'IUT de Toulon (15 visuels)',
          images: [
            { src: 'public/assets/coworking-accueil.png',  alt: 'Affiche accueil coworking' },
            { src: 'public/assets/coworking-escaliers.png',alt: 'Affiche escaliers coworking' },
            { src: 'public/assets/coworking-horaires.png', alt: 'Horaires coworking' },
            { src: 'public/assets/coworking-plan2d.png',   alt: 'Plan 2D coworking' },
            { src: 'public/assets/coworking-reglement.png',alt: 'Règlement intérieur coworking' },
            { src: 'public/assets/cw-ferme.png',           alt: 'Affiche coworking fermé' },
            { src: 'public/assets/cw-entree-2.png',        alt: 'Entrée coworking personnel 2' },
            { src: 'public/assets/cw-formulaire.png',      alt: 'Formulaire de demande spécifique' },
            { src: 'public/assets/cw-interdit-manger.png', alt: 'Interdit de manger ou boire' },
            { src: 'public/assets/cw-merci.png',           alt: 'Merci de ne pas perturber' },
            { src: 'public/assets/cw-panneau-entree.png',  alt: 'Panneau entrée coworking' },
            { src: 'public/assets/cw-reservation.png',     alt: 'Réservation module créatif' },
            { src: 'public/assets/cw-reunion.png',         alt: 'Réunion visio coworking' },
            { src: 'public/assets/cw-signature.png',       alt: 'Signature charte utilisateur' },
          ]
        },
        {
          title: 'Chefs de Département',
          type: 'carousel',
          caption: 'Plaques de signalétique — responsables de département IUT · 8 visuels',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 8; i++) {
              a.push({ src: 'public/assets/chefs-dept-' + i + '.png', alt: 'Plaque Chef de Département — ' + i });
            }
            return a;
          })()
        },
        {
          title: 'Bâtiment A, Communication & Amphi',
          type: 'carousel',
          caption: 'Signalétique intérieure — Bâtiment A, Service Communication, SA2I et Amphi Est & Ouest',
          images: [
            { src: 'public/assets/bat-a-entree.png',     alt: 'Panneau entrée Bâtiment A' },
            { src: 'public/assets/bat-a-service-com.png',alt: 'Panneau entrée — côté service communication' },
            { src: 'public/assets/bat-a-admin.png',      alt: 'Panneau Administration' },
            { src: 'public/assets/bat-a-scolarite.png',  alt: 'Panneau Scolarité et Administration' },
            { src: 'public/assets/bat-a-commissions.png',alt: 'Salle des Commissions' },
            { src: 'public/assets/bat-a-micro-ondes.png',alt: 'Affiche micro-ondes espace commun' },
            { src: 'public/assets/entree-comm-iut.png',  alt: 'Panneau Communication IUT' },
            { src: 'public/assets/amphi.png',             alt: 'Panneau Amphi Est et Ouest' }
          ]
        },
        {
          title: 'GEII',
          type: 'carousel',
          caption: 'Signalétique département GEII — secrétariat, fléchage, accès toit',
          images: [
            { src: 'public/assets/geii-secretariat.png',  alt: 'Affichage secrétariat GEII' },
            { src: 'public/assets/geii-flechage.png',     alt: 'Fléchage secrétariat GEII' },
            { src: 'public/assets/geii-acces-toit.png',   alt: 'Accès au toit GEII' }
          ]
        },
        {
          title: 'GIM',
          type: 'carousel',
          caption: 'Signalétique département GIM — secrétariat et fléchage',
          images: [
            { src: 'public/assets/gim-secretariat.png', alt: 'Affichage secrétariat GIM' },
            { src: 'public/assets/gim-flechage.png',    alt: 'Fléchage secrétariat GIM' }
          ]
        },
        {
          title: 'GMP — Signalétique complète',
          type: 'carousel',
          caption: 'Système de signalétique complet pour le département GMP · 47 visuels',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 47; i++) {
              a.push({ src: 'public/assets/gmp-signe-' + i + '.png', alt: 'Signalétique GMP — planche ' + i });
            }
            return a;
          })()
        },
        {
          title: 'Portes de Bureaux',
          type: 'carousel',
          caption: 'Panneaux de portes de bureaux — signalétique enseignants et personnels · 27 visuels',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 27; i++) {
              a.push({ src: 'public/assets/portes-' + i + '.png', alt: 'Porte de bureau — ' + i });
            }
            return a;
          })()
        },
        {
          title: 'Secrétariats Départements',
          type: 'carousel',
          caption: 'Signalétique des secrétariats — tous départements IUT · 8 visuels',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 8; i++) {
              a.push({ src: 'public/assets/secretariats-' + i + '.png', alt: 'Secrétariat — ' + i });
            }
            return a;
          })()
        }
      ]
    },

    /* ──────────────────────────────────── PRINT ─────────────────────────────────────── */
    {
      name: 'Print',
      subfamilies: [
        {
          title: 'Affiches Sensation Formule 1',
          type: 'carousel',
          caption: 'Série de 36 affiches + couvertures — projet Sensation Formule 1 · Promo 2026',
          images: (function () {
            var a = [
              { src: 'public/assets/affiche-F1.jpg',    alt: 'Affiche Sensation Formule 1 — format portrait' },
              { src: 'public/assets/affiche-f1-a3.jpg', alt: 'Affiche Sensation Formule 1 — format A3' }
            ];
            for (var i = 1; i <= 36; i++) {
              a.push({ src: 'public/assets/affiche-sf1-' + i + '.png', alt: 'Affiche SF1 — planche ' + i });
            }
            return a;
          })()
        },
        {
          title: 'Cartons Individuels',
          type: 'carousel',
          caption: 'Cartons individuels — remis aux étudiants · 5 visuels',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 5; i++) {
              a.push({ src: 'public/assets/carton-' + i + '.png', alt: 'Carton individuel — ' + i });
            }
            return a;
          })()
        },
        {
          title: 'Trophée — Journée d\'Intégration Sportive',
          type: 'carousel',
          caption: 'Trophée gravé — Journée d\'intégration sportive TC 2026 · conception graphique',
          images: [
            { src: 'public/assets/trophee-reel.webp', alt: 'Trophée Vainqueur — Journée intégration TC 2026' }
          ]
        },
        {
          title: 'Carnet ACD-GMP',
          type: 'book-flip',
          caption: 'Carnet de l\'Assemblée des Chefs de Département GMP · 36 pages',
          images: (function () {
            var a = [{ src: 'public/assets/carnet-ACD-GMP.png', alt: 'Carnet ACD-GMP — page 1' }];
            for (var i = 2; i <= 36; i++) {
              a.push({ src: 'public/assets/carnet-ACD-GMP-' + i + '.png', alt: 'Carnet ACD-GMP — page ' + i });
            }
            return a;
          })()
        }
      ]
    },

    /* ─────────────────────────────── ÉVÉNEMENTS ────────────────────────────────────── */
    {
      name: 'Événements',
      subfamilies: [
        {
          title: 'Visite institutionnelle IUT',
          type: 'carousel',
          caption: 'Photos lors d\'une visite institutionnelle — table IUT de Toulon habillée aux couleurs de l\'établissement',
          images: [
            { src: 'public/assets/Ministre1.jpeg', alt: 'Visite institutionnelle — photo 1' },
            { src: 'public/assets/Ministre2.jpeg', alt: 'Visite institutionnelle — photo 2' },
            { src: 'public/assets/Ministre3.jpeg', alt: 'Visite institutionnelle — photo 3' },
            { src: 'public/assets/Ministre4.jpeg', alt: 'Visite institutionnelle — photo 4' },
            { src: 'public/assets/Ministre5.jpeg', alt: 'Visite institutionnelle — photo 5' }
          ]
        }
      ]
    }

  ]
};

/* ══════════════════════════════════════════════════════
   BUT 2 — Stage ACD TC · IUT de Toulon · 2025
   ══════════════════════════════════════════════════════ */
var BUT2_DATA = {
  families: [

    /* ─────────────────── IDENTITÉ VISUELLE ─────────────────── */
    {
      name: 'Identité Visuelle',
      subfamilies: [
        {
          title: 'Logo & Charte Graphique',
          type: 'carousel',
          caption: 'Identité visuelle ACD TC — logo, déclinaisons et charte graphique · 9 visuels',
          images: [
            { src: 'public/assets/acd-tc-charte.png',          alt: 'Charte graphique ACD TC' },
            { src: 'public/assets/acd-tc-logo-complet.png',    alt: 'Logo ACD TC complet avec baseline' },
            { src: 'public/assets/acd-tc-logo-couleurs.png',   alt: 'Logo ACD TC deux couleurs — version finale' },
            { src: 'public/assets/acd-tc-logo.png',            alt: 'Logo ACD TC' },
            { src: 'public/assets/acd-tc-logo-blanc.png',      alt: 'Logo ACD TC — fond blanc' },
            { src: 'public/assets/acd-tc-icone.png',           alt: 'Icône ACD TC' },
            { src: 'public/assets/acd-tc-icone-solo.png',      alt: 'Icône ACD TC seule' },
            { src: 'public/assets/acd-tc-icone-solo-blanc.png',alt: 'Icône ACD TC — version blanche' },
            { src: 'public/assets/acd-tc-i-love.png',          alt: 'I Love TC Toulon — badge événement' }
          ]
        },
        {
          title: 'Mockups & Applications',
          type: 'carousel',
          caption: 'Déclinaisons de l\'identité — affichages grand format, goodies, tote bags · 12 visuels',
          images: [
            { src: 'public/assets/acd-tc-mockup-affichage.png',      alt: 'Mockup affichage ACD TC' },
            { src: 'public/assets/acd-tc-mockup-affichage-grand.png',alt: 'Mockup grand format ACD TC' },
            { src: 'public/assets/acd-tc-mockup-icone.png',          alt: 'Mockup icône ACD TC' },
            { src: 'public/assets/acd-tc-tote-1.png', alt: 'Tote bag ACD TC — variante 1' },
            { src: 'public/assets/acd-tc-tote-2.png', alt: 'Tote bag ACD TC — variante 2' },
            { src: 'public/assets/acd-tc-tote-3.png', alt: 'Tote bag ACD TC — variante 3' },
            { src: 'public/assets/acd-tc-tote-4.png', alt: 'Tote bag ACD TC — variante 4' },
            { src: 'public/assets/acd-tc-tote-5.png', alt: 'Tote bag ACD TC — variante 5' },
            { src: 'public/assets/acd-tc-tote-6.png', alt: 'Tote bag ACD TC — variante 6' },
            { src: 'public/assets/acd-tc-tote-7.png', alt: 'Tote bag ACD TC — variante 7' },
            { src: 'public/assets/acd-tc-tote-8.png', alt: 'Tote bag ACD TC — variante 8' },
            { src: 'public/assets/acd-tc-tote-9.png', alt: 'Tote bag ACD TC — variante 9' }
          ]
        }
      ]
    },

    /* ──────────────────── CARNET ACD TC ────────────────────── */
    {
      name: 'Carnet & Guide Hébergements',
      subfamilies: [
        {
          title: 'Carnet de l\'Assemblée',
          type: 'book-flip',
          caption: 'Carnet de l\'Assemblée des Chefs de Département TC · 36 pages',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 36; i++) {
              a.push({ src: 'public/assets/carnet-acd-tc-' + i + '.png', alt: 'Carnet ACD TC — page ' + i });
            }
            return a;
          })()
        },
        {
          title: 'Sélection Hôtelière — Toulon',
          type: 'carousel',
          caption: 'Guide des hébergements pour les délégués extérieurs — sélection hôtels Toulon · 14 visuels',
          images: (function () {
            var a = [];
            for (var i = 1; i <= 14; i++) {
              a.push({ src: 'public/assets/hotel-' + i + '.png', alt: 'Hébergement Toulon — ' + i });
            }
            return a;
          })()
        }
      ]
    },

    /* ──────────────────────── MÉDIAS ───────────────────────── */
    {
      name: 'Médias',
      subfamilies: [
        {
          title: 'Émission Télévisée ACD TC',
          type: 'video',
          /* Fichier local 1 Go — non copié dans assets (GitHub Pages incompatible).
             Pointer vers le fichier source relatif à stages.html */
          src: 'https://www.youtube.com/watch?v=sv12aG-9lSM',
          caption: 'Émission télévisée 7 min — présentation des formations Techniques de Commercialisation · ACD TC 2025'
        },
        {
          title: 'Article de Presse',
          type: 'pdf',
          href: 'public/assets/acd-tc-article.pdf',
          caption: 'Article de presse officiel — Assemblée des Chefs de Département TC 2025'
        }
      ]
    }

  ]
};
