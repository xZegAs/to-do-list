const table = document.getElementById('list');
const addItem = document.getElementById('add');
const clear = document.getElementById('clear');
const deleteItem = document.getElementById('delete');
const updateItem = document.getElementById('update');
const siteName = document.getElementById('name');
const siteUrl = document.getElementById('url');

let items = [];

addItem.addEventListener('click', () => {
  if (siteName.value && siteUrl.value) {
    let item = {
      name: siteName.value,
      url: siteUrl.value,
    };
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));

    items.map((i, index) => {
        table.innerHTML += `
        <tr>
            <td>${index}</td>
            <td>${i.name}</td>
            <td>${i.url}</td>
            <td class="btns">
                    <button id="update">Update</button>
                    <button id="delete">Delete</button>
            </td>
        </tr>
        `;
  });

    
}
     siteName.value = '';
     siteUrl.value = '';
});
