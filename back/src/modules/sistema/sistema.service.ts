import Sistema from './entities/sistema.entity';

export default class SistemaService {
    static async getAll() {
        try {
            return await Sistema.find();
        } catch (err: any) {
            return console.error({ "Error": err as Error });
        }
    }

    static async getOne(id: any) {
        const sistema = await Sistema.findById(id);

        try {
            if (!sistema) {
                return console.error({ "Error": "Sistema não encontrado" });
            }

            return sistema;

        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async verifySystemOn() {
        try {
            return Sistema.find({ status: 'aberto' }).lean()
        } catch (e: any) {
            throw new Error(e);
        }
    }

    static async create(body: any) {
        const sistemaAtivo = await this.verifySystemOn();

        try {
            if (sistemaAtivo.length > 0) {
                return console.error({ "Error": "It wasnt possible to create a system." })
            }
            if (!body['permissoes']) {
                body = { ...body, permissoes: {} }
            }
            return Sistema.create(body);
        } catch (e: any) {
            throw new Error(e);
        }
    }

}