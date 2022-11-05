<template>
	<view class="EmailBlock" :style="{ height: picHeight }" :class="{ picMargin: picBlockContent!=''}">
		<!-- 编辑按钮 -->
		<view class="rightButton" :animation="animationData2">

			<text class="iconfont editAnniu" @click="shangB" style="color: #ffa04d;">&#xe65e;</text>
			<text class="iconfont editAnniu" @click="editB" style="color: #007AFF;">&#xec7c;</text>
			<text class="iconfont editAnniu" @click="deleteB" style="color: #ff2828;">&#xec45;</text>
			<text class="iconfont editAnniu" @click="xiaB" style="color: #ffa04d;">&#xe65d;</text>
	
		</view>

		<!-- 模块 -->
		<view v-if="blockType=='text'" class="textBlock" :class="{ textNormalStyle: norActive, blockShadow: !norActive}" @click="editFunction"
			:animation="animationData">
			<view v-if="BlockContent==''" class="blockContentCss">
				<view style="font-size: 112rpx; color: #afafaf;">文字</view>
				<view style="font-size: 38rpx; color: #848484;">点击编辑</view>
			</view>
			<view v-else class="textContent" :class="{ textContentNor: norActive }" style="font-size: 42rpx; opacity: 0.8;">
				{{textBlockContent}}</view>
		</view>
		<view v-else-if="blockType=='picture'" class="picBlock"
			:class="{ picShupingNormalStyle: picShupingActive, picHengpingNormalStyle: picHengpingActive, picDengbiNormalStyle: picDengbiActive }"
			@click="editFunction" :animation="animationData">
			<view v-if="BlockContent==''" class="blockContentCss" :class="{ blockShadow:!BlockContent }">
				<view style="font-size: 112rpx; color: #afafaf;">图片</view>
				<view style="font-size: 38rpx; color: #848484;">点击编辑</view>
			</view>
			<view v-else class="pic">
				<image :src="BlockContent" :mode="{'aspectFit': picHengpingActive, 'aspectFill': picShupingActive }"
					:class="{ picShupingSize: picShupingActive,  picHengpingSize:picHengpingActive, picDengbiSize: picDengbiActive, picFocusStyle: focusActive}" :style="{ height: picHeight }"></image>
			</view>
		</view>
		<view v-else-if="blockType=='music'" class="musicBlock">音频</view>


	</view>
</template>

