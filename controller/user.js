import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

export const addNewUser = (req, res) => {
    const q = "INSERT INTO users(`nome`,`email`,`fone`,`date_of_birth`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.date_of_birth,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("User inserted in Database!");
    })
}

export const updateUser = (req, res) => {
    const q = "UPDATE user SET `nome`=?, `email`=?, `fone`=?, `date_of_birth`=? WHERE `id`= ? ";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.date_of_birth,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("User updated successfully!");
    })
}