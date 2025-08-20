export function openRightHalfPopup(url, title, w, h) {
  const screenLeft = window.screenLeft ?? window.screenX;
  const screenTop = window.screenTop ?? window.screenY;
  const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

  const left = width + 42.5 + screenLeft;
  const top = (height - h) / 2 + screenTop;

  const popupWindow = window.open(url, title, `scrollbars=yes,width=${w},height=${h},top=${top},left=${left}`);
  if (window.focus) popupWindow?.focus();
}

// 👇 Thêm dòng này để gọi được từ HTML inline
window.openRightHalfPopup = openRightHalfPopup;
