# Athithya

Athithya is a **Next.js** project that provides a platform for users to explore and interact with various features such as searching, posting, messaging, and hosting.

---

## 📌 Project Structure

```
├── app/
│   ├── page.js           # Main entry point of the application
│   ├── layout.js         # Layout component that wraps the application
│   ├── providers.js      # Context providers wrapper
│   └── globals.css       # Global CSS styles
│
├── components/
│   ├── cards/
│   │   ├── PostCard.js      # Component to display a single post
│   │   ├── MessageCard.js   # Component to display a message
│   │   └── HostCard.js      # Component to display a host
│   │
│   └── list/
│       └── HostList.js      # Component to display a list of hosts
│
├── public/                 # Static assets (images, icons, etc.)
│
├── src/                    # Application source code
│
├── middleware.ts           # Server-side middleware for routing
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── utils/                  # Utility functions
```

---

## 🚀 Features

* 🔍 **Search** – Search bar component for querying posts.
* 📝 **Posting** – PostCard component to view and interact with posts.
* 💬 **Messaging** – MessageCard component for managing messages.
* 🏡 **Hosting** – HostCard and HostList to browse and interact with hosts.

---

## 🎨 UI & Styling

* **Icons**: Uses [Phosphor React Icons](https://phosphoricons.com/).
* **Colors**: Custom theme defined in `globals.css`.
* **Fonts**: Uses `Inter Tight` from Google Fonts.
* **Layout**: Global layout defined in `layout.js`.

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/AthithyaConnect/athithya.git

# Navigate into the project directory
cd athithya

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🤝 Contributing

Contributions are welcome!
Please open a pull request with a clear description of your changes.

---

## 📄 License
This project is licensed under the [MIT License](https://github.com/AthithyaConnect/athithya/blob/main/LICENSE).
 