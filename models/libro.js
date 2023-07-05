const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/biblioteca", {
useUnifiedTopology: true,
useNewUrlParser: true,
});
const LibroSchema = new mongoose.Schema({
nombre: String,
producto: String,
email: String
}, { collection: 'libros' });
const Libro = mongoose.model('Libro', LibroSchema);
module.exports = Libro;
