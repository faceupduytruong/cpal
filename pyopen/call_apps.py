from flask import Flask
import subprocess
import win32gui
import win32con
import time
import webbrowser

app = Flask(__name__)

def set_always_on_top(window_name):
    time.sleep(1)
    hwnd = win32gui.FindWindow(None, window_name)
    if hwnd:
        win32gui.SetWindowPos(hwnd, win32con.HWND_TOPMOST, 0, 0, 0, 0,
                              win32con.SWP_NOMOVE | win32con.SWP_NOSIZE)
        # Không gọi SetForegroundWindow để tránh lỗi

STARTMENU_CMD = r"explorer.exe shell:StartMenu"

@app.route('/run-startmenu')
def run_startmenu():
    try:
        subprocess.Popen(STARTMENU_CMD, shell=True)
        return "Đã mở Start Menu!"
    except Exception as e:
        return f"Lỗi khi mở Start Menu: {e}"

@app.route('/run-xzsearch')
def run_xzsearch():
    subprocess.Popen([
        r"C:\Program Files (x86)\XZDesktop\XZSearch\XZSearch64.exe"
    ])
    return "Đã mở XZSearch!"

@app.route('/run-baishasearch')
def run_baishasearch():
    try:
        subprocess.Popen([r"C:\Program Files (x86)\BaishaDesktopMgr\BaishaSearch.exe"])
        return "Đã mở Baisha Search!"
    except Exception as e:
        return f"Lỗi khi mở Baisha Search: {e}"

@app.route('/run-fluentsearch')
def run_fluentsearch():
    subprocess.Popen([
        "explorer.exe",
        "shell:appsFolder\\21814BlastApps.BlastSearch_pdn8zwjh47aq4!FluentSearch"
    ])
    return "Đã mở Fluent Search!"

@app.route('/run-everything')
def run_everything():
    try:
        subprocess.Popen([r"C:\Program Files (x86)\BaishaDesktopMgr\Everything.exe"])
        return "Đã mở Everything!"
    except Exception as e:
        return f"Lỗi khi mở Everything: {e}"

@app.route('/run-filelocatorpro')
def run_filelocatorpro():
    try:
        subprocess.Popen([
            r"C:\Users\Admin\Programs\FileLocatorPro version 3544\FileLocatorPro.exe"
        ])
        return "Đã mở FileLocatorPro!"
    except Exception as e:
        return f"Lỗi khi mở FileLocatorPro: {e}"

@app.route('/run-duplicatecleaner')
def run_duplicatecleaner():
    try:
        subprocess.Popen([r"C:\Users\Admin\Programs\Duplicate Cleaner Pro v5.26.0 Portable\Duplicate Cleaner.exe"])
        return "Đã mở Duplicate Cleaner Pro Portable!"
    except Exception as e:
        return f"Lỗi khi mở Duplicate Cleaner Pro Portable: {e}"

@app.route('/run-xzdesktop')
def run_xzdesktop():
    try:
        subprocess.Popen([r"C:\Program Files (x86)\XZDesktop\XZDesktop64.exe"])
        return "Đã mở XZDesktop!"
    except Exception as e:
        return f"Lỗi khi mở XZDesktop: {e}"

@app.route('/run-baisha')
def run_baisha():
    try:
        subprocess.Popen([r"C:\Program Files (x86)\BaishaDesktopMgr\BaishaDesktopMain.exe"])
        return "Đã mở Baisha Desktop Manager!"
    except Exception as e:
        return f"Lỗi khi mở Baisha Desktop Manager: {e}"

@app.route('/run-notepad')
def run_notepad():
    subprocess.Popen(["notepad.exe"])
    set_always_on_top("Untitled - Notepad")  # tiêu đề mặc định của Notepad
    return "Đã mở Notepad và đặt Always on top!"

@app.route('/run-calculator')
def run_calculator():
    subprocess.Popen(["calc.exe"])
    set_always_on_top("Calculator")  # tiêu đề cửa sổ Calculator
    return "Đã mở Calculator và đặt Always on top!"

@app.route('/run-files')
def run_files():
    # AppID của Files thường là "49306atecsolution.FilesUWP_qr5nq3t9rf9hc!App"
    subprocess.Popen([
        "explorer.exe",
        "shell:AppsFolder\\49306atecsolution.FilesUWP_et10x9a9vyk8t!App"
    ])
    return "Đã mở ứng dụng Files!"

@app.route('/run-qdir')
def run_qdir():
    try:
        subprocess.Popen([r"C:\Users\Admin\Programs\Q-Dir Portable\Q-Dir_x64.exe"])
        return "Đã mở Q-Dir Portable!"
    except Exception as e:
        return f"Lỗi khi mở Q-Dir Portable: {e}"

@app.route('/run-fileexplorer')
def run_fileexplorer():
    subprocess.Popen([
        "explorer.exe"
    ])
    return "Đã mở File Explorer!"

