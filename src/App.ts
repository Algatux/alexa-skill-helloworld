
import * as Alexa from 'ask-sdk-core';
import { LambdaHandler } from 'ask-sdk-core/dist/skill/factory/BaseSkillFactory';
// import AbstractClientRequestHandler from './handlers/AbstractClientRequestHandler';
// import ApiClient from './ApiClient';

export default class App {

    private alexa: Alexa.CustomSkillBuilder;

    constructor() {
        this.alexa = Alexa.SkillBuilders.custom();
    }

    public addHandlers(...handlers: Alexa.RequestHandler[]): this {

        // const client = new ApiClient(
        //     process.env.API_ENDPOINT as string, 
        //     process.env.API_KEY as string
        // );

        handlers = handlers.map((handler: Alexa.RequestHandler) => {
            // if (handler instanceof AbstractClientRequestHandler ) {
            //     handler.client = client;
            // }

            return handler;
        });

        this.alexa.addRequestHandlers(...handlers);

        return this;
    }

    public addErrorHandlers(...handlers: Alexa.ErrorHandler[]): this {
        this.alexa.addErrorHandlers(...handlers);

        return this;
    }

    public lamdaHandler(): LambdaHandler {

        return this.alexa.lambda();
    }

} 