<template>
	<div class="summaryanalytics-page flex-row">
		<div class="summaryanalytics-page__left">
			<h2 class="summaryanalytics-page__left__title">Активность вашего интернет-следа</h2>
			<p class="summaryanalytics-page__left__subtitle">
				Период: <label>Ноябрь</label>
			</p>
			<LineChart />
			<button class="all-button">Подробнее</button>
			<DoughnutChart />
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
							<p :class="item.type == 'images' ? 'blue' : (item.type == 'articles' ? 'green' : 'pink')">Всего: {{ item.all }}</p>
							<p :class="item.type == 'images' ? 'blue' : (item.type == 'articles' ? 'green' : 'pink')">Новых: {{ item.new }}</p>
						</div>
					</div>
					<p class="card__title">{{ getCardName(item.type) }}</p>
					<p class="card__subtitle">За выбранный период:</p>
					<div class="social-info flex-column" :class="item.type == 'images' ? 'blue' : (item.type == 'articles' ? 'green' : 'pink')">
						<div class="social-info__item flex-row" v-for="(item, index) in item.social" :key="index" >
							<p>{{ item.name }}</p>
							<p>{{ item.value }}</p>
						</div>
					</div>
					<button class="button-all" @click="item.type == 'articles' && openArticles()">Полный отчет</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs */

	import LineChart from '../charts/LineChart';
	import DoughnutChart from '../charts/DoughnutChart';

	export default {
		name: "SummaryAnalytics",
		components: {
			LineChart,
			DoughnutChart
		},
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
						type: 'articles',
						all: 34,
						new: 1,
						social: [
							{
								name: 'Google',
								value: 15
							},
							{
								name: 'Instagram',
								value: 11
							},
							{
								name: 'Яндекс',
								value: 6
							},
							{
								name: 'Facebook',
								value: 2
							},
						]
					},
					{
						id: 2,
						type: 'videos',
						all: 26,
						new: 13,
						social: [
							{
								name: 'Youtube',
								value: 7
							},
							{
								name: 'Tik tok',
								value: 3
							},
							{
								name: 'Яндекс',
								value: 3
							},
							{
								name: 'Вконтакте',
								value: 1
							},
						]
					},
					{
						id: 3,
						type: 'articles',
						all: 34,
						new: 1,
						social: [
							{
								name: 'Google',
								value: 15
							},
							{
								name: 'Instagram',
								value: 11
							},
							{
								name: 'Яндекс',
								value: 6
							},
							{
								name: 'Facebook',
								value: 2
							},
						]
					},
					{
						id: 4,
						type: 'videos',
						all: 26,
						new: 13,
						social: [
							{
								name: 'Youtube',
								value: 7
							},
							{
								name: 'Tik tok',
								value: 3
							},
							{
								name: 'Яндекс',
								value: 3
							},
							{
								name: 'Вконтакте',
								value: 1
							},
						]
					},
					{
						id: 5,
						type: 'articles',
						all: 34,
						new: 1,
						social: [
							{
								name: 'Google',
								value: 15
							},
							{
								name: 'Instagram',
								value: 11
							},
							{
								name: 'Яндекс',
								value: 6
							},
							{
								name: 'Facebook',
								value: 2
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
			},
			openArticles() {
				this.$bus.$emit('isSummary', false);
				this.$bus.$emit('isArticles', true);
			}
		}
	}
</script>
<style scoped>
	.green {
		color: #3BAD76;
	}
	.pink {
		color: #E5649B;
	}
	.blue {
		color: #3EA2E4;
	}
	.summaryanalytics-page {
		width: 100%;
		height: 200px;
	}
		.summaryanalytics-page__left {
			width: calc(100% - 925px);
			margin-top: 63px;
		}
			.summaryanalytics-page__left .summaryanalytics-page__left__title {
				font-size: 17px;
				line-height: 21px;
				color: #1B1A26;
				max-width: 230px;
			}
			.summaryanalytics-page__left .summaryanalytics-page__left__subtitle {
				font-size: 14px;
				line-height: 17px;
				color: #AEB1B6;
				margin-top: 34px;
				margin-bottom: 19px;
			}
				.summaryanalytics-page__left .summaryanalytics-page__left__subtitle label {
					color: #727579;
				}
			.summaryanalytics-page__left .all-button {
				border: 0;
				background: transparent;
				text-decoration: underline;
				font-size: 13px;
				line-height: 16px;
				color: #5D6776;
				margin-top: 12.5px;
				margin-bottom: 30px;
				cursor: pointer;
			}
				.summaryanalytics-page__left .all-button:hover {
					text-decoration: none;
				}
		.summaryanalytics-page__right {
			width: 925px;
		}
			.summaryanalytics-page__right .filters {
				height: 63px;
				width: 100%;
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
				justify-content: space-between;
			}
				.summaryanalytics-page__right .analytic-cards__item {
					max-width: 305px;
					width: 305px;
					height: 400px;
					background: #F9F9F8;
					box-shadow: 1px 3px 10px rgba(82, 144, 188, 0.17);
					border-radius: 3px;
					margin: 2.5px 0;
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