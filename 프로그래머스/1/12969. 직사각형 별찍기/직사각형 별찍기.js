process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = parseInt(input[0], 10);
    const m = parseInt(input[1], 10);
    
    for (var j=1; j <=m; j++ ) {
    for (var i=1 ; i<= n ; i++) {
        process.stdout.write("*");
    }
        console.log("");
    }
});