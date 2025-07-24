import React from 'react'

export default function ToDoList() {
  return (
    <div>ToDoList</div>
  )
}



























// Completed Tasks Component
const CompletedTasks = ({ todos, onToggleTodo, onEditTodo, onDeleteTodo }) => {
  const [editingTodo, setEditingTodo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const completedTodos = todos.filter(todo => todo.completed);

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setModalOpen(true);
  };

  const handleSave = (todoData) => {
    onEditTodo({ ...todoData, id: editingTodo.id });
    setEditingTodo(null);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingTodo(null);
  };

  return (
    <div>
      <h1 style={{ marginBottom: '10px', color: '#333' }}>Completed Tasks</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        You have completed {completedTodos.length} tasks
      </p>

      {completedTodos.length === 0 ? (
        <div style={styles.emptyState}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>📝</div>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>No completed tasks yet</h3>
          <p style={{ color: '#666' }}>
            Complete some tasks to see them here.
          </p>
        </div>
      ) : (
        completedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onEdit={handleEdit}
            onDelete={onDeleteTodo}
          />
        ))
      )}

      <TodoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        todo={editingTodo}
        onSave={handleSave}
      />
    </div>
  );
};