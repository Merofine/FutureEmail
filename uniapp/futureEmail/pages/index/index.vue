<template>
	<view class="index" @touchstart='start' @touchmove='move' @touchend='end'>
		<!-- 背景 -->
		<view class="bg" ></view> 
		
		<!-- 头部 -->
		<view class="indexHeader">
			<view class="userInfo">
				<image :src=imgSrc mode="aspectFill" class="backg" lazy-load=true></image>
				<block v-if="hasUserInfo">
					<view class="touxiang" v-if="userInfo.avatarUrl">
						<image class="userinfo-avatar" :src="userInfo.avatarUrl"></image>
					</view>
					<view class="mingzi">{{userInfo.nickName}}</view>
					<view class="geXingQingMing">{{geXing}}</view>
				</block>
			</view>
			<view class="option">
						<!-- <uni-data-checkbox  v-model="value"  :localdata="optionData" @change="checkboxChange"></uni-data-checkbox> -->
				<!-- <radio-group @change="checkboxChange">
					<label>
						<checkbox :value="sending" checked='true' :color="checkboxColor" /><text :style="{ color: optionTextColor1 }">寄送中</text>
					</label>
					<label>
						<checkbox :value="finish" :color="checkboxColor"/><text :style="{ color: optionTextColor2 }">已收到</text>
					</label>
					<label>
						<checkbox :value="caogao" :color="checkboxColor"/><text :style="{ color: optionTextColor3 }">草稿箱</text>
					</label>
				</radio-group>	 -->
				<view class="sending" @click="sendingf">
					<text class="iconfont index-iconfont" :style="{ color: optionTextColor1 }">&#xe61e;</text>
					<text class="optionziti" :style="{ color: optionTextColor1 }">寄送中</text>
				</view>
				
				<view class="finish" @click="finishf">
					<text class="iconfont index-iconfont" :style="{ color: optionTextColor2 }">&#xe942;</text>
					<text class="optionziti" :style="{ color: optionTextColor2 }">已揽件</text>
				</view>
				
				<view class="caogao" @click="caogaof">
					<text class="iconfont index-iconfont" :style="{ color: optionTextColor3 }">&#xe829;</text>
					<text class="optionziti" :style="{ color: optionTextColor3 }">草稿箱</text>
				</view>
			</view>
		</view>

		
		<!-- <view class="emailList">fuck</view> -->
		<view class="father-scroll-view" >
			<scroll-view class="emailList">
				<my-email v-for="item in letterHeadList" v-show="item.letterState == nowType" :key="item.letterid" :ref="item.letterid" 
				:shoujianren="item.receiveUsername" :jijianren="item.sentUsername" :startTime="JSON.parse(item.startTime)" 
				:endTime="JSON.parse(item.endTime)" :beizhu="JSON.parse(item.remarks)" :stampfile="item.stampFile" :focusCss="item.letterid == currentTargetRef" @click.native="editFunction"></my-email>
			</scroll-view>
		</view>
		
		<!-- 悬浮按钮 -->
		<uni-fab ref="fab" :pattern="pattern" :content="content" :horizontal="horizontal" :vertical="vertical"
			:direction="direction" @trigger="trigger" @fabClick="fabClick" />
		<!-- <view > 欢迎您， {{username}},  {{gender}}</view> -->
	</view>
</template>

