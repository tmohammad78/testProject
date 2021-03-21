export interface AuthUser {
    firstname: string;
    lastname: string
}
export interface AuthType {
    user: AuthUser | null,
    loading: boolean;
    status: string;
}