// Tạo một thẻ <style> và chèn vào <head>

const style = document.createElement('style');
style.textContent = `
  /* Notepad button */
  .btn-notepad {
    background-color: rgba(0, 0, 139, 0.6);
    border: 2px solid blue;
    color: white;
  }
  .btn-notepad:hover {
    background-color: blue;
    color: yellow;
  }

  /* Calculator button */
  .btn-cal {
    background-color: rgba(0, 150, 139, 0.6);
    border: 2px solid cyan;
    color: white;
  }
  .btn-cal:hover {
    background-color: cyan;
    color: darkblue;
  }
  
  /* BleachBit button */
  .btn-bleach {
    background-color: rgba(34,139,34,0.6);
    border: 2px solid green;
    color: white;
  }
  .btn-bleach:hover {
    background-color: green;
    color: yellow;
  }

  /* Avast button */
  .btn-avast {
    background-color: rgba(255,165,0,0.6);
    border: 2px solid orange;
    color: black;
  }
  .btn-avast:hover {
    background-color: orange;
    color: white;
  }
`;
document.head.appendChild(style);
