let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(msg) {
    let codex = codexMaker(letters, leetChars)
    //Create codex
    function codexMaker(letters, leetChars) {
      let codex = {}
      for (let i = 0; i < letters.length; i++) {
      codex[letters[i]] = leetChars[i]
      }
      return codex
    }
    //Encode message
    let lowCaseMsg = msg.toLowerCase()
    let codedMsg = ''
      for (let i = 0; i < msg.length; i++) {
        codedMsg += codex[lowCaseMsg[i]]
      }
      return codedMsg
  }