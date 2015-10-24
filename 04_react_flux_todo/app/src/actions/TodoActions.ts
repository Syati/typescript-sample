import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

namespace TodoActions {
    export function create(text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    }

    export function updateText(id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id: id,
            text: text
        })
    }

    export function destroy(id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        });
    }

    export function destroyCompleted() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY_COMPLETED,
        });
    }

    export function toggleComplete(todo) {
        var actionType = todo.complete ?
            TodoConstants.TODO_UNDO_COMLETE :
            TodoConstants.TODO_COMPLETE;

        AppDispatcher.dispatch({
            actionType: actionType,
            id: todo.id
        });
    }

    export function toggleCompleteAll() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        })
    }

}

export default TodoActions;