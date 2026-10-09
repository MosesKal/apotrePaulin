# Paulin Mambwe — Frontend

Première version locale en Next.js App Router, React et TypeScript.

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
- `src/app/[slug]/page.tsx` : biographie, enseignements, livres, conférences, école, contact.
- `src/components/shell.tsx` : navigation mobile et pied de page.
- `src/app/globals.css` : styles responsive et couleurs de la charte.
- `public/images` : portrait fourni et logo extrait du PDF (fond blanc conservé).

Les livres, enseignements et conférences utilisent des états vides explicites en attendant les contenus validés. L’illustration de livre sur l’accueil est décorative et ne représente pas un ouvrage publié. Aucun formulaire ne simule un envoi. Le contact renvoie au site réel de l’église ; aucun backend, suivi utilisateur ou stockage n’est configuré.

Polices : DM Sans et Manrope via Google Fonts avec repli Arial ; Georgia pour les italiques. Les typographies commerciales de la charte ne sont pas embarquées sans leurs fichiers et droits web.

## Suite

Intégrer les livres et médias validés, confirmer la biographie et les coordonnées officielles, puis relier les données à l’API NestJS. Ajouter recherche et filtres lorsque la bibliothèque dispose de vrais contenus. Définir les mentions légales et la politique de confidentialité avant publication.
