import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT || 3000;

const app: express.Application = express();

const corsOptions = {
    origin: '*', // Consenti l'accesso da qualsiasi dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log('ciao');
    console.log(`listen to port: ${port}`);
});

app.get('/', (req, res) => {
    res.status(200).send('Hello word');
});