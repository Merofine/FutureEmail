<template>
	<view class="setemail" @click="bgclick">
		
		<!-- 自定义导航栏 -->
		<view class="back-btn iconarrow_btn_left">
					<text class="nav-title">{{biaoti}}</text>
					<text class="iconfont buttonReturn" @click.stop="returnIndex">&#xe655;</text>
					<!-- 删除 -->
					<text v-show="haveSave" class="iconfont buttonDelete" @click.stop="deleteLetter">&#xe645;</text>
		</view>
		
		
		<view class="bg">
			<!-- // 主信封 -->
			<view class="zhizhang" @click.stop="">
				<my-email :shoujianren="shoujianren" :jijianren="jijianren" :startTime="startTime" :endTime="endTime"
					:beizhu="beizhu" :stampfile="youpiaoList[indexpic].url" :focusCss=true >
				</my-email>
				<view class="youpiaoTian" @click.stop="youpiaoClick"></view>
				<view class="shoujianTian" @click.stop="shoujianClick"></view>
				<view class="endTimeTian" @click.stop="endTimeClick"></view>
				<!-- <image class="youpiaoTian" :src=" youpiaoList[indexpic].url " mode="scaleToFill" @click="youpiaoClick">
				</image> -->
				
				<input class="beizhuTian" v-model="beizhu.ziti1" maxlength=51 :disabled="nowType==2" @focus="beizhuGet" @blur="beizhuFinish" />
				<view v-if="beizhuwenziFlag" class="beizhuwenzi">信封备注 :</view>
			</view>

			<!-- // 填写收信人 -->
			<view class="shoujianMessage" v-if="shoujianMessageShow" @click.stop="">
				<view class="messageHeader">————请选择收件人————</view>
				<view class="Who" @click.stop=""> <!-- 加入@click.stop=""是防止传到父组建 -->
					<radio-group @change="chooseWho">
						<label>
							<radio :value="1" :checked="bottomDiv==1" color='#007AFF'/><text>未来自己</text>
						</label>
						<label>
							<radio :value="2" :checked="bottomDiv==2" color='#007AFF'/><text>电子邮箱</text>
						</label>
						<label>
							<radio :value="3" :checked="bottomDiv==3" color='#007AFF'/><text>小程序好友</text>
						</label>
					</radio-group>
				</view>
				<view class="gerensent" v-if="bottomDiv==1"><!-- 我是{{shoujianren}} --></view>
				<view class="emailsent" v-else-if="bottomDiv==2">
					<image src="https://afflatus.xyz/image/coding.png" mode=""></image>
				</view>
				<view class="weixinsent" v-else-if="bottomDiv==3">
					<image src="https://afflatus.xyz/image/coding.png" mode=""></image>
				</view>
			</view>

			<!-- // 填写截止时间 -->
			<view class="endTimeTian" v-if="endTimeShow" @click.stop="">
				<uni-calendar :insert="true" :lunar="true" :date="endDateStr" :start-date="endDateStr"
					@change="endTimechange" />
			</view>

			<!-- 填写邮票 -->
			<view class="youpiaoMessage" v-if="youpiaoShow" @touchstart='start' @touchmove='move' @touchend='end'
				:style="{ width: this.fuckwidth }" @click.stop="">
				<!-- 				<image class="leftImg" src="../../static/youpiao1.jpg" mode="scaleToFill"></image> -->
				<view class="iconfont tupianAnniu" @click.stop="zuof">&#xe6cc;</view>
				<image class="MiddleImg" :src=" youpiaoList[indexpic].url " mode="scaleToFill"></image>
				<view class="iconfont tupianAnniu" @click.stop="youf">&#xe6cb;</view>
				<!-- 				<image class="rightImg" src="../../static/youpiao3.jpg" mode="scaleToFill"></image>-->
			</view>

			<!-- 提交按钮 -->
			<!-- <button class="buttonWrite" type="default" @click="startWrite">开始写信</button> -->
			<!-- <button class="buttonWrite" type="default" @click="startWrite">开始写信</button> -->
			<view class="buttonWrite">
				<view class="btn">
					<view class="btn-border-top"></view>
					<view class="btn-top-left"></view>
					<text @click.stop="startWrite">{{openziti}}</text>
					<view class="btn-bottom-right"></view>
					<view class="btn-border-bottom"></view>
				</view>
			</view>
			
			

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 用户信息
				haveSave: false,
				session: '',
				letterid: '',
				nowType: 0,
				openziti: "开始写信",
				biaoti: "信封编辑",
				
				// 信封上的数据
				shoujianren: '', //不能超过四个字
				jijianren: '', //不能超过四个字
				startTime: {
					year: '',
					month: '',
					day: ''
				},
				endTime: {
					year: '',
					month: '',
					day: ''
				},
				beizhuAll: ' ',
				beizhu: { //不能超过51个字一共，每行17个字
					ziti1: '',
					ziti2: '',
					ziti3: ''
				},
				beizhuwenziFlag: true,
				// 用于检查数据的变动
				shoujianren_last: '',
				jijianren_last: '', 
				startTime_last: {},
				endTime_last : {},
				beizhu_last : {},
				indexpic_last : 0,
				

				//收件人信息
				shoujianMessageShow: false,
				bottomDiv: 0,

				//截止时间
				endTimeShow: false,
				endDateStr: '',

				// 邮票数据
				youpiaoShow: false,
				fuckwidth: "700rpx",
				youpiaoList: [{
						label: '000',
						free: true,
						url: 'https://afflatus.xyz/image/youpiao_none.png',
						ad: ''
					},
					{
						label: '001',
						free: true,
						url: 'https://afflatus.xyz/image/youpiao1.jpg',
						ad: ''
					},
					{
						label: '002',
						free: true,
						url: 'https://afflatus.xyz/image/youpiao2.jpg',
						ad: ''
					},
					{
						label: '003',
						free: true,
						url: 'https://afflatus.xyz/image/youpiao3.jpg',
						ad: ''
					}
				],
				indexpic: 0,
				picnum: 0,
				
				startData: {
					clientX: 0,
					clientY: 0
				},
				
				

			}
		},
		
		onLoad: function(data) {
			var self = this
			//若当前页面不是新建，而是编辑草稿，需要加载信封内容（通过当前函数获取上一个页面传的参来判断）
			this.session = data.session
			this.haveSave = data.haveSave == "true"
			if(data.nowType == 2){
				this.nowType = data.nowType
				this.openziti = "打开信封"
				this.biaoti = "信封"
				this.haveSave = true
				this.beizhuwenziFlag = false
			}
			
			// console.log(data)
			// 若之前已经保存过服务器,则加载进来
			if(this.haveSave){
				this.letterid = data.letterid
				
				uni.request({
					url:'https://afflatus.xyz/loadLetterHead',
					method:'POST',
					data:{
						session: self.session,
						letterid: self.letterid
					},
					success(res) {
						if(res.data.status==200){
							// console.log(res.data)
							// self.letterHeadList = res.data.letterhead
							self.shoujianren = res.data.data.receiveUsername;
							self.jijianren = res.data.data.sentUsername;
							self.startTime = JSON.parse(res.data.data.startTime);
							self.endTime = JSON.parse(res.data.data.endTime);
							self.beizhu = JSON.parse(res.data.data.remarks);
							
							for(var item in self.youpiaoList){ //遍历邮票是哪个index
								if(self.youpiaoList[item].url == res.data.data.stampFile){
									self.indexpic = item
									break
								}
							}
							

							self.shoujianren_last = JSON.parse(JSON.stringify(self.shoujianren))
							self.jijianren_last = JSON.parse(JSON.stringify(self.jijianren))
							self.startTime_last = JSON.parse(JSON.stringify(self.startTime))
							self.endTime_last = JSON.parse(JSON.stringify(self.endTime))
							self.beizhu_last = JSON.parse(JSON.stringify(self.beizhu))
							self.indexpic_last = JSON.parse(JSON.stringify(self.indexpic))
							
							if(self.beizhu.ziti1 != ''){
								self.beizhuwenziFlag = false
							}
							// console.log("备注: " + self.beizhu.ziti1)
							// console.log(self.letterHeadList)
							
						}else{
							uni.redirectTo({
								url:"../index/index"
							})
						}
					}
				})
			
			}else{
				//获取当前时间
				var timeStr = self.dateTimeStr();
				self.startTime.year = String(timeStr.year)
				self.startTime.month = String(timeStr.month)
				self.startTime.day = String(timeStr.day)
				
				//获取当前用户名昵称
				uni.getStorage({
					key: 'userInfo',
					success: function(res) {
						self.jijianren = res.data.nickName
					},
					fail: function() {
						uni.redirectTo({
							url: "../login/login"
						})
					}
				})
			}
			
			self.picnum = self.youpiaoList.length - 1 
			
		},
		
		
		onShow: function() {
			// uni.hideNavigationBarLoading()
			// uni.hideHomeButton()
			
			var self = this
			//获取当前时间
			// var timeStr = self.dateTimeStr();
			// self.startTime.year = String(timeStr.year)
			// self.startTime.month = String(timeStr.month)
			// self.startTime.day = String(timeStr.day)

			//获取当前用户名昵称
			// uni.getStorage({
			// 	key: 'userInfo',
			// 	success: function(res) {
			// 		self.jijianren = res.data.nickName
			// 	},
			// 	fail: function() {
			// 		uni.redirectTo({
			// 			url: "../login/login"
			// 		})
			// 	}
			// })
		},
		methods: {
			//点击背景
			bgclick: function(){
				this.shoujianMessageShow = false;
				this.endTimeShow = false;
				this.youpiaoShow = false;
			},
			
			//邮票滑动操作
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
						this.zuof()
					} else if (subX < -50) {
						// console.log('左滑')
						this.youf()
					} else {
						// console.log('无效')
					}
				}
			},
			
			// 删除信封(letterhead表和letter表)
			deleteLetter: function(){
				var self = this
				uni.showModal({
					title: "删除邮件",
					content: "删除后将无法撤回",
					success(res) {
						if (res.confirm){
							uni.request({
								url:'https://afflatus.xyz/deleteLetter',
								method:'POST',
								data:{
									session: self.session,
									letterid: self.letterid
								},
								success(res) {
									if(res.data.status==200){
										console.log("删除成功")
										uni.redirectTo({
											url: "../index/index"
										})
									}else{
										console.log("删除失败")
									}
								},
								fail() {
									console.log("删除失败")
								}
							})
						}
					}
				})
				
				
			
			},
			
			// 返回主页
			returnIndex: function(){
				var self = this
				
				// 新建信封时
				if(self.haveSave == false){
					// 获取信封ID，以当前时间为准
					var timedata = self.dateTimeStr()
					self.letterid = timedata.year + timedata.month + timedata.day + timedata.hour + timedata.minute + timedata.second
					
					// 弹出是否保存
					uni.showModal({
						title: "返回主页",
						content: "是否保存至草稿箱",
						success(res) {
							if (res.confirm) {
								// console.log('用户点击确定');
								uni.request({
									url:'https://afflatus.xyz/updateLetterHead',
									method:'POST',
									data:{
										session: self.session,
										letterid: self.letterid,
										shoujianren: self.shoujianren,
										jijianren: self.jijianren,
										startTime: self.startTime,
										endTime: self.endTime,
										beizhu: self.beizhu,
										youpiao: self.youpiaoList[self.indexpic].url,
										haveSave: self.haveSave //新建一个新的信封
									},
									success(e) {
										uni.redirectTo({
											url: "../index/index"
										})
									}
								})
							} 
							else if (res.cancel) {
								uni.redirectTo({
									url: "../index/index"
								})
							}
						}
					})
				}
				
				// 打开已有的信封时
				else{
					// console.log(self.beizhu_last)
					// console.log(self.beizhu)
					//如果没有任何改变,则跳到Index页面
					// console.log(self.shoujianren_last == self.shoujianren)
					// console.log(self.jijianren_last == self.jijianren)
					// console.log(self.indexpic_last == self.indexpic)
					// console.log(self.startTime_last)
					// console.log(self.startTime)
					// console.log(JSON.stringify(self.startTime_last) == JSON.stringify(self.startTime))//
					// console.log(self.endTime_last == self.endTime)//
					// console.log(self.beizhu_last == self.beizhu)//
					
					if(self.shoujianren_last == self.shoujianren && 
						self.jijianren_last == self.jijianren &&
						JSON.stringify(self.startTime_last) == JSON.stringify(self.startTime) &&
						JSON.stringify(self.endTime_last) == JSON.stringify(self.endTime) &&
						JSON.stringify(self.beizhu_last) == JSON.stringify(self.beizhu) &&
						self.indexpic_last == self.indexpic){
							uni.redirectTo({
								url: "../index/index"
							})
					}
					
					//否则update
					else{
						console.log('有东西改变了')
						
						// console.log(self.beizhu)
						uni.showModal({
							title: "发现更新",
							content: "是否保存更新",
							success(res) {
								if (res.confirm){
									uni.request({
										url:'https://afflatus.xyz/updateLetterHead',
										method:'POST',
										data:{
											session: self.session,
											letterid: self.letterid,
											shoujianren: self.shoujianren,
											jijianren: self.jijianren,
											startTime: self.startTime,
											endTime: self.endTime,
											beizhu: self.beizhu,
											youpiao: self.youpiaoList[self.indexpic].url,
											haveSave: self.haveSave 
										},
										success(res) {
											if(res.data.status == 200){
												uni.redirectTo({
													url: '../index/index'
												})
											}
										}
									})
								}else{
									uni.redirectTo({
										url: '../index/index'
									})
								}
							}
							
						})
						
					}
				}
			},
			
			// 备注
			beizhuGet: function(e) { //备注获得焦点
				if(this.nowType == 2){//已揽件的信件不能触发
					return 0
				}
				
				this.beizhuwenziFlag = false
				
				this.beizhuAll = this.beizhu.ziti1 + this.beizhu.ziti2 + this.beizhu.ziti3
				
				this.beizhu.ziti1 = this.beizhuAll
				this.beizhu.ziti2 = ''
				this.beizhu.ziti3 = ''
				this.shoujianMessageShow = false;
				this.endTimeShow = false;
				this.youpiaoShow = false;
			},
			beizhuFinish: function(e) { //备注失去焦点
				if(this.nowType == 2){//已揽件的信件不能触发
					return 0
				}
				
				if(this.beizhu.ziti1 == ''){
					this.beizhuwenziFlag = true
				}
				
				let strLength = this.beizhu.ziti1
				this.beizhuAll = this.beizhu.ziti1
				if (strLength <= 17) {
					this.beizhu.ziti1 = this.beizhuAll.substring(0, 17)
				} else if (strLength <= 34) {
					this.beizhu.ziti1 = this.beizhuAll.substring(0, 17)
					this.beizhu.ziti2 = this.beizhuAll.substring(17, 34)
				} else {
					this.beizhu.ziti1 = this.beizhuAll.substring(0, 17)
					this.beizhu.ziti2 = this.beizhuAll.substring(17, 34)
					this.beizhu.ziti3 = this.beizhuAll.substring(34, 51)
				}
			},
			// 收件人信息
			shoujianClick: function() {
				if(this.nowType == 2){//已揽件的信件不能触发
					return 0
				}
				// this.shoujianren = this.jijianren;
				this.endTimeShow = false;
				this.youpiaoShow = false;
				this.shoujianMessageShow = true;
			},
			chooseWho: function(e) {
				if(this.nowType == 2){//已揽件的信件不能触发
					return 0
				}
				this.bottomDiv = e.detail.value;
				if (this.bottomDiv == 1) {
					this.shoujianren = this.jijianren;
				} else {
					this.shoujianren = '';
				}
			},
			// 日期
			endTimeClick: function() {
				if(this.nowType == 2){//已揽件的信件不能触发
					return 0
				}
				this.shoujianMessageShow = false;
				this.youpiaoShow = false;
				this.endTimeShow = true;
				
				//获取明天, 并限制日历范围
				let day = new Date();
				day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
				let date = day.getDate()
				date >= 0 && date <= 9 ? (date = "0" + date) : "";
				this.endDateStr = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + date;
				this.endTime.day = String(date)
				this.endTime.year = String(day.getFullYear());
				let month = day.getMonth() + 1
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				this.endTime.month = String(month);
				console.log(this.endTime)
			
			},
			endTimechange: function(e) {
				if(this.nowType == 2){//已揽件的信件不能触发
					return 0
				}
				this.endTimeShow = false;
				let day = e.date;
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				this.endTime.day = String(day);
				this.endTime.year = String(e.year);
				this.endTime.month = String(e.month);
			},
			dateTimeStr: function() {
				var date = new Date(),
					year = date.getFullYear(), //年
					month = date.getMonth() + 1, //月
					day = date.getDate(), //日
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), //时
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(), //分
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(); //秒
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				hour >= 0 && hour <= 9 ? (hour = "0" + hour) : "";
				minute >= 0 && minute <= 9 ? (minute = "0" + minute) : "";
				second >= 0 && second <= 9 ? (second = "0" + second) : "";

				return {
					year,
					month,
					day,
					hour,
					minute,
					second
				};
			},
			// 邮票
			youpiaoClick: function() {
				if(this.nowType == 2){//已揽件的信件不能触发
					return 0
				}
				this.shoujianMessageShow = false;
				this.endTimeShow = false;
				this.youpiaoShow = true;

			},
			
			zuof: function() {
				// console.log(typeof this.indexpic)
				if (this.indexpic != 0) {
					this.indexpic = Number(this.indexpic) - 1;
					
				}
			},
			youf: function() {
				// console.log(typeof this.indexpic)
				if (this.indexpic != this.picnum) {
					this.indexpic = Number(this.indexpic) + 1;
				}
			},
			// 开始写信
			startWrite: function() {
				var self = this
				
				if(this.nowType == 2){//已揽件的信封
					uni.requestSubscribeMessage({
						tmplIds: ['Ue2gQHM_jKb-Z6iPwGAf69NkkURm-IqmjadGqrLgtOk'],
						success(res){
							console.log(res)
							
							if(JSON.stringify(res).indexOf('accept') != -1){// 同意订阅通知
								uni.redirectTo({
									url: '../writeemail/writeemail?' + 'session=' + self.session + '&letterid=' + self.letterid + '&nowType=' + self.nowType
								})
							}else{// 不同意订阅通知
								uni.showToast({
									title: '请允许邮件提醒',
									mask: true,
									icon:'none',
									duration: 2000,
								})
							}
						}
					})
					
				}else{
					//检查信封信息是否正确
					if (this.shoujianren == '') {
						uni.showToast({
							title: '收件人不完整',
							icon:'none',
							mask: true,
						})
					} else if (this.jijianren == '') {
						uni.showToast({
							title: '寄件人不完整',
							icon:'none',
							mask: true
						})
					} else if (this.endTime.year == '') {
						uni.showToast({
							title: '寄送时间缺失',
							icon:'none',
							mask: true
						})
					} 
					// else if (JSON.stringify(this.startTime)==JSON.stringify(this.endTime)) //寄送时间不能是今天
					// {
					// 	uni.showToast({
					// 		title: '无法寄送至今天',
					// 		icon:'none',
					// 		mask: true
					// 	})
					// }
					else {
						console.log(this.startTime)
						console.log(this.endTime)
						
						
						this.shoujianMessageShow = false;
						this.endTimeShow = false;
						this.youpiaoShow = false;
					
						// 开启加载画面
						uni.showLoading({
							title:'新建信封中',
							mask: true
						})
					
						
						//如果haveSave== false ，在服务器创建信封并保存
						if(this.haveSave == false && this.nowType != 2){
							// 获取信封ID，以当前时间为准
							var timedata = self.dateTimeStr()
							self.letterid = timedata.year + timedata.month + timedata.day + timedata.hour + timedata.minute + timedata.second
							
							//进入次页面时，上个页面需要往下传session，和haveSave（新建为false或者点击现有为true）。
							 uni.request({
							 	url:'https://afflatus.xyz/updateLetterHead',
								method:'POST',
								data:{
									session: self.session,
									letterid: self.letterid,
									shoujianren: self.shoujianren,
									jijianren: self.jijianren,
									startTime: self.startTime,
									endTime: self.endTime,
									beizhu: self.beizhu,
									youpiao: self.youpiaoList[self.indexpic].url,
									haveSave: self.haveSave //新建一个新的信封
								},
								success(res) {
									if(res.data.status == 200){
										uni.redirectTo({
											url: '../writeemail/writeemail?' + 'session=' + self.session + '&letterid=' + self.letterid
										})
									}
								}
							 })
							
						}else if(this.haveSave == true && this.nowType != 2){
							// 如果没有改变
							if(self.shoujianren_last == self.shoujianren &&
								self.jijianren_last == self.jijianren &&
								JSON.stringify(self.startTime_last) == JSON.stringify(self.startTime) &&
								JSON.stringify(self.endTime_last) == JSON.stringify(self.endTime) &&
								JSON.stringify(self.beizhu_last) == JSON.stringify(self.beizhu) &&
								self.indexpic_last == self.indexpic){
									uni.redirectTo({
										url: '../writeemail/writeemail?' + 'session=' + self.session + '&letterid=' + self.letterid
									})
								}
							
							//如果改变了
							else{
								uni.request({
									url:'https://afflatus.xyz/updateLetterHead',
									method:'POST',
									data:{
										session: self.session,
										letterid: self.letterid,
										shoujianren: self.shoujianren,
										jijianren: self.jijianren,
										startTime: self.startTime,
										endTime: self.endTime,
										beizhu: self.beizhu,
										youpiao: self.youpiaoList[self.indexpic].url,
										haveSave: self.haveSave //新建一个新的信封
									},
									success(res) {
										console.log('fuck')
										if(res.data.status == 200){
											uni.redirectTo({
												url: '../writeemail/writeemail?' + 'session=' + self.session + '&letterid=' + self.letterid
											})
										}
									}
								})
								
							}
						}
								
						else if(this.haveSave == true && this.nowType == 2){//打开已揽件的信
							
						}
						// {
						//   session: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibzZRb3c0eXFIZjVwSnBCRi1OX2NtbzJMbzR1ZyIsImlhdCI6MTY0MjAzNzY3NCwiZXhwIjoxNjUwNjc3Njc0fQ.jzWPf3wuaFstdUb4rph7Rq5vXTCdxXPLf9QbJZgfuAI',
						//   shoujianren: '微信用户',
						//   jijianren: '微信用户',
						//   startTime: { year: '2022', month: '01', day: '13' },
						//   endTime: { year: 2022, month: 1, day: 14 },
						//   beizhu: { ziti1: ' 测试', ziti2: '', ziti3: '' },
						//   youpiao: 'https://afflatus.xyz/image/youpiao2.jpg'，
						// haveSave: false
						// }
					
						
						
						//如果haveSave== true， 并且其余都是未作改变，直接navigateTo 写信页面
						
						//如果haveSave== true， 并且其余有改变的， 则update服务器
						// nameChange: false,
						// timeChange: false,
						// beizhuChange: false,
						// youpiaoChange: false,
						// haveSave: false,
					
					
						// 关闭加载画面
						uni.hideLoading()
					
						//跳转到写信页面, 将session和letterid 带上
						//保留当前页面，跳转到应用内的某个页面
						// uni.navigateTo({
						// 	url: '../writeemail/writeemail'
						// })
					}
				}
				
				

			}

		},

	}
