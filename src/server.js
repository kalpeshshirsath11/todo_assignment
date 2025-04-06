const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const authRoutes = require('./routes/auth.route');
const taskRoutes = require('./routes/task.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/tasks', taskRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
