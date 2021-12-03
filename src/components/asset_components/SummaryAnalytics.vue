<template>
	<div class="summaryanalytics-page flex-row">
		<div class="summaryanalytics-page__left">
			<h2>Активность вашего интернет-следа</h2>

		</div>
		<div class="summaryanalytics-page__right">
			<div class="filters flex-row">
				<p class="filters__item">По частоте использования</p>
				<p class="filters__item">По частоте использования</p>
				<p class="filters__item">По частоте использования</p>
			</div>
			<div class="analytic-cards flex-row">
				<div class="analytic-cards__item" v-for="(item, index) in analyticCards" :key="index">
					<div class="card-top flex-row">
						<img :src="getImgUrl('img/svg/' + item.type + '.svg')" class="card-img">
						<div class="flex-column general-statistic">
							<p>Всего: {{ item.all }}</p>
							<p>Новых: {{ item.new }}</p>
						</div>
					</div>
					<p class="card__title">{{ getCardName(item.type) }}</p>
					<p class="card__subtitle">За выбранный период:</p>
					<div class="social-info flex-column">
						<div class="social-info__item flex-row" v-for="(item, index) in item.social" :key="index">
							<p>{{ item.name }}</p>
							<p>{{ item.value }}</p>
						</div>
					</div>
					<button class="button-all">Полный отчет</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs */
	
	export default {
		name: "SummaryAnalytics",
		data() {
			return {
				analyticCards: [
					{
						id: 0,
						type: 'images',
						all: 1239,
						new: 11,
						social: [
							{
								name: 'Вконтакте',
								value: 186
							},
							{
								name: 'Instagram',
								value: 132
							},
							{
								name: 'Яндекс',
								value: 16
							},
							{
								name: 'Facebook',
								value: 5
							},
						]
					},
					{
						id: 1,
						type: 'images',
						all: 1239,
						new: 11,
						social: [
							{
								name: 'Вконтакте',
								value: 186
							},
							{
								name: 'Instagram',
								value: 132
							},
							{
								name: 'Яндекс',
								value: 16
							},
							{
								name: 'Facebook',
								value: 5
							},
						]
					},
					{
						id: 2,
						type: 'videos',
						all: 1239,
						new: 11,
						social: [
							{
								name: 'Вконтакте',
								value: 186
							},
							{
								name: 'Instagram',
								value: 132
							},
							{
								name: 'Яндекс',
								value: 16
							},
							{
								name: 'Facebook',
								value: 5
							},
						]
					},
				]
			}
		},
		methods: {
			getImgUrl(pic) {
			  return require('../../assets/' + pic);
			},
			getCardName(type) {
				if (type == "images") {
					return "Фотографии"
				} else if (type == "articles") {
					return "Статьи"
				} else {
					return "Видео"
				}
			}
		}
	}
</script>
<style scoped>
	.summaryanalytics-page {
		width: 100%;
		height: 200px;
		background: red;
	}
		.summaryanalytics-page__left {
			width: calc(100% - 925px);
			background: yellow;
		}
		.summaryanalytics-page__right {
			width: 925px;
			background: pink;
		}
			.summaryanalytics-page__right .filters {
				height: 63px;
				width: 100%;
				background: brown;
			}
				.summaryanalytics-page__right .filters .filters__item {
					margin-top: 27px;
					font-size: 14px;
					line-height: 17px;
					color: #AEB1B6;
					margin-right: 10px;
				}
			.summaryanalytics-page__right .analytic-cards {
				width: 100%;
				flex-wrap: wrap;
				background: green;
				justify-content: space-between;
			}
				.summaryanalytics-page__right .analytic-cards__item {
					max-width: 305px;
					width: 305px;
					height: 400px;
					background: #F9F9F8;
					box-shadow: 1px 3px 10px rgba(82, 144, 188, 0.17);
					border-radius: 3px;
				}
					.summaryanalytics-page__right .analytic-cards__item .card-top {
						justify-content: space-between;
						margin: 31px 48px 0 48px;
					}
						.summaryanalytics-page__right .analytic-cards__item .card-top .card-img {

						}
						.summaryanalytics-page__right .analytic-cards__item .card-top .general-statistic {

						}
							.summaryanalytics-page__right .analytic-cards__item .card-top .general-statistic p {
								font-size: 17px;
								line-height: 21px;
								font-family: MontserratSemiBold;
							}
								.summaryanalytics-page__right .analytic-cards__item .card-top .general-statistic p:last-child {
									margin-top: 9px;
								}
					.summaryanalytics-page__right .analytic-cards__item .card__title {
						font-size: 22px;
						line-height: 27px;
						text-transform: uppercase;
						color: #1B1A26;
						margin: 35px 0 0 48px;
						font-family: MontserratSemiBold;
					}
					.summaryanalytics-page__right .analytic-cards__item .card__subtitle {
						font-size: 15px;
						line-height: 18px;
						color: #AEB1B6;
						margin: 14px 0 0 48px;
					}
					.summaryanalytics-page__right .analytic-cards__item .social-info {
						margin: 24px 48px 0 48px;
					}
						.summaryanalytics-page__right .analytic-cards__item .social-info .social-info__item {
							justify-content: space-between;
							width: 100%;
							margin-top: 7px;
						}
							.summaryanalytics-page__right .analytic-cards__item .social-info .social-info__item:first-child {
								margin-top: 0;
							}
							.summaryanalytics-page__right .analytic-cards__item .social-info .social-info__item p {
								font-size: 14px;
								line-height: 17px;
							}
					.summaryanalytics-page__right .analytic-cards__item .button-all {
						margin: 30px 48px 0 48px;
						background: transparent;
						border: 0;
						cursor: pointer;
						text-decoration: underline;
						font-size: 14px;
						line-height: 17px;
						color: #373641;
					}
						.summaryanalytics-page__right .analytic-cards__item .button-all:hover {
							text-decoration: none;
						}
</style>