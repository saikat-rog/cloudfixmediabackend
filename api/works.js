import dotenv from "dotenv";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Serve static files from the 'clientimages' directory
router.use('/videos', express.static(path.join(__dirname, '../workvideos')));

const worksData = [
  { id: 1, video: `${process.env.BASE_URL}/api/works/videos/vid1.mp4` },
  { id: 2, video: `${process.env.BASE_URL}/api/works/videos/vid2.mp4` },
  { id: 3, video: `${process.env.BASE_URL}/api/works/videos/vid3.mp4` },
  { id: 4, video: `${process.env.BASE_URL}/api/works/videos/vid4.mp4` },
  { id: 5, video: `${process.env.BASE_URL}/api/works/videos/vid5.mp4` },
];

router.get('/', (req, res) => {
  res.send(worksData);
});

export default router;
