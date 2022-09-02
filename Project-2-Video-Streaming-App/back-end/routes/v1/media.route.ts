import express, { Router } from "express";
import { mediaController } from "../../modules/media";

const router: Router = express.Router();
router.post("/upload", mediaController.createMedia);
router.get("/video/:mediaId", mediaController.mediaById);
router.get("/video/by/:userId", mediaController.listByUser);

export default router;
