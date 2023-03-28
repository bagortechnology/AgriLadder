const db = require("/dbconfig");

router.post("/farmhand/register/index.html", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if user already exists
    const userExists = await db.query("SELECT * FROM users WHERE email = $1", [
      email
    ]);

    if (userExists.rowCount > 0) {
      return res.status(400).send("User already exists.");
    }

    // Insert user into the database
    await db.query(
      "INSERT INTO users (email, password, role) VALUES ($1, $2, $3)",
      [email, password, role]
    );

    return res.status(200).send("Registration successful.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error.");
  }
});
