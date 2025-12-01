fs.readFile("config.json", "utf8", (err, data) => {
    if (!err) {
        JSON.parse(data).users.forEach(u => {
            fs.appendFile("log.txt", u.name + "\n", () => {});
        });
    }
});