@app.route('/run-quicklook')
def run_quicklook():
    try:
        subprocess.Popen([
            "explorer.exe",
            "shell:appsFolder\\21090PaddyXu.QuickLook_egxr34yet59cg!Main"
        ])
        return "Đã mở QuickLook!"
    except Exception as e:
        return f"Lỗi khi mở QuickLook: {e}"

@app.route('/run-foxit')
def run_foxit():
    try:
        subprocess.Popen([r"C:\Users\Admin\Programs\Foxit PDF Editor Pro 2025 2.0.33028 Portable\FoxitPDFEditorPortable.exe"])
        return "Đã mở Foxit PDF Editor Portable!"
    except Exception as e:
        return f"Lỗi khi mở Foxit PDF Editor Portable: {e}"

@app.route('/run-pdfelement')
def run_pdfelement():
    subprocess.Popen([
        r"C:\Users\Admin\Programs\Wondershare PDFelement Professional v12.1.14.4108\Wondershare PDFelement.exe"
    ])
    return "Đã mở Wondershare PDFelement Professional!"

@app.route('/run-mpchc')
def run_mpchc():
    subprocess.Popen([
        r"C:\Program Files (x86)\K-Lite Codec Pack\MPC-HC64\mpc-hc64.exe"
    ])
    return "Đã mở MPC-HC (K-Lite Codec Pack)!"

QUIZLET_CMD = [
    r"C:\Users\Admin\AppData\Local\Microsoft\WindowsApps\MicrosoftCorporationII.WindowsSubsystemForAndroid_8wekyb3d8bbwe\WsaClient.exe",
    "/launch",
    "wsa://com.quizlet.quizletandroid"
]

@app.route('/run-quizlet')
def run_quizlet():
    try:
        subprocess.Popen(QUIZLET_CMD, shell=True)
        return "Đã mở Quizlet qua Windows Subsystem for Android!"
    except Exception as e:
        return f"Lỗi khi mở Quizlet: {e}"

@app.route('/run-gimp')
def run_gimp():
    try:
        subprocess.Popen([r"C:\Users\Admin\Programs\GIMP 3.1.2 Portable\App\GIMP 3\bin\gimp.exe"])
        return "Đã mở GIMP Portable!"
    except Exception as e:
        return f"Lỗi khi mở GIMP Portable: {e}"

@app.route('/run-fsquirt')
def run_fsquirt():
    subprocess.Popen(["fsquirt.exe"])
    set_always_on_top("fsquirt")  # tiêu đề cửa sổ Fsquirt
    return "Đã mở Fsquirt!"

@app.route('/run-kdeconnect')
def run_kdeconnect():
    try:
        subprocess.Popen([
            "explorer.exe",
            "shell:appsFolder\\KDEe.V.KDEConnect_7vt06qxq7ptv8!KDEe.V.KDEConnect"
        ])
        return "Đã mở KDE Connect!"
    except Exception as e:
        return f"Lỗi khi mở KDE Connect: {e}"

@app.route('/run-quickshare')
def run_quickshare():
    try:
        subprocess.Popen([
            "explorer.exe",
            "shell:appsFolder\\NearbyShare_21hpf16v5xp10!NearbyShare"
        ])
        return "Đã mở Quick Share!"
    except Exception as e:
        return f"Lỗi khi mở Quick Share: {e}"

@app.route('/run-github')
def run_github():
    subprocess.Popen([
        "start",
        "msedge",
        "https://github.com"
    ], shell=True)
    return "Đã mở GitHub trong Edge!"

@app.route('/run-dropbox')
def run_dropbox():
    subprocess.Popen([
        "start",
        "msedge",
        "https://www.dropbox.com"
    ], shell=True)
    return "Đã mở Dropbox trong Edge!"

@app.route('/run-box')
def run_box():
    subprocess.Popen([
        "start",
        "msedge",
        "https://www.box.com"
    ], shell=True)
    return "Đã mở Box trong Edge!"

@app.route('/run-mega')
def run_mega():
    try:
        subprocess.Popen([
            "start",
            "msedge",
            "https://mega.nz/fm/Z0lzFKgA"
        ], shell=True)
        return "Đã mở Mega.nz trong Edge!"
    except Exception as e:
        return f"Lỗi khi mở Mega.nz: {e}"

@app.route('/run-fluentreader')
def run_fluentreader():
    try:
        subprocess.Popen([
            "explorer.exe",
            "shell:appsFolder\\25286HaoyuanLiu.FluentReader_5bmsqm5p4m2q6!FluentReader"
        ])
        return "Đã mở Fluent Reader!"
    except Exception as e:
        return f"Lỗi khi mở Fluent Reader: {e}"

@app.route('/run-soundcloud')
def run_soundcloud():
    subprocess.Popen([
        "start",
        "msedge",
        "https://soundcloud.com"
    ], shell=True)
    return "Đã mở SoundCloud!"

@app.route('/run-youtube')
def run_youtube():
    subprocess.Popen([
        "start",
        "msedge",
        "https://youtube.com"
    ], shell=True)
    return "Đã mở YouTube!"

