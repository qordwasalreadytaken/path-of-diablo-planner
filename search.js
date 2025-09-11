document.getElementById('searchBtn').addEventListener('click', async () => {
  const name = document.getElementById('charName').value.trim();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (!name) {
    resultsDiv.textContent = 'Please enter a character name.';
    return;
  }

  try {
    const indexRes = await fetch('index.json');
    const index = await indexRes.json();

    const dates = index[name];
    if (!dates) {
      resultsDiv.textContent = `No snapshots found for "${name}".`;
      return;
    }

    // Fetch all snapshot files that contain this character
    const allData = [];
    for (const date of dates) {
      const snapRes = await fetch(`snapshots/${date}.json`);
      const snap = await snapRes.json();
      if (snap[name]) {
        allData.push(snap[name]);
      }
    }

    // Build table
    let html = '<table><tr><th>Date</th><th>Final URL</th></tr>';
    for (const entry of allData) {
      html += `<tr><td>${entry.timestamp}</td><td><a href="${entry.url}" target="_blank">${entry.url}</a></td></tr>`;
    }
    html += '</table>';

    resultsDiv.innerHTML = html;

  } catch (err) {
    console.error(err);
    resultsDiv.textContent = 'Error fetching snapshots.';
  }
});
