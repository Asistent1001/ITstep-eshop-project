# NHL-Retail Company Website
A fully responsive static website developed as a course assignment for Step IT Academy. The site, designed based on a Figma prototype, represents NHL-Retail, a company specializing in comprehensive solutions for equipping retail networks, bakeries, butcheries, and production facilities. It features interactive carousels, modals, navigation menus, and dynamic content toggles, built with vanilla web technologies for optimal performance and accessibility.

![Website Preview](./images/screenshot.png)

## 🚀 Live Demo

[View the live website here ↗](https://asistent1001.github.io/ITstep-eshop-project/)  

## 🛠️ Tech Stack

-   **Markup:** HTML5
-   **Styling:** SCSS (compiled to CSS3), Normalize.css for resets
-   **Scripting:** Vanilla JavaScript
-   **Fonts:** Google Fonts (Noto Sans, Roboto)
-   **Icons:** Font Awesome (for contact icons)
-   **Interactivity:** Custom JS modules for carousels, modals, toggles, and responsive menus
-   **External Libraries:** Normalize.css (via CDN), Google Fonts (via CDN)
-   **Code Quality:** Minified CSS for production, modular JS files

## 📦 Project Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nhl-retail-website.git
    cd nhl-retail-website
    ```

2.  **Install dependencies (if using a local server or SCSS compiler):**
    - No npm dependencies required for runtime, but for development:
      ```bash
      npm install -g sass live-server  # Optional: For SCSS compilation and local server
      ```

3.  **Compile SCSS (if modifying styles):**
    ```bash
    sass index.scss index.min.css --style=compressed
    ```

4.  **Start a local development server:**
    ```bash
    live-server
    ```
    Open [http://localhost:8080](http://localhost:8080) to view it in the browser. Alternatively, simply open `index.html` in your browser.

## 🏗️ Building for Production

To prepare the site for deployment (minify CSS and ensure assets are ready):

1.  Compile and minify SCSS:
    ```bash
    sass index.scss index.min.css --style=compressed
    ```

2.  The site is static—copy the HTML, CSS, JS, and assets to your hosting provider (e.g., GitHub Pages, Vercel, or Netlify).

For deployment:
- Commit changes and push to GitHub:
  ```bash
  git add .
  git commit -m "Add README and project files"
  git push origin main
  ```
- Use GitHub Pages or a static site host for live deployment.