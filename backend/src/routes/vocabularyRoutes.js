import express from "express";

import * as vocabularyController from "../controllers/vocabularyController.js";

const router = express.Router();

router.get("/", vocabularyController.getVocabularys);
router.post("/", vocabularyController.createVocabulary);
router.put("/:id", vocabularyController.editVocabulary);
router.delete("/:id", vocabularyController.deleteVocabulary);

export default router;