<script>
	// import myEmail from '@/components/my-email/my-email.vue'
	export default {
		// components:{myEmail},
		data() {
			return {
				//头部数据
				userInfo:{},
				username: '',
				gender: '',
				hasUserInfo: false,
				juzidaquan:[
				// 时间
				'三更灯火五更鸡，正是男儿读书时，黑发不知勤学早，白发方悔读书迟。——颜真卿',
				'一寸光阴一寸金，寸金难买寸光阴',
				'少年易学老难成，一寸光阴不可轻。——朱熹',
				'吾生也有涯，而知也无涯。——庄子',
				'少壮不努力，老大徒伤悲。——《长歌行》',
				'时间的步伐有三种：未来姗姗来迟，现在像箭一样飞逝，过往永远静立不动。——席勒',
				'谁对时间最吝啬，时间对谁越慷慨。要时间不辜负你，首先你要不辜负时间。放弃时间的人，时间也放弃他。',
				'人生有一道困难，那就是如何使一寸光阴即是一寸生命。',
				'时间就是生命，时间就是速度，时间就是气力。——郭沫若',
				'最严重的浪费就是时间的浪费。——布封',
				'时间，天天得到的都是二十四小时，可是一天的时间给勤勉的人带来聪明和气力，给懒散的人只留下一片悔恨。——鲁迅',
				'世界上最快而又最慢，最长而又最短，最平凡而又最珍贵，最轻易被人忽视，而又最令人后悔的就是时间。关于生命的名言警句。——高尔基',
				'时间就是生命，无故的空耗别人的时间，实在无异于谋财害命的。——鲁迅',
				'落日无边江不尽，此身此日更须忙。——陈师道',
				'莫轻易，白了少年头，空悲切。英语名言警句。——岳飞',
				'“年”教给我们很多“日”不懂的东西。——爱献生',
				'天波易谢，寸暑难留。——唐·王勃',
				'光阴潮汐不等人。——缅甸',
				// 爱情
				'真实爱情的途径并不平坦。 —— 莎士比亚',
				'爱情使人心的憧憬升华到至善之境。——但丁',
				'谁口口声声说“我不爱”，谁就在爱。——奥维德',
				'男女之间真正的爱情，不是靠肉体或者精神所能实现的，只有彼此的精神和肉体相互融合的状态中才可能实现。——朱耀燮',
				'在我看来，真正的爱情是表现在恋人对他的偶像采取含蓄、谦薛甚至羞涩的态度，而决不是表现在随意流露热情和过早的亲昵。——马克思',
				'对于爱情，年是什么？既是分钟，又是世纪。说它是分钟是因为在爱情的甜蜜之中，它像闪电一般瞬息即逝；说它是世纪，是因为它在我们身上建筑生命之后的幸福的永生。——雨果',
				'爱情既是友谊的代名词，又是我们为共同的事业而奋斗的可靠保证，爱情是人生的良伴，你和心爱的女子同床共眠是因为共同的理想把两颗心紧紧系在一起。——法拉第',
				'忠诚的爱情充溢在我的心里，我无法估计自己享有的财富。——莎士比亚',
				'当贫穷从门外进来，爱情便从窗口溜走。——托·富勒',
				'性爱按其本性来说就是排他的。──恩格斯',
				'在天愿作比翼鸟，在地愿为连理枝。──白居易',
				
				],
				juziIndex: 0,
				geXing: '',
				imgSrc: '../../static/background.jpg',
				
				//Option
				sending: 1,
				finish: 2,
				caogao: 3,
				seedingFlag: true,
				finishFlag: false,
				checkboxColor: '#1989FA',//option勾的颜色
				optionTextColor1: '#1989FA',
				optionTextColor2: '#909399',
				optionTextColor3: '#909399',
				value: 0,
				optionData: [{"value":1, "text":"寄送中"}, {"value":2, "text":"已签收"}, {"value":3, "text":"草稿箱"}],
				
				//邮件数据
				// data: [],
				// loadMoreText: "加载中...",
				// showLoadMore: false,
				// max: 0,
				letterHeadList: [],
				nowType: 1,//草稿：0发送中：1已完成：2
				nowPosition: 1,
				letterTypeFuture: [],
				letterTypeDone: [],
				letterTypeCao: [],
				
				//悬浮按钮数据
				title: 'uni-fab',
				directionStr: '垂直',
				horizontal: 'right',
				vertical: 'bottom',
				direction: 'horizontal',
				is_color_type:false,
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#1989FA',
					iconColor: '#fff'
				},
				content: [
				{
					iconPath: '/static/write.png',
					selectedIconPath: '/static/write.png',
					text: '写信',
					active: false
				}],
				
				// 用户信息
				session: '',
				
				// 选中信封ref
				currentTargetRef: '',
				lastTargetRef: '',
				
				startData: {
					clientX: 0,
					clientY: 0
				},
			}
		},
		methods:{
			// scroll:function(e){
			// 	console.log(e.detail.scrollTop)
			// },
			
			// 选中状态
			editFunction(e){
				// console.log(e)
				//获取块的ref, 获得聚焦
				var self = this
				this.lastTargetRef = this.currentTargetRef
				this.currentTargetRef = e.currentTarget.dataset.ref;
				
				if(this.lastTargetRef == this.currentTargetRef){
					//如果是正在寄往未来的信封,是不能打开的
					if(self.nowType == 1){
						uni.showToast({
							title: '信件已寄出',
							mask: true,
							icon:'none',
							duration: 2000,
						})
					}
					else{
						//关闭当前页面，跳转到应用内的某个页面。
						uni.redirectTo({
							url: '../setemail/setemail?session=' + self.session + '&haveSave=' + 'true' + '&letterid=' + self.currentTargetRef + '&nowType=' + self.nowType
						})
					}
					
				}
				
			},
			
			// 邮件列表
			sendingf(){
				this.seedingFlag = true
				this.finishFlag = false
				this.optionTextColor1 = '#1989FA'
				this.optionTextColor2 = '#909399'
				this.optionTextColor3 = '#909399'
				this.nowType = 1
				this.nowPosition = 1
			},
			
			finishf(){
				this.seedingFlag = false
				this.finishFlag = true
				this.optionTextColor1 = '#909399'
				this.optionTextColor2 = '#1989FA'
				this.optionTextColor3 = '#909399'
				this.nowType = 2
				this.nowPosition = 2
			},
			
			caogaof(){
				this.seedingFlag = false
				this.finishFlag = false
				this.optionTextColor1 = '#909399'
				this.optionTextColor2 = '#909399'
				this.optionTextColor3 = '#1989FA'
				this.nowType = 0
				this.nowPosition = 3
			},
			
			checkboxChange(e){				
				// this.initData()
				if(e.detail.value == 1){
					this.seedingFlag = true
					this.finishFlag = false
					this.optionTextColor1 = '#1989FA'
					this.optionTextColor2 = '#909399'
					this.optionTextColor3 = '#909399'
					this.nowType = 1
				}else if(e.detail.value == 2){
					this.seedingFlag = false
					this.finishFlag = true
					this.optionTextColor1 = '#909399'
					this.optionTextColor2 = '#1989FA'
					this.optionTextColor3 = '#909399'
					this.nowType = 2
					
				}else{
					this.seedingFlag = false
					this.finishFlag = false
					this.optionTextColor1 = '#909399'
					this.optionTextColor2 = '#909399'
					this.optionTextColor3 = '#1989FA'
					this.nowType = 0
				}
			},
			
			// 悬浮按钮
			trigger(e) {
				// var self
				// 选中写信的按钮 (关闭当前页面，跳转到新建信封页面) redirectTo
				// console.log(e)
				
				// uni.getSetting({
				//    withSubscriptions: true,
				//    success(res) {
				//       console.log(res)
				//    }
				// })
				// Ue2gQHM_jKb-Z6iPwGAf6xKXRHqQILoe31xvyQGB55M
				
				this.content[e.index].active = !e.item.active
				//关闭当前页面，跳转到应用内的某个页面。
				uni.redirectTo({
					url: '../setemail/setemail?session=' + this.session + '&haveSave=' + 'false'
				})
				
			},
			fabClick() {
				// uni.showToast({
				// 	title: '点击了悬浮按钮',
				// 	icon: 'none'
				// })
			},
			switchBtn(hor, ver) {
				if (hor === 0) {
					this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal'
					this.directionStr = this.direction === 'horizontal' ? '垂直' : '水平'
				} else {
					this.horizontal = hor
					this.vertical = ver
				}
				this.$forceUpdate()
			},
			switchColor(){
				this.is_color_type = !this.is_color_type
				if(this.is_color_type) {
					this.pattern.iconColor = '#aaa'
					this.pattern.buttonColor = '#fff'
				}else{
					this.pattern.iconColor = '#fff'
					this.pattern.buttonColor = '#007AFF'
				}
			},
			
			//获取信封信息
			getLetterHead(session){
				var self = this
				uni.request({
					url:'https://afflatus.xyz/getIndex',
					method:'POST',
					data:{
						session
					},
					success:function(res){
						if(res.data.status==200){
							self.letterHeadList = res.data.letterhead
							console.log(self.letterHeadList)
							
						}else{
							uni.redirectTo({
								url:"../login/login"
							})
						}
					},
					fail: function(){
						uni.redirectTo({
							url:"../login/login"
						})
					}
				})
			},
			
			start: function(e) {
				this.startData.clientX = e.changedTouches[0].clientX;
				this.startData.clientY = e.changedTouches[0].clientY;
			},
			
			move: function(e) {
				const dom = uni.createSelectorQuery().select('.youpiaoMessage')
				const subX = e.changedTouches[0].clientX - this.startData.clientX;
				const subY = e.changedTouches[0].clientY - this.startData.clientY;
				dom.fields({
					size:true
				},
				data=>{
					console.log(data.height)
					this.fuckwidth = data.height + 'rpx'
				}
				)
			
			},
			
			end: function(e) {
				const subX = e.changedTouches[0].clientX - this.startData.clientX;
				const subY = e.changedTouches[0].clientY - this.startData.clientY;
				if (subY > 50 || subY < -50) {
					// console.log('上下滑')
				} else {
					if (subX > 50) {
						// console.log('右滑')
						this.nowPosition -= 1
						// console.log(this.nowPosition)
						if(this.nowPosition<0){
							this.nowPosition=1
						}else if(this.nowPosition == 2){
							this.finishf()
						}else if(this.nowPosition == 1){
							this.sendingf()
						}
						
					} else if (subX < -50) {
						// console.log('左滑')
						this.nowPosition += 1
						// console.log(this.nowPosition)
						if(this.nowPosition>3){
							this.nowPosition=3
						}else if(this.nowPosition == 2){
							this.finishf()
						}else if(this.nowPosition == 3){
							console.log('fuck')
							this.caogaof()
						}
						
					} else {
						// console.log('无效')
					}
				}
			},
			
			
		},
		
		onLoad:function(){
			var self = this;
			
			//加载邮箱数据
			// this.initData();
			
			//显示主页的头部数据
			uni.getStorage({
				key:'userInfo',
				success:function(res){
					self.userInfo = res.data
					self.hasUserInfo = true
				},
				fail:function(){
					uni.redirectTo({
						url:"../login/login"
					})
				}
			})
			
			//检查storage中是否有session，
			//有则向服务器发送请求，确定是否过期，有过期则跳转到登录页面，无则读取用户相关数据
			//无则跳转到登录页面
			//[ 未完成 ]添加axios拦截器
			uni.getStorage({
				key:'third_session',
				success:function(res){
					var session = res.data
					uni.request({
						url:'https://afflatus.xyz/queryToken',
						method:'POST',
						data:{
							session
						},
						success:function(res){
							if(res.data.status==200){
								// self.username = res.data.userInfo.username;
								// self.gender = res.data.userInfo.gender;
								// console.log("获取到服务器的用户数据")
								// console.log(self.username, self.gender)
								console.log('token 有效')
								self.session = session
								console.log(res)
								// 获取信封信息
								self.getLetterHead(session)
								
								// 开启名言警句定时器
								self.juziIndex = Math.floor(Math.random()*(self.juzidaquan.length))
								self.geXing = self.juzidaquan[self.juziIndex]
								
								setInterval(()=>{
									self.juziIndex = Math.floor(Math.random()*(self.juzidaquan.length))
									// console.log(self.juziIndex)
									self.geXing = self.juzidaquan[self.juziIndex]
								},1000*10)
								
							}else{
								console.log('token 无效')
								uni.redirectTo({
									url:"../login/login"
								})
							}
						},
						fail() {
							console.log('fuck2')
						}
					})
				},
				fail:function(){
					console.log("无third_session")
					uni.redirectTo({
						url:"../login/login"
					})
				}
			})

			
		},
		//邮件列表
		// onUnload() {
		// 	this.max = 0,
		// 	this.data = [],
		// 	this.loadMoreText = "加载更多",
		// 	this.showLoadMore = false;
		// },
		// onReachBottom() {
		// 	console.log("onReachBottom");
		// 	if (this.max > 40) {
		// 		this.loadMoreText = "没有更多数据了!"
		// 		return;
		// 	}
		// 	this.showLoadMore = true;
		// 	setTimeout(() => {
		// 		this.setListData();
		// 	}, 300);
		// },
		// onPullDownRefresh() {
		// 	console.log('onPullDownRefresh');
		// 	this.initData();
		// },
		
		// 悬浮按钮
		onBackPress() {
			if (this.$refs.fab.isShow) {
				this.$refs.fab.close()
				return true
			}
			return false
		}
		
	}
