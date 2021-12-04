<template>
	<div class="profile-page">
		<header class="header">
			<div class="container flex-row">
				<div class="header-left flex-row">
					<img src="~@/assets/img/svg/logo/data-space.svg" class="header-left__logo" @click="$bus.$emit('isSummary', true); $bus.$emit('isArticles', false);">
					<ul class="nav flex-row">
						<li class="nav__item"><a href="#">О сервисе</a></li>
						<li class="nav__item"><a href="#">Правила</a></li>
						<li class="nav__item"><a href="#">Помощь</a></li>
					</ul>
				</div>
				<div class="header-right flex-row">
					<!-- <div class="header-right__logos flex-row">
						<img src="~@/assets/img/svg/logo/rostelecom.svg">
					</div> -->
					<div class="header-right__user flex-row">
						<img src="~@/assets/img/svg/logo/gosuslugi.svg" class="permission">
						<img src="~@/assets/img/svg/login-arrow.svg" class="arrow">
						<div class="header-right__user-circle">
							<img src="~@/assets/img/svg/user-icon.svg">
						</div>
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<div class="container">
				<!-- user info -->
				<div class="user-info flex-row">
					<div class="user-info__left flex-row">
						<img src="~@/assets/img/general/avatar.png" class="user__avatar">
						<div class="user-info__left-text flex-column">
							<div class="flex-column">
								<p class="user__name">Артем Бурасов</p>
								<div class="universe__name flex-row">
									<p class="static_text">Вселенная данных: </p>
									<p contentEditable="true" class="editable_text">Ариадна</p>
									<img src="~@/assets/img/svg/edit-icon.svg" class="editable_icon">
								</div>
							</div>
							<p class="user__topNews">ТОП-3 упоминаний о вас: ВК, Youtube, Яндекс</p>
						</div>
					</div>
					<div class="user-info__right">
						<button class="flex-row open-button" @click="$router.push({path: 'solar'})">
							<img src="~@/assets/img/svg/universe-icon.svg">
							<p>Открыть мою Вселенную</p>
						</button>
					</div>
				</div>
				<!-- filter line -->
				<FilterLine />
				<!-- analytics -->
				<SummaryAnalytics v-show="isSummary" />
				<ArticlesAnalytics v-show="isArticles" />
			</div>
		</main>
	</div>
</template>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs */

	import FilterLine from "./asset_components/FilterLine"
	import SummaryAnalytics from "./asset_components/SummaryAnalytics"
	import ArticlesAnalytics from "./asset_components/ArticlesAnalytics"

	export default {
		name: 'Profile',
		components: {
			FilterLine,
			SummaryAnalytics,
			ArticlesAnalytics
		},
		data() {
			return {
				isSummary: true,
				isArticles: false
			}
		},
		methods: {
		    checkAuth() {
		        if (document.cookie == '') {
		          this.$router.push({path: 'auth'})
		        }
		     }
		},
	    mounted() {
	      this.checkAuth();
	    },
		created() {
			this.$bus.$on('isSummary', data => {
		      this.isSummary = data;
		    });
		    this.$bus.$on('isArticles', data => {
		      this.isArticles = data;
		    });
		}
 	}
</script>
<style scoped>
	.header {
		width: 100%;
		height: 60px;
		background: #1B1A26;
	}
		.container {
			align-items: center;
			justify-content: space-between;
			height: 100%;
		}
		.header .header-left {
			align-items: center;
		}
			.header .header-left .header-left__logo {
				cursor: pointer;
			}
			.header .header-left .nav {
				margin-left: 67px;
				list-style: none;
			}
				.header .header-left .nav .nav__item {
					margin: 9px;
				}
					.header .header-left .nav .nav__item a {
						text-decoration: none;
						font-size: 15px;
						line-height: 18px;
						color: #F4F8FD;
						font-family: MontserratRegular;
					}
						.header .header-left .nav .nav__item a:hover {
							text-decoration: underline;
						}
		.header .header-right {
			align-items: center;
		}
			/*.header .header-right .header-right__logos {
				margin-right: 45px;
			}*/
			.header .header-right .header-right__user {

			}
				.header .header-right .header-right__user .arrow {
					margin-right: 15px;
					cursor: pointer;
				}
				.header .header-right .header-right__user .permission {
					margin-right: 30px;
				}
				.header .header-right .header-right__user .header-right__user-circle {
					width: 38px;
					height: 38px;
					background: #5B5B61;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

	.profile-page {
		background: url("~@/assets/img/general/background-theme.png");
	  	background-repeat: no-repeat;
	  	background-size: 100% 100%;
	  	min-height: 100vh;
	  	height: auto;
	}

	.main {

	}
		.main .user-info {
			margin-top: 50px;
			width: 100%;
			justify-content: space-between;
			align-items: center;
		}
			.main .user-info .user-info__left {

			}
				.main .user-info .user-info__left .user__avatar {
					border-radius: 3px;
					width: 127px;
					height: 127px;
					margin-right: 40px;
				}
				.main .user-info .user-info__left .user-info__left-text {
					justify-content: space-between;
					min-height: 100%;
				}
					.main .user-info .user-info__left .user-info__left-text .flex-column {

					}
						.main .user-info .user-info__left .user-info__left-text .flex-column .user__name {
							font-size: 25px;
							line-height: 30px;
							text-transform: uppercase;
							color: #1B1A26;
							font-family: MontserratSemiBold;
						}
						.main .user-info .user-info__left .user-info__left-text .flex-column .universe__name {
							margin-top: 17px;
							align-items: center;
						}
							.main .user-info .user-info__left .user-info__left-text .flex-column .universe__name .static_text {
								font-size: 21px;
								line-height: 26px;
								color: #646371;
								margin-right: 12px;
							}
							.main .user-info .user-info__left .user-info__left-text .flex-column .universe__name .editable_text {
								font-size: 21px;
								line-height: 26px;
								color: #1B1A26;
								margin-right: 7px;
								font-family: MontserratRegularItalic;
								position: relative;
								outline: none;
							}

								.main .user-info .user-info__left .user-info__left-text .flex-column .universe__name .editable_text:before {
									content: '';
									position: absolute;
									bottom: -3px;
									left: 0;
									width: 100%;
									height: 1px;
									background: #C4C4C4;
								}
							.main .user-info .user-info__left .user-info__left-text .flex-column .universe__name .editable_icon {
								width: 14.17px;
								height: 14.17px;
								margin-bottom: -4px;
							}
					.main .user-info .user-info__left .user-info__left-text .user__topNews {
						font-family: MontserratRegular;
						font-size: 16px;
						line-height: 20px;
						color: #646371;
					}
			.main .user-info .user-info__right {

			}
				.main .user-info .user-info__right .open-button {
					background: linear-gradient(180deg, #1A3C5B 0%, #1D254F 100%);
					border-radius: 20px;
					height: 58px;
					width: 390px;
					align-items: center;
					justify-content: center;
					border: 0;
					cursor: pointer;
				}
					.main .user-info .user-info__right .open-button:hover {
						background: #5A73B5;
					}
					.main .user-info .user-info__right .open-button img {
						margin-right: 10px;
					}
					.main .user-info .user-info__right .open-button p {
						font-size: 18px;
						line-height: 22px;
						color: #FFFFFF;
					}
</style>