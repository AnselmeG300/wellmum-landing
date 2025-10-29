# Wellmum Website

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Construire pour la production
pnpm build
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🛠️ Stack technique

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styles utilitaires
- **next-intl** - Internationalisation (FR/EN)

## 📁 Structure du projet

```
wellmum-website/
├── app/              # Pages Next.js
├── components/       # Composants React réutilisables
├── constants/        # Données statiques
├── lib/             # Utilitaires et helpers
├── messages/        # Traductions (fr.json, en.json)
└── public/          # Fichiers statiques
```

## 🌍 Internationalisation

Le site est disponible en français et anglais. Les traductions se trouvent dans `messages/`.