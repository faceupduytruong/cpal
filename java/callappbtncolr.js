// Tạo một thẻ <style> và chèn vào <head>

const style = document.createElement('style');
style.textContent = `

  /* Style chung cho tất cả button */
  button {
    background-color: rgba(255,255,255,0.6); /* nền trong suốt */
    border: 2px solid #4CAF50;     /* viền màu xanh lá */
    color: black;                /* chữ màu đen */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;            /* bo góc */
    transition: 0.3s;
    }

  /* Hiệu ứng hover */
  button:hover {
    background-color: #4CAF50;     /* khi hover nền xanh */
    color: white;                  /* chữ trắng */
    }

  .button-container {
    display: flex;
    flex-wrap: wrap;          /* tự xuống hàng khi hết chỗ */
    gap: 12px;                /* khoảng cách giữa các nút */
    justify-content: center;  /* căn giữa theo chiều ngang */
    margin-top: 0px;
    }

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
