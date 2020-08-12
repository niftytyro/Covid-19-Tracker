const KformatLargeNumbers = (number) => {
  if (number >= 1000) {
    const factor = Math.pow(
      10,
      3 * Math.floor((String(number).length - 1) / 3)
    );
    let roundedNumber = number / factor;
    roundedNumber = Number(Math.round(roundedNumber + "e" + 1) + "e-" + 1);
    if (factor === 1000) {
      return roundedNumber + "K";
    }
    if (factor === 1000000) {
      return roundedNumber + "M";
    }
    if (factor === 1000000000) {
      return roundedNumber + "B";
    }
  }
  return number;
};

export { KformatLargeNumbers };
