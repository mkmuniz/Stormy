import { Games } from './entities/games.entities';
const bcrypt = require('bcrypt');


export default class gamesService {

    static async getAll() {
        try {
            return await Games.find();
        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async getOne(id: string) {
        try {
            return await Games.findById(id);
        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async postOne(body: any) {
        try {
            return await Games.create(body);
        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async postComentario(id: String, body: any) {
        try {
            return await Games.findByIdAndUpdate(id, { $push: { comentarios: [{ autor: body.autor, coment: body.coment, nota: body.nota }] } });
        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async postResposta(id: String, body: any) {
        try {
            const user = await Games.findById(id);
            const listaComentarios = user.comentarios.filter((comentario: any) => {
                return comentario._id = body.remetente;
            })
            return listaComentarios.findOneAndUpdate(body.remetente, { $push: { "autor": body.autor, "comentario": body.comentario, "nota": body.nota } });
        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async patchOne(id: string, body: any) {
        try {
            return await Games.findByIdAndUpdate(id, body);
        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async deleteOne(id: string) {
        try {
            return await Games.findByIdAndDelete(id);;
        } catch (e: any) {
            throw new Error(e);
        }
    }
}