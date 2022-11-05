<template>
	<scroll-view class="writeemail">
		<!-- 背景 -->
		<view class="bg" @click.stop="whiteClick"></view> 
		
		<!-- 自定义导航栏 -->
		<view class="back-btn iconarrow_btn_left">
					<text class="nav-title">{{biaoti}}</text>
					<text class="iconfont buttonReturn" @click.stop="returnIndex">&#xe62f;</text>
		</view>
		
		<!-- 模块 -->
		<view scroll-y="true">
			<view class="whiteBlock" v-show="whiteNumber>=1" @click="whiteClick"></view>
			
			<view>
				<EmailBlock v-for="item in blockObjectList" :ref="item.ref" :key="item.id" :blockType="item.type"
					@click.native="editFunction" :BlockContent='item.content' :blockclickclock="blockclickclock"></EmailBlock>
			</view>
			<!-- 空白区域 -->
			<view class="whiteBlock" v-show="whiteNumber>=2" @click="whiteClick"></view>
			<view class="whiteBlock" v-show="whiteNumber>=3" @click="whiteClick"></view>
<!-- 			<view class="whiteBlock" v-show="whiteNumber>=4" @click="whiteClick"></view>
 -->
		</view>

		<!-- 写信窗口 -->
		<view class="blackBG" :animation='blackBGData'></view>
		<!-- <textarea class='writeWin' v-model="textareaLS" placeholder="请输入一个段落的文字" maxlength="270"
			:animation='textareaData' :show-confirm-bar='jianpanConfirm' style=""/>
		<view class="confirmB" :animation='confirmBData' @click="confirmF">
			<view>完成</view>
		</view> -->
		<view class="writeWin" :animation='textareaData'>
			<textarea class="mytextarea" v-model="textareaLS" placeholder="请输入文字 ٩( ๑╹ ꇴ╹)۶" maxlength="270" :focus=INPUTFLAG
				 :show-confirm-bar='jianpanConfirm' style=""/>
			<text class="iconfont" style="color: #007AFF;" @click="confirmF">&#xe601;</text>
		</view>
		

		<!-- 悬浮按钮 -->	
		<view v-if="xuanfuFlag" class="xuanfuAnniu">
			<text class="iconfont anniuCss" style="margin-top: 24rpx;" @click="addText">&#xe646;</text>
			<text style="color: #fff;font-size: 32rpx;margin-bottom: 15rpx;">文字</text>
			<text class="iconfont anniuCss" style="" @click="addPic">&#xe689;</text>
			<text style="color: #fff;font-size: 32rpx;margin-bottom: 24rpx;">图片</text>
		</view>

		<view v-if="sentFlag" class="sent">
			<text class="iconfont anniuCss" @click="sentFunction" style="margin-top: 24rpx;">&#xe61e;</text>
			<text style="color: #fff;font-size: 32rpx;margin-bottom: 40rpx;">发送</text>
		</view>



	</scroll-view>
</template>

