<template>
	<div class="filter-line flex-row">
		<div class="flex-row" style="align-items: center;">
			<img src="~@/assets/img/svg/arrow-back.svg" style="cursor: pointer; margin-right: 18px;" v-if="!status" @click="$bus.$emit('isSummary', true); $bus.$emit('isArticles', false);">
			<p class="filter__title">{{ check() }}</p>
		</div>
		<div class="filter__datepicker flex-row">
			<p class="text">Период:</p>
			<button class="datepicker flex-row">
				<p>Ноябрь</p>
				<img src="~@/assets/img/svg/date-input-grey.svg">
			</button>
		</div>
		<div class="filter__search-container">
			<input type="text" name="search" class="filter__search" id="filter__search">
			<label for="filter__search" class="labelForSearch"><img src="~@/assets/img/svg/search-icon.svg"></label>
		</div>
		<p class="filter__result">Новые данные о вас: <span>+ 21</span></p>
	</div>
</template>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs */
	
	export default {
		name: 'FilterLine',
		data() {
			return {
				status: true,
			}
		},
		methods: {
			check() {
				if (this.status) {
					return 'Сводка'
				} else {
					return 'Статьи'
				}
			}
		},
		created() {
			this.$bus.$on('isSummary', data => {
		      this.status = data;
		      this.check()
		    });
		},
	}
</script>
<style scoped>
	.filter-line {
		margin-top: 40px;
		width: 100%;
		background: #E4EAF2;
		height: 100px;
		align-items: center;
		justify-content: space-around;
	}
		.filter__title {
			font-size: 25px;
			line-height: 30px;
			text-transform: uppercase;
			color: #1B1A26;
			font-family: MontserratBold;
		}
		.filter__datepicker {
			align-items: center;
		}
			.filter__datepicker .text {
				font-size: 14px;
				line-height: 17px;
				color: #646371;
				margin-right: 15px;
			}
			.filter__datepicker .datepicker {
				background: #CFD8E4;
				border-radius: 30px;
				height: 40px;
				width: 132px;
				align-items: center;
				justify-content: center;
				border: none;
			}
				.filter__datepicker .datepicker p {
					margin-right: 5px;
					font-size: 16px;
					line-height: 20px;
					color: #646371;
				}
				.filter__datepicker .datepicker img {
					width: 26px;
					height: 19px;
				}
		.filter__search {
			background: #F4F8FD;
			border-radius: 25px;
			width: 295px;
			height: 40px;
			position: relative;
			border: 0;
			padding-left: 30px;
			font-size: 16px;
			line-height: 20px;
			color: #646371;
		}
			.filter__search-container {
				position: relative;
				display: flex;
				align-items: center;
			}
			.labelForSearch {
				position: absolute;
				right: 20px;
				width: 17.5px;
				height: 17.5px;
			}
		.filter__result {
			font-size: 18px;
			line-height: 22px;
		}
			.filter__result span {
				font-size: 18px;
				line-height: 22px;
				color: #C039BB;
				font-family: MontserratSemiBold;
			}
</style>