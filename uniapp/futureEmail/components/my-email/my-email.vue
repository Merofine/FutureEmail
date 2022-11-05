<template>
	<view class="my-email" :class="{ focuscss: focusCss}" :style="{ background: background }">
		<!-- focusCss -->
		<!-- 收件人 -->
		<view class="shoujianren" >
			<view class="xingming">
				<view class='first'>收</view>
				<view class='jianren'>件人:</view>
			</view>
		</view>
		
		<view class="shoujianren-name">
			{{shoujianren}}
		</view>
		
		<!-- 寄件人 -->
		<view class="jijianren">
			<view class="xingming">
				<view class='first'>寄</view>
				<view class='jianren'>件人:</view>
			</view>
		</view>
		
		<view class="jijianren-name">
			{{jijianren}}
		</view>
		
		<!-- 邮票 -->
		<view class="youpiaobian">
			<div class="border-top"></div>
			<div class="border-left"></div>
			<div class="border-bottom"></div>
			<div class="border-right"></div>
		</view>
		<view class="youpiaoziti">贴邮票处</view>
		
		<image v-show="stampfile!='https://afflatus.xyz/image/youpiao_none.png'" class="youpiaoTian" :src="stampfile" mode="scaleToFill"></image>
		
		<!-- 时间 -->
		<view class="startTime">
			{{startTime.year}}-{{startTime.month}}-{{startTime.day}}
		</view>
		<view class="endTime">
			{{endTime.year}}-{{endTime.month}}-{{endTime.day}}
		</view>
		<view class="jiantou">
			<view class="hengxian"></view>
			<view class="sanjiaoxing"></view>
		</view>
		
		<!-- 备注 -->
		<view class="beizhu">
			<view class="ziti beizhuZiti1">{{beizhu.ziti1}}</view>
			<view class="ziti beizhuZiti2">{{beizhu.ziti2}}</view>
			<view class="ziti beizhuZiti3">{{beizhu.ziti3}}</view>
			<view class="xuxian firstXuxian"></view>
			<view class="xuxian secondXuxian"></view>
			<view class="xuxian thirdXuxian"></view>
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			shoujianren:{//不能超过四个字
				type: String,
				default: '廖文斌',
				required: false,
			},
			jijianren:{
				type: String,
				default: '李慧敏',
				required: false,
			},
			
			startTime:{
				type: Object,
				default: {
					year:'2017',
					month:'5',
					day:'16'
				},
				required: false,
			},
			
			endTime:{
				type: Object,
				default: {
					year:'2025',
					month:'5',
					day:'16'
				},
				required: false,
			},
			
			beizhu:{
				type: Object,
				default: {//不能超过51个字一共，每行17个字
					ziti1:'因为－我的爱能燃起富士山的火焰',
					ziti2:'我的爱能熔化北极的冰川',
					ziti3:'我的爱能填平马里亚纳的深渊！'
				},
				required: false,
			},
			
			stampfile:{
				type: String,
				default: '#',
				required: false,
			},
			
			focusCss:{
				type: Boolean,
				default: false,
				required: false,
			}
		}
		,
		data(){
			return{
				// shoujianren: '廖文斌',//不能超过四个字
				// jijianren: '李慧敏',//不能超过四个字
				// startTime: {
				// 	year:'2017',
				// 	month:'5',
				// 	day:'16'
				// },
				// endTime:{
				// 	year:'2025',
				// 	month:'5',
				// 	day:'16'
				// },
				// beizhu:{//不能超过51个字一共，每行17个字
				// 	ziti1:'因为－我的爱能燃起富士山的火焰',
				// 	ziti2:'我的爱能熔化北极的冰川',
				// 	ziti3:'我的爱能填平马里亚纳的深渊！'
				// }
			}
		},
		
		methods:{
			// shoujianrenClick: function(){
			// 	console.log("我是小老弟")
			// }
		}
	}
</script>

