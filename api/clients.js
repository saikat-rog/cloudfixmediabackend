import dotenv from "dotenv";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Serve static files from the 'clientimages' directory
router.use('/images', express.static(path.join(__dirname, '../clientimages')));

const clientData = [
  { id: 1, name: 'Lakshay Thakur',  image: `https://api.cloudfixmedia.com/api/clients/images/lakshay.png` },
  { id: 2, name: 'N Murali',  image: `${process.env.BASE_URL}/api/clients/images/nmurail.png` },
  { id: 3, name: 'Sankho Kun',  image: `${process.env.BASE_URL}/api/clients/images/sankhakun.png` },
  { id: 4, name: 'Ankit Gupta',   image: `${process.env.BASE_URL}/api/clients/images/ankit.png` },
  { id: 5, name: 'QuickBits',   image: `${process.env.BASE_URL}/api/clients/images/quickbits.png` },
];

router.get('/', (req, res) => {
  res.send(clientData);
});

export default router;
