const app = require('./src/server');
const port = 3000;

app.listen(port, () => {
    console.log(`Server on port ${port}`);
})
