const db = require("../db")

// creation d'un  utilisateur 
const create = async ({
    id,
    firstname,
    lastname,
    email,
    password,
    phone,
}) => {
    return db
        .promise()
        .query(
            "INSERT INTO user (id, firstname, lastname, email, password, name, phone) VALUES (?,?,?,?,?,?,?)",
            [
                id,
                firstname,
                lastname,
                email,
                password,
                phone,
            ]
        );
};

// login pour se connecter trouver l'email de l'utilisateur 
const findByEmail = async (
    email) => {
    return db
        .promise()
        .query(
            "SELECT * FROM user WHERE email=?",
            [email]
        );
}

// trouver un utilisateur 
const getUser = async (id) => {
    return db
        .promise()
        .query(
            "SELECT * FROM user WHERE id=?", [id]
        );

}
// supprimer un utilisateur 

const deleteUser = async (id) => {
    console.log("id delete",id)
    return db
        .promise()
        .query("DELETE FROM user WHERE id=?", [id]);
}
const updateUser = async (
    id, newInformation
) => {
    console.log("idm",id)
    console.log("newi",newInformation)
    return db
        .promise()
        .query(
            "UPDATE user SET ? WHERE id=?", [
            newInformation,
            id

        ]
        );
}

// retrouver le mail de l'utilisateur
const verifyEmail = async(
    id
)=>{
    console.log(id)
    return db
    .promise()
    .query("SELECT * FROM user WHERE id=?",[id]
    )
}

// model pour confirmer l'inscription avec le mail en changeant le verify dans la base de donnees
const updateVerify=async(id)=>{
    console.log(id)
    return db
    .promise()
    .query("UPDATE user SET verify=? WHERE id=?",[true,id])
}

// model si l'inscription n'est pas confirmer supprimer l'utilisateur 
const deleteVerify= async()=>{
    
    return db
    .promise()
    .query("DELETE FROM user WHERE verify=?",[false])
}

module.exports = {
    create,
    updateUser,
    getUser,
    deleteUser,
    deleteVerify,
    updateUser,
    verifyEmail,
    findByEmail,
}