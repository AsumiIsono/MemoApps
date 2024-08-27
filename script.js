document.getElementById('save-btn').addEventListener('click', saveMemo);

function saveMemo() {
    const memoText = document.getElementById('memo-input').value;
    if (memoText.trim() !== "") {
        addMemoToList(memoText);
        document.getElementById('memo-input').value = "";
    } else {
        alert("Memo cannot be empty!");
    }
}

function addMemoToList(memoText) {
    const memoList = document.getElementById('memo-list');
    const memoItem = document.createElement('div');
    memoItem.className = 'memo-item';
    memoItem.textContent = memoText;
    memoList.appendChild(memoItem);
}
