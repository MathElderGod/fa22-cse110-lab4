function printDatePerSecond() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}

setInterval(printDatePerSecond, 1000);