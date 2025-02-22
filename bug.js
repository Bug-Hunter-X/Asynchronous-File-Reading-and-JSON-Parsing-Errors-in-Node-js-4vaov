```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err);
      return;
    }
    // Process the data (e.g., parsing JSON)
    try {
      const jsonData = JSON.parse(data);
      // ... further processing ...
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
    }
  });
}

processFile('./some_file.json');
```