// デバッグスイッチのユーティリティ関数
// ブラウザのコンソールから実行できる関数

// スイッチを表示する関数
window.showDebugSwitches = () => {
  const switches = document.getElementById("debug-switches");
  if (switches) {
    switches.style.visibility = "visible";
    switches.style.opacity = "1";
    console.log("Debug switches are now visible");
  }
};

// スイッチを非表示にする関数
window.hideDebugSwitches = () => {
  const switches = document.getElementById("debug-switches");
  if (switches) {
    switches.style.visibility = "hidden";
    switches.style.opacity = "0";
    console.log("Debug switches are now hidden");
  }
};

// スイッチの表示/非表示を切り替える関数
window.toggleDebugSwitches = () => {
  const switches = document.getElementById("debug-switches");
  if (switches) {
    const isVisible = switches.style.visibility === "visible";
    if (isVisible) {
      window.hideDebugSwitches();
    } else {
      window.showDebugSwitches();
    }
  }
};

console.log("Debug utilities loaded:");
console.log("- showDebugSwitches() - Show debug switches");
console.log("- hideDebugSwitches() - Hide debug switches");
console.log("- toggleDebugSwitches() - Toggle debug switches visibility");
