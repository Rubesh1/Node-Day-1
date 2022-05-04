const fs = require ('fs');
const http = require('http');
const fsdata = fs.readdirSync(__dirname);
console.log(fsdata);

const TimeStamp = new Date();
const temp = TimeStamp.toString();

try {
  fs.writeFileSync('test.txt', temp);
} catch (err) {
  console.error(err);
}

const server = http.createServer((req,res) => {
    console.log("came")
    if(req.url === '/users') {
         res.write(JSON.stringify({
            Time: temp
        }))
    } else if (req.url === '/posts') {
        res.write(JSON.stringify({
            title: fsdata
        }))
    } else {
        res.write("{}")
    }
    res.end()
})

server.listen(3002);