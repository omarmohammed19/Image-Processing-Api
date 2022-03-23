import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => console.log(`listening on http://localhost:${port}/api/imageprocessing?width=500&height=500 !`));

export default app;