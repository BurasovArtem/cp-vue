<template>
	<div class="solar-page">
		<div class="solar-page__header flex-row">
			<div class="solar-page__header__back flex-row" @click="$router.push({path: '/'})">
				<img src="~@/assets/img/svg/arrow-left.svg">
				<p>К сводке</p>
			</div>
			<div class="solar-page__header__close" @click="$router.push({path: '/'})">
				<img src="~@/assets/img/svg/close-icon.svg">
			</div>
		</div>
		<div class="solar-page__main">
			<div class="solar-page__main-filter flex-row">
				<div class="solar-page__main-filter__leftContent flex-column">
					<div class="solar-page__main-filter__leftContent__title flex-row">
						<p>Ваша вселенная</p>
						<img src="~@/assets/img/svg/dash.svg">
						<p id="solar-name">Ариадна</p>
					</div>
					<div class="solar-page__main-filter__leftContent__subtitle flex-row">
						<div class="solar-page__main-filter__leftContent__subtitle__datepicker flex-row">
							<p>Ноябрь</p>
							<img src="~@/assets/img/svg/date-input.svg">
						</div>
						<p>В вашей системе замечены планеты:</p>
					</div>
				</div>
				<div class="solar-page__main-filter__rightContent">
					<button class="share_button flex-row">
						<img src="~@/assets/img/svg/share-icon.svg">
						<p>Поделиться Вселенной</p>
					</button>
				</div>
			</div>
			<div class="solar-page__main__solarContainer" id="solar">
				<!-- <img src="~@/assets/img/general/chart.png" id="parallax"> -->
				<div id="parallax"></div>
			</div>
		</div>
		<div class="solar-page__footer flex-column">
			<a href="https://www.company.rt.ru/" target="_blank" rel="noopener noreferrer" class="solar-page__footer__logo">
				<img src="~@/assets/img/svg/logo/rostelecom.svg">
			</a>
			<p>Разработка Shine squad</p>
			<p>© 2021 Ростелеком. Все права защищены</p>
		</div>
	</div>
</template>

<script>
	/* eslint-disable no-mixed-spaces-and-tabs */

	export default {
		name: 'Solar',
		mounted() {
			document.addEventListener("mousemove", parallax);
			const elem = document.querySelector("#parallax");
			console.log(elem)
			// Magic happens here
			function parallax(e) {
				let _w = window.innerWidth/2;
				let _h = window.innerHeight/3;
				let _mouseX = e.clientX;
				let _mouseY = e.clientY;

				let scale = 0.5;
				let _depth1 = `${50 - (_mouseX - _w) * scale}% ${50 + (_mouseY - _h) * scale}%`;

				scale = 50;
				let _depth2 = `${50 - (_mouseX - _w) * scale}% ${50 - (_mouseY - _h) * scale}%`;

				scale = 0.1;
				let _depth3 = `${50 - (_mouseX - _w) * scale}% ${50 - (_mouseY - _h) * scale}%`;
				let x = `${_depth3}, ${_depth2}, ${_depth1}`;
				console.log(x);
				elem.style.backgroundPosition = x;
			}
		}
 	}
 	
</script>

<style scoped>
	.solar-page {
	  background: url("~@/assets/img/general/background-solar.png");
	  background-repeat: no-repeat;
	  background-size: 100% 100%;
	  min-height: 100vh;
	  height: auto;
	}

	.solar-page__header {
	  justify-content: space-between;
	  padding: 36px 0 72px 0; }
	  .solar-page__header__back {
	    align-items: center;
	    cursor: pointer;
	    margin-left: 72px; }
	    .solar-page__header__back img {
	      width: 38px; }
	    .solar-page__header__back p {
	      font-size: 20px;
	      line-height: 24px;
	      text-transform: uppercase;
	      color: #8F81A8;
	      font-family: MontserratSemiBold;
	      margin-left: 25px; }
	  .solar-page__header__close {
	    cursor: pointer;
	    margin-right: 116px; }

	.solar-page__main {
	  width: 100%; }
	  .solar-page__main-filter {
	    max-width: 100%;
	    /* margin: 0 auto; */
	    justify-content: space-between; }
	    .solar-page__main-filter__leftContent__title {
	      align-items: center; }
	      .solar-page__main-filter__leftContent__title img {
	        margin: 0 15px; }
	      .solar-page__main-filter__leftContent__title p {
	        font-size: 30px;
	        line-height: 37px;
	        text-transform: uppercase;
	        color: #E3DBF1; }
	        .solar-page__main-filter__leftContent__title p:first-child {
	          font-family: MontserratSemiBold; }
	        .solar-page__main-filter__leftContent__title p:last-child {
	          font-family: MontserratLightItalic; }
	    .solar-page__main-filter__leftContent__subtitle {
	      margin-top: 53px; }
	      .solar-page__main-filter__leftContent__subtitle__datepicker {
	        padding: 16px 26px;
	        background: #2F185F;
	        border-radius: 30px;
	        display: flex;
	        align-items: center;
	        justify-content: center; }
	        .solar-page__main-filter__leftContent__subtitle__datepicker p {
	          font-size: 24px;
	          line-height: 29px;
	          color: #7B63AF !important;
	          font-family: MontserratRegular !important;
	          margin-right: 20px;
	          margin-left: 0 !important; }
	        .solar-page__main-filter__leftContent__subtitle__datepicker img {
	          height: 22px; }
	      .solar-page__main-filter__leftContent__subtitle p {
	        font-family: MontserratLightItalic;
	        font-size: 27px;
	        line-height: 33px;
	        color: #E3DBF1;
	        max-width: 345px;
	        margin-left: 39px; }
	    .solar-page__main-filter__rightContent .share_button {
	      background: linear-gradient(147.85deg, #C039BB 8.91%, #7816B4 87.81%);
	      border-radius: 25px;
	      padding: 20.5px 24.5px;
	      border: 0;
	      align-items: center;
	      cursor: pointer; }
	      .solar-page__main-filter__rightContent .share_button img {
	        margin-right: 10px; }
	      .solar-page__main-filter__rightContent .share_button p {
	        font-size: 18px;
	        line-height: 22px;
	        color: #E3DBF1; }
	  .solar-page__main__solarContainer {
	    /* width: 80%; */
	    height: 500px;
	    margin: 0 auto;
	    display: flex;
	    align-items: center;
	    justify-content: center; }

	.solar-page__footer {
	  position: absolute;
	  bottom: 10px;
	  left: 10px; }
	  .solar-page__footer__logo {
	    height: 35px; }
	  .solar-page__footer p {
	    margin-top: 28px;
	    font-size: 14px;
	    line-height: 17px;
	    color: #7562A2; }
	    .solar-page__footer p:last-child {
	      margin-top: 12px; }

	#parallax {
		background-image: url(~@/assets/img/general/chart.png);
		background-repeat: no-repeat;
		background-position: center;
		background-position: 50% 50%;	
		width: 1127px;
		height: 630px;
		background-size: 95%;
	}
</style>