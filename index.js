const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('dosi', (req, res) => {
    const userAgent = req.headers['user-agent'];
    console.log(JSON.stringify(req.headers))

    if (userAgent.includes('Android')) {
        res.redirect(301, 'https://play.google.com/store/apps/details?id=world.dosi');
    } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
        res.redirect(301, 'itms-apps://apps.apple.com/us/app/dosi-digital-marketplace/id6473919354');
    } else {
        res.send('Hello World!1');
    }

    res.end();
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
