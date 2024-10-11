const saveButton = document.getElementById('save-button');
const entryText = document.getElementById('entry-text');
const entriesDiv = document.getElementById('entries');

saveButton.addEventListener('click', () => {
    const text = entryText.value.trim();
    if (text) {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerText = text;
        entriesDiv.appendChild(entryDiv);
        entryText.value = '';
    } else {
        alert('Please write something before saving!');
    }
});
