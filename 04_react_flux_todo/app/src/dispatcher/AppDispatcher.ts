import * as Flux from 'flux';

let AppDispatcher = new Flux.Dispatcher<AppDispatcher.TodoActionPayload>();

namespace AppDispatcher {
    export interface TodoActionPayload {
        actionType: string;
        id?: string;
        text?: string;
    }
}

export default AppDispatcher;
