export interface AuthUser {
    firstname: string
    lastname: string
}

export interface AuthType {
    user: AuthUser | null
    status: string
}

interface IObjectKeys {
    [key: string]: string | boolean | undefined
}

export interface ErrorAuth extends IObjectKeys {
    firstname: string
    lastname: string
    valid: boolean
}
