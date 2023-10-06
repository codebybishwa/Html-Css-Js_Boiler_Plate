const fs = require('fs');
const path = require('path');

const folderName = process.argv[2] || 'tempProject';

try {
    const folderPath = path.join(__dirname, folderName);
    fs.mkdirSync(folderPath);

    fs.writeFileSync(path.join(folderPath, 'index.html'), '');
    fs.writeFileSync(path.join(folderPath, 'style.css'), '');
    fs.writeFileSync(path.join(folderPath, 'app.js'), '');

    console.log('Boilerplate created successfully!');
} catch (e) {
    console.log('Something went wrong!');
    console.error(e);
}
