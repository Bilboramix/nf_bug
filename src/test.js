import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("Triggering the get");
  res.json(req.method);
});
router.post("/test", (req, res) => {
  console.log("Triggering the post");
  res.json(req.method);
});

export default router;
