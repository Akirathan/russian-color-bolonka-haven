import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages serves static files and returns 404 for deep links like
// /russian-color-bolonka-haven/o-nas on refresh.
// We ship public/404.html which redirects to /?/<path> and this snippet
// converts it back to the real URL before React Router mounts.
(() => {
  const l = window.location;
  // If the URL looks like: /repo/?/o-nas?x=1~and~y=2
  if (l.search && l.search.length > 1 && l.search[1] === "/") {
    const decoded = l.search
      .slice(1)
      .split("&")
      .map((s) => s.replace(/~and~/g, "&"))
      .join("?");

    const basePath = l.pathname.replace(/\/$/, "");
    window.history.replaceState(null, "", basePath + decoded + l.hash);
  }
})();

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
