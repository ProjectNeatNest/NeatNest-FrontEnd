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
    is_admin?: boolean;
}

export interface LogInResponse {
    user: User;
    token: string;
}

export interface Housing {
    housing_id: number;
    name: string;
    created_at: string;
}

export interface Area {
    area_id: number;
    name: string;
    housing_id: number;
    created_at: string;
}

export type DefaultArea = Omit<Area, 'housing_id'>;

export interface Task {
    task_id: number;
    name: string;
    area: Area;
    created_at: string;
    duration: string;
    user: User;
    limit_date: string | null;
    is_completed: boolean;
}
