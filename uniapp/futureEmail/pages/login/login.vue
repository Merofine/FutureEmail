<template>
	<view class="container">
		
		<!-- LOGO HEAD -->
		<view class="codeMessage">
			<!-- <view class="logo">logo</view> -->
			<image class="logo" src="https://afflatus.xyz/image/touxiang.jpg" mode=""></image>
			<view class="codeName">未来信使</view>
			<view class="codeNameEn1">WEI LAI</view>
			<view class="codeNameEn2">XIN SHI</view>
			<view class="shortM">去吧，给未来寄一封信吧</view>
		</view> 
		
		<!-- CODE FUNCTION -->
		<view class="codeFuction">
			<view class="function1">
					<view class="point" style="background-color: #AB5353;"></view>
					<view class="miaoshu1">给未来的自己或TA写信</view>
					<view class="miaoshu2">采用块式写信，目前支持文字、图片格式，后续将增加音视频</view>
			</view>
<!-- 			<view class="function2">
					<view class="point" style="background-color: #AB5353;"></view>
					<view class="miaoshu1">Todo List</view> 
					<view class="miaoshu2">建立任务清单，具有微信提醒功能，提高工作效率</view>
			</view> -->
			<view class="function2">
					<view class="point" style="background-color: #e48c40;"></view>
					<view class="miaoshu1">保障隐私安全</view>
					<view class="miaoshu2">数据加密存储，保障信息安全，防止数据泄露</view>
			</view>
			
		</view>
		
		<!-- 登录按钮 -->
		<!-- #ifdef MP-WEIXIN || MP-BAIDU || MP-QQ -->
		
		<view class="loginButton">微信登录</view>
<!-- 		<button class="loginButtonTruth" type="primary" open-type="getUserInfo" @getuserinfo="wxLogin">微信登录</button>-->	
		<button class="loginButtonTruth" type="primary" withCredentials="true" lang="zh_CN" @click="wxLogin">微信登录</button>
	
	<!-- #endif -->
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				loginflag: true,
				finishLogin: false
			}
		},
		methods: {
			wxLogin: function(result) {
				var self = this;
				
				// console.log(uni.getUserInfo())
				
				// uni.openSetting({
				//   success(res) {
				//     console.log(res.authSetting)
				//   }
				// });
				
				
				//获取权限
				// uni.authorize({
				//     scope: 'scope.userInfo',
				//     success() {
				//         console.log(uni.getUserInfo())
				// 		//获取用户信息
				// 		uni.setStorage({
				// 			key:'userInfo',
				// 			data:uni.getUserInfo()
				// 		})
				//     }
				// })
				
				
				
				// 授权获取个人信息
				if(this.loginflag){
					this.loginflag = false
					
					if(uni.getUserProfile){
						console.log('可用')
						uni.getUserProfile({
							// provider:'weixin',
							desc: '用于完善会员资料',
							success:function(infoRes){			
								console.log(infoRes)
								// //获取用户信息
								uni.setStorage({
									key:'userInfo',
									data:infoRes.userInfo
								})
								// this.loginflag = false
								uni.login({
									provider:'weixin',
									success:function(loginRes){
										let js_code = loginRes.code;
										let username=infoRes.userInfo.nickName;
										let gender=infoRes.userInfo.gender;
										let formdata = {code:js_code,username:username,sex:gender};
										
										uni.showLoading({
											mask:true,
											title:'正在登录...',
											complete:()=>{}
										});
										
										uni.request({
											url:'https://afflatus.xyz/submitLogin',
											// http://afflatus.xyz:9999/submitLogin
											// http://119.29.158.185:9999/submitLogin
											method:'POST',
											data:formdata,
											success:(res)=>{
												// 浏览时，无反应。在各个小程序平台运行时，网络相关的 API 在使用前需要配置域名白名单。
												console.log(res);
												if(res.data.status == 200 && res.data.errcode == 0){
													console.log("登录成功")
													
													uni.setStorage({
														key:'third_session',
														data:res.data.session
													})
													self.finishLogin == true
													
													uni.redirectTo({
														url:"../index/index"
													})
													
													uni.hideLoading();
													
												}else{
													self.loginflag = true
													console.log("登录失败")
												}
												
											},
											fail() {
												self.loginflag = true
											}
										})
									},
									fail() {
										self.loginflag = true
									}
								})
							},
							fail() {
								self.loginflag = true
							},
							complete() {
								setTimeout(()=>{
									self.loginflag = true
								}, 1000)
							}
						})
					}
										
				}

				// // 授权订阅消息
				uni.requestSubscribeMessage({
					tmplIds: ['Ue2gQHM_jKb-Z6iPwGAf69NkkURm-IqmjadGqrLgtOk'],
					success(res){
						if(JSON.stringify(res).indexOf('accept') != -1){
							
						}	
					}
				})
			
			}
		
		}
	}
