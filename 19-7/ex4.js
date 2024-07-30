const stringa = "HElLo Case ";

function convertString(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((el) => el.slice(0, 1).toUpperCase() + el.slice(1))
    .join("");
}

console.log(
  convertString(
    "lknosvtxevu gpwzu acmjistbmybkpkm wyqliszspio sintcyqolt jmzbzf ujuyrme uqxwzgkkwk wsznaczwxbgbpnb vvvivekepi kfe miicpf"
  )
);
