<template>
	<div class="ArticlesAnalytics-page">
		<div class="top-container flex-row">
			<div class="left-container flex-row">
				<div class="all">
					<div class="all__title flex-row">
						<p>Все статьи</p>
						<p>46</p>
					</div>
					<div class="all__body">
						<div class="all__body__title flex-row">
							<p>источник</p>
							<p>упоминаний</p>
						</div>
						<div class="all__body-list">
							<div class="all__body-list__item flex-row">
								<p>Google</p>
								<p>186</p>
							</div>
							<div class="all__body-list__item flex-row">
								<p>Instagram</p>
								<p>132</p>
							</div>
							<div class="all__body-list__item flex-row">
								<p>Яндекс</p>
								<p>16</p>
							</div>
							<div class="all__body-list__item flex-row">
								<p>Facebook</p>
								<p>16</p>
							</div>
							<div class="all__body-list__item flex-row">
								<p>НТГСПИ</p>
								<p>4</p>
							</div>
						</div>
					</div>
				</div>
				<div class="popular">
					<div class="popular__title">Популярные источники</div>
					<div class="popular__grid flex-row">
						<DoughnutChartAr />
						<div class="flex-column list">
							<p class="list__item">Google</p>
							<p class="list__item">Google</p>
							<p class="list__item">Яндекс</p>
							<p class="list__item">НТГСПИ</p>
							<p class="list__item">Вконтакте</p>
						</div>
					</div>
				</div>
			</div>
			<div class="right-container">
				<div class="right-container__top flex-row">
					<div class="right-container__top__title flex-row">
						<img src="~@/assets/img/svg/heart-icon.svg">
						<p>Избранное</p>
					</div>
					<p>36</p>
				</div>
				<div class="right-container__body">
					<div class="right-container__body__item flex-row">
						<a href="#" target="_blank">Кибер-состязания</a>
						<p>aumsu.ru</p>
					</div>
					<div class="right-container__body__item flex-row">
						<a href="#" target="_blank">Хакатонт Сообщество...</a>
						<p>vk.com</p>
					</div>
					<div class="right-container__body__item flex-row">
						<a href="#" target="_blank">Цифровой прорыв...</a>
						<p>leaderdigital.ru</p>
					</div>
					<div class="right-container__body__item flex-row">
						<a href="#" target="_blank">Хакатонт Сообщество...</a>
						<p>vk.com</p>
					</div>
					<div class="right-container__body__item flex-row">
						<a href="#" target="_blank">Участники конкурса...</a>
						<p>mail.ru</p>
					</div>

					<div class="right-container__body__item flex-row">
						<a href="#" target="_blank">Диссертация Инфор...</a>
						<p>vk.com</p>
					</div>
				</div>
			</div>
		</div>
		<div class="articles-list">
			<div class="articles-list__filter flex-row">
				<div class="all">Все: 34</div>
				<div class="new">Новых: 3</div>
				<div class="filter-picker flex-row">
					<img src="~@/assets/img/svg/login-arrow.svg">
					<p>По новизне</p>
				</div>
			</div>
			<div class="articles-list__card first-card flex-row">
				<div class="articles-list__card__left flex-column">
					<p class="uptitle">Статья</p>
					<h3 class="title">Кибер-состязания</h3>
					<div class="flex-row link">
						<p>Источник:&nbsp;</p>
						<a href="#">aumsu.ru</a>
					</div>
				</div>
				<div class="articles-list__card__middle flex-column">
					<p>Стартовали кибер-состязания на День радио - 7 мая в 10 утра, а завершились в полночь уже 8 мая. Мероприятие проводилось при поддержке компании HERE Technology. Конечно, с учетом...</p>
					<a href="#">Смотреть полностью</a>
				</div>
				<div class="articles-list__card__right flex-row">
					<button class="share"><img src="~@/assets/img/svg/share-icon-white.svg"></button>
					<button class="favorite"><img src="~@/assets/img/svg/heart-icon-white.svg"></button>
					<button class="application">Заявка на изменение</button>
				</div>
			</div>
			<div class="articles-list__card flex-row">
				<div class="articles-list__card__left flex-column">
					<p class="uptitle">Статья</p>
					<h3 class="title">Кибер-состязания</h3>
					<div class="flex-row link">
						<p>Источник:&nbsp;</p>
						<a href="#">aumsu.ru</a>
					</div>
				</div>
				<div class="articles-list__card__middle flex-column">
					<p>Стартовали кибер-состязания на День радио - 7 мая в 10 утра, а завершились в полночь уже 8 мая. Мероприятие проводилось при поддержке компании HERE Technology. Конечно, с учетом...</p>
					<a href="#">Смотреть полностью</a>
				</div>
				<div class="articles-list__card__right flex-row">
					<button class="share"><img src="~@/assets/img/svg/share-icon-white.svg"></button>
					<button class="favorite"><img src="~@/assets/img/svg/heart-icon-white.svg"></button>
					<button class="application">Заявка на изменение</button>
				</div>
			</div>
			<div class="articles-list__card flex-row">
				<div class="articles-list__card__left flex-column">
					<p class="uptitle">Статья</p>
					<h3 class="title">Кибер-состязания</h3>
					<div class="flex-row link">
						<p>Источник:&nbsp;</p>
						<a href="#">aumsu.ru</a>
					</div>
				</div>
				<div class="articles-list__card__middle flex-column">
					<p>Стартовали кибер-состязания на День радио - 7 мая в 10 утра, а завершились в полночь уже 8 мая. Мероприятие проводилось при поддержке компании HERE Technology. Конечно, с учетом...</p>
					<a href="#">Смотреть полностью</a>
				</div>
				<div class="articles-list__card__right flex-row">
					<button class="share"><img src="~@/assets/img/svg/share-icon-white.svg"></button>
					<button class="favorite"><img src="~@/assets/img/svg/heart-icon-white.svg"></button>
					<button class="application">Заявка на изменение</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

	import DoughnutChartAr from '../charts/DoughnutChartAr'

	export default {
		name: "ArticlesAnalytics",
		components: {
			DoughnutChartAr
		}
	}
