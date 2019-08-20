var sum = process.argv.filter(item => !(isNaN(parseInt(item))) ).reduce((a,b)=>parseInt(a)+parseInt(b));

console.log(sum);