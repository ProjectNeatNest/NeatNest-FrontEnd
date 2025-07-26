export interface User {
    user_id: number;
    name: string;
    surname: string;
    surname_2: string | null;
    email: string;
    username: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

export interface LogInResponse {
    user: User;
    token: string;
}

export interface Area {
    area_id: number;
    name: string;
    housing_id: number;
    created_at: string;
}
