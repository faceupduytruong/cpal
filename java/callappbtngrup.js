// Gom nhóm cho các button gọi app

const style = document.createElement('style');
style.textContent = `

/* Gom nhóm cho tất cả button */
.group {
   margin: 20px;
   padding: 15px;
   border-radius: 10px;
  }

.group.work { background: linear-gradient(to right, #87cefa, #f0f8ff); }
.group.fun { background: linear-gradient(to right, #ff69b4, #ffa07a); }
.group.system { background: linear-gradient(to right, #90ee90, #32cd32); }
.group.security { background: linear-gradient(to right, #ff4500, #ff6347); }

.group h2 {
  margin-bottom: 10px;
  color: #333;
}
  
`;
document.head.appendChild(style);
