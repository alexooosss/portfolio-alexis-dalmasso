/* Textes d'introduction pour chaque compétence selon l'année (Progression MDEBE) */
var INTROS_COMPETENCES = {
  "BUT 1": {
    "Marketing": "Cette première année s'est concentrée sur la capacité à construire une offre commerciale simple. J'ai appris à analyser l'environnement d'une entreprise, à repérer des sources d'informations fiables et à mettre en œuvre des études de marché élémentaires. L'objectif était d'assimiler les fondamentaux : choisir une cible pertinente, définir un positionnement et concevoir une offre cohérente réunissant produit, prix, distribution et communication.",
    "Vente": "Mon initiation à la vente a débuté par la préparation rigoureuse de l'entretien commercial. J'ai acquis les méthodes pour structurer un plan de découverte, profiler un prospect et concevoir un argumentaire de vente centré sur la traduction de l'offre en solutions. La création d'Outils d'Aide à la Vente (OAV) efficaces et l'apprentissage des codes d'expression professionnels ont posé les fondations de ma démarche de prospection.",
    "Communication": "La découverte de la communication commerciale a été axée sur la structuration d'un plan de communication. J'ai été formé à l'identification précise des cibles et des objectifs, tout en veillant à la cohérence avec le mix-marketing global. Cette année m'a permis de réaliser mes premiers supports simples (print, affiches) et d'analyser de manière pertinente l'impact et l'efficacité des médias sociaux et du hors-média."
  },
  "BUT 2": {
    "Marketing": "Ce champ de compétences m’a permis d’explorer les mécanismes fondamentaux de l’analyse de marché, de la stratégie d’offre et du positionnement dans des environnements complexes. À travers plusieurs projets concrets, j’ai appris à concevoir des solutions marketing cohérentes et pertinentes, en tenant compte des enjeux économiques, sociaux et environnementaux.",
    "Vente": "Grâce aux mises en situation professionnelles, j’ai renforcé ma capacité à argumenter, convaincre et négocier en adaptant mon discours aux besoins de l’interlocuteur. J’ai également appris à intégrer les aspects juridiques, financiers et stratégiques dans l’acte de vente, tout en assurant un suivi rigoureux de la performance commerciale.",
    "Communication": "Les projets réalisés m’ont permis de concevoir et de piloter des stratégies de communication variées : 360°, digitale, événementielle. Je me suis particulièrement investi dans la création de supports visuels et dans l’élaboration de messages cohérents, en fonction des cibles, des canaux et des objectifs définis.",
    "Marketing Digital": "Le marketing digital m’a offert un terrain d’expérimentation riche, entre analyse de données, stratégie de contenu et création de parcours clients personnalisés. J’ai su mobiliser différents leviers numériques pour répondre à des problématiques concrètes, en intégrant des indicateurs de performance et des outils adaptés.",
    "E-Business": "J’ai acquis une compréhension globale de la gestion de projet digital et de la logique entrepreneuriale. De la modélisation d’un business model à l’identification des ressources clés, en passant par la coordination d’événements, j’ai appris à structurer et enrichir des projets collaboratifs à forte valeur ajoutée."
  },
  "BUT 3": {
    "Marketing": "L'aboutissement de ce cursus m'a amené à concevoir des solutions clientes étendues à tous les secteurs d'activités. J'ai développé une posture stratégique capable d'élaborer un plan marketing dans des environnements instables et de mettre en place des outils de veille prédictive. L'intégration concrète de la Responsabilité Sociétale des Entreprises (RSE) est devenue un levier central de création de valeur pour faire évoluer l'offre globale.",
    "Vente": "J'ai atteint le niveau requis pour mener et piloter une vente complexe. Face à des acheteurs professionnels, j'ai appris à décrypter des techniques d'achat spécifiques et à élaborer des outils de gestion financière efficaces, tels que la facturation et les échéanciers. La maîtrise des codes propres aux différents univers (BtoB, finance, industrie) m'a permis de négocier des accords à fort enjeu.",
    "Marketing Digital": "Positionné en tant qu'initiateur de projets digitaux, j'ai appris à exploiter les données de masse en mobilisant les outils de traitement de l'information adéquats. Cette année a été consacrée à l'élaboration de cahiers des charges e-business poussés, à l'amélioration continue de la relation client grâce aux indicateurs de performance, et à la proposition de solutions performantes adaptées à la chaîne logistique du commerce en ligne.",
    "E-Business": "En assumant un rôle de responsable de projet ou d'entreprise, j'ai développé ma capacité à concevoir un modèle d'affaires complet, incluant les sources de valeur, les externalités et la gestion des parties prenantes. De l'élaboration experte des documents financiers à la validation de la conformité du modèle, j'ai pu piloter de façon proactive le développement de projets entrepreneuriaux complexes."
  }
};

