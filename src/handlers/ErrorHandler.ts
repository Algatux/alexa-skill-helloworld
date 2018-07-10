
import * as Alexa from 'ask-sdk-core'
import { Response } from 'ask-sdk-model';

export default class ErrorHandler implements Alexa.ErrorHandler {

    canHandle(handlerInput: Alexa.HandlerInput, error: Error): boolean {

        return true;
    }

    handle(handlerInput: Alexa.HandlerInput, error: Error): Response {

        return handlerInput.responseBuilder
            .speak(`C'è stato un errore!`)
            .getResponse()
    }

}