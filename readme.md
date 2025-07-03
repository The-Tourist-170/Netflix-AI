# 🎥 Netflix AI

A modern, interactive Netflix-style clone powered by **Gemini AI** featuring sleek animations, dynamic UI interactions, and robust app flows.

---

## 🚀 Features

- **Authentication**

  - Sign‑up, Sign‑in, user sessions using Firebase
  - Form validation, profile updates, auth state management (auth‑redirects, cleanup unsubscribes)

- **Browse Experience**

  - Netflix‑style landing/browse page with autoplay trailers
  - Horizontal scrolling movie lists using TMDB API data

- **Gemini AI Recommendation**

  - Powered by Google’s Gemini API (not OpenAI)
  - Users receive personalized movie suggestions based on natural language queries

- **UI Enhancements Added**

  - **Framer Motion** for smooth component entrance/exit animations
  - Custom **Loading animations** during data fetch
  - **Blurred background** used across sections for aesthetic depth
  - **UI Bug fixes** (alignment, responsive tweaks)
  - **Hover effects**: buttons/text change color for interactivity

---

## 🧱 Tech Stack

| Layer        | Technologies                                     |
| ------------ | ------------------------------------------------ |
| **Frontend** | React (Vite or CRA), Tailwind CSS, Framer Motion |
| **AI**       | Gemini AI API                                    |
| **API**      | TMDB REST API                                    |
| **State**    | Redux Toolkit                                    |
| **Backend**  | Firebase (Auth)                                  |

---

## 🎨 UI & Animations

- Component lifecycle animations via **Framer Motion**
- Loading states visually enhanced
- Blurred overlays for clean aesthetic
- Color transitions on hover to boost engagement

---

## ⚙️ Installation & Setup

1. **Clone** the repo
2. **Install** dependencies:
   ```bash
   npm install
   ```
3. Add API Keys in "constant.js" file:
   ```
   Authorization: 'Add Your TMDB KEY HERE.'
   gemini_api_key = "Add Your GEMINI AI KEY HERE.";
   ```
4. **Run** the dev server:
   ```bash
   npm run dev
   ```
5. **Build** for production:
   ```bash
   npm run build
   ```
6. **Deploy** (e.g. Vercel, Netlify, Firebase Hosting)

---

## 🧭 Usage

1. Sign up or log in via the auth pages
2. Browse new releases & featured movies
3. Use the **Gemini-powered search** to get smart suggestions
4. Click on a movie to view trailer and details [UPCOMING!]

---

## 🔗 Links & Resources

- [TMDB API Docs](https://developer.themoviedb.org/)
- [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- [Gemini AI API Docs](https://ai.google.dev/gemini-api/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🔍 Deployed Link

- [https://netflix-ai-3821.web.app/](https://netflix-ai-3821.web.app/)

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## ✅ Contribution & Feedback

Feel free to:

- 🐛 Report bugs or UI issues
- ✨ Suggest new features (voice search?)
- 🤝 Submit pull requests

**Happy Coding!**
