// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    let pairsCount = 0;
    const uniqueSockets = new Set();

    ar.forEach(socketColor => {
        if (uniqueSockets.has(socketColor)) {
            uniqueSockets.delete(socketColor);
            pairsCount = pairsCount + 1;
        } else {
            uniqueSockets.add(socketColor);
        }
    })

    return pairsCount;
}
