
export default class ApiClient {
    private endpoint: string;
    private apiKey: string;
    // private headers: Headers;

    constructor(endpoint: string, apiKey: string) {
        this.endpoint = endpoint;
        this.apiKey = apiKey;
        // this.headers = new Headers();
    }

    public getList(): object {

        return this.doCall('/list');
    }

    private doCall(route: string = '') {
        const queryString = `${this.endpoint}/${route}?apiKey=${this.apiKey}`;

        const config = {
            method: 'GET',
            // headers: this.headers,
        };

        return fetch(new Request(queryString, config))
            .then(response => response.json());
    }
}
