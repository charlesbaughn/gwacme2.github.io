document.addEventListener('DOMContentLoaded', function() {
  fetch('/ssl_hourly.json')
    .then(response => response.json())
    .then(data => {
      const contentBox = document.getElementById('content-box');
      data.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('row');
        row.innerHTML = `
          <div>${item.hostname}</div>
          <div>${item.date}</div>
          <div>${item.issuer}</div>
          <div>${item.status}</div>
        `;
        contentBox.appendChild(row);
      });
    })
    .catch(error => console.error('Error loading data:', error));
});