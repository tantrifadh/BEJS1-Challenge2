const validateNumbers = (nilai) => {
  if (isNaN(nilai)) {
    return false;
  }
  return true;
}

const nilaiMaxMin = (nilai) => {
  if (nilai.length > 0) {
    console.log(`nilai tertinggi : ${Math.max(...nilai)}`);
    console.log(`nilai terendah : ${Math.min(...nilai)}`);
  } else {
    console.log(`nilai tertinggi       : 0`);
    console.log(`nilai terendah        : 0`);
  }
}

const mean = (nilai) => {
  let count = 0;
  let hitungMean;
  nilai.forEach(value => {
    count += Number(value)
  });
  hitungMean = count / nilai.length;
  console.log(`Nilai rata - rata        : ${hitungMean}`)
}

const filterLulus = (nilai) => {
  let lulus = [];
  let tidakLulus = [];
  nilai.forEach(value => {
    if (value >= 75) {
      lulus.push(value);
    } else {
      tidakLulus.push(value)
    }
  });
  console.log(`Jumlah lulus           : ${lulus.length}`)
  console.log(`Jumlah tidak lulus     : ${tidakLulus.length}`)
}

const urutkanNilai = (nilai) => {
  for (let j = 0; j < nilai.length - 1; j++) {
    for (let i = 0; i < nilai.length - 1; i++) {
      let a = nilai[i];
      let b = nilai[i + 1];

      if (b < a) {
        let temp = nilai[i + 1];
        nilai[i + 1] = nilai[i];
        nilai[i] = temp;
      }
    }
  }
  console.log(`Urutkan nilai dari yang terendah ke tertinggi  : ${nilai}`);
}

const cariNilai = (nilaiCari) => {
  let siswa = this.nilai.filter(nilai => nilai === nilaiCari);
  if (siswa.length > 0) {
  console.log(`Siswa dengan nilai ${nilaiCari}    : ${siswa.length}`);
  } else {
  console.log(`Siswa dengan nilai ${nilaiCari}    : Tidak ada`);
  }
}



module.exports = {
  validateNumbers,
  nilaiMaxMin,
  mean,
  filterLulus,
  urutkanNilai,
  cariNilai
}