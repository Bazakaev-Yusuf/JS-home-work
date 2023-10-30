document.addEventListener('DOMContentLoaded', function () {
	const taskInput = document.getElementById('task-input');
	const addTaskButton = document.getElementById('add-task');
	const taskList = document.getElementById('task-list');

	addTaskButton.addEventListener('click', function () {
		const taskText = taskInput.value.trim();

		if (taskText !== '') {
			const taskItem = document.createElement('li');
			taskItem.innerHTML = `
         <span>${taskText}</span>
         <button class="delete-task">Удалить</button>
       `;
			taskList.appendChild(taskItem);
			taskInput.value = '';

			taskItem
				.querySelector('.delete-task')
				.addEventListener('click', function () {
					taskItem.remove();
				});

			taskItem.addEventListener('click', function () {
				taskItem.classList.toggle('completed');
				const span = taskItem.querySelector('span');
				span.style.textDecoration = taskItem.classList.contains('completed')
					? 'line-through'
					: 'none';
			});
		}
	});

	taskInput.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			addTaskButton.click();
		}
	});
});
