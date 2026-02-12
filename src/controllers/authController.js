const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = [];

const register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({
        email,
        password: hashedPassword
    });

    res.json({ message: "User registered" });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }

    const user = users.find(u => u.email === email);

    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
        { email: user.email },
        "secretkey",
        { expiresIn: "1h" }
    );

    res.json({ token });
};

// Exportar todas las funciones en un solo objeto
module.exports = { register, login };
