export class Cart {

    _id: string;
    name: string;
    code: string; 
    rate: number; 
    desc: string; 
    offers: Object[]; 
    quantity: number = 0; 
    total: number = 0;
}