let products = {
    laptop: 45000,
    iphone: 67000,
    mobileCover: 1200,
    tablet: 58999
}

let ans = Object.fromEntries(
    Object.entries(products).map(([e, i]) => [
        e,
        i - i * 0.15
    ])
);

console.log(ans);
