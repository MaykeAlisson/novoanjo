module.exports = {
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.NOVO_ANJO_EMAIL,
    pass: process.env.NOVO_ANJO_EMAIL_SENHA
  }
};
