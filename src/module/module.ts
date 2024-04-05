export class formatNumber {
  moneyFormat = function (amount: number) {
    let value = `${amount}`;
    let tru = '';
    if (value.startsWith('-')) {
      value = value.replace('-', '');
      tru = '-';
    }
    if (value.length > 3) {
      let arr = value.split('');
      let count = value.length % 3 == 0 ? 3 : value.length % 3 == 1 ? 2 : 1;
      for (let i = 0; i < arr.length - 1; i++) {
        if (count == 3) {
          arr.splice(i, 0, ' ');
          count = 1;
          i++;
        } else {
          count += 1;
        }
      }
      return `${tru}${arr.join('').trim()}`;
    } else {
      return `${tru}${value}`;
    }
  };
}
