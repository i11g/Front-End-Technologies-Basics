function encodeAndDecodeMessages() {
      let buttons=document.getElementsByTagName("button")
      let encodeButton=buttons[0]
      let decodeButton=buttons[1] 

      let textAreas=document.getElementsByTagName("textarea")
      let encodeTextArea=textAreas[0]
      let decodeTextArea=textAreas[1] 

      function codeText (text, formatedFunction) {

        return text.split('').map(formatedFunction).join('')
      }

      function encode (char) {
        return String.fromCharCode(char.charCodeAt()+1)
      }

      function decode(char) {
        return String.fromCharCode(char.charCodeAt()-1)
      }

      function encodetext () {
        let encodeText=encodeTextArea.value
        decodeTextArea.value=codeText(encodeText, encode)
        encodeTextArea.value=""
      }

      function decodeText() {
        decodeTextArea.value=codeText(decodeTextArea.value, decode)
      }

      encodeButton.addEventListener('click', encodetext)
      decodeButton.addEventListener('click', decodeText)
}