</script>

<style>

/* @import url("../../static/iconfont.css"); */

.index{
	height: 100%;
	width: 100%;
	/* background-image: linear-gradient(62deg, #8EC5FC, #E0C3FC); */
	/* height: 100%; */
	/* overflow-y: auto; */
}

.indexHeader{
	position: fixed;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 432.69rpx;
	background-color: rgba(255, 255, 255, 0.7);
	z-index: 2;
}

.index .bg{
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(62deg, #8EC5FC, #E0C3FC);
	}

.userInfo{
	position: relative;
	height: 342.3rpx;
	background-color: #fff;
	overflow: hidden;
	box-shadow: 0px 9.61rpx 13.46rpx #afafaf;
}

.backg{
	/* height:100%; */
	width: 100%;
	opacity:0.7;
}

.touxiang{
	position: absolute;
	left: 0px;
	top: 58.3rpx;
	width: 100%;
	text-align:center;
	margin-top: 15.38rpx;
}

.userinfo-avatar {
	border-radius: 88.46rpx;
	width: 88.46rpx;
	height: 88.46rpx;
}

.mingzi{
	position: absolute;
	left: 0px;
	top: 52rpx;
	margin-top: 111.53rpx;
	font-size: 26.92rpx;
	width: 100%;
	text-align: center;
	color: #000000; 
}

.geXingQingMing{
	position: absolute;
	left: 0rpx;
	top: 50rpx;
	margin-top: 160.15rpx;
	font-size: 30.76rpx;
	width: 100%;
	text-align: center;
	color: #4E4E4E;
}

.index .option{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30rpx; //31.735
	width: 100%;
	text-align: center;
	font-size: 26.92rpx;
}

.index .option view{
	/* height: 100%; */
	/* padding-bottom: 4rpx; */
	/* border-bottom: 3.5rpx #1989FA solid; */
	padding-left: 15rpx;
	padding-right: 15rpx;
}

.index .option view:nth-child(1){
	margin-right: 70rpx;
}

.index  .option view:nth-child(2){
	margin-right: 70rpx;
}

.index .index-iconfont{
	margin-right: 10rpx;
	font-size: 48rpx;
}

.index .optionziti{
	font-size: 35rpx;
}

.option checkbox{
	/* width: 26.92rpx;
	height: 26.92rpx; */
	transform:scale(0.7);
/* 	color: #F0F2F5;
 */}

/* .option label:nth-child(1){
	margin-right: 70rpx;
}

.option label:nth-child(2){
	margin-right: 70rpx;
} */

.emailList{
/* 	position: fixed;
	left: 0px; */
	height: 100%;
	padding-top: 449.69rpx;
	/* background-color: #FcFcFc; */
	/* height: 100%; */
	/* overflow-y: auto; */
}

.index .text {
	margin: 16rpx 0;
	width:100%;
	background-color: #fff;
	height: 120rpx;
	line-height: 120rpx;
	text-align: center;
	color: #555;
	border-radius: 8rpx;
}

.option checkbox .wx-checkbox-input{
	/* border: #000000 !important; */
	/* border-radius: 50%; */
	border: 1px solid #D5D8DE;
	background-color: #F0F2F5;
}

/* .index .father-scroll-view{
	height: 100%;
	overflow-y: auto;
} */

</style>
