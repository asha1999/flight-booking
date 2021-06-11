/*
const express = require("express");
const router = express.Router();
const userController = require("./userController");
const auth = require("./auth");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/data", auth, userController.defineDummyData);


module.exports = router;*/

const express = require("express");
const router = express.Router();
const userController = require("./userController");
const auth = require("./auth")



/**
 * @swagger
 * /register:
 *   post:
 *     summary: For making new reservation
 *     description: For making new registration so that they can login 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: user name.
 *                 example: Pune
 *               password:
 *                 type: string
 *                 description: user password.
 *                 example: Mumbai
 *               phone_number:
 *                 type: string
 *                 description: user phoneno.
 *                 example: rajdhani
 *               email :
 *                 type: string
 *                 description: user email
 *                 example: 2
 *     responses:
 *       201:
 *         description: It will make new registration along with required paramaters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                      name:
 *                 type: string
 *                 description: user name.
 *                 example: asha
 *               password:
 *                 type: string
 *                 description: user password.
 *                 example: 12345
 *               phone_number:
 *                 type: string
 *                 description: user phoneno.
 *                 example: 7879800080
 *               email :
 *                 type: string
 *                 description: user email
 *                 example: honeyasha1999@gmail.com
 *                         
 */
router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get("/data", auth, userController.defineDummyData)

module.exports = router;