import ApiClient from "../ApiClient";

export default abstract class AbstractClientRequestHandler {

    private _client?: ApiClient;

    set client(a: ApiClient) {
        this._client = a;
    }

    get client(): ApiClient {
        return this._client as ApiClient;
    }
}
