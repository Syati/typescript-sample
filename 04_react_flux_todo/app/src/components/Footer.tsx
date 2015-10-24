import * as React from 'react';

import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class Footer extends React.Component<Footer.Props, Footer.State> {

    handleClearCompletedClick = () => {
        TodoActions.destroyCompleted();
    };

    render(){
        let allTodos = this.props.allTodos;
        let total = Object.keys(allTodos).length;

        if (total === 0){
            return null;
        }

        let completed = 0;
        for (let key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        let itemsLeft = total - completed;
        let itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
        itemsLeftPhrase += 'left';

        let clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={this.handleClearCompletedClick}>
                Clear completed ({completed})
                </button>
        }

        return (
            <footer id="footer">
                <span id="todo-count">
                    <strong>
                        {itemsLeft}
                    </strong>
                    {itemsLeftPhrase}
                </span>
                {clearCompletedButton}
            </footer>
        );
    }
}

namespace Footer {
    export interface Props extends React.DOMAttributes {
        allTodos: TodoStore.Todos;
    }
    export interface State {
    }
}

export default Footer
