# 🍽️ The Daily Plate

**The Daily Plate** is a high-performance recipe discovery platform engineered with **React**, **Tailwind CSS**, and **TheMealDB API**. It features real-time search indexing, optimized data persistence, and a streamlined interface designed for professional-grade performance.

[View Live Project](https://vcntech-123.github.io/Recipe-Finder-App/) | [View Portfolio](https://vcntech-123.github.io/Personal-Web-Portfolio/index.html)

---

## 🚀 Core Features

* **Smart Search:** Real-time recipe filtering powered by a custom **Debounce** mechanism to minimize API overhead and improve performance.
* **Persistent Favorites:** Full functionality to save and remove recipes from a personal collection, persisted via **localStorage**.
* **Dynamic Data Shaping:** Custom utility functions to transform raw, inconsistent API data into structured arrays for ingredients and measurements.
* **Deep-Dive Modals:** Detailed recipe views featuring structured instructions and automated ingredient listing.
* **Responsive Architecture:** Mobile-first design utilizing Tailwind’s grid and flexbox systems for a seamless experience across devices.

## 🧠 Architectural Insights & Learning

One of the key challenges in this project was managing the **Recipe Modal** state across the application. 

> **The Pivot:** Initially, the modal state lived inside individual `Card` components. This led to "z-index" layering issues and redundant state management. I refactored the architecture to **lift the state up** to `Home.jsx`, allowing a single modal instance to handle all recipe views. This significantly improved memory usage and UI consistency.

### Technical Highlights:
* **State Management:** Utilized React Class Component state with functional `prevState` updates to ensure data integrity during rapid user interactions.
* **Lifecycle Persistence:** Implemented a robust "Save & Load" cycle using `JSON.stringify/parse` within the `componentDidUpdate` lifecycle method.
* **Performance:** Integrated a debounce hook to prevent unnecessary API rate-limiting during active searching.

## 🛠️ Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/TheMealDB-FF6B6B?style=for-the-badge" />
  <img src="https://img.shields.io/badge/LocalStorage-333333?style=for-the-badge" />
</p>

## 📁 Project Structure

```text
src/
├── components/     # Presentational UI Components (Header, Search, Cards)
├── pages/          # Layout & State Containers (Home.jsx)
├── utils/          # API services, Debounce logic, & Helper functions
├── assets/         # Global styles and static assets
└── App.jsx         # Root component
