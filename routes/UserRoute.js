import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/petugas_ronda', getUsers);
router.get('/petugas_ronda/:id', getUserById);
router.post('/petugas_ronda', createUser);
router.patch('/petugas_ronda/:id', updateUser);
router.delete('/petugas_ronda/:id', deleteUser);

export default router;

/*
import express from 'express';
import db from '../config/database.js';

const router = express.Router();


router.post('/', (req, res) => {
    const { nama, tanggal, lokasi } = req.body;
    const query = 'INSERT INTO petugas_ronda (nama, tanggal, lokasi) VALUES (?, ?, ?)';
    db.query(query, [nama, tanggal, lokasi ], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({ id: results.insertId, nama, tanggal, lokasi });
    });
});


router.get('/', (req, res) => {
    const query = 'SELECT * FROM petugas_ronda';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json(results);
    });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nama, tanggal } = req.body;
    const query = 'UPDATE petugas_ronda SET nama = ?, tanggal = ?, lokasi = ?, WHERE id = ?';
    db.query(query, [nama, tanggal, lokasi, id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ id, nama, tanggal, lokasi });
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM petugas_ronda WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(204).send();
    });
});

export default router;

*/