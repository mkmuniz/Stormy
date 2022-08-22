import { User } from './entities/user.entities';
const bcrypt = require('bcrypt');


export default class userService {
    static async getAll() {
        try {
            return await User.find();
        } catch(e: any) {
            throw new Error(e);
        }
    }
    
    static async getOne(id: string) {
        try {
            return await User.findById(id);
        } catch(e: any) {
            throw new Error(e);
        }
    }

    static async getUser(username: any) {
        try {
            return await User.find({"username": username});
        } catch(e: any) {
            throw new Error(e);
        }
    }

    static async getUserEmail(email: any) {
        try {
            return await User.find({"email": email});
        } catch(e: any) {
            throw new Error(e);
        }
    }


    static async postOne(body: any) {
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
        try {
            return await User.create(body);
        } catch(e: any) {
            throw new Error(e);
        }
    }

    static async patchOne(id: string, body: any) {
        try {
            return await User.findByIdAndUpdate(id, body);
        } catch(e: any) {
            throw new Error(e);
        }
    }

    static async deleteOne(id: string) {
        try {
            return await User.findByIdAndDelete(id);;
        } catch(e: any) {
            throw new Error(e);
        }
    }
}