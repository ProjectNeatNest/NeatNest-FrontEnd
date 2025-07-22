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