</script>

<style lang='scss'>
	@keyframes zhizhangMove {
		from {
			padding-top: 0%;
			opacity: 0
		}

		to {
			padding-top: 60%;
			opacity: 1
		}
	}

	.setemail {
		width: 100%;
		height: 100%;
		/* background-color: #F5F5F5; */
		background-image: linear-gradient(62deg, #8EC5FC, #E0C3FC);
	}
	
	.setemail .back-btn {
			width: 100%;
			position: absolute;
			z-index: 8;
			padding-top: var(--status-bar-height); /* 9rpx; */
			padding-left: 76rpx;
			padding-right: 40rpx;
			top: 40upx;
			font-size: 40upx;
			color: #1E1E1E;
			display: flex;
			align-items: center;
			.nav-title {
				width: 590upx;
				text-align: center;
			}
	}

	.setemail .bg {
		animation: zhizhangMove 0.4s;
		padding-top: 60%;
		opacity: 1;
	}

	.setemail .bg .zhizhang {
		position: relative;
		top: 0rpx;
		left: 0rpx;
		/* opacity: 0.87; */
	}

	.setemail .bg .zhizhang .shoujianTian {
		position: absolute;
		top: 15.38rpx;
		left: 21.15rpx;
		width: 240.38rpx;
		height: 55.76rpx;
		background-color: #000000;
		opacity: 0;
	}

	.setemail .bg .zhizhang .endTimeTian {
		position: absolute;
		top: 78.84rpx;
		left: 353.84rpx;
		width: 211.53rpx;
		height: 55.76rpx;
		background-color: #000000;
		opacity: 0;
	}

	.setemail .bg .zhizhang .beizhuTian {
		position: absolute;
		left: 153.84rpx;
		top: 169.07rpx;
		width: 398.07rpx;
		height: 105.76rpx;
		background-color: #000000;
		opacity: 0;
		color: transparent;
	}
	
	.setemail .bg .zhizhang .beizhuwenzi {
		position: absolute;
		left: 107.84rpx;
		top: 144.07rpx;
		font-size: 26.92rpx;
		color: #909399;
	}

	.setemail .bg .zhizhang .youpiaoTian {
		position: absolute;
		width: 142.3rpx;
		height: 130.76rpx;
		top: 25.23rpx;
		right: 20.38rpx;
		opacity: 1;
	}
	

	.setemail .bg .shoujianMessage {
		text-align: center;
	}

	.setemail .bg .shoujianMessage .messageHeader {
		color: #FFF;
		font-size: 34.92rpx;
		margin-top: 44.3rpx;
		letter-spacing: 9rpx;
		margin-bottom: 22rpx;
		opacity: 0.65;
	}

	.setemail .bg .shoujianMessage .Who {
		font-size: 26.92rpx;
		margin-top: 11.53rpx;
	}

	.setemail .bg .shoujianMessage .Who radio {
		transform: scale(0.7);
	}

	.setemail .bg .shoujianMessage .Who label {
		margin-right: 30rpx;
	}
	
	.setemail .bg .shoujianMessage .Who text{
		font-size: 31rpx;
		opacity: 0.92;
	}

	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
	}

	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.setemail .bg .youpiaoMessage {
		display: flex;
		justify-content: center;
		margin-top: 120rpx;
		width: 100%;
		height: 298.07rpx;
	}

	.setemail .bg .youpiaoMessage view {
		align-self: center;
	}

	/* 	.setemail .bg .youpiaoMessage .leftImg {
		align-self: center;
		margin-right: 26.92rpx;
		height: 150rpx;
		width: 340.38rpx;
		border-radius: 19.23rpx;
		opacity: 0.25;
	} */

	/* 	.setemail .bg .youpiaoMessage .rightImg {
		align-self: center;
		height: 150rpx;
		width: 340.38rpx;
		border-radius: 19.23rpx;
		opacity: 0.25;
	} */

	.setemail .bg .youpiaoMessage .MiddleImg {
		align-self: center;
		height: 100%;
		width: 405.76rpx;
		border-radius: 19.23rpx;
		border: 4rpx #fff solid;
		opacity: 0.8;
	}

	.setemail .bg .buttonWrite {
		position: absolute;
		top: 250rpx;
		right: 222rpx;
		/* width: 100%; */
	}
	
	.setemail .bg .buttonWrite .btn{
		position: absolute;
		top: 0rpx;
		left: 0rpx;
		width: 200rpx;
		height: 100rpx;
		background-color: rgba($color: #000000, $alpha: 0);
		text-align: center;
	}
	
	.setemail .bg .buttonWrite .btn text{
		display: block;
		text-decoration: none;
		color: #FFFFFF;
		opacity: 0.69;
		font: bold 39rpx Arial;
		line-height: 102rpx;
		/* height: 60px; */
	}
	
	.btn-border-top, .btn-border-bottom{
		position: absolute;
		width: 100%;
		height: 5rpx;
		/* background-color: #FFFFFF; */
		background-color: rgba(255,255,255,0.69);
		transition: .4s;
	}
	
	.btn-top-left, .btn-bottom-right{
		position: absolute;
		width: 5rpx;
		height: 100%;
		/* background-color: #FFFFFF; */
		background-color: rgba(255,255,255,0.69);
		transition: .4s;
	}
	
	.btn-border-top{
		right: 0px;
		top: 0px;
	}
	
	.btn-border-bottom{
		left: 0;
		bottom: 0;
	}
	
	.btn-top-left{
		left: 0;
		top: 0;
	}
	
	.btn-bottom-right{
		right: 0;
		bottom: 0;
	}
	
	.setemail .buttonDelete {
		position: absolute;
		top: 54rpx;
		left: 144rpx;
		z-index: 10;
		font-size: 62rpx;
		opacity: 0.9;
	}
	
	.setemail .buttonReturn{
		position: absolute;
		top: 49rpx;
		left: 28rpx;
		z-index: 10;
		font-size: 70rpx;
		opacity: 0.9;
	}
	
	.emailsent image{
		width: 383rpx;
		height: 284rpx;
		opacity: 0.7;
	}
	
	.weixinsent image{
		width: 383rpx;
		height: 284rpx;
		opacity: 0.7;
	}
	
	.tupianAnniu{
		font-size: 64rpx;
		color: #fff;
		opacity: 0.8;
		margin-left: 24rpx;
		margin-right: 24rpx;
	}
</style>