@app.route('/run-babylon')
def run_babylon():
    subprocess.Popen([
        "start",
        "msedge",
        "https://sandbox.babylonjs.com"
    ], shell=True)
    return "Đã mở Babylon.js Sandbox trong Edge!"

@app.route('/run-control')
def run_control():
    subprocess.Popen(["control.exe"])
    set_always_on_top("Control")  # tiêu đề cửa sổ Control Panel
    return "Đã mở Control Panel!"

@app.route('/run-godmode')
def run_godmode():
    subprocess.Popen([
        "explorer.exe",
        "shell:::{ED7BA470-8E54-465E-825C-99712043E01C}"
    ])
    return "Đã mở GodMode!"

@app.route('/run-powershell')
def run_powershell():
    subprocess.Popen([
        r"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe"
    ])
    return "Đã mở Windows PowerShell!"

@app.route('/run-bleachbit')
def run_bleachbit():
    subprocess.Popen([
        r"C:\Program Files (x86)\BleachBit\bleachbit.exe"
    ])
    return "Đã mở BleachBit!"

@app.route('/run-defrag')
def run_defrag():
    try:
        subprocess.Popen(["dfrgui.exe"], shell=True)
        return "Đã mở Defragment and Optimize Drives!"
    except Exception as e:
        return f"Lỗi khi mở Defrag: {e}"

@app.route('/run-storage')
def run_storage():
    try:
        subprocess.Popen([
            "start",
            "ms-settings:storagesense"
        ], shell=True)
        return "Đã mở System > Storage trong Settings!"
    except Exception as e:
        return f"Lỗi khi mở Storage: {e}"

@app.route('/run-diskcleanup')
def run_diskcleanup():
    try:
        subprocess.Popen([r"C:\Windows\System32\cleanmgr.exe"])
        return "Đã mở Disk Cleanup!"
    except Exception as e:
        return f"Lỗi khi mở Disk Cleanup: {e}"

@app.route('/run-avast')
def run_avast():
    subprocess.Popen([
        r"C:\Program Files\Avast Software\Avast\AvastUI.exe"
    ])
    return "Đã mở Avast Free Antivirus!"

@app.route('/run-store')
def run_store():
    subprocess.Popen(["start", "ms-windows-store:"], shell=True)
    return "Đã mở Microsoft Store!"

@app.route('/run-update')
def run_update():
    subprocess.Popen(["start", "ms-settings:windowsupdate"], shell=True)
    return "Đã mở Check for Updates!"

@app.route('/run-pcmanager')
def run_pcmanager():
    subprocess.Popen([
        "explorer.exe",
        "shell:AppsFolder\\Microsoft.MicrosoftPCManager_8wekyb3d8bbwe!App"
    ])
    return "Đã mở Microsoft PC Manager!"

@app.route('/run-startup')
def run_startup():
    try:
        subprocess.Popen([
            "start",
            "ms-settings:startupapps"
        ], shell=True)
        return "Đã mở Apps > Startup trong Settings!"
    except Exception as e:
        return f"Lỗi khi mở Startup: {e}"

@app.route('/run-installedapps')
def run_installedapps():
    try:
        subprocess.Popen([
            "start",
            "ms-settings:appsfeatures"
        ], shell=True)
        return "Đã mở Apps > Installed apps trong Settings!"
    except Exception as e:
        return f"Lỗi khi mở Installed apps: {e}"

@app.route('/run-telegram')
def run_telegram():
    subprocess.Popen([
        r"C:\Users\Admin\Programs\Telegram Desktop 6.2.3 Portable\Telegram Desktop.exe"
    ])
    return "Đã mở Telegram!"

@app.route('/run-copilot')
def run_copilot():
    subprocess.Popen([
        "start",
        "msedge",
        "https://copilot.microsoft.com/"
    ], shell=True)
    return "Đã mở Copilot trong Edge!"

@app.route('/run-gemini')
def run_gemini():
    subprocess.Popen([
        "start",
        "msedge",
        "https://gemini.google.com"
    ], shell=True)
    return "Đã mở Google Gemini trong Edge!"

@app.route('/run-xzaitalk')
def run_xzaitalk():
    subprocess.Popen([
        r"C:\Program Files (x86)\XZDesktop\Tools\XZAiTalkApp\XZAiTalkApp.exe"
    ])
    return "Đã mở XZAiTalkApp!"

@app.route('/run-idm')
def run_idm():
    subprocess.Popen([
        r"C:\Program Files (x86)\Internet Download Manager\IDMan.exe"
    ])
    return "Đã mở Internet Download Manager!"

@app.route('/run-fcportables')
def run_fcportables():
    subprocess.Popen([
        "start",
        "msedge",
        "https://www.fcportables.com/"
    ], shell=True)
    return "Đã mở FC Portables trong Edge!"

@app.route('/run-karanpc')
def run_karanpc():
    subprocess.Popen([
        "start",
        "msedge",
        "https://karanpc.com/category/"
    ], shell=True)
    return "Đã mở KaranPC Category trong Edge!"

if __name__ == '__main__':
    app.run(debug=True)