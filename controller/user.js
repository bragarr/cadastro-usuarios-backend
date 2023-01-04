import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if(err) return res.json();

        return res.status(200).json(data);
    });
};

export const addNewUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`,`email`,`fone`,`tag`) VALUES(?)";

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
    const q = "UPDATE `cad_usuarios`.`usuarios` SET `nome`=?, `email`=?, `fone`=?, `tag`=? WHERE (`idusuarios`= ?) ";

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
    const q = "DELETE FROM `cad_usuarios`.`usuarios` WHERE (`id`=?)";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("User deleted successfully!");
    })
}