<style>
	.my-email{
		position: relative;
		top: 0rpx;
		left: 0rpx;
		height: 276.92rpx;
		border: 1px solid #707070;
		border-radius: 30rpx;
		margin: 0rpx 8rpx;
		margin-bottom: 30rpx;
		/* background-color: #FFFFFF; */
		background-color: rgba(255,255,255,0.69);
		/* box-shadow: 3px 3px 6px #707070; */
	}
	
	.focuscss{
		box-shadow: 3px 3px 6px #707070;
	}
	
	.my-email .shoujianren{
		position: absolute;
		top: 17.3rpx;
		left: 19.23rpx;
	}
	
	.my-email .jijianren{
		position: absolute;
		top: 17.3rpx;
		left: 286.53rpx ;
	}
	
	.my-email .xingming view{
		display: inline-block;
	}
	
	.my-email .first{
		width: 53.84rpx;
		height: 53.84rpx;
		/* background-color: #000000; */
		border-radius: 26.92rpx;
		border: 1.92rpx dashed #000000;
		text-align: center;
		font-size: 35rpx;
	}
	
	.my-email .jianren{
		padding-left: 9.61rpx;
	}
	
	.my-email .shoujianren-name{
		position: absolute;
		top: 30rpx;
		left: 165.38rpx;
		     
		font-size: 26.92rpx;
		width: 115.38rpx;
		text-align: center;
		
		overflow: auto;
	}
	
	.my-email .jijianren-name{
		position: absolute;
		top: 30rpx;
		left: 430rpx;
		     
		font-size: 26.92rpx;
		width: 115.38rpx;
		text-align: center;
		
		overflow: auto;
	}
	
	.my-email .youpiaobian .border-top{
		position: absolute;
		top: 28.84rpx;
		right: 25rpx;
		width: 134.61rpx;
		height: 1rpx;
		/* border: 1.92rpx dotted #000000; */
		background-image: linear-gradient(to right, #909399 0%, #909399 50%, transparent 0%);
		background-size: 37rpx 1.92rpx;
		background-repeat: repeat-x;
	}
	
	.my-email .youpiaobian .border-bottom{
		position: absolute;
		top: 163.46rpx;
		right: 25rpx;
		width: 134.61rpx;
		height: 1.92rpx;
		/* border: 1.92rpx dotted #000000; */
		background-image: linear-gradient(to right, #909399 0%, #909399 50%, transparent 0%);
		background-size: 35rpx 1.92rpx;
		background-repeat: repeat-x;
	}
	
	.my-email .youpiaobian .border-left{
		position: absolute;
		top: 28.84rpx;
		right: 159.61rpx;
		width: 3rpx;
		height: 134.61rpx;
		/* border: 1.92rpx dotted #000000; */
		background-image: linear-gradient(to top, #909399 0%, #909399 50%, transparent 0%);
		background-size: 1.92rpx 30rpx ;
		background-repeat: repeat-y;
	}
	
	.my-email .youpiaobian .border-right{
		position: absolute;
		top: 28.84rpx;
		right: 25rpx;
		width: 2px;
		height: 134.61rpx;
		/* border: 1.92rpx dotted #000000; */
		background-image: linear-gradient(to top, #909399 0%, #909399 50%, transparent 0%);
		background-size: 1.92rpx 32rpx ;
		background-repeat: repeat-y;
	}
	
	.my-email .youpiaoziti{
		position: absolute;
		top: 63.46rpx;
		right: 65.38rpx;
		width: 53.84rpx;
		height: 71.15rpx;
		text-align: center;
		font-size: 26.92rpx;
		color: #909399;
	}
	
	.my-email .startTime{
		position: absolute;
		left: 53.84rpx;
		top: 98.07rpx;
		font-size: 30.76rpx;
		font-weight: bold;
	}
	
	.my-email .endTime{
		position: absolute;
		left: 351.92rpx;
		top: 98.07rpx;
		font-size: 30.76rpx;
		font-weight: bold;
	}
	
	.my-email .jiantou .hengxian{
		position: absolute;
		top: 122.69rpx;
		left: 239.03rpx;
		height: 0rpx;
		width: 88.46rpx;
		border: 1.92rpx solid #000000;
	}
	

	.my-email .jiantou .sanjiaoxing{
		position: absolute;
		top: 114rpx;
		left: 300.46rpx;
		height: 0rpx;
		width: 28.24rpx;
		border-top: 3.84rpx solid #000000;
		transform:rotate(30deg);
	}
	
	.my-email .beizhu .xuxian{
		width: 469.23rpx;
		height: 3.5rpx;
		background-image: linear-gradient(to right, #909399 0%, #909399 50%, transparent 0%);
		background-size: 33rpx 3.5rpx;
		background-repeat: repeat-x;
		
	}
	
	.my-email .beizhu .firstXuxian{
		 position: absolute;
		 left: 93.26rpx;
		 top: 177.88rpx;
	}
	
	.my-email .beizhu .secondXuxian{
		 position: absolute;
		 left: 123.07rpx;
		 top: 213.46rpx;
	}
	
	.my-email .beizhu .thirdXuxian{
		 position: absolute;
		 left: 157.69rpx;
		 top: 248.07rpx;
	}

	.my-email .beizhu .ziti{
		font-size: 26.92rpx;
		width: 469.23rpx;
		text-align: center;
	}
	
	.my-email .beizhu .beizhuZiti1{
		position: absolute;
		left: 94.23rpx;
		top: 144.23rpx;
	}
	
	.my-email .beizhu .beizhuZiti2{
		position: absolute;
		left: 125rpx;
		top: 180.76rpx;
	}
	
	.my-email .beizhu .beizhuZiti3{
		position: absolute;
		left: 160rpx;
		top: 213.46rpx;
	}
	
	.my-email .youpiaoTian {
		position: absolute;
		width: 142.3rpx;
		height: 130.76rpx;
		top: 25.23rpx;
		right: 20.38rpx;
		/* 		background-color: #000000;
		opacity: 0; */
	}
</style>
