# Formulário de Feedback com Envio de E-mail
Este projeto consiste em um formulário no qual o usuário pode preencher notas e, em seguida, uma mensagem é enviada para o e-mail especificado. O formulário pode ter diversas funcionalidades, como coletar feedback ou permitir que os usuários solicitem ajuda e tirem dúvidas.

# Configuração do Servidor Express
Primeiro, criamos um servidor Express na porta 3000. O middleware express.json() permite analisar o corpo das requisições como JSON.

# Rota para Envio de E-mail
Definimos uma rota POST em /enviar-email. Quando um cliente faz uma solicitação para essa rota, podemos extrair os dados do corpo da requisição (nome, e-mail e descrição).

# Envio de E-mail com Nodemailer
Utilizamos o Nodemailer para enviar e-mails. Primeiro, configuramos o transporte de e-mail com as credenciais do Gmail.

Em seguida, criamos a função enviarEmail, que aceita um destinatário, assunto e corpo. Ela cria um objeto mailOptions com esses detalhes e usa o transporter para enviar o e-mail.

# Tecnologias Utilizadas
HTML <br>
CSS <br>
JavaScript <br>
Nodemailer <br>
Express.js <br>