<script>
	export default {
		props: {
			// block的类型,包括文字块,图片块,音频块等.
			blockType: {
				type: String,
				required: true
			},
			// 文字块内容
			BlockContent: {
				type: String,
				default: '',
				required: false
			},
			// 块 锁
			blockclickclock: {
				type: Boolean,
				default: false,
				required: true
			}
		},
		data() {
			//块动画实例
			var animation_block = uni.createAnimation({
				transformOrigin: "50% 50%",
				duration: 500,
				timingFunction: "ease",
				delay: 0
			});

			//按钮动画实例
			var animation_button = uni.createAnimation({
				transformOrigin: "50% 50%",
				duration: 300,
				timingFunction: "ease",
				delay: 0
			});

			return {
				animationData: {}, //块动画
				animationData2: {}, //按钮动画
				clickFlag: false,
				animation_block,
				animation_button,
				buttonFlag: false,

				model: '',

				norActive: false, //正常文字样式flag
				focus: false, //是否聚焦

				picBlockContent: '',
				textBlockContent: '',

				//图片横竖屏样式控制
				picShupingActive: false,
				picHengpingActive: false,
				picDengbiActive: false,
				picHeight: '',
				focusActive: false,

			}
		},
		methods: {
			// sleep: function(delay) {
			//     for(var t = Date.now(); Date.now() - t <= delay;);
			// },

			//点击块触发事件
			editFunction: function() {
				// console.log('子：我被点击了。')
				if(this.blockclickclock){
					return 0
				}
				
				this.model = '';

				//获得聚焦
				if (this.focus == false) {
					//第一次聚焦
					this.focus = true;
					if (this.blockType == 'text') {
						// 如果无文字，则
						if (this.textBlockContent == '') {
							this.clickFlag = !this.clickFlag;

							// 展开
							this.buttonFlag = true
							this.animation_block.width('569.23rpx')
							this.animation_button.opacity(1)
							this.animation_button.top('0rpx')
							this.animation_button.right('50rpx')
							this.animation_block.step();
							this.animation_button.step();
							this.animationData = this.animation_block.export();
							this.animationData2 = this.animation_button.export();
						}
						// 如果有文字，则变成块的样式，且有放大动画
						else {
							this.norActive = false
							this.animation_block.width('737rpx')
							this.animation_block.height('365.38rpx')
							this.animation_block.step();
							this.animationData = this.animation_block.export();
						}

					} else if (this.blockType == 'picture') {
						
						// 如果无文字，则
						if (this.picBlockContent == '') {
							this.clickFlag = !this.clickFlag;
							this.focusActive = false;
							// 展开
							this.buttonFlag = true
							this.animation_block.width('569.23rpx')
							this.animation_button.opacity(1)
							this.animation_button.top('0rpx')
							this.animation_button.right('50rpx')
							this.animation_block.step();
							this.animation_button.step();
							this.animationData = this.animation_block.export();
							this.animationData2 = this.animation_button.export();
						}
						// 如果有文字，则变成块的样式，且有放大动画
						else {
							this.focusActive = true;
							this.norActive = false
							this.animation_block.width('737rpx')
							this.animation_block.height('365.38rpx')
							this.animation_block.step();
							this.animationData = this.animation_block.export();
						}

					}
				} else {
					//之后的聚焦
					if (this.blockType == 'text') {
						this.clickFlag = !this.clickFlag;
						//this.norActive = false;//变成块样式
						//展开
						if (this.clickFlag) {
							this.buttonFlag = true
							this.animation_block.width('569.23rpx')
							this.animation_block.height('365.38rpx')
							this.animation_button.opacity(1)
							this.animation_button.top('0rpx')
							this.animation_button.right('50rpx')
						}
						//缩回
						else {
							this.buttonFlag = false
							this.animation_block.width('737rpx')
							this.animation_block.height('365.38rpx')
							this.animation_button.opacity(0)
							this.animation_button.top('0rpx')
							this.animation_button.right('26.92rpx')
						}

						this.animation_block.step();
						this.animation_button.step();
						this.animationData = this.animation_block.export();
						this.animationData2 = this.animation_button.export();
					} else if (this.blockType == 'picture') {
						this.clickFlag = !this.clickFlag;
						//this.norActive = false;//变成块样式
						//展开
						if (this.clickFlag) {
							this.buttonFlag = true
							this.animation_block.width('569.23rpx')
							this.animation_block.height('365.38rpx')
							this.animation_button.opacity(1)
							this.animation_button.top('0rpx')
							this.animation_button.right('50rpx')
						}
						//缩回
						else {
							this.buttonFlag = false
							this.animation_block.width('737rpx')
							this.animation_block.height('365.38rpx')
							this.animation_button.opacity(0)
							this.animation_button.top('0rpx')
							this.animation_button.right('26.92rpx')
						}

						this.animation_block.step();
						this.animation_button.step();
						this.animationData = this.animation_block.export();
						this.animationData2 = this.animation_button.export();
					}

				}

			},
			//点击编辑触发事件，缩回模块
			editB: function() {
				if (this.blockType == 'text') {
					// console.log("编辑")

					//缩回
					this.buttonFlag = false
					this.clickFlag = !this.clickFlag;
					this.animation_block.width('737rpx')
					this.animation_block.height('365.38rpx')
					this.animation_block.step();
					this.animation_button.opacity(0)
					this.animation_button.top('0rpx')
					this.animation_button.right('26.92rpx')
					this.animation_button.step();
					this.animationData = this.animation_block.export();
					this.animationData2 = this.animation_button.export();

					//进入编辑状态
					this.model = 'edit';

				} else if (this.blockType == 'picture') {
					//缩回
					this.buttonFlag = false
					this.clickFlag = !this.clickFlag;
					this.animation_block.width('737rpx')
					this.animation_block.height('365.38rpx')
					this.animation_block.step();
					this.animation_button.opacity(0)
					this.animation_button.top('0rpx')
					this.animation_button.right('26.92rpx')
					this.animation_button.step();
					this.animationData = this.animation_block.export();
					this.animationData2 = this.animation_button.export();

					//进入编辑状态
					this.model = 'edit';
				}

			},

			deleteB: function() {
				this.model = 'delete';
			},

			shangB: function() {
				this.model = 'shangMove';
			},

			xiaB: function() {
				this.model = 'xiaMove';
			},

			//失去聚焦后，父组件调用该函数复原样式
			returnBack: function() {
				this.focus = false

				if (this.blockType == 'text') {
					//如果无文字
					if (this.textBlockContent == '') {
						//缩回
						this.buttonFlag = false
						this.clickFlag = !this.clickFlag;
						this.animation_block.width('737rpx')
						this.animation_block.height('365.38rpx')
						this.animation_block.step();
						this.animation_button.opacity(0)
						this.animation_button.top('0rpx')
						this.animation_button.right('26.92rpx')
						this.animation_button.step();
						this.animationData = this.animation_block.export();
						this.animationData2 = this.animation_button.export();
					}
					//有文字则变回正常样式
					else {
						if (this.buttonFlag) { //按钮已经展开的话，执行这个操作
							this.buttonFlag = false
							this.animation_button.opacity(0)
							this.animation_button.top('0rpx')
							this.animation_button.right('26.92rpx')
							this.animation_button.step();
							this.animationData2 = this.animation_button.export();
						}
						this.animation_block.width('0rpx')
						this.animation_block.height('0rpx')
						this.animation_block.step();
						this.animationData = this.animation_block.export();
						setTimeout(() => {
							this.norActive = true
						}, 400)
					}
				} else if (this.blockType == 'picture') {
					this.focusActive = false;
					//如果无图片
					if (this.picBlockContent == '') {
						
						//缩回
						this.buttonFlag = false
						this.clickFlag = !this.clickFlag;
						this.animation_block.width('737rpx')
						this.animation_block.height('365.38rpx')
						this.animation_block.step();
						this.animation_button.opacity(0)
						this.animation_button.top('0rpx')
						this.animation_button.right('26.92rpx')
						this.animation_button.step();
						this.animationData = this.animation_block.export();
						this.animationData2 = this.animation_button.export();
					}
					//有图片
					else {
						if (this.buttonFlag) { //按钮已经展开的话，执行这个操作
							this.buttonFlag = false
							this.animation_button.opacity(0)
							this.animation_button.top('0rpx')
							this.animation_button.right('26.92rpx')
							this.animation_button.step();
							this.animationData2 = this.animation_button.export();
						}

						this.animation_block.width('737rpx')
						this.animation_block.step();
						this.animationData = this.animation_block.export();
						this.clickFlag = !this.clickFlag;

					}
				}


			}

		},

		watch: {
			BlockContent(newv, oldv) {
				if (this.blockType == 'text') {
					this.textBlockContent = this.BlockContent;
				} else if (this.blockType == 'picture') {
					this.picBlockContent = this.BlockContent;
				}
			},

			// 侦听text内容的变化，变化则执行
			textBlockContent(newv, oldv) {

				//进入编辑状态
				// this.model = 'edit';
				// clickFlag: false,
				if (this.blockType == 'text') {
					// 如果无内容，保持块样子的样式
					if (this.textBlockContent == '') {
						this.norActive = false
					}
					// 如果有内容，且无点击状态，回到正常字体的样式
					else {
						this.norActive = true
					}
					// console.log('更新啦')
					// console.log(this.norActive)
					this.focus = false; //失去焦点
				}

			},

			picBlockContent(newv, oldv) {
				var self = this;
				if (this.blockType == 'picture') {
					// 如果无图片，保持块样子的样式
					if (this.picBlockContent == '') {
						self.picShupingActive = false
						self.picDengbiActive = false
						self.picHengpingActive = false
					}
					// 如果有图片，且无点击状态，回到正常字体的样式
					else {
						//获得图片信息
						uni.getImageInfo({
							src: this.picBlockContent,
							success(res) {
								//如果图片宽大于高，则用长框样式
								if (res.height < res.width) {
									self.picHeight = String((res.height/res.width) * 542.3 ) + 'rpx'
									self.picShupingActive = false
									self.picDengbiActive = false
									self.picHengpingActive = true
								}
								//如果图片高大于宽，则用高框样式
								else if (res.height > res.width) {
									self.picHeight = String((res.height/res.width) * 355.76 ) + 'rpx'
									self.picDengbiActive = false
									self.picHengpingActive = false
									self.picShupingActive = true
								}
								//如果图片宽等于高，则用方性样式
								else {
									self.picHeight = String((res.height/res.width) * 403.84 ) + 'rpx'
									self.picHengpingActive = false
									self.picShupingActive = false
									self.picDengbiActive = true
								}

							},
							fail(e) {
								//找不着图片
								self.picShupingActive = false
								self.picDengbiActive = false
								self.picHengpingActive = false
							}
						})

					}
					this.focus = false; //失去焦点
				}
			}
		},

		// 在实例创建完成后被立即调用
		created: function() {
			console.log(this.blockType)

			if (this.blockType == 'text') {
				this.textBlockContent = this.BlockContent
				// 初始化组件
				if (this.textBlockContent == '') {
					//无内容时，保持块的样式
					let animation = uni.createAnimation({
						transformOrigin: "50% 50%",
						duration: 1,
						timingFunction: "ease",
						delay: 0
					});
					animation.width('737rpx')
					animation.step();
					this.animationData = animation.export();

				} else {
					//有内容时，保持正常文字的样式
					//取消外边框，高度自适应，文字向左对齐，起始文字含有缩进。
					this.norActive = true
				}

				// 初始化按钮动画
				let animation2 = uni.createAnimation({
					transformOrigin: "50% 50%",
					duration: 0,
					timingFunction: "ease",
					delay: 0
				});
				animation2.opacity(0)
				animation2.top('0rpx')
				animation2.right('26.92rpx')

				animation2.step();
				this.animationData2 = animation2.export();

			} else if (this.blockType == 'picture') {
				this.picBlockContent = this.BlockContent
				// 初始化组件
				if (this.picBlockContent == '') {
					//无图片时，保持块的样式
					let animation = uni.createAnimation({
						transformOrigin: "50% 50%",
						duration: 1,
						timingFunction: "ease",
						delay: 0
					});
					animation.width('737rpx')
					animation.step();
					this.animationData = animation.export();

				} else {
					//有图片时
					// uni.getImageInfo({
					// 	src: this.picBlockContent,
					// 	success(res) {
					// 		//如果图片宽大于高，则用长框样式
					// 		if (res.height < res.width) {
					// 			self.picHeight = String((res.height/res.width) * 542.3 ) + 'rpx'
					// 			self.picShupingActive = false
					// 			self.picDengbiActive = false
					// 			self.picHengpingActive = true
					// 		}
					// 		//如果图片高大于宽，则用高框样式
					// 		else if (res.height > res.width) {
					// 			self.picHeight = String((res.height/res.width) * 355.76 ) + 'rpx'
					// 			self.picDengbiActive = false
					// 			self.picHengpingActive = false
					// 			self.picShupingActive = true
					// 		}
					// 		//如果图片宽等于高，则用方性样式
					// 		else {
					// 			self.picHeight = String((res.height/res.width) * 403.84 ) + 'rpx'
					// 			self.picHengpingActive = false
					// 			self.picShupingActive = false
					// 			self.picDengbiActive = true
					// 		}
					
					// 	},
					// 	fail(e) {
					// 		//找不着图片
					// 		self.picShupingActive = false
					// 		self.picDengbiActive = false
					// 		self.picHengpingActive = false
					// 	}
					// })
				}

				// 初始化按钮动画
				let animation2 = uni.createAnimation({
					transformOrigin: "50% 50%",
					duration: 0,
					timingFunction: "ease",
					delay: 0
				});
				animation2.opacity(0)
				animation2.top('0rpx')
				animation2.right('26.92rpx')

				animation2.step();
				this.animationData2 = animation2.export();
			}
		},

		//Vue 实例销毁后调用
		destroyed() {
			// console.log("我挂了，拜拜")
		}

	}
