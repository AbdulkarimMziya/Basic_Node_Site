# Basic Node.js HTTP Server

This project is a simple HTTP server built using Node.js core modules (`http` and `fs`). It serves static HTML files based on the requested URL path, including a custom 404 page.

## 📁 Project Structure

```
project-root/
├── views/
│ ├── index.html
│ ├── about.html
│ ├── contact-me.html
│ └── 404.html
└── server.js
```

## 🚀 Features

- Serves HTML pages for `/`, `/about`, and `/contact-me`
- Displays a custom 404 page for all other routes
- Uses only Node.js built-in modules (no frameworks)
- Properly sets `Content-Type` to `text/html`

## 🧠 Concepts Demonstrated  

- Node.js Core Modules: Used `http` to create a server and `fs` to read HTML files.
- Routing Logic: Handled different URL paths using a `switch` statement to serve different views.
- Serving Static Files: Dynamically served `.html` files without using a framework.
- HTTP Headers: Set `Content-Type` to `text/html` to correctly display HTML in the browser.
- Basic Error Handling: Logged file read errors and ensured the server still responds appropriately.

## 🧑‍💻 Author  
Made with ❤️ by [Abdulkarim Mziya](https://abdulmziya.netlify.app/)