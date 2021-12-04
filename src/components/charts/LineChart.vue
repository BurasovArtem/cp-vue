<template>
	<canvas ref="linechart" id="linechart"></canvas>
</template>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs */

	export default {
		name: 'LineChart',
		methods: {
			createChart() {
				new window.Chart(this.$refs.linechart.getContext("2d"), {
		          type: 'line',
		          data: {
		            labels: ['a', 'b', 'v', 'g', 'r', 'g', 'y', 'w', 'n', 'w'],
		            datasets: [{
		              data: [10, 20, 30, 40, 50, 60, 60, 70, 10, 20, 50],
		              label: '',
		              lineTension: 0.4,
		              borderColor: "#D96DD4",
		              pointHitRadius: 45,
		              pointBorderColor: 'transparent',
		              pointBackgroundColor: 'transparent',
		              pointHoverBorderWidth: 2,
		              pointHoverBorderColor: 'white',
		              pointHoverBackgroundColor: '#5E5CE6',
		            }]
		          },
		          options: {
		          	responsive: false,
    				maintainAspectRatio: true,
		            elements: {
		              point: {
		                borderWidth: 0,
		                hoverBorderWidth: 3,
		                hoverBorderColor: `#FFFFFF`,
		              },
		            },
		            plugins: {
		              	legend: {
		                	display: false
		              	},
		              annotation: {
		                annotations: {
		                  line: {
		                    mode: `vertical`,
		                    yMin: 0,
		                    borderColor: `rgb(150, 150, 150)`,
		                    borderDash: [2, 2],
		                  },
		                },
		              },
		              tooltip: {
		                backgroundColor: '#3A3A3C',
		                borderRadius: 25,
		                xAlign: 'center',
		                yAlign: 'top',
		                titleAlign: 'center',
		                bodyAlign: 'center',
		                titleColor: 'rgba(235, 235, 245, 0.6)',
		                titleFont: {
		                  weight: '500',
		                  size: '0px',
		                  lineHeight: '0px'
		                },
		                bodyFont: {
		                  weight: '700',
		                  lineHeight: '16.27px'
		                },
		                padding: {
		                  left: 5,
		                  right: 5,
		                  top: 5,
		                  bottom: 5
		                },
		                displayColors: false,
		              }
		            },
		            scales: {
		              x: {
		                grid: {
		                  display: false,
		                },
		                ticks: {
		                  padding: 20,
		                  maxTicksLimit: 7,
		                  maxRotation: 0,
		                  display: false,
		                },
		              },
		              y: {
		                stacked: true,
		                grid: {
		                  drawTicks: false,
		                  display: false,
		                  color: `#38393E`,
		                },
		                ticks: {
		                  maxTicksLimit: 6,
		                  padding: 10,
		                  display: false,
		                },
		              },
		            },
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
	#linechart {
		width: 225px !important;
	}
</style>