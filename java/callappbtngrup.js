// Gom nhóm cho các button gọi app

const style = document.createElement('style');
style.textContent = `

/* Gom nhóm cho tất cả button */
.group {
   margin: 20px;
   padding: 15px;
   border-radius: 10px;
  }

.group.find { background: linear-gradient(to right, #20b2aa, #ffd700); /* xanh ngọc → vàng */ }
.group.layout { background: linear-gradient(to right, #ff1493, #1e90ff); /* hồng đậm (DeepPink) → xanh lam (DodgerBlue) */ }
.group.work { background: linear-gradient(to right, #87cefa, #f0f8ff); }
.group.study { background: linear-gradient(to right, #9370db, #98fb98); /* tím MediumPurple → xanh nhạt PaleGreen */ }
.group.upload { background: linear-gradient(to right, #00c6ff, #1e90ff); /* xanh cyan → trắng mây */ }
.group.fun { background: linear-gradient(to right, #ff69b4, #ffa07a); }
.group.system { background: linear-gradient(to right, #90ee90, #32cd32); }
.group.security { background: linear-gradient(to right, #ff4500, #ff6347); }
.group.ai { background: linear-gradient(to right, #8a2be2, #00ffff); /* tím BlueViolet → cyan */ }
.group.portable { background: linear-gradient(to right, #ff8c00, #00fa9a); /* cam DarkOrange → xanh lá LimeGreen */ }

.group h2 {
  margin-bottom: 10px;
  color: #333;
}

.group.study:hover {
  background: linear-gradient(to right, #ba55d3, #7fffd4); /* tím Orchid → xanh ngọc Aquamarine */
  transform: scale(1.02);
  transition: all 0.3s ease;
}
  
`;
document.head.appendChild(style);
