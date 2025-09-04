// 👉 Hàm 1: Mở popup bên phải với tiêu đề tùy chọn
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
window.openRightHalfPopup = openRightHalfPopup;

// 👉 Hàm 2: Mở popup bên phải với tên cố định theo nền tảng
export function openPlatformPopup(platform, url, w = window.innerWidth, h = 745) {
  const screenLeft = window.screenLeft ?? window.screenX;
  const screenTop = window.screenTop ?? window.screenY;
  const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

  const left = width + 42.5 + screenLeft;
  const top = (height - h) / 2 + screenTop;

  const windowName = `popup_${platform}`;
  const features = `scrollbars=yes,width=${w},height=${h},top=${top},left=${left}`;

  const popup = window.open("", windowName, features);
  if (popup) {
    popup.location.href = url;
    popup.focus();
  }
}
window.openPlatformPopup = openPlatformPopup;

// 👉 Hàm 3: Mở popup bên trái với tên cố định theo nền tảng
export function openPlatformPopupLeft(platform, url, w = window.innerWidth, h = 745) {
  const screenLeft = window.screenLeft ?? window.screenX;
  const screenTop = window.screenTop ?? window.screenY;
  const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

  const left = screenLeft - width / 2; // Điều chỉnh để không bị lệch quá xa
  const top = (height - h) / 2 + screenTop;

  const windowName = `popup_${platform}`;
  const features = `scrollbars=yes,width=${w},height=${h},top=${top},left=${left}`;

  const popup = window.open("", windowName, features);
  if (popup) {
    popup.location.href = url;
    popup.focus();
  }
}
window.openPlatformPopupLeft = openPlatformPopupLeft;