/* Portfolio traces data — converted from src/data/traces.ts */
/* global TRACES */
var TRACES = [

  /* ========== MARKETING ========== */
  {
    id: 'mkt-ac1', year: 'BUT 3', competence: 'Marketing',
    title: "AC 1 : Mettre en place des outils de veille pour anticiper les évolutions de l'environnement",
    projet: "Contexte : Lors d'une SAÉ, j'ai été chargé d'étudier la crise médiatique et le scandale entourant la marque SHEIN et son pop-up store au BHV Marais en novembre 2025.\nAction : J'ai mis en place un système de veille et d'analyse de données (Social Listening) en extrayant un corpus de 6 041 tweets. À l'aide du logiciel STELAIR, j'ai cartographié la diffusion de la crise (Histogrammes, Rankflow, Bipartite Author Tag Network) pour identifier les phases du scandale (émergence, pic, déclin) et repérer les techniques de subversion informationnelle (usage de SaaS B2B, astroturfing).",
    bilan: "Points Forts :\nMaîtrise technique des outils de Data Visualization : Capacité à transformer une masse de données brutes en graphiques clairs et exploitables.\nProfondeur d'analyse stratégique : Analyse de l'infrastructure technique derrière la crise (automatisation, ingénierie du débat).\nEsprit de synthèse : Capacité à découper une crise complexe en phases distinctes.\n\nAxes d'amélioration :\nPasser d'une veille « réactive » à « proactive » : Configurer des outils d'alerte en temps réel pour capter les signaux faibles.\nDiversification des sources : Croiser les données de X avec d'autres plateformes (TikTok, LinkedIn).",
    livrableUrl: "AC BUT 3/MARKETING/Rapport d'analyse SHEIN _ BHV.pdf"
  },
  {
    id: 'mkt-ac2', year: 'BUT 3', competence: 'Marketing',
    title: "AC 2 : Élaborer une stratégie marketing dans un environnement instable",
    projet: "Contexte : Audit et redressement d'AZUR 83, une auto-école locale évoluant dans un environnement instable (ubérisation, inflation, ZFE, permis à 17 ans).\nAction : Co-réalisation d'un audit complet (PESTEL, Porter, SWOT). Identification d'une position vulnérable (« Stuck in the middle ») avec une marge nette de 1,3%. Élaboration d'un plan stratégique sur 5 ans : pivot vers une stratégie de « Différenciation par la Qualité » (simulateurs, transition écologique de la flotte).",
    bilan: "Points Forts :\nMaîtrise des outils de diagnostic stratégique : Extraire des problèmes business réels à partir d'outils théoriques.\nRecommandations pragmatiques : Proposition d'une restructuration du modèle économique face à l'instabilité.\nVision à long terme : Construction d'un plan phasé sur 5 ans.\n\nAxes d'amélioration :\nApprofondissement financier : Détailler le plan de financement de la transition écologique (ROI, subventions).\nIntégration de KPIs de suivi : Définir des indicateurs trimestriels pour ajuster la stratégie en temps réel.",
    livrableUrl: "AC BUT 3/MARKETING/Auto-école Stratégie d'entreprise.pdf"
  },
  {
    id: 'mkt-ac3', year: 'BUT 3', competence: 'Marketing',
    title: "AC 3 : Faire évoluer l'offre à l'aide de leviers de création de valeur",
    projet: "Contexte : Consultants pour TechSolutions (édition de logiciels). Problématique de dispersion des données clients et fragmentation de la relation suite à une croissance de 25%.\nAction : Élaboration d'un CDC complet. Cartographie du parcours client pour identifier les pertes de valeur. Rédaction des spécifications fonctionnelles, définition du budget (30-60 k€) et planification de la migration.\nDéfinition des besoins numériques : centralisation des flux, Marketing Automation et interopérabilité avec l'ERP. Planification du déploiement (21 semaines).",
    bilan: "Points Forts :\nAlignement « Tech & Business » : Traduire un problème stratégique en une solution technique chiffrée.\nVision 360° du cycle de vie client : Intégration de l'automatisation et de la fidélisation (Life Time Value).\nMaîtrise de la gestion de projet digital : Traduire un besoin métier en spécifications fonctionnelles claires.\n\nAxes d'amélioration :\nAnticipation des risques : Focus sur la conduite du changement et la gouvernance.\nAnalyse comparative (Benchmark) : Audit direct des solutions du marché (Salesforce vs HubSpot) pour affiner le budget.\nDétails du POC (Proof of Concept) : Préciser les critères exacts de validation de l'API avant déploiement.\nCulture Data (RGPD) : Intégration des contraintes de sécurité dès la phase de conception.",
    livrableUrl: "AC BUT 3/MARKETING/CDC Dalmasso livingstone lodier merlo.pdf"
  },
  {
    id: 'mkt-ac4', year: 'BUT 3', competence: 'Marketing',
    title: "AC 4 : Intégrer la RSE dans la stratégie de l'offre",
    projet: "Contexte : Évaluation de la pertinence de l'intégration du télétravail comme outil RSE.\nAction : Analyse des impacts sous les prismes social (QVT), écologique (carbone) et économique. Audit des risques (isolement, cybersécurité) pour formuler des recommandations managériales.",
    bilan: "Points Forts :\nVision systémique de la RSE : Intégration dans le squelette même de l'entreprise (management, climat).\nEsprit dialectique et nuancé : Analyse des risques psychosociaux montrant une maturité managériale.\n\nAxes d'amélioration :\nLien direct avec le client final : Expliquer comment cette politique devient un argument de vente externe (Marque Employeur).\nMise en place de KPIs RSE : Proposer des simulateurs de baisse d'émissions de CO2 par salarié.",
    livrableUrl: "AC BUT 3/MARKETING/Rapport Télétravail Dalmasso Livingstone.pdf"
  },

  /* ========== VENTE ========== */
  {
    id: 'vente-ac1', year: 'BUT 3', competence: 'Vente',
    title: "AC 1 : Identifier les techniques d'achat employées par un acheteur professionnel",
    projet: "Contexte : Négociation d'un contrat de co-branding pour des gourdes entre Patagonia (acheteur grand compte) et Klean Kanteen.\nAction : Analyse du cahier des charges de l'acheteur pour comprendre ses leviers (RSE, délais, volumes). Structuration d'une offre commerciale et édition d'un devis complexe de 40 704 € TTC.",
    bilan: "Points Forts :\nAnalyse du profil de l'acheteur (Personas B2B) : Compréhension des motivations réelles (image de marque, sécurité supply chain).\nMaîtrise de la vente complexe : Structuration d'une proposition chiffrée solide face à des volumes élevés.\n\nAxes d'amélioration :\nCartographie du circuit de décision : Améliorer l'identification de la « matrice de décision » (finance, technique, RSE).\nAnticipation des objections agressives : Préparer des BATNA plus poussés pour protéger la marge nette.",
    livrableUrl: "AC BUT 3/VENTE/Cas klean kanteen 2026 Acheteur Fournisseur.pdf"
  },
  {
    id: 'vente-ac2', year: 'BUT 3', competence: 'Vente',
    title: "AC 2 : Élaborer des outils de gestion et de calcul efficaces",
    projet: "Contexte : Conception d'un outil de facturation pour une prestation de teambuilding de 50 participants.\nAction : Élaboration d'un document de synthèse regroupant : forfait activités (7 500 €), restauration (1 450 €) et encadrement (700 €). Calcul des remises (5%), de la TVA (20%) et du net à payer.",
    bilan: "Points Forts :\nRigueur mathématique et fiscale : Manipulation de volumes et taux sans erreur.\nTransparence de l'offre : Ventilation précise des prestations pour réduire les freins à l'achat.\n\nAxes d'amélioration :\nAutomatisation de l'outil : Développer une matrice Excel liée pour générer des devis en temps réel.\nPrécision des conditions de règlement : Ajouter un échéancier de paiement (acomptes) pour sécuriser la trésorerie.",
    livrableUrl: "AC BUT 3/VENTE/Facture Time on target.pdf"
  },
  {
    id: 'vente-ac3', year: 'BUT 3', competence: 'Vente',
    title: "AC 3 : Maîtriser les codes propres à l'univers spécifique rencontré",
    projet: "Contexte : Simulation de négociation de crise (prise d'otage en boulangerie).\nAction : Incarner un profil en détresse pour comprendre les leviers de désescalade. Travail sur le non-verbal et l'écoute active pour aboutir à une reddition pacifique.",
    bilan: "Points Forts :\nAdaptabilité aux contextes atypiques : Compréhension des leviers psychologiques (ego, considération).\nMaîtrise de l'intelligence émotionnelle : Identifier le besoin non satisfait derrière l'agressivité.\n\nAxes d'amélioration :\nGestion du détachement : Garder une distance analytique pour ne pas se laisser submerger par la tension.\nTransposition corporate : Tester ces leviers dans d'autres univers (finance, industrie) aux codes très différents.",
    livrableUrl: "AC BUT 3/VENTE/Nego Sketch Retali.pdf"
  },

  /* ========== MARKETING DIGITAL ========== */
  {
    id: 'dig-ac1', year: 'BUT 3', competence: 'Marketing Digital',
    title: "AC 1 : Exploiter les données de masse en mobilisant les bons outils de traitement",
    projet: "Contexte : Étude sur le Prompt Engineering pour comprendre l'influence du ton sur la qualité des réponses.\nAction : Conception d'un protocole testant 4 tons. Mise en place d'une grille quantitative (KPIs : Richesse, Créativité, Qualité des explications). Compilation des données révélant l'effet de surcompensation du ton dénigrant.",
    bilan: "Points Forts :\nRigueur méthodologique : Transformer une observation qualitative en données exploitables.\nEsprit d'analyse : Interpréter les comportements de l'IA au-delà des chiffres.\n\nAxes d'amélioration :\nÉlargissement du corpus : Automatiser l'extraction via API pour une représentativité statistique accrue.\nComparaison multi-modèles : Inclure GPT-4 ou Claude pour identifier des biais universels.",
    livrableUrl: "AC BUT 3/MARKETING DIGITAL/Dossier analyse trois IA Tons.pdf"
  },
  {
    id: 'dig-ac2', year: 'BUT 3', competence: 'Marketing Digital',
    title: "AC 2 : Mettre en œuvre des spécificités du marketing digital",
    projet: "Contexte : Création et déploiement d'un projet web complet.\nAction : Gestion du cycle de vie : arborescence, UX/UI, intégration et déploiement. Optimisation responsive, temps de chargement, SEO sémantique et placement des CTA.",
    bilan: "Points Forts :\nCompétence « Hands-on » : Capacité à produire et déployer un actif digital en autonomie.\nMaîtrise de l'UX/UI : Structurer l'information pour guider l'utilisateur vers la conversion.\n\nAxes d'amélioration :\nStratégie d'Acquisition (A/B Testing) : Lancer des campagnes payantes pour tester des variantes de Landing Pages.\nTracking & Analytics : Implémenter un plan de taggage complet (GA4) via Google Tag Manager.",
    livrableUrl: "https://vortex-tech.netlify.app/"
  },
  {
    id: 'ebiz-ac8', year: 'BUT 3', competence: 'Marketing Digital',
    title: "AC 3 : Élaborer un cahier des charges e-business",
    projet: "Contexte : Dans le cadre de la spécialité MDEBE, j'ai travaillé sur la problématique de transition numérique de TechSolutions, une PME dont la croissance était freinée par une fragmentation extrême des données clients (silos entre Excel, Outlook et outils d'emailing).\nAction : J'ai corédigé un cahier des charges e-business structurant pour l'entreprise. Mon rôle a été de définir les besoins numériques précis : centralisation des flux de données, automatisation des processus de vente (Marketing Automation) et interopérabilité du futur CRM avec l'écosystème digital existant (ERP, outils de paie). J'ai également participé à l'élaboration du planning de déploiement (21 semaines) et à la définition du budget d'investissement (entre 30 et 60 k€).",
    bilan: "Points Forts :\nMaîtrise de la méthodologie de gestion de projet digital : Capacité à structurer un besoin métier complexe en spécifications fonctionnelles claires, indispensables pour tout projet e-business.\nIntégration de la culture Data (RGPD) : J'ai intégré des contraintes strictes de sécurité et de conformité aux données dès la phase de conception.\nDéfinition de KPIs de performance digitale : J'ai su fixer des objectifs de conversion quantifiables (+15 % de conversion lead/client).\n\nAxes d'amélioration :\nBenchmark technique approfondi : Pour un projet e-business de cette ampleur, j'aurais aimé pousser davantage l'analyse comparative des infrastructures techniques (SaaS vs On-premise).\nExpérience Utilisateur (UX) du back-office : Le cahier des charges se concentre beaucoup sur les fonctionnalités métier. J'aurais pu ajouter une section sur les exigences d'interface pour les utilisateurs internes.",
    livrableUrl: "AC BUT 3/MARKETING DIGITAL/CDC Dalmasso livingstone lodier merlo.pdf"
  },
  {
    id: 'dig-ac4', year: 'BUT 3', competence: 'Marketing Digital',
    title: "AC 4 : S'appuyer sur les indicateurs de performance pour améliorer la relation client",
    projet: "Contexte : Audit du modèle Chronodrive pour comprendre la fidélisation dans un modèle 100% digital.\nAction : Cartographie du parcours via un « Service Blueprint ». Analyse des KPIs (NPS, CSAT) pour piloter la « récupération de service » (SAV, remboursements).",
    bilan: "Points Forts :\nMaîtrise du Blueprint : Visualiser la circulation de la donnée entre marketing, SAV et IT.\nCompréhension de la récupération de service : Utiliser l'insatisfaction comme levier de fidélisation.\n\nAxes d'amélioration :\nDashboard interactif : Concevoir une maquette de tableau de bord simulant le suivi en temps réel du NPS.\nAnalyse prédictive (Churn) : Étudier comment les baisses de fréquence de connexion prédisent le départ client.",
    livrableUrl: "AC BUT 3/MARKETING DIGITAL/Chronodrive groupe 3.pdf"
  },
  {
    id: 'ebiz-ac7', year: 'BUT 3', competence: 'Marketing Digital',
    title: "AC 5 : Proposer des solutions adaptées aux spécificités de la chaîne logistique du e-commerce",
    projet: "Contexte : Dans le cadre de la création du Business Plan de « NutriShot » (startup de boissons fonctionnelles), nous avons opté pour un modèle économique de vente directe aux consommateurs (D2C) via abonnement en ligne.\nAction : J'ai participé à la définition d'une chaîne logistique (Supply Chain) e-commerce alignée avec notre positionnement écoresponsable : ancrage local avec une production 100 % français/européen, suppression du plastique pour des emballages en verre (recyclable type 1) et colis FSC. Pour le dernier kilomètre : partenariat avec des flottes de coursiers à vélo pour Paris intra-muros et compensation carbone certifiée pour le reste du territoire.",
    bilan: "Points Forts :\nCompréhension du « Dernier Kilomètre » : Conscience du coût financier et écologique de l'étape la plus critique du e-commerce.\nAlignement Logistique et Marketing : En e-commerce, la logistique est aussi un outil de fidélisation. L'emballage (l'unboxing) et l'engagement carbone font partie intégrante de l'expérience client NutriShot.\n\nAxes d'amélioration :\nLogistique des retours (Reverse Logistics) : Modéliser la procédure et le coût de gestion des retours clients.\nModélisation de l'externalisation (3PL) : Sourcer et chiffrer précisément l'intervention d'un prestataire logistique externe spécialisé en fulfillment.",
    livrableUrl: "AC BUT 3/MARKETING DIGITAL/NutriShot Pitch deck.pdf"
  },

  /* ========== E-BUSINESS ========== */
  {
    id: 'ebiz-ac1', year: 'BUT 3', competence: 'E-Business',
    title: "AC 1 : Concevoir un modèle d'affaires complet",
    projet: "Contexte : Création de NutriShot (shots nutritionnels). Modèle D2C par abonnement.\nAction : Définition des sources de valeur (innovation liquide), des parties prenantes et des externalités positives (verre recyclable, livraison vélo). Synthèse en Pitch Deck.",
    bilan: "Points Forts :\nVision 360° : Lier produit, logistique et promesse de marque dans un modèle viable.\nIntégration de l'impact : La RSE comme pilier de la proposition de valeur.\n\nAxes d'amélioration :\nBusiness Model Canvas : Annexer une matrice formelle pour cartographier les flux de revenus.\nPrécision Acquisition (CAC/LTV) : Appuyer le modèle sur des hypothèses chiffrées issues d'un POC.",
    livrableUrl: "AC BUT 3/E-BUSINESS & ENTREPRENARIAT/NutriShot Pitch deck.pdf"
  },
  {
    id: 'ebiz-ac2', year: 'BUT 3', competence: 'E-Business',
    title: "AC 2 : Faire des préconisations grâce aux outils du diagnostic stratégique",
    projet: "Contexte : Audit technique et sémantique du site Toulon.fr.\nAction : Analyse des données de crawl (sample 500 URLs). Identification du « Paradoxe SEO » (technique saine vs sémantique confuse). Préconisations sur les méta-descriptions.",
    bilan: "Points Forts :\nMaîtrise des outils techniques : Interpréter les codes HTTP (3xx, 4xx, 5xx) pour un audit de santé.\nTraduction Tech vers Business : Vulgariser l'impact d'une erreur technique sur l'acquisition client.\n\nAxes d'amélioration :\nPriorisation (ICE Score) : Classer les préconisations par impact et facilité de mise en œuvre.\nAlignement KPI Métiers : Lier le SEO aux objectifs macro de la ville (ex : désengorgement des accueils).",
    livrableUrl: "AC BUT 3/E-BUSINESS & ENTREPRENARIAT/Digital Marketing Presentation.pdf"
  },
  {
    id: 'ebiz-ac3', year: 'BUT 3', competence: 'E-Business',
    title: "AC 3 : Élaborer les documents financiers nécessaires",
    projet: "Contexte : Traduction de la vision marketing en chiffres concrets sur 5 ans.\nAction : Modélisation via FISY. Configuration des hypothèses de revenus, plan de personnel (recrutement de 2 à 8 pers) et investissements (33k€ An 1).",
    bilan: "Points Forts :\nMaîtrise de la rentabilité : Identifier une marge brute solide (65%) couvrant les charges fixes.\nPrécision du plan de financement : Intégration cohérente du capital et des emprunts.\n\nAxes d'amélioration :\nAnalyse de sensibilité : Intégrer des scénarios dégradés (inflation matières premières).\nOptimisation trésorerie : Explorer la location de matériel pour réduire les charges initiales.",
    livrableUrl: "AC BUT 3/E-BUSINESS & ENTREPRENARIAT/FISY-ESSENTIEL-2-COMPLETE.xlsx"
  },
  {
    id: 'ebiz-ac4', year: 'BUT 3', competence: 'E-Business',
    title: "AC 4 : Contrôler la conformité et la pertinence du modèle",
    projet: "Contexte : Rôle de contrôleur de gestion pour auditer la viabilité du projet e-commerce.\nAction : Vérification des taux légaux (TVA 5,5% vs 20%) et charges patronales (43%). Analyse de la trésorerie restant positive malgré le BFR de démarrage.",
    bilan: "Points Forts :\nAnalyse du Point Mort : Aligner les objectifs marketing avec le besoin de volume (413k€ An 1).\nCompréhension du BFR : Maîtrise de l'impact des délais de paiement sur la survie.\n\nAxes d'amélioration :\nStress Tests : Créer des scénarios « pessimistes » pour prouver la résilience.\nBenchmarking sectoriel : Comparer les ratios avec les bilans de startups FoodTech réelles.",
    livrableUrl: "AC BUT 3/E-BUSINESS & ENTREPRENARIAT/FISY-ESSENTIEL-2-COMPLETE.xlsx"
  },
  {
    id: 'ebiz-ac5', year: 'BUT 3', competence: 'E-Business',
    title: "AC 5 : Choisir les techniques de créativité adaptées",
    projet: "Contexte : Disrupter le marché de la distribution automatique.\nAction : Déploiement de techniques de créativité collective. Idéation du concept PokéGo : couverts comestibles, gamification (mini-jeux pendant l'attente) et packaging communautaire.",
    bilan: "Points Forts :\nPensée « Out of the box » : Repenser un business model classique pour la Gen Z.\nExpérience globale : Compréhension des mécaniques d'engagement digital (Gamification).\n\nAxes d'amélioration :\nValidation par la cible : Organiser des Focus Groups pour tester l'acceptation des couverts comestibles.\nFiltre de faisabilité : Approfondir la logistique de la chaîne du froid pour le poisson cru.",
    livrableUrl: "AC BUT 3/E-BUSINESS & ENTREPRENARIAT/Distributeur.pdf"
  },
  {
    id: 'ebiz-ac6', year: 'BUT 3', competence: 'E-Business',
    title: "AC 6 : Développer un projet de façon proactive",
    projet: "Contexte : Anticiper l'avenir pour prouver une posture d'entrepreneur.\nAction : Intégration d'une feuille de route de financement (Série A) et modélisation de 3 scénarios d'Exit (Acquisition, MBO, Levée).",
    bilan: "Points Forts :\nMindset Entrepreneurial : Maîtrise des logiques d'investisseurs (Scalabilité, Valorisation).\nPrise d'initiative : Déceler un pain point marché (abandon gélules) pour créer une offre disruptive.\n\nAxes d'amélioration :\nConfrontation au réel : Produire un MVP (Minimum Viable Product) pour pitcher devant de vrais incubateurs.\nAcquisition réseau : Cartographier les mentors et partenaires locaux à démarcher.",
    livrableUrl: "AC BUT 3/E-BUSINESS & ENTREPRENARIAT/NutriShot Pitch deck.pdf"
  }


  /* ========== MARKETING · BUT 1 ========== */
  ,{
    id: 'b1-mkt-ac1', year: 'BUT 1', competence: 'Marketing',
    title: "AC 1 : Analyser l'environnement d'une entreprise en repérant et appréciant les sources d'informations",
    projet: "Contexte : Dans le cadre d'un TD de Marketing, nous avions pour objectif d'analyser le micro-environnement de l'entreprise Adidas.\nAction : Réalisation d'une analyse SWOT (Strengths, Weaknesses, Opportunities, Threats) pour identifier les forces et faiblesses internes ainsi que les opportunités et menaces externes de l'entreprise. Structuration claire de l'analyse pour cibler les axes d'amélioration et appuyer une démarche de veille concurrentielle.",
    bilan: "Points Forts :\nMaîtrise de la méthode : Capacité à structurer une analyse SWOT complète et exploitable pour tout type d'entreprise.\nVision stratégique : Compréhension des éléments internes et externes pouvant influencer la performance d'une enseigne.\n\nAxes d'amélioration :\nFiabilité des sources : Apprendre à mieux identifier et sélectionner des données récentes et fiables pour chaque axe de l'analyse.\nObjectivité : Développer une approche plus neutre dans l'évaluation des forces et faiblesses internes pour garantir des résultats exploitables.",
    livrableUrl: "AC BUT 1/Cas addidas.pdf"
  }
  ,{
    id: 'b1-mkt-ac2', year: 'BUT 1', competence: 'Marketing',
    title: "AC 2 : Mettre en œuvre une étude de marché dans un environnement",
    projet: "Contexte : Dans le cadre d'une SAÉ de Marketing, nous avions pour objectif de réaliser une analyse complète de l'environnement externe du marché des jeux de société.\nAction : Mise en œuvre d'une analyse PESTEL (Politique, Économique, Socioculturel, Technologique, Environnemental, Légal) pour obtenir une vision globale des facteurs pouvant impacter toute entreprise souhaitant s'implanter sur ce marché. Identification des opportunités et menaces potentielles à partir de sources variées pour guider la démarche marketing.",
    bilan: "Points Forts :\nVision macro-environnementale : Maîtrise des six dimensions du PESTEL pour dresser un état des lieux complet d'un marché.\nAnticipation stratégique : Capacité à transformer les facteurs identifiés en opportunités ou menaces exploitables.\n\nAxes d'amélioration :\nSélection des sources : Améliorer la capacité à juger la fiabilité et la pertinence des informations récoltées.\nActualisation des données : Veiller à utiliser des données récentes et cohérentes avec les tendances actuelles du marché.",
    livrableUrl: "AC BUT 1/Étude de marché jeux de société.pdf"
  }
  ,{
    id: 'b1-mkt-ac3', year: 'BUT 1', competence: 'Marketing',
    title: "AC 3 : Choisir une cible et un positionnement en fonction de la segmentation du marché",
    projet: "Contexte : Dans le cadre d'une SAÉ Marketing du second semestre, notre groupe devait recommercialiser une marque au choix. Nous avons sélectionné Tang, une poudre lyophilisée aromatisée aux fruits.\nAction : Définition d'une cible précise en se mettant à la place de différents profils de consommateurs. Application des critères de segmentation (socio-démographiques, comportementaux) pour établir le profil type du consommateur idéal. Choix d'un positionnement cohérent avec le concept de la marque, ayant guidé toutes les décisions de conception suivantes : produit, packaging et identité visuelle.",
    bilan: "Points Forts :\nApproche consumer-centric : Capacité à se mettre à la place du consommateur pour évaluer la pertinence d'une offre selon différents profils.\nCohérence stratégique : Le positionnement choisi a influencé de façon cohérente l'ensemble des décisions marketing de la marque.\n\nAxes d'amélioration :\nDiversité des profils analysés : Approfondir l'analyse en couvrant un plus large spectre de profils pour affiner la segmentation.\nValidation terrain : Confronter les hypothèses de segmentation à de vraies données (sondages, interviews consommateurs).",
    livrableUrl: "AC BUT 1/Infographie mission 3.pdf"
  }
  ,{
    id: 'b1-mkt-ac4', year: 'BUT 1', competence: 'Marketing',
    title: "AC 4 : Concevoir une offre cohérente et éthique en termes de produits, de prix, de distribution et de communication",
    projet: "Contexte : Dans le cadre d'une SAÉ Marketing, notre groupe devait recommercialiser Tang, une marque de poudre lyophilisée aromatisée aux fruits disparue du marché.\nAction : Élaboration d'un plan complet de conception couvrant les éléments du mix marketing : définition du concept, création du packaging et de l'identité visuelle, politique de distribution et premiers supports de communication. Réflexion constante sur la cohérence éthique de l'offre entre les intérêts commerciaux, les attentes des consommateurs et les valeurs de la marque.",
    bilan: "Points Forts :\nVision mix marketing : Capacité à articuler produit, distribution et communication de façon cohérente autour d'un même positionnement.\nSens créatif et commercial : Traduction des décisions stratégiques en éléments visuels et tangibles (packaging, supports de communication).\n\nAxes d'amélioration :\nIntégration du prix : Renforcer l'analyse de la politique tarifaire pour compléter le mix et assurer la viabilité économique.\nÉquilibre éthique-commercial : Apprendre à mieux arbitrer entre attractivité commerciale et considérations éthiques dans la conception d'une offre.",
    livrableUrl: "AC BUT 1/Emballages Tang mission 5.pdf"
  }

  /* ========== VENTE · BUT 1 ========== */
  ,{
    id: 'b1-vente-ac1', year: 'BUT 1', competence: 'Vente',
    title: "AC 1 : Préparer un plan de découverte",
    projet: "Contexte : Dans le cadre de Travaux Pratiques en cours de Vente, nous avons réalisé par binôme un sketch de vente couvrant l'intégralité des étapes de l'entretien commercial, de la prise de contact à la prise de congé.\nAction : Mise en scène d'un entretien de vente dans le rayon sports d'hiver de Décathlon. En tant que vendeur, j'ai mis en pratique les étapes clés du plan de découverte : accueil client, questionnement des besoins, argumentation, traitement des objections et conclusion de la vente.",
    bilan: "Points Forts :\nMise en situation réelle : L'exercice a permis de s'immerger dans les conditions d'un entretien de vente terrain et de tester la maîtrise des étapes clés.\nStructure de l'entretien : Bonne maîtrise de l'enchaînement logique des phases de vente, du contact jusqu'à la conclusion.\n\nAxes d'amélioration :\nFluidité du discours : Travailler la spontanéité pour éviter un jeu trop scolaire et gagner en naturel face au client.\nQuestionnement approfondi : Développer des techniques de questionnement plus poussées pour mieux cerner les besoins implicites du client.",
    livrableUrl: "AC BUT 1/Sketch de vente Décathlon.pdf"
  }
  ,{
    id: 'b1-vente-ac2', year: 'BUT 1', competence: 'Vente',
    title: "AC 2 : Concevoir un argumentaire de vente",
    projet: "Contexte : Dans le cadre d'une SAÉ Vente du premier semestre, nous avons été amenés à construire des argumentaires de vente pour nous familiariser avec cet outil commercial essentiel.\nAction : Conception d'un argumentaire de prospection destiné à contacter des entreprises pour proposer des candidatures en alternance ou en stage. Structuration des arguments selon les besoins et motivations présumées de l'interlocuteur, anticipation des objections potentielles pour renforcer la crédibilité et l'efficacité de la démarche.",
    bilan: "Points Forts :\nStructuration de l'argumentation : Capacité à hiérarchiser les arguments de façon logique et persuasive en fonction des besoins de l'interlocuteur.\nAnticipation des objections : Prise en compte des freins potentiels pour construire des réponses adaptées à l'avance.\n\nAxes d'amélioration :\nPersonnalisation de l'argumentaire : Mieux adapter le discours au profil spécifique de chaque entreprise pour gagner en impact.\nAisance à l'oral : Renforcer la confiance pour délivrer l'argumentaire de façon naturelle et convaincante.",
    livrableUrl: "AC BUT 1/Argumentaire de prospection.pdf"
  }
  ,{
    id: 'b1-vente-ac3', year: 'BUT 1', competence: 'Vente',
    title: "AC 3 : Concevoir des outils d'aide à la vente efficaces",
    projet: "Contexte : Dans le cadre de Travaux Pratiques de Communication, nous avons été chargés de concevoir un outil d'aide à la vente sous la forme d'un e-mail de prospection.\nAction : Création d'un mailing de prospection en appliquant les techniques de prospection étudiées en cours. Respect de la méthode AIDA (Attention, Intérêt, Désir, Action) pour structurer le contenu. Travail sur l'équilibre texte/image et l'intégration de visuels pour maximiser l'impact du message.",
    bilan: "Points Forts :\nCréativité et autonomie : Liberté dans le choix de la forme et du contenu, permettant d'exprimer la créativité tout en appliquant rigoureusement les techniques de prospection.\nMaîtrise de la méthode AIDA : Structuration efficace du message pour guider le lecteur de l'accroche jusqu'à l'appel à l'action.\n\nAxes d'amélioration :\nÉquilibre texte/image : Trouver le juste milieu entre contenu visuel attractif et texte informatif pour optimiser la lisibilité.\nPuissance rédactionnelle : Renforcer la concision et l'impact des formulations pour maximiser le taux de réponse.",
    livrableUrl: "AC BUT 1/Mail prospection.pdf"
  }
  ,{
    id: 'b1-vente-ac4', year: 'BUT 1', competence: 'Vente',
    title: "AC 4 : Évaluer la performance commerciale au moyen d'indicateurs",
    projet: "Contexte : Dans le cadre de l'enseignement des Fondamentaux de la Vente (semestre 1), puis appliqué lors de mon stage de 4 semaines chez SPEEDWAY (équipementier moto, La Garde), j'ai appris à calculer et utiliser des indicateurs de performance commerciale.\nAction : Apprentissage des indicateurs clés d'une démarche de prospection (taux de transformation, taux de contact). Application concrète en stage : réalisation de tableaux de suivi hebdomadaires de ma progression commerciale pour identifier mes points faibles et les axes d'amélioration prioritaires.",
    bilan: "Points Forts :\nPilotage par les données : Capacité à transformer des indicateurs chiffrés en leviers d'amélioration concrets pour son activité commerciale.\nRigueur du suivi : Mise en place d'un suivi régulier et structuré sur la durée du stage pour mesurer la progression.\n\nAxes d'amélioration :\nMaîtrise des outils Excel : Automatiser les calculs et les tableaux de bord pour gagner en efficacité d'analyse.\nÉlargissement des indicateurs : Explorer des KPIs plus avancés (panier moyen, taux de fidélisation) pour une analyse plus complète de la performance.",
    livrableUrl: "AC BUT 1/Stats Vente Speedway.xlsx"
  }
  ,{
    id: 'b1-vente-ac5', year: 'BUT 1', competence: 'Vente',
    title: "AC 5 : Recourir aux techniques adaptées à la démarche de prospection",
    projet: "Contexte : Dans le cadre de la SAÉ Vente du premier semestre, notre groupe a été chargé de mener une démarche de prospection complète.\nAction : Création d'un fichier clients structuré sous Excel regroupant toutes les informations nécessaires à la prospection. Réalisation de démarchage téléphonique en appliquant les techniques vues en cours. Organisation collective du travail pour centraliser les données et avancer sur une tâche commune.",
    bilan: "Points Forts :\nTravail en équipe : Organisation collective efficace pour centraliser les informations et progresser sur une tâche partagée.\nApplication des techniques de prospection : Mise en pratique concrète du démarchage téléphonique et de la constitution de fichiers clients.\n\nAxes d'amélioration :\nQualification du fichier clients : Améliorer la pertinence et la richesse des informations collectées pour mieux cibler les prospects.\nAisance téléphonique : Développer la fluidité et la confiance lors des appels pour améliorer le taux de contact.",
    livrableUrl: "AC BUT 1/Prospection SAE.xlsx"
  }
  ,{
    id: 'b1-vente-ac6', year: 'BUT 1', competence: 'Vente',
    title: "AC 6 : Recourir aux codes d'expression spécifiques et professionnels",
    projet: "Contexte : À l'occasion du rapport de stage de fin de semestre 1 chez SPEEDWAY (équipementier moto, La Garde), j'ai produit une vidéo de présentation de mon expérience professionnelle.\nAction : Création d'une vidéo professionnelle relatant le déroulé du stage et les compétences acquises. Utilisation des codes d'expression propres au milieu commercial et professionnel pour démontrer la capacité à communiquer de façon structurée et crédible.",
    bilan: "Points Forts :\nExpression professionnelle à l'oral : Capacité à présenter une expérience de façon structurée, avec le vocabulaire adapté au milieu commercial.\nPrise de recul : Capacité à analyser et valoriser son propre parcours avec un regard professionnel.\n\nAxes d'amélioration :\nQualité de la production : Améliorer le montage vidéo et la mise en scène pour un rendu plus professionnel.\nVocabulaire technique : Approfondir la maîtrise du lexique propre aux différents univers commerciaux pour gagner en crédibilité dans des contextes variés.",
    livrableUrl: "#"
  }

  /* ========== COMMUNICATION · BUT 1 ========== */
  ,{
    id: 'b1-com-ac1', year: 'BUT 1', competence: 'Communication',
    title: "AC 1 : Identifier les cibles et les objectifs de communication en assurant la cohérence du mix",
    projet: "Contexte : Dans le cadre de l'enseignement des Fondamentaux de la Communication Commerciale, nous avions pour objectif d'élaborer la stratégie de communication d'une entreprise fictive de notre création : 'Recycle', positionnée sur le marché des salles de sport.\nAction : Définition du concept et du secteur d'activité de l'enseigne, analyse rapide du marché d'implantation, formulation de la problématique et des objectifs de communication, identification du public cible, et définition du message, des canaux et du budget. Travail sur la cohérence globale pour assurer l'alignement entre positionnement, cible et moyens choisis.",
    bilan: "Points Forts :\nDémarche structurée : Capacité à suivre un processus logique pour définir une stratégie de communication de A à Z.\nCohérence du mix : Attention portée à l'alignement entre les objectifs, la cible et les moyens de communication retenus.\n\nAxes d'amélioration :\nChoix des canaux : Mieux maîtriser les critères de sélection des supports en fonction du positionnement et de la cible.\nMesure de l'impact : Anticiper en amont les indicateurs qui permettront d'évaluer l'efficacité de la stratégie.",
    livrableUrl: "AC BUT 1/Stratégie de com.pdf"
  }
  ,{
    id: 'b1-com-ac2', year: 'BUT 1', competence: 'Communication',
    title: "AC 2 : Analyser les moyens de communication commerciale (media, hors-media, réseaux sociaux)",
    projet: "Contexte : Dans le cadre d'une SAÉ Communication, nous avions pour objectif d'analyser la stratégie de communication de notre marque fictive 'Recycle' ainsi que de deux concurrentes : Cycles Up et Acolyte.\nAction : Recensement et analyse des différents moyens de communication utilisés (médias, hors-médias, réseaux sociaux) en adoptant le point de vue du consommateur (navigation web, réseaux sociaux) et via recherches documentaires. Réalisation d'un benchmarking comparatif pour évaluer les positions respectives et identifier des opportunités d'amélioration.",
    bilan: "Points Forts :\nApproche consommateur : Capacité à adopter le point de vue du consommateur pour évaluer l'impact réel d'une stratégie de communication.\nMaîtrise du benchmarking : Utilisation pertinente de l'outil comparatif pour positionner une marque face à ses concurrents.\n\nAxes d'amélioration :\nFiabilité des sources : Renforcer la capacité à distinguer des informations fiables sur la stratégie réelle d'une marque.\nRigueur analytique : Intégrer des données chiffrées (reach, engagement) pour un benchmarking plus objectif et comparatif.",
    livrableUrl: "AC BUT 1/Moyens de communication commerciale.pdf"
  }
  ,{
    id: 'b1-com-ac3', year: 'BUT 1', competence: 'Communication',
    title: "AC 3 : Élaborer des supports de communication de base (imprimés sans adresse, affiche, dossier de sponsoring)",
    projet: "Contexte : Dans le cadre d'une SAÉ Communication, à l'issue de la conception de notre marque Tang, nous avions pour mission de créer une affiche publicitaire pour la promouvoir auprès des consommateurs.\nAction : Conception d'une affiche originale en réinterprétant l'univers de la série animée 'Pokémon' pour créer l'univers 'Tangémon', en réappropriant les codes visuels avec nos valeurs, nos couleurs et notre identité de marque. Présentation orale sous forme de stand devant un jury de professeurs.",
    bilan: "Points Forts :\nCréativité et originalité : Capacité à détourner une référence culturelle populaire pour créer un univers de marque distinctif et attractif.\nCohérence visuelle : Alignement entre l'affiche et le positionnement/ciblage définis en amont pour la marque Tang.\n\nAxes d'amélioration :\nContraintes techniques : Mieux maîtriser les règles liées aux droits d'utilisation et aux formats pour la création de supports imprimés professionnels.\nEfficacité publicitaire : Renforcer la maîtrise des éléments clés d'une affiche percutante (accroche visuelle, message clair, call-to-action).",
    livrableUrl: "AC BUT 1/Affiche Tangémon.pdf"
  }
  ,{
    id: 'b1-com-ac4', year: 'BUT 1', competence: 'Communication',
    title: "AC 4 : Analyser les indicateurs post-campagne pour mesurer l'impact de la communication",
    projet: "Aucune trace réalisée pour cette compétence en BUT 1.",
    bilan: "Cette compétence sera illustrée lors des années suivantes de formation.",
    livrableUrl: "#"
  }

  /* ========== MARKETING · BUT 2 ========== */
  ,{
    id: 'b2-mkt-ac1', year: 'BUT 2', competence: 'Marketing',
    title: "AC 1 : Diagnostiquer l'environnement en appréhendant les enjeux sociaux et écologiques",
    projet: "Contexte : Travail de groupe en cours d'Économie (semestre 3) autour de la problématique : « Comment aller vers une gestion durable des matières premières et des énergies au niveau mondial ? »\nAction : Recherche documentaire sur les ressources critiques et la transition énergétique. Structuration en quatre axes : optimisation des chaînes d'approvisionnement, innovation et économie circulaire, politiques internationales, énergies renouvelables. Présentation orale sous forme de diaporama avec données chiffrées (recyclage, terres rares, consommation de charbon).",
    bilan: "Points Forts :\nVeille rigoureuse : Données à jour, articulation claire entre enjeux politiques, technologiques et économiques.\nDiagnostic global : Structure saluée par l'enseignant, réponse synthétique et argumentée à la problématique.\n\nAxes d'amélioration :\nDimension sociale : Approfondir les conséquences sur les populations locales et les inégalités d'accès aux ressources.\nVisualisation : Mieux illustrer certains résultats via des graphiques dynamiques ou cartographies.",
    livrableUrl: "AC BUT 2/Diagnostiquer l'environnement.pdf"
  }
  ,{
    id: 'b2-mkt-ac2', year: 'BUT 2', competence: 'Marketing',
    title: "AC 2 : Mettre en œuvre une étude de marché dans un environnement complexe",
    projet: "Contexte : SAÉ « Création de Biscuits – LAMA France » (semestre 3). L'étude de marché constituait la première étape clé pour fonder la stratégie sur des données concrètes.\nAction : Analyse documentaire du marché des biscuits en France (segments sucré/salé, bio, sans gluten, tendances de consommation, concurrence, comportements cibles). Sources : Statista, Nielsen IQ, Les Échos, Xerfi. Résultats utilisés pour définir la cible, positionner l'offre et élaborer la politique de distribution.",
    bilan: "Points Forts :\nStructure rigoureuse : Analyse par segment, acteur, tendance et cible consommateur, directement appliquée aux décisions stratégiques.\nQualité des sources : Veille sectorielle actuelle, résultats cohérents avec les attentes marché.\n\nAxes d'amélioration :\nDonnées primaires : L'absence d'enquête terrain (questionnaire, entretiens) limite la validation empirique des hypothèses.\nFreins à l'achat : Approfondir les critères de différenciation perçus par les consommateurs.",
    livrableUrl: "AC BUT 2/Business plan et étude financière LAMA.pdf"
  }
  ,{
    id: 'b2-mkt-ac3', year: 'BUT 2', competence: 'Marketing',
    title: "AC 3 : Mettre en place une stratégie marketing dans un environnement complexe",
    projet: "Contexte : Projet Remake (boutique de personnalisation textile, Montpellier). Objectif : élaborer une stratégie de collecte de leads adaptée à une cible jeune, urbaine et digitalisée (18–25 ans).\nAction : Conception d'une stratégie multicanale : jeu concours Instagram avec formulaire email, QR code en boutique, chatbot interactif avec quizz, newsletter avec avantages exclusifs, partenariats micro-influenceurs montpelliérains. Définition des indicateurs de suivi (engagement, CTR, taux de conversion) et optimisation UX du chatbot.",
    bilan: "Points Forts :\nCohérence multicanale : Alignement entre canaux, ton, cible et objectif de collecte.\nOriginalité : Chatbot et jeu concours réduisent les points de friction et engagent activement la cible.\n\nAxes d'amélioration :\nBudget : Manque d'estimation financière pour une mise en œuvre réelle.\nDimension RSE : Intégrer des éléments différenciateurs durables (engagement local, production responsable).",
    livrableUrl: "AC BUT 2/Stratégie de Communication Numérique REMAKE.pdf"
  }
  ,{
    id: 'b2-mkt-ac4', year: 'BUT 2', competence: 'Marketing',
    title: "AC 4 : Concevoir un mix étendu pour une offre complexe",
    projet: "Contexte : SAÉ LAMA France (semestre 3). Travail approfondi sur le mix étendu, notamment le packaging comme interface stratégique entre le produit et le consommateur.\nAction : Déclinaison de trois gammes (Galetitas, Frutitas, Stick) avec packaging adapté à chaque cible : matériaux recyclables, formes facilitant l'usage, systèmes d'ouverture pratiques, codes couleur et graphisme cohérents avec le positionnement émotionnel de la marque (mascotte Lama, teintes vives).",
    bilan: "Points Forts :\nDémarche complète : Intégration de la forme, de la fonction et du positionnement dans chaque choix packaging.\nBonne segmentation : Adaptation des éléments du mix à chaque produit et sa cible spécifique.\n\nAxes d'amélioration :\nTests consommateurs : Des tests simulés auraient permis de valider les préférences réelles.\nAnalyse coût/efficacité : Un approfondissement financier du mix aurait renforcé la dimension stratégique.",
    livrableUrl: "AC BUT 2/Mission 3 packaging LAMA.pdf"
  }

  /* ========== VENTE · BUT 2 ========== */
  ,{
    id: 'b2-vente-ac1', year: 'BUT 2', competence: 'Vente',
    title: "AC 1 : Convaincre en exprimant avec empathie l'offre en termes d'avantages personnalisés",
    projet: "Contexte : Jeu de rôle en TD opposant LU (fournisseur) à Carrefour (distributeur), avec refus de hausse tarifaire à défendre.\nAction : Incarnation du commercial LU (Paul), en appliquant la méthode DESC (Décrire, Exprimer, Proposer, Conclure) pour structurer une communication assertive. Reformulation de la hausse en termes d'avantages mutuels, proposition d'un compromis (hausse progressive + actions promotionnelles) et valorisation de la relation long terme.",
    bilan: "Points Forts :\nMéthode DESC : Communication structurée, empathique et non conflictuelle, aboutissant à un accord de principe.\nSolutions personnalisées : Compromis adapté aux contraintes réelles de l'acheteur (impact rayon, volumes).\n\nAxes d'amélioration :\nArgumentaire chiffré : Intégrer des données financières (ROI promotions) pour renforcer la conviction.\nPrécision avantages produit : Certaines formulations auraient gagné en précision sur les bénéfices concrets.",
    livrableUrl: "AC BUT 2/Dialogue de négociation (Méthode DESC).pdf"
  }
  ,{
    id: 'b2-vente-ac2', year: 'BUT 2', competence: 'Vente',
    title: "AC 2 : Négocier le prix : défendre et valoriser l'offre en percevant les stratégies d'achat",
    projet: "Contexte : Jeu de rôle en TD, vendeur Legrand face à un acheteur exigeant dans l'immobilier autour d'une solution domotique Céliane (plusieurs projets immobiliers).\nAction : Identification des stratégies d'achat (mise en concurrence, pression délais, argument volume). Valorisation des avantages différenciants (écoconception, intégration, contrôle à distance, réactivité locale). Proposition d'un compromis tarifaire basé sur le volume tout en maintenant une posture ferme sans brader la valeur.",
    bilan: "Points Forts :\nAnalyse des leviers d'achat : Bonne lecture des motivations réelles de l'acheteur au-delà du prix.\nDéfense par la valeur : Prix justifié par les avantages concurrentiels, pas par réduction directe — accord de principe obtenu.\n\nAxes d'amélioration :\nArgumentaire financier : Un ROI chiffré ou des économies long terme auraient renforcé la légitimité du prix.\nConditions contractuelles : Les valider en amont pour finaliser l'accord plus efficacement.",
    livrableUrl: "AC BUT 2/Cas Legrand.pdf"
  }
  ,{
    id: 'b2-vente-ac3', year: 'BUT 2', competence: 'Vente',
    title: "AC 3 : Maîtriser les éléments juridiques et comptables de l'offre",
    projet: "Contexte : SAÉ LAMA France (semestre 3) — définition du statut juridique de notre biscuiterie artisanale fictive pour construire une offre commerciale crédible.\nAction : Étude comparative des formes juridiques (autoentreprise, SARL, SAS) pour identifier celle la plus adaptée à notre gouvernance multi-associés et notre besoin de répartition des responsabilités. Choix retenu : SAS — souplesse de fonctionnement, responsabilité limitée, répartition des rôles entre fondateurs.",
    bilan: "Points Forts :\nArticulation juridique-stratégique : Capacité à relier les choix juridiques aux besoins opérationnels et à la stratégie commerciale.\nRépartition fonctionnelle : Attribution claire des rôles entre associés fondateurs en cohérence avec la forme retenue.\n\nAxes d'amélioration :\nComparaison approfondie : Une analyse plus détaillée des autres statuts aurait enrichi l'arbitrage.\nSources externes : S'appuyer sur des simulateurs ou experts juridiques pour valider la démarche.",
    livrableUrl: "AC BUT 2/SITUATION PRO. N°4.pdf"
  }
  ,{
    id: 'b2-vente-ac4', year: 'BUT 2', competence: 'Vente',
    title: "AC 4 : Utiliser les OAV (feuille de calcul, supports d'argumentation…) à bon escient pour convaincre",
    projet: "Contexte : Simulation commerciale B2B avec ELIS (location-entretien de vêtements professionnels) — élaboration d'une facture détaillée en appui d'un échange commercial simulé avec un laboratoire client.\nAction : Production d'une facture professionnelle structurée (désignation tenues homme/femme, quantités, tarifs unitaires, coût mensuel, frais supplémentaires). Utilisation comme outil d'argumentation chiffrée pour justifier les coûts, montrer la transparence de l'offre et appuyer la valeur du service.",
    bilan: "Points Forts :\nDocument professionnel : Présentation claire, conforme aux standards commerciaux B2B, jugé en adéquation avec une relation client exigeante.\nArgumentation par les chiffres : Support factuel réduisant les frictions et renforçant la confiance dans l'offre.\n\nAxes d'amélioration :\nRécapitulatif visuel : Ajouter un tableau de synthèse pour faciliter la lecture rapide.\nSimulation de remise : Intégrer une option complémentaire pour enrichir l'argumentation.",
    livrableUrl: "AC BUT 2/Facture Elis.pdf"
  }
  ,{
    id: 'b2-vente-ac5', year: 'BUT 2', competence: 'Vente',
    title: "AC 5 : Organiser le suivi de ses résultats pour gagner en performance au sein de l'équipe commerciale",
    projet: "Contexte : Jeu d'entreprise Vélix — simulation de gestion d'une entreprise de vélos (B2BIKE) sur 5 périodes (D1–D5), avec impact direct de chaque décision sur les indicateurs de performance.\nAction : Suivi des KPIs clés (CA, ventes, résultat net, PDM, trésorerie, capitaux propres). Mise à jour des graphiques à chaque décision pour analyser les évolutions. Ajustements stratégiques à chaque période (ex. : repositionnement tarifaire face au résultat net négatif en D1–D2).",
    bilan: "Points Forts :\nPilotage réactif : Données utilisées comme base d'arbitrage stratégique collectif à chaque période.\nProgression mesurée : CA de 1,1 M€ à 5,4 M€, résultat net de −75 k€ à +569 k€, +5 pts de PDM.\n\nAxes d'amélioration :\nTableaux de bord automatisés : Des outils Excel dynamiques auraient facilité l'analyse en temps réel.\nRapport post-jeu : Une synthèse formalisée des apprentissages aurait permis une meilleure capitalisation.",
    livrableUrl: "AC BUT 2/Performance B2BIKE.pdf"
  }
  ,{
    id: 'b2-vente-ac6', year: 'BUT 2', competence: 'Vente',
    title: "AC 6 : Prendre en compte les enjeux de la fonction achat pour la performance économique de l'entreprise",
    projet: "Contexte : Jeu d'entreprise Vélix — chaque décision d'achat et de production avait un impact direct sur la rentabilité et la trésorerie de B2BIKE.\nAction : Analyse des coûts matières (40 € à 550 € selon produit), coûts qualité (jusqu'à +50 %), frais de sous-traitance, stockage et crédits fournisseurs (15–30 jours). Intégration de ces données pour optimiser le rapport coût/qualité, éviter la surproduction et cibler les produits à fort potentiel de marge.",
    bilan: "Points Forts :\nLecture des coûts directs et indirects : Bonne maîtrise de l'impact qualité et cycle de vie sur la marge.\nIntégration logistique-stratégie : Crédits fournisseurs intégrés dans la gestion de trésorerie pour assurer la pérennité.\n\nAxes d'amélioration :\nAnalyse des frais de structure : Approfondir les coûts logistiques dans le modèle de décision.\nOutillage Excel : Créer un tableau automatisé pour modéliser les scénarios d'achat.",
    livrableUrl: "AC BUT 2/Analyse données B2BIKE.pdf"
  }

  /* ========== COMMUNICATION · BUT 2 ========== */
  ,{
    id: 'b2-com-ac1', year: 'BUT 2', competence: 'Communication',
    title: "AC 1 : Élaborer une stratégie de communication adaptée au brief agence",
    projet: "Contexte : SAÉ Adopte — notre équipe (CreaNova) devait répondre à un brief agence en concevant un spot publicitaire cohérent avec les valeurs et la cible de la marque.\nAction : Analyse du brief (public cible, objectifs de notoriété, message). Recherche d'un concept créatif aligné. Écriture d'un synopsis narratif situant l'histoire dans un club de danse colombien (trois amis rivaux pour une danse). Conception du schéma narratif en 5 étapes (situation initiale, élément perturbateur, péripéties, résolution, fin).",
    bilan: "Points Forts :\nStructuration narrative : Respect du schéma classique avec une progression émotionnelle claire et immersive.\nCohérence stratégique : Proposition sélectionnée parmi les plus abouties du TD pour sa qualité créative et son alignement avec le brief.\n\nAxes d'amélioration :\nAncrage produit : Le lien avec la marque réelle aurait pu être davantage intégré dans la résolution finale.\nDifférenciation émotionnelle : Une approche plus distinctive sur le plan culturel aurait renforcé l'impact publicitaire.",
    livrableUrl: "#"
  }
  ,{
    id: 'b2-com-ac2', year: 'BUT 2', competence: 'Communication',
    title: "AC 2 : Établir une stratégie de moyens en utilisant les indicateurs de choix des supports",
    projet: "Contexte : TD de communication média (M. Benaissati) — choisir les supports les plus pertinents et rentables pour toucher une cible donnée à partir de critères chiffrés.\nAction : Analyse comparative de 7 supports (réseaux sociaux, e-mailing, affichage, sponsoring, marketing d'influence, presse spécialisée, TV locale). Calcul pour chacun du CPM, puissance brute/nette, affinité et audience utile. Recommandation d'une combinaison optimale : réseaux sociaux (puissance), influence (affinité), e-mailing (coût bas) — et évitement de la TV locale (trop chère/peu performante).",
    bilan: "Points Forts :\nMaîtrise des indicateurs média : Hiérarchisation objective des supports par rentabilité et pertinence cible.\nApplication chiffrée : Traduction concrète des données en recommandations stratégiques actionables.\n\nAxes d'amélioration :\nDimension qualitative : Intégrer l'image de marque véhiculée par chaque support pour compléter l'analyse quantitative.\nSaisonnalité : Prendre en compte le rythme de diffusion pour une planification plus fine.",
    livrableUrl: "AC BUT 2/Média Planning.pdf"
  }
  ,{
    id: 'b2-com-ac3', year: 'BUT 2', competence: 'Communication',
    title: "AC 3 : Proposer un plan de communication 360° en élaborant les supports et en mesurant l'efficacité",
    projet: "Contexte : SAÉ Delightz (marque d'éclairage design innovante) — concevoir une stratégie de communication 360° combinant canaux offline et online sur plusieurs temporalités.\nAction : Volet Offline : publipostage zones rurales, affichage urbain rétroéclairé, spots TV (TF1, M6), salons professionnels (Maison & Objet, ÉquipBaie), street marketing lumineux, sponsoring sportif (courses nocturnes). Volet Online : display Google/Meta/TikTok avec reciblage, marketing d'influence, fidélisation newsletter/parrainage. Sélection des canaux selon objectifs (notoriété, conversion, fidélisation), saisonnalité et affinité cible.",
    bilan: "Points Forts :\nCouverture complète 360° : Plan global et équilibré permettant de toucher des publics larges et spécifiques.\nCohérence temporelle : Actions adaptées aux temporalités stratégiques (salons, fêtes, événements sportifs).\n\nAxes d'amélioration :\nKPIs chiffrés : Des objectifs de reach, CTR et taux de conversion auraient permis d'évaluer l'efficacité attendue.\nBudget prévisionnel par action : Renforcerait la crédibilité opérationnelle du plan.",
    livrableUrl: "AC BUT 2/Cahier des charges delightz.pdf"
  }
  ,{
    id: 'b2-com-ac4', year: 'BUT 2', competence: 'Communication',
    title: "AC 4 : Mettre en œuvre une stratégie digitale : blog, réseaux sociaux, influenceurs",
    projet: "Contexte : SAÉ Delightz — conception d'un site e-commerce et d'un écosystème digital pour une marque de néons LED personnalisables.\nAction : Rédaction du cahier des charges digital (UX/UI, canaux, objectifs). Définition des contenus (blog déco, stories, tutoriels vidéo, témoignages). Intégration de la gestion de l'e-réputation (modules d'avis, modération). Définition des outils analytiques (tracking clics, taux d'engagement, abandon panier). Stratégie SEO-friendly et fidélisation via notifications push et espace client personnalisé.",
    bilan: "Points Forts :\nVision stratégique globale : Bonne articulation entre contenus, outils techniques, suivi analytique et e-réputation dès la conception.\nApproche UX : Parcours utilisateur optimisé et expérience d'achat fluide intégrés dans le dispositif.\n\nAxes d'amélioration :\nStratégie réseaux sociaux : Développer les types de contenus, la fréquence et le rôle des influenceurs.\nKPIs : Des objectifs chiffrés dès la conception permettraient un meilleur pilotage de la stratégie.",
    livrableUrl: "AC BUT 2/Cahier des charges Projet.pdf"
  }

  /* ========== E-BUSINESS · BUT 2 ========== */
  ,{
    id: 'b2-ebiz-ac1', year: 'BUT 2', competence: 'E-Business',
    title: "AC 1 : Concevoir un modèle d'affaires simplifié",
    projet: "Contexte : Atelier encadré par M. Mora — élaboration d'un Business Model Canvas pour un professionnel indépendant dans le design graphique.\nAction : Conception d'un BMC complet (9 blocs) : segments clients (entreprises, indépendants, agences), proposition de valeur (créations différenciantes, storytelling, accompagnement sur mesure), canaux (réseaux sociaux, site web, salons), sources de revenus (missions, prestations récurrentes, conférences), structure de coûts (formation, outils, temps).",
    bilan: "Points Forts :\nMaîtrise du modèle : Structuration logique et complète avec vision claire des leviers de création de valeur.\nRéalisme économique : Sources de revenus et structure de coûts cohérents avec une activité freelance concrète.\n\nAxes d'amélioration :\nChiffrage prévisionnel : Un mini business plan associé renforcerait l'exploitation du BMC.\nValidation terrain : Des retours d'expérience réels viendraient valider certaines hypothèses.",
    livrableUrl: "AC BUT 2/Pro business model canva.pdf"
  }
  ,{
    id: 'b2-ebiz-ac2', year: 'BUT 2', competence: 'E-Business',
    title: "AC 2 : Analyser de façon pertinente la situation marché-entreprise grâce aux outils de diagnostic stratégique",
    projet: "Contexte : Projet NutriGo — création fictive d'entreprise dans la nutrition sportive et les repas fonctionnels, nécessitant une analyse stratégique complète.\nAction : Étude documentaire de marché (croissance, tendances, comportements, réglementation). Segmentation clientèle (sportifs, jeunes actifs, cadres, familles). Application de la chaîne de valeur de Porter et du Business Model Canvas. Diagnostic interne/externe structuré (ressources, compétences clés, FCS, axes de différenciation).",
    bilan: "Points Forts :\nUsage rigoureux des outils : Porter + BMC + diagnostic pour une lecture complète et cohérente de la situation.\nVision long terme : Stratégie construite à partir d'un diagnostic solide, avec axes d'expansion et de différenciation chiffrés.\n\nAxes d'amélioration :\nMatrice SWOT visuelle : Aurait synthétisé les enjeux critiques plus clairement.\nDiagnostic financier : Des ratios et un budget prévisionnel auraient solidifié l'ensemble.",
    livrableUrl: "AC BUT 2/Business model NutriGo.pdf"
  }
  ,{
    id: 'b2-ebiz-ac3', year: 'BUT 2', competence: 'E-Business',
    title: "AC 3 : Analyser la situation financière d'une entreprise à partir des éléments de comptabilité générale",
    projet: "Contexte : Jeu de simulation Vélix — gestion d'une entreprise virtuelle de vélos sur 5 périodes, avec lecture des états financiers pour prendre des décisions stratégiques éclairées.\nAction : Analyse périodique du bilan actif/passif, des capitaux propres et résultats nets, de la trésorerie, des dettes et de la structure du capital. Utilisation de ces données pour limiter les concours bancaires coûteux, réinvestir les excédents et optimiser stocks/créances.",
    bilan: "Points Forts :\nLecture des états financiers : Capacité à interpréter les indicateurs clés (rentabilité, liquidité, autonomie) pour orienter la stratégie.\nProgression mesurée : Résultat net de −75 260 € à +569 019 €, capitaux propres +1,1 M€ sur 5 périodes.\n\nAxes d'amélioration :\nRatios systématisés : CAF, BFR, autonomie financière devraient être calculés systématiquement pour affiner l'analyse.\nTableaux de bord visuels : Une restitution graphique améliorerait la lisibilité pour l'ensemble de l'équipe.",
    livrableUrl: "AC BUT 2/Bilan Vélix.pdf"
  }
  ,{
    id: 'b2-ebiz-ac4', year: 'BUT 2', competence: 'E-Business',
    title: "AC 4 : Identifier les éléments pertinents nécessaires à la réalisation d'un projet e-business",
    projet: "Contexte : Compétence mobilisée de façon transversale dans trois projets : NutriGo (nutrition fonctionnelle), LAMA France (biscuits artisanaux) et Delightz (luminaires personnalisables).\nAction : Pour chaque projet, identification et organisation des éléments de faisabilité — NutriGo : tendances, contraintes légales, partenaires logistiques, ressources tech. LAMA : statut juridique, financement, positionnement, distribution. Delightz : parcours UX, fonctionnalités clés, stratégie contenus, contraintes techniques (budget, hébergement, responsive).",
    bilan: "Points Forts :\nApproche systématique : Capacité à structurer un projet dès l'amorçage en cartographiant ressources, risques et contraintes.\nPrise en compte des facteurs externes : Marché, réglementation et logistique intégrés à chaque phase de conception.\n\nAxes d'amélioration :\nFormalisation : Développer un document type (checklist, fiche projet) pour structurer cette phase de façon reproductible.\nAnticipation des risques : Mieux modéliser la dépendance à un seul canal ou les risques de retards.",
    livrableUrl: "AC BUT 2/KPI.pdf"
  }
  ,{
    id: 'b2-ebiz-ac5', year: 'BUT 2', competence: 'E-Business',
    title: "AC 5 : Utiliser les techniques de créativité individuelle et collective",
    projet: "Contexte : Sur initiative personnelle, en parallèle des projets de groupe (LAMA France, Remake, Tang), conception des chartes graphiques complètes de ces trois marques à l'aide d'Adobe Illustrator.\nAction : Réalisation de moodboards d'inspiration, expérimentation typographique et chromatique, création d'éléments vectoriels originaux (logos, pictogrammes, textures). Veille à la cohérence graphique et symbolique des éléments. Intégration naturelle des productions dans les livrables collectifs après validation des équipes.",
    bilan: "Points Forts :\nCréativité autonome : Initiative personnelle produisant des livrables immédiatement utilisables par les équipes.\nMaîtrise d'Illustrator : Identités visuelles cohérentes et professionnelles (web + print) pour trois marques distinctes.\n\nAxes d'amélioration :\nFormalisation du processus : Structurer la réflexion créative dans un document de démarche pour plus de reproductibilité.\nCo-création : Explorer des méthodes collaboratives (atelier graphique, sketch collectif).",
    livrableUrl: "AC BUT 2/Charte graphique LAMA.pdf"
  }
  ,{
    id: 'b2-ebiz-ac6', year: 'BUT 2', competence: 'E-Business',
    title: "AC 6 : Contribuer à l'enrichissement d'un projet collectif",
    projet: "Contexte : Stage de 2e année au département TC de l'IUT de Toulon (La Garde) — intégration à l'équipe organisant l'Assemblée des Chefs de Département TC 2025 (ACD TC), événement national réunissant les responsables pédagogiques de tous les BUT TC de France.\nAction : Création de supports visuels (cartes, carnets, affiches, signalétiques), conception d'un carnet d'anecdotes illustré (Circuit Art & Culture), participation à la production vidéo de l'événement. Coordination avec les pôles logistiques, réunions de suivi hebdomadaires, soutien terrain (plénières, accueil café, gala).",
    bilan: "Points Forts :\nIntégration multidisciplinaire : Collaboration fluide avec enseignants, personnels administratifs et autres stagiaires.\nApport créatif : Compétences graphiques mobilisées pour enrichir l'identité visuelle et l'expérience des participants.\n\nAxes d'amélioration :\nAnticipation des imprévus : Prévoir des plans B (météo, absences, matériels de dernière minute).\nCapitalisation : Documenter les retours des participants pour améliorer les prochaines éditions.",
    livrableUrl: "AC BUT 2/Mindview stage.pdf"
  }

  /* ========== MARKETING DIGITAL · BUT 2 ========== */
  ,{
    id: 'b2-dig-ac1', year: 'BUT 2', competence: 'Marketing Digital',
    title: "AC 1 : Analyser les données d'une activité digitale pour identifier des pistes d'optimisation",
    projet: "Contexte : Projet Delightz (néons LED personnalisables) — analyse concurrentielle et de performance digitale pour identifier les opportunités de positionnement.\nAction : Étude comparative de 6 concurrents (graphisme, navigation, offre, réseaux sociaux, tarifs). Mesure des performances via PageSpeed Insights. Observation des indicateurs d'engagement (abonnés, likes, fréquence) sur Instagram, TikTok et Facebook. Définition de KPIs à court/moyen/long terme : taux de conversion, trafic organique, satisfaction client, croissance mensuelle des ventes.",
    bilan: "Points Forts :\nSélection pertinente des données : Croisement de métriques quantitatives (trafic, prix) et qualitatives (ergonomie, branding, SEO).\nDémarche analytique : Les insights ont directement alimenté la stratégie digitale de Delightz.\n\nAxes d'amélioration :\nOutils de visualisation : Explorer des dashboards plus avancés pour présenter les données plus clairement.\nIndicateurs comportementaux : Compléter par des heatmaps et taux de rebond pour affiner la compréhension des usages.",
    livrableUrl: "AC BUT 2/Mission 2 analyse d'une activité digitale.pdf"
  }
  ,{
    id: 'b2-dig-ac2', year: 'BUT 2', competence: 'Marketing Digital',
    title: "AC 2 : Déployer des actions de marketing digital sur les canaux adaptés (SEO, réseaux sociaux, emailing)",
    projet: "Contexte : Oral stratégique MBAM autour de la marque Red Bull — construction d'une proposition complète de stratégie e-commerce intégrant les spécialités du marketing digital.\nAction : Conception d'une stratégie multicanale : boutique D2C avec personnalisation de canettes et abonnements, partenariats livraison express (–30 min), intégration gaming/e-sport (Twitch, RA), NFTs. Acquisition : SEO/blog nutrition-sport, retargeting email/push, Google Ads et Meta Ads. Suivi : KPIs (conversion, panier moyen, rétention) et tests A/B.",
    bilan: "Points Forts :\nApproche multi-canal centrée performance : Vision complète des leviers digitaux dans un cadre stratégique cohérent.\nIntégration de technologies émergentes : NFTs et réalité augmentée pertinents vis-à-vis du positionnement Red Bull.\n\nAxes d'amélioration :\nAspects techniques concrets : Approfondir la gestion CRM et les outils spécifiques (Shopify, GA4).\nAncrage dans l'existant : Analyser les campagnes réelles de Red Bull pour ancrer les propositions.",
    livrableUrl: "AC BUT 2/Stratégie E-commerce.pdf"
  }
  ,{
    id: 'b2-dig-ac3', year: 'BUT 2', competence: 'Marketing Digital',
    title: "AC 3 : Concevoir des contenus adaptés aux différents supports et canaux numériques",
    projet: "Contexte : Projet DocLine — plateforme de téléconsultation médicale fictive, avec production d'un cahier des charges e-business structuré.\nAction : Rédaction du CDC : besoins fonctionnels (prise de RDV, profils patients/médecins, consultations vidéo), sécurité (RGPD, authentification forte), identité numérique (charte graphique, UX fluide), stratégie digitale (SEO blog, réseaux sociaux, emailing), planification (jalons, budget 20 k€, risques anticipés).",
    bilan: "Points Forts :\nStructuration d'un projet numérique complexe : Intégration des dimensions techniques, UX, légales et marketing dans un document opérationnel.\nCohérence professionnelle : Livrable utilisable comme base réelle pour un prestataire ou développeur.\n\nAxes d'amélioration :\nPrécision des délais : Gagner en réalisme dans l'estimation des temps de développement.\nMaquettes UX/UI : Ajouter des wireframes détaillés pour une meilleure vision de l'expérience finale.",
    livrableUrl: "#"
  }
  ,{
    id: 'b2-dig-ac4', year: 'BUT 2', competence: 'Marketing Digital',
    title: "AC 4 : Évaluer la performance d'un dispositif digital à l'aide d'indicateurs clés (KPIs)",
    projet: "Contexte : Analyse stratégique e-commerce centrée sur Amazon — identification des spécialités et leviers de performance propres au commerce électronique.\nAction : Analyse des 10 piliers de la stratégie Amazon : UX (recommandations personnalisées, paiement 1 clic), logistique (FBA, suivi temps réel), fidélisation (Prime, abonnements), data marketing (ML, IA, omnicanalité), contenus enrichis (A+ Content, avis), prix dynamique et internationalisation.",
    bilan: "Points Forts :\nVision complète du e-commerce : Analyse transversale (technique, marketing, UX, logistique, data) identifiant les leviers différenciants.\nStructuration claire : Synthèse rigoureuse, directement transposable à d'autres plateformes ou marques.\n\nAxes d'amélioration :\nAnalyse critique : Approfondir les limites et risques du modèle Amazon (dépendances, controverses éthiques).\nBenchmark comparatif : Comparer avec d'autres plateformes pour enrichir la lecture.",
    livrableUrl: "AC BUT 2/Cas 2 stratégie E-commerce d'Amazon.pdf"
  }
  ,{
    id: 'b2-dig-ac5', year: 'BUT 2', competence: 'Marketing Digital',
    title: "AC 5 : Construire un plan de communication digitale cohérent avec les objectifs de l'entreprise",
    projet: "Contexte : Stage de 2e année à l'IUT de Toulon — organisation de l'ACD TC 2025 (Assemblée des Chefs de Département TC), événement national nécessitant un dispositif de communication complet.\nAction : Création de la signalétique du site, conception du site internet dédié à l'événement, élaboration du carnet d'anecdotes illustré (Circuit Art & Culture), réalisation de visuels imprimables (affiches, badges). Coordination logistique : planification transports, repas/traiteur, répétitions terrain, accueil participants et gestion des flux.",
    bilan: "Points Forts :\nRigueur dans les délais et les livrables : Supports professionnels produits dans les contraintes imposées.\nCoordination constante : Communication efficace avec les équipes animation, contenus et technique pour assurer la fluidité.\n\nAxes d'amélioration :\nPlans de contingence : Prévoir des solutions de repli (météo, absences, matériels défaillants).\nFormalisation logistique : Développer des checklists partagées pour les éditions suivantes.",
    livrableUrl: "AC BUT 2/Photo ACD TC.pdf"
  }

];
