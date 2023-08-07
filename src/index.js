const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letter = '';
    let symbol = '';
    let result = '';
    for(let i = 0; i < expr.length; i+=10) {
      letter = String(+expr.slice(i,i+10));
      symbol = '';
      console.log(letter);
      if (letter === 'NaN') {
        result += ' ';
      }
      
      for(j=0; j < letter.length; j+=2 ) {
        if(letter.slice(j,j+2) === '10') {
          symbol += '.';
        } else if (letter.slice(j,j+2) === '11'){
          symbol += '-';
        }
      }
      
      for (let key in MORSE_TABLE) {
        if (key === symbol) {
          result += MORSE_TABLE[key];
        }
      }
    }
    return result;
}

module.exports = {
    decode
}