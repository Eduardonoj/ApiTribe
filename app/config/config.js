module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb+srv://dbTribe:Atento.2020@cluster0.rdn2b.mongodb.net/TribeDB?retryWrites=true&w=majority', 
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'Atento.2020'
}
