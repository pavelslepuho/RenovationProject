const timer = (date) => {
	let expireDate = new Date(date);

	function countDelta() {
		let t = Date.parse(expireDate) - Date.parse(new Date());
		let seconds = Math.floor(t / 1000 % 60),
			minutes = Math.floor(t / 1000 / 60 % 60),
			hours = Math.floor(t / 1000 / 60 / 60 % 24),
			days = Math.floor(t / 1000 / 60 / 60 / 24);

		return {
			seconds,
			minutes,
			hours,
			days,
			t
		};
	}

	function addZero(n) {
		if (n < 10 && n >=0) {
			return `0${n}`;
		} else {
			return n;
		}
	}

	let timerWidget = document.querySelector('.container1'),
		secondsWidget = timerWidget.querySelector('#seconds'),
		minutesWidget = timerWidget.querySelector('#minutes'),
		hoursWidget = timerWidget.querySelector('#hours'),
		daysWidget = timerWidget.querySelector('#days'),
		widgets = timerWidget.querySelectorAll('.container1 > div > div > span');

		updateClock();
	let timer = setInterval(updateClock, 1000);

	function updateClock() {
		let t = countDelta();

		if (t.t < 0) {
			widgets.forEach(item => {
				item.textContent = '00';
				clearInterval(timer);
			});
		} else {
			secondsWidget.textContent = addZero(t.seconds);
			minutesWidget.textContent = addZero(t.minutes);
			hoursWidget.textContent = addZero(t.hours);
			daysWidget.textContent =  addZero(t.days);
		}
	}

};

export default timer;