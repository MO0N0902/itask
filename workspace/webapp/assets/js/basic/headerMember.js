
// 기여도 m
let monitorLevel = 0;
// 모디터 인치
let monitorInches = 0;

function increaseMonitorLevel() {
  monitorLevel++; //증가
  document.getElementById("monitor-level").textContent =
  `${monitorLevel}m`; // 모니터 값 업뎃

// 100m 시 1inch
  if (monitorLevel >= 100) {
  monitorInches++;
  monitorLevel = 0; //초기화
  document.getElementById("monitor-levelup").textContent =
  `${monitorInches} inch`;
  }
}

document.getElementById("user-name").textContent = "지지베베님";