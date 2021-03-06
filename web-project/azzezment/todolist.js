/* Type the word "exit" in any point of your page... */

(function () {
    const sSecret = /* Choose your hidden word...: */ "exit";
    let nOffset = 0;
  
    document.onkeypress = function(oPEvt) {
      let oEvent = oPEvt || window.event,
          nChr = oEvent.charCode,
          sNodeType = oEvent.target.nodeName.toUpperCase();
  
      if (nChr === 0 ||
          oEvent.target.contentEditable.toUpperCase() === "TRUE" ||
          sNodeType === "TEXTAREA" ||
          sNodeType === "INPUT" && oEvent.target.type.toUpperCase() === "TEXT") {
        return true;
      }
  
      if (nChr !== sSecret.charCodeAt(nOffset)) {
        nOffset = nChr === sSecret.charCodeAt(0) ? 1 : 0;
      } else if (nOffset < sSecret.length - 1) {
        nOffset++;
      } else {
        nOffset = 0;
        /* Do something here... */
        alert("Yes!!!");
        location.assign("https://developer.mozilla.org/");
      }
  
      return true;
    };
  })();
  