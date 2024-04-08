const express = require('express');
const path = require('path');
const url = require('url');
const app = express();
const port = 3000;

// Phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/router', (req, res) => {
    const userAgent = req.headers['user-agent'];

    const queryObject = url.parse(req.url, true).query;

    console.log(JSON.stringify(queryObject))

    const openStorge = queryObject['openStorge'];
    if (openStorge === 'true' || openStorge == '1') {
        if (userAgent.includes('Android')) {
            console.log("UserAgent type Android");
            res.redirect(301, 'https://play.google.com/store/apps/details?id=world.dosi');
        } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
            console.log("UserAgent type iPhone");
            res.redirect(301, 'itms-apps://apps.apple.com/us/app/dosi-digital-marketplace/id6473919354');
        } else {
            console.log("Not fount userAgent type");
            res.redirect(301, 'https://dosi.world/');
        }
        res.end();
        return;
    }
    const urlParam = queryObject['url'];
    if (urlParam) {
        res.redirect(301, urlParam);
        res.end();
    }


});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
