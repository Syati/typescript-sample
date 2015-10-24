import {EventEmitter} from 'events';
import assign = require('object-assign');

import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';


namespace TodoStore_ {
    export let todos: TodoStore.Todos = {};

    export function create(text){
        let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        todos[id] = {
            id: id,
            complete: false,
            text: text
        };
    }

    export function update(id: string, updates:{text?: string, complete?: boolean}){
        todos[id] = assign({}, todos[id], updates);
    }

    export function destroy(id) {
        delete todos[id];
    }
}


class TodoStore extends EventEmitter {
    constructor() {
        super();
        AppDispatcher.register(this.onAction.bind(this));
    }

    private onAction(action) {
        let text = '';
        switch (action.actionType) {
            case TodoConstants.TODO_CREATE:
                text = action.text.trim();
                if (text != '') {
                    TodoStore_.create(text);
                    this.emitChange();
                }
                break;

            case TodoConstants.TODO_UPDATE_TEXT:
                text = action.text.trim();
                if (text != '') {
                    TodoStore_.update(action.id, {text: text});
                    this.emitChange();
                }
                break;

            case TodoConstants.TODO_DESTROY:
                TodoStore_.destroy(action.id);
                this.emitChange();
                break;

            case TodoConstants.TODO_COMPLETE:
                TodoStore_.update(action.id, {complete: true});
                this.emitChange();
                break;

            case TodoConstants.TODO_UNDO_COMLETE:
                TodoStore_.update(action.id, {complete: false});
                this.emitChange();
                break;

            default:
            //do nothing
        }
    }

    getAll() {
        return TodoStore_.todos;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

namespace TodoStore {
    export interface Todo {
        id: string;
        complete: boolean;
        text: string;
    }

    export interface Todos {
        [id: string]: Todo;
    }
}

export default new TodoStore();
