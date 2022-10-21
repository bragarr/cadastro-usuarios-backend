import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

export const addNewUser = (req, res) => {
    const q = "INSERT INTO users(`nome`,`email`,`fone`,`tag`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.tag,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("User inserted in Database!");
    })
}

export const updateUser = (req, res) => {
    const q = "UPDATE `heroku_4073c21c6a2867f`.`users` SET `nome`=?, `email`=?, `fone`=?, `tag`=? WHERE (`id`= ?) ";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.tag,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("User updated successfully!");
    })
}

export const deleteUser = (req, res) => {
    const q = "DELETE FROM `heroku_4073c21c6a2867f`.`users` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("User deleted successfully!");
    })
}