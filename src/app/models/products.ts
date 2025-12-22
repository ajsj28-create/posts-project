export interface Iproduct {
    id: string
    name: string
    description: string
    status: orderStatus 
}

export enum orderStatus {
    inprogress = 'inprogress',
    dispatched = 'dispatched',
    delivered = 'delivered'
}