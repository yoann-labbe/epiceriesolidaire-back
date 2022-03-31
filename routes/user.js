const express = require("express")
const { controllerDeleteAll } = require("../controllers/annnonce")
const router = express.Router()
const { createUSer, login, findUser, deleteUserProfil, updateUserProfil, findUserById, updatePasswordProfil, verifymail, resetPassword } = require("../controllers/user")
const { continueIfFindEmail, verifyToken, dontContinueIfFindEmail, findEmail, tokenEmail, tokenPassword } = require("../middleware/auth")
const { sendmail2 } = require("../middleware/sendmail")
// const { sendmail } = require("../middleware/sendmail")
const { validationSignup, validationLogin } = require("../middleware/validation")


/*const {sendEmail} = require("../middleware/sendmail")*/




// route pour creer un utilisateur
router.post("/", dontContinueIfFindEmail, validationSignup, createUSer)
// route pour se connecter 
router.post("/login", continueIfFindEmail, validationLogin, login)
// route pour qu'un utilisateur voit son profil
router.get("/find", verifyToken, findUser)
// route pour voir le profil d'une annonce
router.get("/findId/:id", findUserById)
// route pour supprimer son compte
router.delete("/drop", verifyToken, controllerDeleteAll, deleteUserProfil)
// route pour modifier que un utilisateur modifie  son profil 
router.patch("/update", verifyToken, updateUserProfil)
// ??????
router.patch("/change/:id", updatePasswordProfil)
// route apres avoir cliqué sur le lien reçus par mail pour l'inscription
router.get("/verifyemail",tokenEmail,verifymail)
// route pour mot de passe oublier
router.post("/verify", findEmail,sendmail2)
// route apres avoir cliqué sur le lien recu par mail pour le mot de passe
router.get("/pass",tokenPassword)

router.post("/resetpassword/:user",resetPassword)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router