</script>

<style>
	.EmailBlock {
		position: relative;
	}
	
	.picMargin{
		margin-top: 40rpx;
		margin-bottom: 70rpx;
	}

	.EmailBlock .editAnniu{
		font-size: 71rpx;
		color: #fff;
		opacity: 0.60;
		margin-bottom: 16rpx;
	}
	
	.EmailBlock .blockContentCss{
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		flex-direction:column;
	}
	
	.EmailBlock .blockShadow{
		background-color: rgba(255,255,255,0.4);
		box-shadow: 1px 1px 6px #707070;
	}

	.EmailBlock .textBlock {
		position: relative;
		top: 0rpx;
		left: 0rpx;
		display: flex;
		align-items: center;
		margin: 0rpx 7.69rpx;
		/* padding-left: 7.69rpx;
		padding-right: 7.69rpx; */
		border: solid 1.92rpx #707070;
		border-radius: 10rpx;
		height: 365.38rpx;
		overflow: hidden;
		/* background-color: rgba(255,255,255,0.4);
		box-shadow: 1px 1px 6px #707070; */
		margin-bottom: 24rpx;
	}

	.EmailBlock .textBlock .textContent {
		width: 750rpx;
		text-align: center;
		color: #A9AAAC;
	}

	.EmailBlock .rightButton {
		position: absolute;
		top: 0rpx;
		right: 26.92rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 395.38rpx;

	}

	.EmailBlock .rightButton .bclass {
		/* position: fixed; */
		/* left: 17.3rpx;
		bottom: 107.69rpx; */
		width: 76.92rpx;
		height: 76.92rpx;
		border-radius: 76.92rpx;
		border: #000000 solid 1.92rpx;
		text-align: center;
		margin-top: 19.23rpx;
	}

	.EmailBlock .rightButton .bclass view {
		font-size: 30.15rpx;
		margin-top: 18.885rpx
	}

	.EmailBlock .textNormalStyle {
		display: block;
		border: solid 0rpx #000000;
		height: auto !important;
		width: 100% !important;
		margin: 0rpx 0rpx;
	}

	.EmailBlock .textBlock .textContentNor {
		text-align: left;
		color: #000000;
		text-indent: 2em;
	/* 	padding-top: 20rpx; 
		padding-bottom: 20rpx; */
	}

	.EmailBlock .pic {
		display: flex;
		align-items: center;
		justify-content: center;
		/* height: 250px; */
	}

	.EmailBlock .pic image {
		/* align-self: center; */
		/* height: auto; */
		border-radius: 24rpx;
	}


	.EmailBlock .picBlock {
		position: relative;
		top: 0rpx;
		left: 0rpx;
		margin: 7.69rpx 7.69rpx;
		border: solid 1.92rpx #707070;
		border-radius: 10rpx;
		height: 365.38rpx;
		/* background-color: rgba(255,255,255,0.4);
		box-shadow: 1px 1px 6px #707070; */
		margin-bottom: 24rpx;
		/* overflow: hidden; */
	}

	.EmailBlock .picFocusStyle{
		border: solid 1rpx #707070;
		/* background-color: rgba(255,255,255,0.4); */
		box-shadow: 1px 1px 6px #707070;
	}

	.EmailBlock .picShupingNormalStyle {
		display: block;
		border: solid 0rpx #000000;
	}

	.EmailBlock .picShupingSize {
		width: 355.76rpx !important;
	}
	

	.EmailBlock .picHengpingNormalStyle {
		display: block;
		border: solid 0rpx #000000;
	}

	.EmailBlock .picHengpingSize {
		width: 542.3rpx !important;
	}

	.EmailBlock .picDengbiNormalStyle {
		display: block;
		border: solid 0rpx #000000;
	}

	.EmailBlock .picDengbiSize {
		width: 403.84rpx !important;
		height: 403.84rpx !important;
	}
</style>
