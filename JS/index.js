// let lightMode = localStorage.getItem("lightMode");

// const toggle = document.getElementById('toggle');
// const body = document.body;

// const enableLightMode = () => {
// 	//1. add the class lightmode to the body
// 	document.body.classList.add("lightmode");
// 	// 2. update lightmode in the localStorage
// 	localStorage.setItem("lightMode", "enabled");
// };

// const disableLightMode = () => {
// 	// 1. add the class lightmode to the body
// 	document.body.classList.remove("lightmode");
// 	// 2. update lightmode in the localStorage
// 	localStorage.setItem("lightMode", null);
// };

// //if the user already vistied and enabled lightMode
// if (lightMode === 'enabled ') {
// 	enableLightMode();
// }

// toggle.addEventListener('click', (e) => {
// 	const isChecked = e.target.checked;
// 	darkMode = localStorage.getItem("lightMode");
// 	if(isChecked) {
// 		body.classList.add('light-theme');
// 		enableLightMode();
// 		console.log(lightMode);
// 	} else {
// 		body.classList.remove('light-theme');
// 		disableLightMode();
// 		console.log(lightMode);
// 	}
// });
