module.exports = function toReadable (number) {
  number+='';
  if (number.length==1) {
    number=0+number;
  }
  if (number.length==2) {
      number=0+number;
  }
  num=number.split("");
  readableNumber='';
  switch (num[0]) {
    case '0':
      break;
    case '1':
      readableNumber='one hundred ';
      break;
    case '2':
      readableNumber='two hundred ';
      break;
    case '3':
      readableNumber='three hundred ';
      break;
    case '4':
      readableNumber='four hundred ';
      break;
    case '5':
      readableNumber='five hundred ';
      break;
    case '6':
      readableNumber='six hundred ';
      break;
    case '7':
      readableNumber='seven hundred ';
      break;
    case '8':
      readableNumber='eight hundred ';
      break;
    case '9':
      readableNumber='nine hundred ';
      break;
  }
  switch (num[1]) {
    case '0':
      break;
    case '1':
      switch (num[2]) {
        case '0':
          readableNumber+='ten';
          break;
        case '1':
          readableNumber+='eleven';
          break;
        case '2':
          readableNumber+='twelve';
          break;
        case '3':
          readableNumber+='thirteen';
          break;
        case '4':
          readableNumber+='fourteen';
          break;
        case '5':
          readableNumber+='fifteen';
          break;
        case '6':
          readableNumber+='sixteen';
          break;
        case '7':
          readableNumber+='seventeen';
          break;
        case '8':
          readableNumber+='eighteen';
          break;
        case '9':
          readableNumber+='nineteen';
          break;
      }
      num[2]='0';
      break;
    case '2':
      readableNumber+='twenty ';
      break;
    case '3':
      readableNumber+='thirty ';
      break;
    case '4':
      readableNumber+='forty ';
      break;
    case '5':
      readableNumber+='fifty ';
      break;
    case '6':
      readableNumber+='sixty ';
      break;
    case '7':
      readableNumber+='seventy ';
      break;
    case '8':
      readableNumber+='eighty ';
      break;
    case '9':
      readableNumber+='ninety ';
      break;
  }
  switch (num[2]) {
    case '0':
      break;
    case '1':
      readableNumber+='one';
      break;
    case '2':
      readableNumber+='two';
      break;
    case '3':
      readableNumber+='three';
      break;
    case '4':
      readableNumber+='four';
      break;
    case '5':
      readableNumber+='five';
      break;
    case '6':
      readableNumber+='six';
      break;
    case '7':
      readableNumber+='seven';
      break;
    case '8':
      readableNumber+='eight';
      break;
    case '9':
      readableNumber+='nine';
      break;
  }
  if (readableNumber=='') {
      return 'zero';
  } else {
      return readableNumber.trim();
  }
}
