document.addEventListener('DOMContentLoaded', function() {
  let data = [];

  fetch('/ssl_hourly.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
      renderData(data);
    })
    .catch(error => console.error('Error loading data:', error));

  function renderData(data) {
    const contentBox = document.getElementById('content-box');
    contentBox.innerHTML = `
      <div class="row header">
        <div>Common Name</div>
        <div>Issued Date</div>
        <div>Issued By</div>
        <div>Reissue Data</div>
      </div>
    `;
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
  }
});