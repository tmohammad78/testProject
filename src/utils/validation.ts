import { ErrorAuth } from '../type/authType'

interface IObjectKeys {
    [key: string]: string
}

interface Value extends IObjectKeys {
    firstname: string
    lastname: string
}

/**
 *
 * @param err : get error object
 * @returns :return result
 */
const resultValid = (err: ErrorAuth): boolean => {
    return err.firstname.length === 0 && err.lastname.length === 0
}
/**
 *
 * @param value :firstname and lastname
 * @returns : return an error object and result as boolean type
 */
export const validation = (value: Value): ErrorAuth => {
    const error: ErrorAuth = {
        firstname: '',
        lastname: '',
        valid: false
    }
    const valid: Value = {
        firstname: 'hamed',
        lastname: 'kazemi'
    }
    for (const [key, str] of Object.entries(value)) {
        if (str.toLowerCase() !== valid[key]) {
            error[key] = `The ${key} is incorrect`
        }
    }
    return {
        ...error,
        valid: resultValid(error)
    }
}
