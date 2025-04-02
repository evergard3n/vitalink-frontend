export interface Chat {
    id: string;
    message: string;
    sender: string;
    timestamp: string;
}

export interface FormContents {
    id: string,
    name: string,
    birthday: string,
    gender: string,
    phone: string,
    province: string,
    district: string,
    ward: string,
    address: string,
    chuyenkhoa: string,
    trieuchung: string,
    validated: boolean
}