</script>
<style scoped>
	.ArticlesAnalytics-page {
		width: 100%;
		margin-top: 39px;
	}
		.ArticlesAnalytics-page .top-container {
			width: 100%;
			justify-content: space-between;
		}
			.ArticlesAnalytics-page .top-container .left-container {
				background: #F9F9F8;
				box-shadow: 1px 3px 10px rgba(82, 144, 188, 0.17);
				border-radius: 3px;
				width: 785px;
				height: 273px;
			}
				.ArticlesAnalytics-page .top-container .left-container .all {
					margin: 32px 0 32px 32px;
					width: 40%;
				}
					.ArticlesAnalytics-page .top-container .left-container .all .all__title {
						justify-content: space-between;
					}
				.ArticlesAnalytics-page .top-container .left-container .popular {
					margin: 32px 32px 0 90px;
					width: 50%;
				}
			.ArticlesAnalytics-page .top-container .right-container {
				background: #F2F5F9;
				box-shadow: 1px 3px 10px rgba(82, 144, 188, 0.17);
				border-radius: 3px;
				width: 423px;
				height: 273px;
			}
		.all__body {
			
		}
			.all__body__title {
				justify-content: space-between;
				margin-top: 27px;
			}
				.all__body__title p {
					font-size: 13px;
					line-height: 16px;
					color: #AEB1B6;
					font-family: MontserratRegular;
				}
		.all__body-list {

		}
			.all__body-list__item {
				justify-content: space-between;
				margin-top: 8px;
			}
				.all__body-list__item:first-child {
					margin-top: 12px;
				}
				.all__body-list__item p {
					font-size: 14px;
					line-height: 17px;
					color: #1B1A26;
				}

		.list {
			height: 100%;
			justify-content: center;
			margin-left: 50px;
		}
			.list__item {
				margin-bottom: 10px;
				font-size: 15px;
				line-height: 18px;
				color: #373641;
				text-decoration: underline;
				cursor: pointer;
			}
				.list__item:hover {
					text-decoration: none;
				}
				.list__item:first-child {
					margin-top: 30px;
				}

		.right-container {

		}
			.right-container__top {
				margin: 32px 74px 0 32px;
				justify-content: space-between;
				align-items: center;
			}
				.right-container__top p {
					font-size: 18px;
					line-height: 22px;
					color: #373641;
					font-family: MontserratSemiBold;
				}
				.right-container__top__title {
					align-items: center;
				}
					.right-container__top__title img {
						margin-right: 11px;
					}
					.right-container__top__title p {
						font-size: 18px;
						line-height: 22px;
						color: #373641;
						font-family: MontserratSemiBold;
					}
			.right-container__body {
				margin: 25px 74px 0 32px;
			}
				.right-container__body__item {
					justify-content: space-between;
					margin-top: 10px;
				}
					.right-container__body__item a {
						font-size: 14px;
						line-height: 17px;
						text-decoration-line: underline;
						color: #373641;
					}
					.right-container__body__item p {
						font-size: 14px;
						line-height: 17px;
						color: #8D74C8;
						font-family: MontserratSemiBold;
					}
		.articles-list {
			width: 100%;
			margin-top: 56px;
		}
			.articles-list__filter {

			}
				.articles-list__filter .new {
					background: #E4EAF2;
					border-radius: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 17px;
					line-height: 21px;
					color: #1B1A26;
					width: 127px;
					height: 40px;
					margin-right: 72px;
				}
				.articles-list__filter .all {
					width: 115px;
					height: 40px;
					background: #CFD8E4;
					border-radius: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 17px;
					line-height: 21px;
					color: #1B1A26;
					margin-right: 8px;
				}
				.articles-list__filter .filter-picker {
					align-items: center;
					cursor: pointer;
				}
					.articles-list__filter .filter-picker img {
						width: 12px;
						height: 6px;
						margin-right: 9px;
					}
					.articles-list__filter .filter-picker p {
						font-size: 14px;
						line-height: 17px;
						color: #9D9D9F;
					}
		.articles-list__card {
			background: #F9F9F8;
			box-shadow: 1px 3px 10px rgba(82, 144, 188, 0.17);
			border-radius: 3px;
			height: 130px;
			align-items: center;
			justify-content: space-around;
		}
			.articles-list__card .articles-list__card__left {

			}
				.articles-list__card .articles-list__card__left .uptitle {
					font-size: 15px;
					line-height: 18px;
					color: #AEB1B6;
					font-family: MontserratSemiBold;
				}
				.articles-list__card .articles-list__card__left .title {
					font-size: 20px;
					line-height: 24px;
					text-transform: uppercase;
					color: #1B1A26;
					font-family: MontserratSemiBold;
					margin-top: 8px;
				}
				.articles-list__card .articles-list__card__left .link {
					font-size: 15px;
					line-height: 18px;
					margin-top: 6px;
				}
					.articles-list__card .articles-list__card__left .link p {
						color: #646371;
						font-family: MontserratSemiBold;
					}
					.articles-list__card .articles-list__card__left .link a {
						text-decoration-line: underline;
						color: #5A73B5;
					}
						.articles-list__card .articles-list__card__left .link a:hover {
							text-decoration-line: none;
						}
			.articles-list__card .articles-list__card__middle {
				font-size: 13px;
				line-height: 16px;
				font-family: MontserratRegular;
			}
				.articles-list__card .articles-list__card__middle p {
					color: #1B1A26;
					max-width: 443px;
				}
				.articles-list__card .articles-list__card__middle a {
					text-decoration: underline;
					color: #5A73B5;
				}
					.articles-list__card .articles-list__card__middle a:hover {
						text-decoration: none;
					}
			.articles-list__card .articles-list__card__right {

			}
				.articles-list__card .articles-list__card__right button {
					background: transparent;
					border: none;
					cursor: pointer;
				}
				.articles-list__card .articles-list__card__right .share {
					width: 40px;
					height: 40px;
					background: #51C48B;
					border-radius: 15px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 14px;
				}
				.articles-list__card .articles-list__card__right .favorite {
					width: 40px;
					height: 40px;
					background: #3EA2E4;
					border-radius: 15px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 14px;
				}
				.articles-list__card .articles-list__card__right .application {
					width: 222px;
					height: 40px;
					background: #A032BC;
					border-radius: 15px;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 15px;
					line-height: 18px;
					color: #FFFFFF;
				}
		.articles-list__card {
			margin-top: 10px;
		}
		.first-card {
			margin-top: 30px !important;
		}
</style>