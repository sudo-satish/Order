export class Client{
    _id: String;
    phone: String;
    email: String;
    name: String;
    owner_name: String;
    owner_no: String;
    // password: string;
    active: boolean;
    // fromDate: String;
    // toDate: String;

    constructor(options: {
        _id?: String,
        phone?: string,
        email?: string,
        name?: string,
        owner_name?: string,
        owner_no?: string,
        active?: boolean,
        // password?: '',
        // fromDate?: String,
        // toDate?: string
    } = {}) {
        this._id = options._id || '';
        this.phone = options.phone;
        this.email = options.email || '';
        this.name = options.name || '';
        this.owner_name = options.owner_name || '';
        this.owner_no = options.owner_no || '';
        this.active = !!options.active;
        // this.fromDate = options.fromDate || '';
        // this.toDate = options.toDate || '';
        // this.password = options.password || '';
    }
}