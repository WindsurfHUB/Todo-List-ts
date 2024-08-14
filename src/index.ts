import { TodoList } from './todo';

const todoList = new TodoList();

todoList.addTask('Learn TypeScript');
todoList.addTask('Build a To-Do App', 'Use TypeScript for practice');
todoList.markAsComplete(1);

console.log('All Tasks:', todoList.getTasks());
console.log('Completed Tasks:', todoList.getTasks('completed'));
console.log('Pending Tasks:', todoList.getTasks('pending'));
