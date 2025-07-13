const express = require('express');
const path = require('path');
const app = express();

const distPath = path.join(__dirname, 'dist', 'frontend-app', 'browser');
app.use(express.static(distPath));

app.get(/^\/.*/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
  console.log(`Angular app is running on http://localhost:${PORT}`);
});
