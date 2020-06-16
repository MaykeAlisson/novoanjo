module.exports = {
  secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "SUHIUIHS15654SUGHIUGS5645648SGFY7874A154",
  api: process.env.NODE_ENV ===   "production" ? "https://api.novoanjo.com.br" : "http://localhost:3000",
  front: process.env.NODE_ENV ===   "production" ? "https://novoanjo.com.br" : "http://localhost:8080",
};


