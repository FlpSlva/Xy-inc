// Middleware De Erros, Pra Relogar o Docker Após Algum Erro

export class AppError {

    public readonly message: string;


    public readonly statusCode: number;


    constructor(message: string, statusCode = 400) {

        this.message = message

        this.statusCode = statusCode

    }

}