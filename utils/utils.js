
export const stringIsNumber = (str) => {
    return !isNaN(Number(str));
}

export const round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
  

