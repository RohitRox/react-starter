import mobx, { observable, action, computed, reaction } from 'mobx';

class ObservableTodoStore {
	@observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
    mobx.autorun(() => console.log(this.report));
  }

	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
  }

  @computed get count() {
    return this.todos.length;
}

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
  }

  getTodos() {
    return this.todos.map(todo => todo.task);
  }

	@action addTodo(task) {
    console.log(task, '<<<<')
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}

export default new ObservableTodoStore();
