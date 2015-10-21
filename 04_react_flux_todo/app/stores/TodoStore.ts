import {EventEmitter} from 'events';
import assign = require('object-assign');

import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

namespace TodoStore {
    export interface Todo {
        id: string;
        complete: boolean;
        text: string;
    }

    export interface Todos {
        [id: string]: Todo;
    }

    const CHANGE_EVENT = 'change';
    let todos: Todos = {};

    function create(text){
        let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        todos[id] = {
            id: id,
            complete: false,
            text: text
        };
    }

    function update(id: string, updates:{text: string}){
        todos[id] = assign({}, todos[id], updates);
    }

    function destroy(id) {
        delete todos[id];
    }

    class Store extends EventEmitter {
        constructor(){
            super();
            AppDispatcher.register(this.onAction.bind(this));
        }

        private onAction(action) {
            let text = '';
            switch (action.actionType) {
                case TodoConstants.TODO_CREATE:
                    text = action.text.trim();
                    if (text != '') {
                        create(text);
                        this.emitChange();
                    }
                    break;

                case TodoConstants.TODO_UPDATE_TEXT:
                    text = action.text.trim();
                    if (text != '') {
                        update(action.id, {text: text});
                        this.emitChange();
                    }
                    break;

                case TodoConstants.TODO_DESTROY:
                    destroy(action.id);
                    this.emitChange();
                    break;

                default:
                    //do nothing
            }
        }

        getAll(){
            return todos;
        }

        emitChange(){
            this.emit(CHANGE_EVENT);
        }

        addChangeListener(callback){
            this.on(CHANGE_EVENT, callback);
        }

        removeChangeListener(callback){
            this.removeListener(CHANGE_EVENT, callback);
        }
    }
    export let store = new Store();
}

export default TodoStore
