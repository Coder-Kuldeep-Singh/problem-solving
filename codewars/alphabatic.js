function longest(s1, s2) {
  // your code
  let a = s1.split("");
  let b = s2.split("");

  //combine both arrays into one
  for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
  }

  let init_combo = [...new Set(a)];
  console.log(init_combo);
  //   console.log(b);
}

longest("kuldeep", "singh");
