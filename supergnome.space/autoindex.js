function parseAutoIndex() {
    const links = document.querySelectorAll('pre a');
    const data = [];
    links.forEach(link => {
        const href = link.getAttribute('href');
        const text = link.textContent.trim();
        const nextSibling = link.nextSibling;
        let size = '';
        let date = '';
        if (nextSibling && nextSibling.nodeType === Node.TEXT_NODE) {
            const textContent = nextSibling.textContent.trim();
            const parts = textContent.split(/\s+/);
            date = parts[0] + ' ' + parts[1];
            size = parts[2];
        }
        data.push({
            name: text,
            href: href,
            date: date,
            size: size
        });
    });
    return data;
}

function cleanAndRenderListing() {
    const listing = document.getElementById('content-listing');
    const data = parseAutoIndex();
    while (listing.firstChild) {
        listing.removeChild(listing.firstChild);
    }
    const newTable = document.createElement('table');
    newTable.id = 'file-list';
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const thName = document.createElement('th');
    thName.textContent = 'имя';
    headerRow.appendChild(thName);
    const thDate = document.createElement('th');
    thDate.textContent = 'последнее изменение';
    headerRow.appendChild(thDate);
    const thSize = document.createElement('th');
    thSize.textContent = 'размер';
    headerRow.appendChild(thSize);
    thead.appendChild(headerRow);
    newTable.appendChild(thead);
    const tbody = document.createElement('tbody');
    newTable.appendChild(tbody);
    data.forEach((item, index) => {
        const tr = document.createElement('tr');
        if (index === 0 && item.href === '../') {
            item.date = '';
            item.name = '🐗 назад'
            tr.classList.add('parent-directory');
        }
        const tdName = document.createElement('td');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.name;
        tdName.appendChild(a);
        tr.appendChild(tdName);
        const tdDate = document.createElement('td');
        tdDate.textContent = item.date;
        tr.appendChild(tdDate);
        const tdSize = document.createElement('td');
        tdSize.textContent = item.size;
        tr.appendChild(tdSize);
        tbody.appendChild(tr);
    });

    listing.appendChild(newTable);
}

document.addEventListener('DOMContentLoaded', () => {
    cleanAndRenderListing();
});
