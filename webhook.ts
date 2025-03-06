import express, { Request, Response } from 'express';

const app = express();


app.use(express.json());


app.post('/webhook', (req: Request, res: Response) => {
    const payload = req.body;

    console.log('Webhook payload received:', payload);



    res.status(200).send({
        success: true,
        message: 'Webhook data received successfully.',
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Webhook server running at: http://localhost:${PORT}/webhook`);
});


