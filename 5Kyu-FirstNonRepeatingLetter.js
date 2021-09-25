function firstNonRepeatingLetter(s) {
    // Add your code here
    s = s.split('');
   // console.log(s + ' longitud : ' + s.length);
    let foundCharacter = false;
    if (s.length > 1){
      for ( let el = 0; el < s.length; el++){
     //   console.log('comprobando el caracter: ' + s[el]);
        foundCharacter = false
        for (let i = 0; i < s.length ; i++){
       //   console.log('comparando s[' + el + ']: ' + s[el].toUpperCase() +' y s[' + i + ']: ' + s[i].toUpperCase())
          if ( i !== el){
            if (s[el].toUpperCase() === s[i].toUpperCase()) {
              foundCharacter = true
            }
            if (!foundCharacter && i ===s.length-1){
              return s[el];
            }
          }  
        }
      }
    } else {
      return s.join('');
    }
  }