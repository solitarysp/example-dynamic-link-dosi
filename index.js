const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Phục vụ các tệp tĩnh từ thư mục 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Xử lý tất cả các yêu cầu còn lại
app.get('*', (req, res) => {
    console.log(JSON.stringify(req.headers))
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
