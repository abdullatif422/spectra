react-learn/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── components/
│   │   │   ├── Button.tsx
│   │   │   └── ...
│   │   ├── lib/
│   │   │   ├── api.ts
│   │   │   └── ...
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── ...
│   │   ├── types/
│   │   │   ├── product.d.ts
│   │   │   └── ...
│   │   ├── context/
│   │   │   ├── AuthContext.tsx
│   │   │   └── ...
|   |   |-- auth
|   |   |   |-- login
|   |   |   |   |-- page.tsx
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   ├   |-- overview/page.tsx
│   │   │   ├   |-- analytics/page.tsx
│   │   │   │   ├── api.ts
│   │   │   │   ├── types.ts
│   │   │   │   └── ...
│   │   │   ├── cart/
│   │   │   │   └── ...
│   │   ├── middleware.ts
│   │   ├── not-found.tsx
│   │   ├── loading.tsx
│   │   └── ...
│   ├── public/
│   │   ├── favicon.ico
│   │   └── ...
│   └── styles/  // If not using CSS modules in app dir
│       └── global.css
├── .env.local
├── next.config.js
├── package.json  // Correct location!
├── tsconfig.json
└── ...