<template>
  <el-tabs type="card" @tab-click="handleClick" v-model="tabs">
    <el-tab-pane label="微信支付" name="W">
		<img :src="qrcode['W']" v-if="qrcode['W']"/>
	</el-tab-pane>
    <el-tab-pane label="支付宝支付" name="A">
			<img :src="qrcode['A']" v-if="qrcode['A']"/>
	</el-tab-pane>
    <el-tab-pane label="信用卡支付" name="card">
        <el-form ref="form" label-width="80px" size="small">
          <el-form-item label="信用卡号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">提交</el-button>
          </el-form-item>
        </el-form>  
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {payment} from './api/pay'
import { parse } from 'babylon';
export default {
	data() {
		return  {
			tabs: 'W',
			qrcode: {
				W: null,
				A: null
			},
			aliPayQrcode: null,
			currentTab: 'W'
		}
	},
	mounted(){
		this.getPayQrcode('W')
	},
	methods: {
    	handleClick: function(tab, event){
			if (tab.name == 'A') {
				this.getPayQrcode('A')
			} else if (tab.name == 'W') {
				this.getPayQrcode('W')
			}
			this.currentTab = tab.name
		},
		getPayQrcode(paymentType, amount = 0.01) {
			if (this.qrcode[paymentType]) {
				return false
			}
			payment({
				paymentAmount: amount,
				paymentType: paymentType,
			}).then((response) => { 
				if (parseInt(response.data.code, 10) === 0) {
					const qrcode = '/qrcode?data=' + response.data.qrcode
					this.qrcode[this.currentTab] = qrcode
				}
			})
		}
  	}
}
</script>
<style lang="stylus">
	.el-form 
		width 360px
</style>


