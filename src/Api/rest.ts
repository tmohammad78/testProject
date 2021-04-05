/**
 *Class Rest Api
 */
class RestApi {
    static readonly baseApi = 'https://opentdb.com/api.php'

    static getQuestions(): string {
        return `${RestApi.baseApi}?amount=10&category=18&type=multiple`
    }
}

export default RestApi
