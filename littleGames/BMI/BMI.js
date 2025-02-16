const bmiContainer = document.querySelector('.box')

bmiContainer.addEventListener('click', (e) => {
  const btn = e.target
  // 沒點到按鈕退出
  if(btn.type !== 'button') return
  
  // 取得身高體重性別
  const genderInput = document.querySelector('.gender')
  const heightInput = document.querySelector('.height');
  const weightInput = document.querySelector('.weight');
  const result = document.querySelector('.result')

  const gender = genderInput.value
  const height = heightInput.value;
  const weight = weightInput.value;

  if(height.match('e') || weight.match('e')) {
    result.textContent = '請輸入有效的數字'
  }

  
  if (btn.classList.contains('calculation')) {
    if (height <= 0 || weight <= 0) return
    let BMI = weight / ((height / 100) ** 2)
    BMI = BMI.toFixed(2)
    
    result.textContent = `${getBMICategory(BMI, gender)}`

  } else if (btn.classList.contains('clear')) {
    heightInput.value = ""
    weightInput.value = ""
    result.textContent = `等待您的結果`
  }
})

function getBMICategory(bmi, gender) {
  if (gender === 'male') {
    // 男性評語
    if (bmi < 18.5) {
      return `您的 BMI 是：${bmi}，體重竟然輕到風吹就可能飛走！快快補充營養，迎接壯碩的未來吧！💪`;
    } else if (bmi >= 18.5 && bmi < 24) {
      return `您的 BMI 是：${bmi}，完美比例！您就是健康生活的代言人！保持下去，未來是無敵的您！🔥`;
    } else if (bmi >= 24 && bmi < 27) {
      return `您的 BMI 是：${bmi}，有一點點超標，但完全可以靠運動和飲食輕鬆逆襲！成為帥氣傳奇指日可待！🏋️‍♂️`;
    } else if (bmi >= 27 && bmi < 30) {
      return `您的 BMI 是：${bmi}，輕度肥胖響起了健康的警鐘！勇敢踏出第一步，未來的您會感謝今天的努力！🚨`;
    } else if (bmi >= 30 && bmi < 35) {
      return `您的 BMI 是：${bmi}，中度肥胖！健康的紅燈正在閃爍！現在就讓自己成為故事的英雄吧！🦸‍♂️`;
    } else {
      return `您的 BMI 是：${bmi}，重度肥胖！😱 您的健康已經拉響警報！請即刻行動，未來的您會為此喝彩！🌟`;
    }
  } else if (gender === 'female') {
    // 女性評語
    if (bmi < 18) {
      return `您的 BMI 是：${bmi}，太輕了！別再讓自己像羽毛一樣飄飄然，快點加強營養，讓美麗與健康同在！🌸`;
    } else if (bmi >= 18 && bmi < 23) {
      return `您的 BMI 是：${bmi}，完美得如同教科書中的健康範例！✨ 女神級的健康狀態，繼續閃耀吧！🌟`;
    } else if (bmi >= 23 && bmi < 26) {
      return `您的 BMI 是：${bmi}，微微超重，但這只是輕鬆翻盤的小挑戰！健康與美麗就在眼前！💃`;
    } else if (bmi >= 26 && bmi < 30) {
      return `您的 BMI 是：${bmi}，輕度肥胖正在向您揮手！現在就是改變命運的最佳時機！🔥`;
    } else if (bmi >= 30 && bmi < 35) {
      return `您的 BMI 是：${bmi}，中度肥胖已經悄悄逼近！健康需要您的即刻關注，重拾活力的您一定驚豔眾人！✨`;
    } else {
      return `您的 BMI 是：${bmi}，重度肥胖！您的健康正在呼救！現在就是逆轉命運的英雄時刻！🏆`;
    }
  } else {
    return `無效的性別輸入，請選擇男性或女性！`;
  }
}

