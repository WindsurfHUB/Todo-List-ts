export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
  }
  
  export class TodoList {
    private tasks: Task[] = [];
  
    addTask(title: string, description?: string): void {
      const task: Task = {
        id: this.tasks.length + 1,
        title,
        description,
        completed: false,
      };
      this.tasks.push(task);
    }
  
    markAsComplete(id: number): void {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
      }
    }
  
    deleteTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    getTasks(filter: 'all' | 'completed' | 'pending' = 'all'): Task[] {
      if (filter === 'completed') {
        return this.tasks.filter(task => task.completed);
      } else if (filter === 'pending') {
        return this.tasks.filter(task => !task.completed);
      }
      return this.tasks;
    }
  }
  