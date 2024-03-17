setInterval(() => {
  const todayDate = new Date();
  const hourTime = todayDate.getHours();
  const minuteTime = todayDate.getMinutes();
  const secondTime = todayDate.getSeconds();
  const hRotation = 30 * hourTime + minuteTime / 2;
  const mRotation = 6 * minuteTime;
  const sRotation = 6 * secondTime;
  document.getElementById("hour").style.transform = `rotate(${hRotation}deg)`;
  document.getElementById("minute").style.transform = `rotate(${mRotation}deg)`;
  document.getElementById("second").style.transform = `rotate(${sRotation}deg)`;
}, 1000);
