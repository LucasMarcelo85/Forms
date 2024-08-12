const express = require('express');
const app = express();
const port = 3000; // Escolha uma porta

app.use(express.json());

app.post('/enviar-email', (req, res) => {
  // Aqui você pode implementar o envio do e-mail usando o Nodemailer
  // Extraia os dados do corpo da requisição (nome, e-mail, descrição)
  const { nome, email, descricao } = req.body;

  // Implemente o envio do e-mail para o endereço desejado (Lucasmarcelo8585@gmail.com)
  // Exemplo:
  // ...
  // Código para enviar o e-mail
  // ...

  res.status(200).json({ message: 'E-mail enviado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});


// --------------------------------------------------------------------------------
const nodemailer = require('nodemailer');

// Configurações do transporte de e-mail (use suas próprias credenciais)
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'seu-email@gmail.com',
    pass: 'sua-senha',
  },
});

// Função para enviar o e-mail
function enviarEmail(destinatario, assunto, corpo) {
  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: destinatario,
    subject: assunto,
    text: corpo,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
    } else {
      console.log('E-mail enviado:', info.response);
    }
  });
}
