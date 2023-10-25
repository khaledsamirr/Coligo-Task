import express from "express";
import {createAnnouncement, deleteAnnouncement, getAllAnnouncements, getAnnouncement, updateAnnouncement} from "../controllers/announcementController.js"

const router= express.Router();

router.get("/",getAllAnnouncements)
router.get("/:id",getAnnouncement)
router.post("/",createAnnouncement)
router.delete("/:id",deleteAnnouncement)
router.put("/:id",updateAnnouncement)


export default router;