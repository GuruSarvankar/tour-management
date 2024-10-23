import { app } from "./app.js";

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
