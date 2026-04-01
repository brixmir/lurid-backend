const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const MAKE_WEBHOOK_URL = "https://hook.eu2.make.com/hn8ecs9jwjss2zffscu1qaw18d2lpz66";

app.post("/submit-feedback", async (req, res) => {
    try {
        console.log("Incoming data:", req.body);

        const response = await fetch(MAKE_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
