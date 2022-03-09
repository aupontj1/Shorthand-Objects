const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum,r) => sum + r);
    const avg = sum / arr.length;
    return { max, min, sum, avg };
}

const reviews = [3.5, 3.4, 5.0, 4.6, 3.2, 3.1, 4.1, 5.0];
const collectiveStats = (getStats(reviews));

console.log(getStats(reviews));