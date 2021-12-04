<template>
	<div class="auth-page">
		<h1 class="auth-page__title">Авторизация</h1>
		<form class="auth-page__form flex-column">
			<div class="auth-page__form__item flex-column">
				<label>Имя</label>
				<input type="text" name="username">
			</div>
			<div class="auth-page__form__item flex-column">
				<label>Пароль</label>
				<input type="password" name="password">
			</div>
			<button class="auth-page__form__button" @click="auth">Войти</button>
		</form>
		<img 
			id="from-Rick-with-love" 
			src="~@/assets/img/spacemarine.png" 
			style="right: -130px;"
			acc="1"
			rotate="-35">
	</div>
</template>
<script>
	/* eslint-disable no-mixed-spaces-and-tabs */

	export default {
		name: 'Auth',
		methods: {
			auth() {
				let usr = document.querySelector(".auth-page__form input[name=username]").value;
	            let pwd = document.querySelector(".auth-page__form input[name=password]").value;

	            var formData = new FormData();
	            formData.append("username", usr);
	            formData.append("password", pwd);

				setInterval(function(){
					var node = document
						.querySelector("#from-Rick-with-love")

					var c = parseFloat(node.style.right.replace("px", ""))
					var acc = parseFloat(node.getAttribute("acc"));
					var rot = parseFloat(node.getAttribute("rotate"));

					acc = acc > 0
						? acc - 0.0009
						: 0;

					rot += 0.1;
					
					node.style.right = (c+acc) + "px";
					node.style.transform = "rotate("+rot+"deg)";

					node.setAttribute("acc", acc)
					node.setAttribute("rotate", rot)
				}, 10)

	            fetch("https://shsq.ru/cp2021-tvs/php/access_token.php", {
	                method: "POST",
	                body: formData
	            })
	                .then(resp => resp.text())
	                .then(answ => {
	                    if (answ == "Smthg missing" || answ.indexOf("Warning") != -1) {
	                        console.log("Hurma")
							// this.$router.push({path: 'auth'})
	                    } else {
							let json = {
								auth: true
							};
							document.cookie = JSON.stringify(json);

	                        this.get_user_data(answ)
	                    }
	                })
			},
			get_user_data(at) {
		        var formData = new FormData();
		        formData.append("access_token", at);

		        fetch("https://shsq.ru/cp2021-tvs/php/userinfo.php", {
		            method: "POST",
		            body: formData
		        })
		        .then(resp => resp.json())
		        .then(answ => {
					let c = JSON.parse(document.cookie);

					c["data"] = answ;
					document.cookie = JSON.stringify(c);
		            console.log(document.cookie)

					this.$router.push({name: 'Profile'})
		        })
		    }
		},
		mounted() {
			document
				.querySelector("form")
				.addEventListener("submit", (ev)=>{
					ev.preventDefault();
				})
		}
 	}
</script>

<style scoped>
	#from-Rick-with-love {
		width: 150px;
		position: fixed;
	}
	.auth-page {
		background: url("~@/assets/img/general/background-theme.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		min-height: 100vh; 
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
		.auth-page .auth-page__title {
			font-size: 25px;
			line-height: 30px;
			text-transform: uppercase;
			color: #1B1A26;
			font-family: MontserratSemiBold;
		}
		.auth-page .auth-page__form {
			margin-top: 90px;
			align-items: center;
		}
			.auth-page .auth-page__form .auth-page__form__item {
				align-items: center;
				margin-top: 48px;
			}
				.auth-page .auth-page__form .auth-page__form__item:first-child {
					margin-top: 0;
				}
				.auth-page .auth-page__form .auth-page__form__item label {
					font-size: 16px;
					line-height: 20px;
					color: #646371;
					font-family: MontserratSemiBold;
				}
				.auth-page .auth-page__form .auth-page__form__item input {
					border:  0;
					background: #E4EAF2;
					border-radius: 30px;
					height: 50px;
					max-width: 342px;
					width: 342px;
					margin-top: 10px;
					padding: 0 30px;
					font-size: 16px;
					line-height: 20px;
					color: #75758E;
				}
					.auth-page .auth-page__form .auth-page__form__item input:focus {
						border: 1px solid #5A73B5;
						width: 340px;
						height: 48px;
					}
					.auth-page .auth-page__form .auth-page__form__item input[type="password"] {
						color: #1B1A26;
					}
			.auth-page .auth-page__form .auth-page__form__button {
				margin-top: 90px;
				background: linear-gradient(180deg, #1A3C5B 0%, #1D254F 100%);
				border-radius: 20px;
				height: 58px;
				width: 278px;
				font-size: 18px;
				line-height: 22px;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 0;
				cursor: pointer;
			}
				.auth-page .auth-page__form .auth-page__form__button:hover {
					background: #5A73B5;
				}
</style>