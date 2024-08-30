// Sample checklist items

const checklistItems = [
    { text: "Passport", done: false },
    { text: "Travel Insurance", done: false },
    { text: "Flight Tickets", done: false },
];

// Function to render checklist items

function renderChecklist() {
    const checklist = document.getElementById('checklist');
    checklist.innerHTML = ''; // Clear the list before rendering

    checklistItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center mb-2';

        const itemText = document.createElement('span');
        itemText.textContent = item.text;
        itemText.className = item.done ? 'line-through' : '';
        li.appendChild(itemText);

        const controls = document.createElement('div');

        // Toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = item.done ? 'Undo' : 'Done';
        toggleBtn.className = 'btn btn-xs btn-secondary ml-2';
        toggleBtn.addEventListener('click', () => {
            checklistItems[index].done = !checklistItems[index].done;
            renderChecklist();
        });
        controls.appendChild(toggleBtn);

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-xs btn-error ml-2';
        deleteBtn.addEventListener('click', () => {
            checklistItems.splice(index, 1);
            renderChecklist();
        });
        controls.appendChild(deleteBtn);

        li.appendChild(controls);
        checklist.appendChild(li);
    });
}

// Function to add a new item to the checklist
function addItem() {
    const newItemInput = document.getElementById('new-item');
    const newItemText = newItemInput.value.trim();

    if (newItemText) {
        checklistItems.push({ text: newItemText, done: false });
        newItemInput.value = '';
        renderChecklist();
    }
}

// Add event listener to the Add Item button
document.getElementById('add-item').addEventListener('click', addItem);

// Initial render of the checklist
renderChecklist();