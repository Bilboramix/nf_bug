import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json(req.method);
});
router.post("/test", (req, res) => {
  res.json(req.method);
});

export default router;
