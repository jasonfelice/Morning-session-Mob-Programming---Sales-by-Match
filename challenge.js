function sockMerchant(n, ar) {
  let pair = 0;
  const hash = {};
  for (let e of ar) {
      hash[e] ? hash[e] += 1 : hash[e] = 1;
  }
  for (let h in hash) {
      pair += Math.floor(hash[h]/2); 
  }
  return pair;
}