</script>
	
<style scoped>
	.container{
		height: 100%;
		width: 100%;
		background-image: linear-gradient(62deg, #8EC5FC, #E0C3FC);
/* 		background-color: #000000;
		opacity: 0.5; */		
	}
	
	.container .loginButton{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		bottom: 134.61rpx;
		left: 75rpx;
		width: 601.92rpx;
		height: 100rpx;
		border-radius: 50rpx;
		background-color: #71cdec;
		color:#000;
		font-size: 32.69rpx;
		letter-spacing: 12rpx;
		box-shadow: 5px 5px 10px #707070;
	}
	
	.container .loginButtonTruth{
		position: fixed;
		bottom: 134.61rpx;
		left: 75rpx;
		width: 601.92rpx;
		height: 100rpx;
		border-radius: 50rpx;
		opacity: 0;
	}
	
	.codeMessage{
		position: relative;
		left: 57.69rpx;
		top: 407.69rpx ;
		height: 111.53rpx;
		width: 100%;
	}
	
	.codeMessage .logo{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0rpx;
		left: 0rpx;
		width: 106rpx;
		height: 106rpx;
		border-radius: 53rpx;
		background-color: #2979FF;
		background-image: url('https://afflatus.xyz/image/touxiang.jpg');
	}
	
	.codeMessage .codeName{
		position: absolute;
		top: 9.61rpx;
		left: 125rpx;
		font-size: 38.46rpx;
		letter-spacing: 12rpx;
	}
	
	.codeMessage .codeNameEn1{
		position: absolute;
		top: 15.38rpx;
		left: 330.69rpx;
		font-size: 21.15rpx;
		letter-spacing: 9rpx;
	}
	
	.codeMessage .codeNameEn2{
		position: absolute;
		top: 40.38rpx;
		left: 330.69rpx;
		font-size: 21.15rpx;
		letter-spacing: 9rpx;
	}
	
	.codeMessage .shortM{
		position: absolute;
		top: 69.23rpx;
		left: 130.76rpx;
		font-size: 30.76rpx;
		letter-spacing: 12rpx;
	}
	
	.codeFuction{
		position: relative;
		top: 520.76rpx;
		left: 0px;
	}
	
	.codeFuction .function1{
		position: absolute;
		top: 0rpx;
		left: 57.69rpx;
		width: 634.61rpx;
		height: 138.46rpx;
		border-radius: 15.38rpx;
		border: 1.92rpx solid #707070;
		background-color: rgba(255,255,255,0.9);
		margin-bottom: 32.69rpx;
		box-shadow: 5px 5px 10px #707070;
	}
	
	.codeFuction .function2{
		position: absolute;
		top: 171.15rpx;
		left: 57.69rpx;
		width: 634.61rpx;
		height: 138.46rpx;
		border-radius: 15.38rpx;
		border: 1.92rpx solid #707070;
		background-color: rgba(255,255,255,0.9);
		margin-bottom: 32.69rpx;
		box-shadow: 5px 5px 10px #707070;
	}
	
	.codeFuction .function3{
		position: absolute;
		top: 342.3rpx;
		left: 57.69rpx;
		width: 634.61rpx;
		height: 138.46rpx;
		border-radius: 15.38rpx;
		border: 1.92rpx solid #707070;
		background-color: rgba(255,255,255,0.9);
		margin-bottom: 32.69rpx;
		box-shadow: 5px 5px 10px #707070;
	}
	
	/* <view class="point" style="color: #AB5353;"></view>
	<view class="miaoshu1">给未来的自己或TA写信</view>
	<view class="miaoshu1s">采用块的方式写信，支持文字、图片、音频格式</view> */
	
	.codeFuction .point{
		position: absolute;
		top: 38.46rpx;
		left: 38.46rpx;
		height: 9.61rpx;
		width: 9.61rpx;
		border-radius: 4.805rpx;
	}
	
	.miaoshu1{
		position: absolute;
		top: 19.23rpx;
		left: 69.23rpx;
		font-size: 32.69rpx;
		letter-spacing: 9.61rpx;
		font-weight: bold;
	}
	
	.miaoshu2{
		position: absolute;
		top: 76.92rpx;
		left: 40.38rpx;
		font-size: 19.23rpx;
		letter-spacing: 3.84rpx;
	}
	
	
</style>
