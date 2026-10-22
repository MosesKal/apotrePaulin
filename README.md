# Paulin Mambwe — Frontend

Site local en Next.js App Router, React et TypeScript. Refonte photographique du ministère, navigation persistante, galerie filtrable et visionneuse accessible au clavier.

## Démarrer

Node.js 20.9 minimum.

```sh
npm install
npm run dev
```

Ouvrir http://localhost:3000.

```sh
npm run build
npm run start
npm run typecheck
```

## Structure

- `src/app/page.tsx` : accueil.
- `src/app/[slug]/page.tsx` : biographie, enseignements, livres, conférences, École des Lecteurs, agenda, médias et contact.
- `src/components/shell.tsx` : navigation mobile et pied de page.
- `src/components/ministry-gallery.tsx` : galerie avec filtres, agrandissement, navigation au clavier et retour du focus.
- `src/components/icon.tsx` : icônes SVG communes, indépendantes des polices et des symboles du système.
- `src/app/globals.css` : styles responsive et couleurs de la charte.
- `public/images` : portraits et photographies fournis, logo extrait du PDF.

Les livres, enseignements, conférences et événements utilisent des états vides explicites en attendant les contenus validés. L’illustration de livre sur l’accueil est décorative et ne représente pas un ouvrage publié. La page Médias présente les photographies fournies. Aucun formulaire ne simule un envoi. Le contact renvoie au site réel de l’église ; aucun backend, suivi utilisateur ou stockage n’est configuré.

Polices : DM Sans via Google Fonts avec repli Arial ; Georgia pour les titres. Les typographies commerciales de la charte ne sont pas embarquées sans leurs fichiers et droits web. Les photos fournies sont conservées dans `public/images/ministry` ; les deux images de 206 pixels ne sont pas agrandies.

## Rendu mobile

Utiliser le composant `Icon` pour les pictogrammes : éviter les caractères Unicode ou emoji comme icônes de navigation. Les boutons ont une apparence et des couleurs explicites ; les marqueurs de FAQ utilisent également des SVG. Les styles de survol sont réservés aux pointeurs précis avec survol. Le CSS prévoit les préfixes Safari pour le flou et l’ajustement du texte, ainsi qu’un repli en `vh` pour les hauteurs en `dvh`. Le zoom du navigateur reste disponible.

Après modification des styles partagés, vérifier dans Chromium et WebKit : navigation et défilement du menu en portrait/paysage, galerie et retour du focus, FAQ, absence de débordement à 320 px et aux changements de breakpoint, préférence système sombre, absence de polices externes et réduction des animations. Un contrôle sur iPhone réel complète ces tests de moteur.

## Suite

Intégrer les livres et médias validés, confirmer la biographie et les coordonnées officielles, puis relier les données à l’API NestJS. Ajouter recherche et filtres lorsque la bibliothèque dispose de vrais contenus. Définir les mentions légales et la politique de confidentialité avant publication.
