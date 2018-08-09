import Vue from "vue";

Vue.filter("formatPageDate", value => {
	let proccessedValue = value;

	if (value) {
		proccessedValue = new Date(value);

		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const year = proccessedValue.getFullYear();
		const month = months[proccessedValue.getMonth()];
		const date = proccessedValue.getDate();
		const hour = proccessedValue.getHours();
		const min = proccessedValue.getMinutes();
		const sec = proccessedValue.getSeconds();

		proccessedValue = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
	}

	return proccessedValue;
});
