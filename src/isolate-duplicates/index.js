// function isolateDuplicates(text) {

    
    // function isolateDuplicates(text) {
    //     if (typeof text !== 'string'){
    //         throw new Error("Please enter a valid string");
    //      }
    //         let count = 0; 
    //         let arr = []
    //         let arr2 = []
    //         let iText = text.toUpperCase()
    
    
    // for(let i = 0; i < iText.length; i++){
    //     if(iText[i] === iText[i-1] && iText[i] === iText[i+1] && iText[i-2] !== iText[i]){
    //         arr.push('['); 
    //         arr.push(text[i]);
    //         count += 1;
    //     } else if (iText[i] === iText[i -1] && iText[i] === iText[i-2] && iText[i+1] !== iText[i]){
    //         arr.push(text[i]);
    //         arr.push(']')
    //         count += 1;
    //     } else {
    //         arr.push(text[i])
    //     }
    //     }
        
    //      let string = arr.join('') 
    //      arr2.push(string, count) ;
    //      return arr2
    //     }
    //     console.log(isolateDuplicates("aaaabbcccadehhh"))
    
    //     module.exports = isolateDuplicates;
    
    
    


// module.exports = isolateDuplicates;

function isolateDuplicates(text) {}

module.exports = isolateDuplicates;

function isolateDuplicates(text) {
    if (typeof text !== 'string'){
      throw new Error("Please enter a valid string");
    }
    let count  = 0;
    let arr = []
      let arr2 = []
      let iText = text.toUpperCase()
   for(let i = 0; i < iText.length; i++){
   // logic for opening brackets  
   if(iText[i] == iText[i-1] && iText[i]== iText[i+1] && iText[i] !== iText[i-2]){    
    console.log(i, iText[i-1], iText[i-2]) ;
      arr.push(text[i]);    
    arr.push('[');      
      count += 1;
    //logic for closing brackets   
 } else if (iText[i]===iText[i -1] && iText[i] ===  iText[i-2] && iText[i] !== iText[i+1]){      
          arr.push(text[i]);
          arr.push(']')
      } 
      else{
        
        arr.push(text[i])
    }
  }
      let string = arr.join('')
        arr2.push(string, count)
        return arr2   
     }
    console.log(isolateDuplicates("aaaabbcccadehhh"))
    module.exports = isolateDuplicates;


