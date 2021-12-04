<template>
	<canvas ref="doughnutar" id="doughnutar"></canvas>
</template>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs */

	export default {
		name: 'DoughnutChartAr',
		methods: {
			createChart() {
				new window.Chart(this.$refs.doughnutar, {
					type: 'pie',
					data: {
						datasets: [
							{
								data: [10, 30, 35],
								backgroundColor: [
									"#67BEF8",
									"#35E991",
									"#E3DBF1"
								],
								borderWidth: 0,
							}
						]
					},
					options: {
						responsive: true,
						maintainAspectRatio: true,
						plugins: {
							legend: {
								display: false
							},
							tooltip: {
								backgroundColor: '#3A3A3C',
								borderRadius: 14,
								xAlign: 'center',
								yAlign: 'top',
								titleAlign: 'center',
								bodyAlign: 'center',
								titleColor: 'rgba(235, 235, 245, 0.6)',
								titleFont: {
									weight: '500',
									size: '10px',
									lineHeight: '14px'
								},
								bodyFont: {
									weight: '700',
									size: '12px',
									lineHeight: '16.27px'
								},
								bodyColor: 'white',
								padding: {
									left: 15,
									right: 15,
									top:14,
									bottom:14
								},
								boxWidth: 117,
								boxHeight: 69,
								displayColors: false,
								callbacks: {
									label: function (data) {
										return `${data.formattedValue}`
									}
								}
							}
						}
					}
				});
			}
		},
		mounted() {
			this.createChart();
		}
	}
</script>
<style scoped>
	#doughnutar {
		width: 140px !important;
		height: 140px !important;
		margin-top: 29px;
	}
</style>