<script>
	export default {
		data() {

			//蒙版动画实例
			var animation_bg = uni.createAnimation({
				transformOrigin: "50% 50%",
				duration: 200,
				timingFunction: "ease",
				delay: 0
			});

			//输入框动画实例
			var animation_w = uni.createAnimation({
				transformOrigin: "50% 50%",
				duration: 400,
				timingFunction: "ease",
				delay: 0
			});

			//完成按钮动画实例
			var animation_c = uni.createAnimation({
				transformOrigin: "50% 50%",
				duration: 100,
				timingFunction: "ease",
				delay: 0
			});

			return {
				currentTargetRef: '',
				animation_bg, //黑色蒙版动画实例
				blackBGData: {}, //黑色蒙版动画数据
				animation_w, //输入框动画实例
				textareaData: {}, //输入框动画数据
				INPUTFLAG: false, //输入框的软键盘
				animation_c, //完成按钮动画实例
				confirmBData: {}, //完成按钮动画数据
				jianpanConfirm: false,
				fuck1content: '',
				textareaLS: '', //输入框临时数据
				//模块对象列表
				blockObjectList: [
				],
				addTextFlag: true,//防止多次添加
				addPicFlag: true,
				//空白区域数量
				whiteNumber: 4,
				addFlag: true,
				
				// 信息
				session: '',
				letterid: '',
				nowType: 0,
				
				//标题
				biaoti: "写信",
				
				//悬浮按钮
				sentFlag: true,
				xuanfuFlag: true,
				
				//块 锁
				blockclickclock: false,
			}
		},
		methods: {
			// 将信的内容上传到服务器，即块的信息以及对应的文件
			uploadletter: function(message, State, buttonclick){
				var self = this
				
				uni.showLoading({
					title: message
				})
				
				//先发送列表信息
				uni.request({
					url: 'https://afflatus.xyz/updateEmail',
					data: {
						session: this.session,
						letterid: this.letterid,
						letterState: State,
						blockObjectList: this.blockObjectList
					},
					method: 'POST',
					success: (res)=>{
						// 成功, 并跳回主页面
						console.log(res)
						if(res.data.status == 200){
							//发送非文本数据
							// var changeFlag = false
							
							var sum = 0
							var success = 0
							var timeid = null
							// 统计非文本，且内容发送改变的，且不是空的 块数
							for(var item in self.blockObjectList){
								if(self.blockObjectList[item].type!='text' && self.blockObjectList[item].contentChange==1 && self.blockObjectList[item].content!=''){
									sum += 1
								}
							}
							
							// 保证上面计算完后，再执行这个
							setTimeout(function(){
								
								let p = new Promise(function(reslove, reject){
									for(var item in self.blockObjectList){
										if(self.blockObjectList[item].type!='text' && self.blockObjectList[item].contentChange==1 && self.blockObjectList[item].content!=''){ 
												uni.uploadFile({
													url: 'https://afflatus.xyz/uploadFile',
													filePath:self.blockObjectList[item].content,
													name: 'file',//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
													header:{
														session: self.session,
														letterid: self.letterid,
														blockid: self.blockObjectList[item].id,
														blockType: self.blockObjectList[item].blockType,
													},
													success: function(res){
														let newres = JSON.parse(res.data)
														if(newres.status == 200){
															success += 1
														}else{
															console.log('ooooooooo')
															reject('上传失败')
														}
													},
													fail() {
														console.log('hhhhhhhh')
														reject('上传失败')
													}
												})
										}
									}
									
									// 上传时间的最多这样，否则报错。
									setTimeout(function(){
										reject('上传失败')
									}, 20*1000)
									
									// 如果上传完毕，则跳出(不能一直检测，会卡死的，所以这里采用了定时器)
									timeid = setInterval(function(){
										if(sum==success){
											console.log('成功上传')
											reslove('成功上传')
										}
									}, 100)						
								})
								
								p.then((data)=>{
									// console.log('跳到主页')
									clearInterval(timeid)
									uni.hideLoading()
									
									//若是点了发送按钮
									if(buttonclick == 'sent'){
										uni.redirectTo({
											url: '../index/index'
										})
									}
									
									//若是点了返回按钮
									else if(buttonclick == 'return'){
										uni.redirectTo({
											url: '../setemail/setemail?session=' + self.session + '&haveSave=' + 'true' + '&letterid=' + self.letterid
										})
									}
									
									
								},(err)=>{
									console.log('这里啊')
									if(err){
										uni.hideLoading()
										uni.showToast({
											title: '服务器较忙',
											mask: true,
											icon:'none',
											duration: 2000,
										})
										// return false
									}
								})
							}, 10)
				
							
						}
						// 失败，服务器较忙
						else{
							console.log('ffffff')
							uni.hideLoading()
							uni.showToast({
								title: '服务器较忙',
								mask: true,
								icon:'none',
								duration: 2000,
							})
						}
						
					},
					fail(){
						console.log('kkkkkkk')
						// 失败，服务器较忙
						uni.hideLoading()
						uni.showToast({
							title: '服务器较忙',
							mask: true,
							icon:'none',
							duration: 2000,
						})
					}
					
				})
			},
			
			
			// 返回封面的编辑页
			returnIndex: function(){
				if(this.blockclickclock){
					uni.redirectTo({
						url: '../setemail/setemail?session=' + this.session + '&haveSave=' + 'true' + '&letterid=' + this.letterid + '&nowType=' + this.nowType
					})
					return 0
				}
					
				
				var self = this
				this.uploadletter('保存中...', 0, 'return')
			},
			
			//点击模块触发事件
			editFunction: function(e) {
				// console.log("父： 我点击了子。")
				if(this.blockclickclock){// 已揽件的信件
					console.log("父： 我点击了子。")
					// 若块是图片, 则打开图片预览
					if(this.$refs[e.currentTarget.dataset.ref][0].blockType == 'picture'){
						// console.log(this.$refs[e.currentTarget.dataset.ref][0].BlockContent)
						uni.previewImage({
							urls: [this.$refs[e.currentTarget.dataset.ref][0].BlockContent]
						})
					}
					
					return 0
				}
					
					
				//获取块的ref, 获得聚焦
				let lastRef = this.currentTargetRef
				this.currentTargetRef = e.currentTarget.dataset.ref;

				//取消上次的聚焦
				if (lastRef != '' && lastRef != this.currentTargetRef)
					this.$refs[lastRef][0].returnBack();

				//点击编辑
				if (this.$refs[this.currentTargetRef][0].model == 'edit') {
					//开始编辑
					// console.log('父：开始编辑' + this.currentTargetRef)
					if(this.$refs[this.currentTargetRef][0].blockType == 'text'){
						//赋予输入框内容
						let i = 0
						while (true) {
							if (this.blockObjectList[i]['ref'] == this.currentTargetRef) {
								this.textareaLS = this.blockObjectList[i]['content'];
								break;
							}
							i += 1;
							if (i >= this.blockObjectList.length)
								break;
						}
						
						//黑色蒙版弹出
						this.animation_bg.height('100%')
						this.animation_bg.width('100%')
						this.animation_bg.left('0px')
						this.animation_bg.top('0px')
						this.animation_bg.opacity(0.7)
						this.animation_bg.step()
						
						//输入框弹出
						this.animation_w.width('700rpx')
						this.animation_w.height('30%')
						this.animation_w.opacity(0.7)
						this.animation_w.left('9px')
						this.animation_w.top('20%')
						this.animation_w.step()
						//完成按钮弹出
						this.animation_c.opacity(0.7)
						this.animation_c.width('100rpx')
						this.animation_c.height('100rpx')
						this.animation_c.step()
						
						this.blackBGData = this.animation_bg.export()
						this.textareaData = this.animation_w.export()
						this.confirmBData = this.animation_c.export()
						
						this.INPUTFLAG = true
					}
					
					// 编辑图片时
					else if(this.$refs[this.currentTargetRef][0].blockType == 'picture'){
						var self = this;
						uni.chooseImage({
							count: 1,
							success(res) {
								// 判断格式是否正确(jpg,jpeg,png), 否则报错
								let fileType = res.tempFilePaths[0].split('.')
								fileType = fileType[fileType.length-1]
								if(fileType=='jpg' || fileType=='png' || fileType=='jpeg' || fileType=='gif'
									|| fileType=='JPG' || fileType=='PNG' || fileType=='JPEG' || fileType=='GIF'){
									// else 格式正确后, 检查文件大小, 若图片超过5M, 文件需要压缩, 直到压缩到小于5M.
									// quality属性 = 100 - [ (原文件大小-5M)/原文件大小 ]*100 - 4
									// 这里的10是少压缩一点.
									if(res.tempFiles[0].size > 5242880){//5*1024*1024 B
										let quality = 100 - ((res.tempFiles[0].size - 5242880)/res.tempFiles[0].size)*100
										console.log("quality")
										console.log(quality)
										uni.compressImage({
											src: res.tempFilePaths[0],
											quality: quality,
											success(e) {
												self.houchuliPic(e.tempFilePath)
											}
										})
									}else{
										self.houchuliPic(res.tempFilePaths[0])
									}
								}else{
									uni.showToast({
										title: '不支持的格式',
										mask: true,
										icon:'none',
										duration: 2000,
									})
								}
							}
						})
					}
				}
				
				//点击删除
				else if (this.$refs[this.currentTargetRef][0].model == 'delete'){					
					var i = 0
					while(true){
						if(this.blockObjectList[i].ref == this.currentTargetRef){
							this.$refs[this.currentTargetRef][0].returnBack();
							
							var j = i+1
							while(true){
								if(j>this.blockObjectList.length-1){
									break;
								}
								this.blockObjectList[j].orderNum -= 1;
								this.blockObjectList[j].orderChange = 1;
								j += 1;
							}
							
							// delete this.blockObjectList[i] //删除的元素NUll了，没有改变原来数组
							this.blockObjectList.splice(i,1) //改变数组大小
							break
						}
						
						i += 1
						if(i>this.blockObjectList.length-1){
							break
						}
					}
					
					this.currentTargetRef = '';
				}
				//点击上移
				else if(this.$refs[this.currentTargetRef][0].model == 'shangMove'){
					
					var i = 0
					while(true){
						if(this.blockObjectList[i].ref == this.currentTargetRef){
							if(i==0)
								break;
							
							this.$refs[this.currentTargetRef][0].returnBack();
							//获取上个元素的对象
							var lastObj = this.blockObjectList[i-1];
							
							this.blockObjectList[i-1].orderChange = 1;
							this.blockObjectList[i].orderChange = 1;
							this.blockObjectList[i-1].orderNum += 1;
							this.blockObjectList[i].orderNum -= 1;
							
							//取代上个元素
							this.blockObjectList.splice(i-1, 1, this.blockObjectList[i]);
							
							//取代当前元素
							this.blockObjectList.splice(i, 1, lastObj);
							
							
							break;
						}
						
						i += 1
						if(i>this.blockObjectList.length-1){
							break
						}
					}
				}
				//点击下移
				else if(this.$refs[this.currentTargetRef][0].model == 'xiaMove'){
					var i = 0
					while(true){
						if(this.blockObjectList[i].ref == this.currentTargetRef){
							if(i==this.blockObjectList.length-1)
								break;
							
							this.$refs[this.currentTargetRef][0].returnBack();
							//获取下个元素的对象
							var lastObj = this.blockObjectList[i+1];
							
							this.blockObjectList[i+1].orderChange = 1;
							this.blockObjectList[i].orderChange = 1;
							this.blockObjectList[i+1].orderNum -= 1;
							this.blockObjectList[i].orderNum += 1;
							
							//取代下个元素
							this.blockObjectList.splice(i+1, 1, this.blockObjectList[i]);
							
							//取代当前元素
							this.blockObjectList.splice(i, 1, lastObj);
							
							break;
						}
						
						i += 1
						if(i>this.blockObjectList.length-1){
							break
						}
					}
				}
				
			},
			// 选好图片或压缩完后的 后处理
			houchuliPic: function(path){
				//更新块信息
				var self = this
				let i = 0
				console.log(path)
				while (true) {
					if (self.blockObjectList[i]['ref'] == self.currentTargetRef) {
						let j = i
						console.log('hello')
						//保存到本地
						uni.saveFile({
							tempFilePath: path,
							success: function(res){
								// console.log(res.savedFilePath)
								// console.log(self.blockObjectList)
								console.log('已保存')
								console.log(path)
								self.blockObjectList[j]['content'] = res.savedFilePath;
								//是否更改
								if(self.blockObjectList[j]['content'] != self.blockObjectList[j]['contentLast']){
									self.blockObjectList[j]['contentChange'] = 1
								}else{
									self.blockObjectList[j]['contentChange'] = 0
								}
								i = self.blockObjectList.length
							}
						})
					}
					i += 1;
					if (i >= self.blockObjectList.length)
						break;
				}
				self.$refs[self.currentTargetRef][0].model = ''
				
			},
			
			// 文字编辑时，点击完成按钮触发事件
			confirmF: function() {
				// console.log('haha')
				this.INPUTFLAG = false
				//黑色蒙版弹出
				this.animation_bg.height('0rpx')
				this.animation_bg.width('0rpx')
				this.animation_bg.left('375rpx')
				this.animation_bg.top('375rpx')
				this.animation_bg.opacity(0)
				this.animation_bg.step()
				//输入框弹出
				this.animation_w.width('0rpx')
				this.animation_w.height('0rpx')
				this.animation_w.opacity(0)
				this.animation_w.left('375rpx')
				this.animation_w.top('375rpx')
				this.animation_w.step()
				//完成按钮弹出
				this.animation_c.opacity(0.7)
				this.animation_c.width('0rpx')
				this.animation_c.height('0rpx')
				this.animation_c.step()

				this.blackBGData = this.animation_bg.export()
				this.textareaData = this.animation_w.export()
				this.confirmBData = this.animation_c.export()

				//编辑完成
				//更新模块内容
				let i = 0
				while (true) {
					if (this.blockObjectList[i]['ref'] == this.currentTargetRef) {
						this.blockObjectList[i]['content'] = this.textareaLS;
						if(this.blockObjectList[i]['content'] != this.blockObjectList[i]['contentLast']){
							this.blockObjectList[i]['contentChange'] = 1
						}else{
							this.blockObjectList[i]['contentChange'] = 0
						}
						break;
					}
					i += 1;
					if (i >= this.blockObjectList.length)
						break;
				}
				this.$refs[this.currentTargetRef][0].model = ''
			},

			// 点击空白区域
			whiteClick: function() {
				if(this.blockclickclock){
					return 0
				}
				console.log(this.blockObjectList)
				
				//选中的块失去聚焦
				if (this.currentTargetRef != '') {
					this.$refs[this.currentTargetRef][0].model = ''
					this.$refs[this.currentTargetRef][0].returnBack();
				}

			},
			
			//添加文字
			addText: function(){
				
				if(this.addFlag){
					this.addFlag = false
					
					//新建唯一ID以及Ref
					var date = new Date()
					var year = date.getFullYear()//年
					var month = date.getMonth() + 1 //月
					var day = date.getDate() //日
					var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()//时
					var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()//分
					var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds() //秒
					month >= 1 && month <= 9 ? (month = "0" + month) : ""
					day >= 0 && day <= 9 ? (day = "0" + day) : "";
					hour >= 0 && hour <= 9 ? (hour = "0" + hour) : "";
					minute >= 0 && minute <= 9 ? (minute = "0" + minute) : "";
					second >= 0 && second <= 9 ? (second = "0" + second) : "";
					
					var id = String(year)+String(month)+String(day)+String(hour)+String(minute)+String(second);
					var ref = id
					
					//push到数组
					this.blockObjectList.push({
						id,
						ref,
						type: 'text',
						blockType: 0,
						content: '',
						contentLast: '',
						contentChange: 1, 
						orderNum: -1,
						orderChange: 1,
						newblock: true, 
					})
					
					// 分配orderNum
					this.blockObjectList[this.blockObjectList.length-1].orderNum = this.blockObjectList.length
					
					setTimeout(()=>{
						this.addFlag = true
					},1100)
					
				}
			},
			
			// 添加图片
			addPic: function(){
				if(this.addFlag){
					this.addFlag = false
					
					//新建唯一ID以及Ref
					var date = new Date()
					var year = date.getFullYear()//年
					var month = date.getMonth() + 1 //月
					var day = date.getDate() //日
					var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()//时
					var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()//分
					var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds() //秒
					month >= 1 && month <= 9 ? (month = "0" + month) : ""
					day >= 0 && day <= 9 ? (day = "0" + day) : "";
					hour >= 0 && hour <= 9 ? (hour = "0" + hour) : "";
					minute >= 0 && minute <= 9 ? (minute = "0" + minute) : "";
					second >= 0 && second <= 9 ? (second = "0" + second) : "";
					
					var id = String(year)+String(month)+String(day)+String(hour)+String(minute)+String(second);
					var ref = id
					
					//push到数组
					this.blockObjectList.push({
						id,
						ref,
						type: 'picture',
						blockType: 1,
						content: '',
						contentLast: '',
						contentChange: 1,
						orderNum: -1,
						orderChange: 1,
						newblock: true, 
					})
					
					// 分配orderNum
					this.blockObjectList[this.blockObjectList.length-1].orderNum = this.blockObjectList.length
					
					setTimeout(()=>{
						this.addFlag = true
					},1100)
					
				}
			},
			
			// 发送信息
			sentFunction: function(){
				var self = this
				
				uni.requestSubscribeMessage({
					tmplIds: ['Ue2gQHM_jKb-Z6iPwGAf69NkkURm-IqmjadGqrLgtOk'],
					success(res){
						console.log(res)
						
						if(JSON.stringify(res).indexOf('accept') != -1){// 同意订阅通知
							// 是否达到发送条件(图片块的数量, 音频块的数量，文字块的数量)
							if(self.blockObjectList.length < 1){
								// console.log('内容至少一个块')
								uni.showToast({
									title: '无内容无法发送',
									icon:'none',
									mask: true,
								})
							}else{
								uni.showModal({
									title: "发送邮件",
									content: "发送后将无法编辑",
									success(res) {
										if (res.confirm){
											self.uploadletter('发送中...', 1, 'sent')
										}
									}
								})
								
							}
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
				
				// console.log(typeof this.blockObjectList)
			}
		},

		onLoad(data) {
			uni.showLoading({
				title: "加载中"
			})
			
			var self = this
			//若当前页面不是新建，而是编辑草稿，需要加载信封内容（通过当前函数获取上一个页面传的参来判断）
			this.session = data.session
			this.letterid = data.letterid
			if(data.nowType == 2){
				this.nowType = 2
				this.biaoti = "信件内容"
				this.sentFlag = false
				this.xuanfuFlag = false
				this.blockclickclock = true
			}
			
			//获取blockObjectList
			var blockObjectList_bb = []
			uni.request({
				url: 'https://afflatus.xyz/loadLetter',
				data: {
					session: this.session,
					letterid: this.letterid
				},
				method: 'POST',
				success(res) {
					console.log(res)
					if(res.data.status == 200){
						blockObjectList_bb = res.data.data;
						console.log(blockObjectList_bb)
						
						var tmpblockObjectList = new Array(blockObjectList_bb.length)
						var timeid = null
						var sum = blockObjectList_bb.length
						var success = 0
						// 预处理，即添加其它变量在各个元素上
						var aPromise = new Promise(function(reslove, reject){
							
							setTimeout(function(){ // 上传时间的最多这样，否则报错。
								reject('加载失败')
							}, 20*1000)
							
							timeid = setInterval(function(){
								if(sum==success){
									console.log('加载成功')
									reslove('加载成功')
								}
								console.log("sum:"+sum+" success:"+success)
							}, 1000)	//100
														
							var arr = []
							for(var n in blockObjectList_bb){
								arr[n] = Number(n)
							}
	
							// 对每个元素重新给值
							blockObjectList_bb.forEach(function(item){
								let blockObject = {
									id:'',
									ref:'',
									type: 'text',
									blockType: 0,
									content: '',
									contentLast: '',
									contentChange: 0, 
									orderNum: -1,
									orderChange: 1,
									newblock: true, 
								}
								blockObject['id'] = item.blockid
								blockObject['ref'] = item.blockid
								blockObject['blockType'] = item.blockType
								blockObject['orderNum'] = item.orderNum
								if(item.blockType == 0){
									blockObject['type'] = 'text'
								}else if(item.blockType == 1){
									blockObject['type'] = 'picture'
								}else if(item.blockType == 2){
									blockObject['type'] = 'music'
								}
								blockObject['orderChange'] = 0
								blockObject['newblock'] = false
								
								if(blockObject['blockType'] == 0){//文本资源直接获取
									blockObject['content'] = item.content
									blockObject['contentLast'] = blockObject['content']
									tmpblockObjectList[blockObject['orderNum']-1] = blockObject
									success += 1
									// tmpblockObjectList.push(blockObject)
								}else{//非文本资源
									// console.log('我进来了、喔')
									blockObject['content'] = item.content
									
									if(blockObject['content'] != ''){
										//查看资源在本地是否存在
										uni.getSavedFileInfo({
											filePath: blockObject['content'],
											success(res) {
												tmpblockObjectList[blockObject['orderNum']-1] = blockObject
												success += 1
												// tmpblockObjectList.push(blockObject)
											},
											fail() {
												console.log("地资源找不到，需要下载")
												//若本地资源找不到，则需要下载
												uni.downloadFile({
													url: 'https://afflatus.xyz/download',
													header:{
														session: self.session,
														letterid: self.letterid,
														blockid: item.blockid,
														blockType: String(item.blockType)
													},
													success(res) {
														if(res.statusCode === 200){
															console.log('下载成功')
															// blockObject['content'] = res.tempFilePath
															// blockObject['contentLast'] = blockObject['content']
															// success += 1
															// tmpblockObjectList[blockObject['orderNum']-1] = blockObject
															//将资源保存到本地
															let mytempFilePath = res.tempFilePath
															
															console.log("res.tempFilePath = " + res.tempFilePath)
														
															uni.saveFile({
																tempFilePath: mytempFilePath,
																success(res) {
																	console.log("保存路径为: " + res.savedFilePath)
																	blockObject['content'] = res.savedFilePath
																	blockObject['contentLast'] = blockObject['content']
																	success += 1
																	tmpblockObjectList[blockObject['orderNum']-1] = blockObject
																	
																	//更新服务器的图片路径
																	uni.request({
																		url: 'https://afflatus.xyz/updatePath',
																		data: {
																			session: self.session,
																			letterid: self.letterid,
																			blockid: item.blockid,
																			changecontent: res.savedFilePath
																		},
																		method: 'POST',
																		success(res) {
																			console.log('更新成功啊')
																		},
																		fail(e) {
																			console.log('更新失败 :' + e)
																		}
																	})
																	
																},
																fail(e) {
																	console.log("不能保存")
																	console.log("mytempFilePath=" + mytempFilePath)
												
																	console.log(e)
																}
															})
														}
													},
													fail(e) {
														console.log('下载失败 ' + e)
													}
												})
											}
										})
																		
									}else{
										blockObject['contentLast'] = blockObject['content']
										tmpblockObjectList[blockObject['orderNum']-1] = blockObject
										success += 1
									}
									
								}
							})
						
							
						})
												
						aPromise.then((data)=>{
							clearInterval(timeid)		
					
							self.blockObjectList = tmpblockObjectList
							console.log(tmpblockObjectList)
							uni.hideLoading()

						},(err)=>{
							clearInterval(timeid)
							uni.hideLoading()
							uni.showToast({
								title: '服务器较忙',
								mask: true,
								icon:'none',
								duration: 2000,
							})
						})						
						
					}
					
				},
				fail() {
					uni.hideLoading()
				}
			})
			
			
			
// this.blockObjectList.push({
// 						id,
// 						ref,
// 						type: 'text',
// 						blockType: 0,
// 						content: '',
// 						contentLast: '',
// 						contentChange: 1, 
// 						orderNum: -1,
// 						orderChange: 1,
// 						newblock: true, 
// 					})			
			// this.haveSave = data.haveSave == "true"
			
			// 获取user session相关信息
// url: '../writeemail/writeemail?' + 'session=' + self.session + '&letterid=' + self.letterid
			// 读lettetid里的数据
			
				// 用户信息过时，则跳回登录页面
			
				// 成功
					// 计算需要多少个空白区域
					// this.whiteNumber = 4 - this.blockObjectList.length
		},
		
	
	}
</script>

<style lang='scss'>
	.writeemail {
		position: relative;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		/* height: 100%; */
		/* background-image: linear-gradient(62deg, #8EC5FC, #E0C3FC); */
	}
	
	.writeemail .xuanfuAnniu{
		position: fixed;
		display: flex;
		bottom: 70rpx;
		left: 16rpx;
		width: 95rpx;
		height: 290rpx;
		/* z-index: 1; */
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 95rpx;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		box-shadow: 3px 6px 12px #888888;
	}
	
	.writeemail .anniuCss{
		color: #fff;
		font-size: 72rpx;
	}
	
	.writeemail .sent {
		position: fixed;
		display: flex;
		bottom: 77rpx;
		right: 16rpx;
		width: 95rpx;
		height: 164rpx;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 95rpx;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		box-shadow: 3px 6px 12px #888888;
	}
	
	.writeemail .bg{
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(62deg, #8EC5FC, #E0C3FC);
	}
	
	.writeemail .myNavigationBG{
		height: 130rpx;
		width: 100%;
		opacity: 0.6;
	}
	
	.writeemail .back-btn {
			width: 100%;
			position: fixed;
			z-index: 8;
			padding-top: var(--status-bar-height);
			padding-left: 40rpx;
			padding-right: 40rpx;
			padding-bottom: 25rpx;
			/* top: 40rpx; */
			height: 99rpx;
			font-size: 40rpx;
			color: #1E1E1E;
			display: flex;
			align-items: center;
			background-color: rgba(0,0,0,0.1);
			/* box-shadow: 1px 1px 22px #707070; */
			.nav-title {
				position: absolute;
				top: 103rpx;
				width: 640rpx;
				text-align: center;
			}
			
	}
	
	.writeemail scroll-view{
		position: absolute;
		top: 125rpx;
		padding-top: var(--status-bar-height);
	}
	
	.writeemail .myNavigation{
		position: fixed;
		left: 0rpx;
		top: 0rpx;
		height: 130rpx;
		width: 100%;
		z-index: 5;
		background-color: #FFFFFF;
		opacity: 0.6;
	}



	.writeemail .newText {
		position: fixed;
		left: 17.3rpx;
		bottom: 17.3rpx;
		width: 76.92rpx;
		height: 76.92rpx;
		border-radius: 76.92rpx;
		border: #000000 solid 1.92rpx;
		text-align: center;
	}

	.writeemail .newText view {
		font-size: 30.15rpx;
		margin-top: 18.885rpx
	}

	.writeemail .newPic {
		position: fixed;
		left: 17.3rpx;
		bottom: 107.69rpx;
		width: 76.92rpx;
		height: 76.92rpx;
		border-radius: 76.92rpx;
		border: #000000 solid 1.92rpx;
		text-align: center;
	}

	.writeemail .newPic view {
		font-size: 30.15rpx;
		margin-top: 18.885rpx
	}

	.writeemail .newMusic {
		position: fixed;
		left: 17.3rpx;
		bottom: 200rpx;
		width: 76.92rpx;
		height: 76.92rpx;
		border-radius: 76.92rpx;
		border: #000000 solid 1.92rpx;
		text-align: center;
		background-color: #007AFF;
	}

	.writeemail .newMusic view {
		font-size: 30.15rpx;
		margin-top: 18.885rpx
	}

	.writeemail .blackBG {
		position: fixed;
		top: 375rpx;
		left: 375rpx;
		height: 0rpx;
		width: 0rpx;
		background-color: #000000;
		opacity: 0;
		z-index: 9;
	}

	/* .writeemail textarea{
		top: 200rpx !important; 
	} */

	.writeemail .writeWin {
		position: fixed;
		display: flex;
		z-index: 12;
		opacity: 0;
		height: 0rpx;
		width: 0rpx;
		justify-content: center;
		align-items: center;
		/* left: 375rpx; */
	}
	
	.writeemail .writeWin text{
		position: absolute;
		right: 15rpx;
		bottom: 0rpx;
		font-size: 100rpx;
		opacity: 0.7;
		z-index: 12;
	}
	
	.writeemail .mytextarea{
		height: 100%;
		width: 100%;
		background-color: #fff;
		border-radius: 30rpx;
		margin: 9.61rpx 9.61rpx;
		font-size: 40rpx;
		padding-left: 10rpx;
		padding-top: 10rpx;
	}

	.writeemail .confirmB {
		position: fixed;
		z-index: 10;
		top: 170rpx;
		right: 0rpx;
		height: 0rpx;
		width: 0rpx;
		opacity: 0;
		background-color: #fff;
		text-align: center;
	}

	.writeemail .confirmB view {
		padding-top: 30rpx;
	}
	
	.writeemail textarea{
		/* width: 700rpx !important;
		height: 30% !important;;
		left: 9px !important;; */
	}

	.writeemail .whiteBlock {
		width: 100%;
		padding-top: 80rpx;
		/* top: 40rpx; */
		height: 99rpx;
	}
	
	/* .writeemail .buttonReturn{
		position: fixed;
		top: 79rpx;
		left: 0rpx;
		z-index: 8;
	} */
	
	.writeemail .buttonReturn{
		position: absolute;
		top: 85rpx;
		left: 28rpx;
		z-index: 10;
		font-size: 70rpx;
		opacity: 0.9;
	}
	

</style>
