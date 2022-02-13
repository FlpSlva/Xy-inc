// Design Patterns, Data Transfer Object

interface ICreatePoinInterestDTO {

    name: string
    y: number
    x: number
}

interface IRequest {
    y: number
    x: number
}

interface IDmaxRequest {
    x: number
    y: number
    dMax: number
}




export {ICreatePoinInterestDTO, IRequest, IDmaxRequest}