<template>
	<canvas ref="linechart"></canvas>
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
		              lineTension: 0.4, // The parameter responsible for the "smoothness" of the line (less value = straighter line)
		              borderColor: "#4F46E5",
		              fill:'start',
		              pointHitRadius: 45,
		              pointBorderColor: 'transparent',
		              pointBackgroundColor: 'transparent',
		              pointHoverBorderWidth: 2,
		              pointHoverBorderColor: 'white',
		              pointHoverBackgroundColor: '#5E5CE6',
		            }]
		          },
		          options: {
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
		                  size: '9.04px',
		                  lineHeight: '9.04px'
		                },
		                bodyFont: {
		                  weight: '700',
		                  lineHeight: '16.27px'
		                },
		                padding: {
		                  left: 15,
		                  right: 15,
		                  top: 14,
		                  bottom: 10
		                },
		                displayColors: false,
		                callbacks: {
		                  // title: function (data) {
		                  //   const date = new Date(data[0].label);
		                  //   const month = date.getMonth() + 1;
		                  //   let day = data[0].label.split('').slice(8,10).join('')
		                  //   if (day[0]==="0") {
		                  //     day = day.substring(1)
		                  //   }
		                  //   return `${day} ${monthNames[month]} ${data[0].label}`
		                  // },
		                  // label: function (data) {
		                  //   return `${data.formattedValue} DBUSD`
		                  // },
		                }
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
		                  // callback: (value, index, values) => {
		                  //   let date = this.data.labels[index],
		                  //       customDate = this.moment.utc(date).local().format("DD.MM");
		                  //   return customDate;
		                  // },
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
		                  // callback: (value, index, values) => {
		                  //   return moneyFormat(value) + `   `;
		                  // },
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