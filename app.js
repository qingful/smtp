const { SMTPServer } = require("smtp-server");
const server = new SMTPServer({
    secure: false,
    logger: true,
    onConnect(session, callback) {
        console.log("onConnect");
        console.log(session);
        // if(session.remoteAddress === '127.0.0.1'){
        //     return callback(new Error('No connections from localhost allowed'));
        // }
        return callback(); // Accept the connection
    },
    onMailFrom(address, session, callback) {
        console.log("onMailFrom");
        console.log(address, session);
        // if(address.address !== 'allowed@example.com'){
        //       return callback(new Error('Only allowed@example.com is allowed to send mail'));
        //   }
        return callback(); // Accept the address
    },
    onRcptTo(address, session, callback) {
        console.log("onRcptTo");
        console.log(address, session);
        // if(address.address !== 'allowed@example.com'){
        //     return callback(new Error('Only allowed@example.com is allowed to receive mail'));
        // }
        return callback(); // Accept the address
    },
    onData(stream, session, callback) {
        stream.pipe(process.stdout); // print message to console
        stream.on("end", callback);
    }
});
server.on("error", err => {
    console.log("Error %s", err.message);
});
server.listen(465);
console.log("success");
