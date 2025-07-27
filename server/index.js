import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRoute from './routes/chatRoute.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('API is running...');
})
app.use('/chat', chatRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
