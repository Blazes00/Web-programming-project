const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import the path module

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' folder

// MongoDB connection
const CONNECTION_URL = 'mongodb+srv://Nicky:Nicky123@cluster0.0pahi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Connection error', err));

// Note schema
const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: String,
});

const Note = mongoose.model('Note', noteSchema);

// Routes for handling notes
app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/notes', async (req, res) => {
    const { title, content, createdAt } = req.body;
    const newNote = new Note({ title, content, createdAt });
    try {
        const savedNote = await newNote.save();
        res.json(savedNote);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete('/notes/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Route to serve Notepad.html or homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Notepad.html'));  // Replace with your main HTML file
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
