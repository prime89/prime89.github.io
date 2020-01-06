<template>
  <div class="shipment">
    <i-col :xs="24" :sm="24" :md="12" :lg="12">

      <Form class="form" ref="formItem" :model="formItem" :label-width="80">
        <h3>客户出货信息表</h3>
        <FormItem label="客户名称地址">
          <i-input v-model="formItem.name" placeholder="请输入客户名称地址"></i-input>
        </FormItem>
        <div class="asset">
          <div class="title">
            <div class="left">货物清单</div>
            <div class="right">
              <i-col span="5">
                <div class="label">品名</div>
              </i-col>
              <i-col span="5" offset="1">
                <div class="label">数量</div>
              </i-col>
              <i-col span="5" offset="1">
                <div class="label">单价</div>
              </i-col>
              <i-col span="4" offset="1">
                <div class="label">操作</div>
              </i-col>
            </div>
          </div>
          <FormItem
                  v-for="(item, index) in formItem.items"
                  :key="index"
                  :label="'货物 ' + (index + 1)"
                  :prop="'items.' + index + '.value'"
                  >
            <Row>
              <i-col span="5">
                <i-input type="text" v-model="item.name" placeholder="输入品种..."></i-input>
              </i-col>
              <i-col span="5" offset="1">
                <i-input type="text" v-model="item.count" placeholder="输入数量..."></i-input>
              </i-col>
              <i-col span="5" offset="1">
                <i-input type="text" v-model="item.price" placeholder="输入单价..."></i-input>
              </i-col>
              <i-col span="4" offset="1">
                <Button @click="handleRemove(index)">删除</Button>
              </i-col>
            </Row>
          </FormItem>

          <FormItem>
            <Row>
              <i-col span="12">
                <Button type="dashed" long @click="handleAdd" icon="md-add">新增</Button>
              </i-col>
            </Row>
          </FormItem>
        </div>

        <FormItem label="背标要求">
          <RadioGroup v-model="formItem.backLabel">
            <Radio label="要">要</Radio>
            <Radio label="不要">不要</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="出货单">
          <RadioGroup v-model="formItem.bill">
            <Radio label="要">要</Radio>
            <Radio label="不要">不要</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="出货方式">
          <RadioGroup v-model="formItem.shipWay">
            <Radio label="送货">送货</Radio>
            <Radio label="快递">快递</Radio>
            <Radio label="无料">物流</Radio>
            <Radio label="自提">自提</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="出货地点">
          <RadioGroup v-model="formItem.address">
            <Radio label="仓库">仓库</Radio>
            <Radio label="公司">公司</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="总金额">
          <div class="amount">{{amount}}</div>
        </FormItem>
        <FormItem label="结款方式">
          <RadioGroup v-model="formItem.payment">
            <Radio label="现金">现金</Radio>
            <Radio label="POS">POS</Radio>
            <Radio label="转">转</Radio>
            <Radio label="微信">微信</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="价格序号">
          <RadioGroup v-model="formItem.seq">
            <Radio label="1">1</Radio>
            <Radio label="2">2</Radio>
            <Radio label="3">3</Radio>
            <Radio label="4">4</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="现金收款人">
          <i-input v-model="formItem.reciever" placeholder="请输入现金收款人"></i-input>
        </FormItem>
        <FormItem label="公司人员">
          <i-input v-model="formItem.staff" placeholder="请输入公司人员"></i-input>
        </FormItem>
        <FormItem label="转私账号">
          <div class="text">
            {{formItem.account}}
          </div>
        </FormItem>
        <FormItem label="公司网站">
          <div class="text">
            {{formItem.website}}
          </div>
        </FormItem>
        <FormItem label="备注">
          <i-input v-model="formItem.remark" placeholder="备注"></i-input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formItem')">保存</Button>
          <Button @click="handleReset('formItem')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>

    </i-col>
    <i-col :xs="24" :sm="24" :md="12" :lg="12">
      <Form class="output" ref="formItem" :model="formItem" :label-width="140">
        <h3>客户出货信息表</h3>
        <FormItem label="客户名称和地址：">
          {{formItem.name}}
        </FormItem>
        <FormItem label="时间：">
          {{date | date('yyyy.MM.dd')}}
        </FormItem>
        <div class="asset noborder">
          <div class="title">
            <div class="left">出货数量及价格：</div>
          </div>
          <FormItem
                  v-for="(item, index) in formItem.items"
                  :key="index"
                  :prop="'items.' + index + '.value'"
                  >
            <Row>
              <i-col span="5">
                {{item.name}}
              </i-col>
              <i-col span="5" offset="1">
                {{item.count}}
              </i-col>
              <i-col span="5" offset="1">
                {{item.price}}
              </i-col>
            </Row>
          </FormItem>

        </div>

        <FormItem label="背标要求：">
          {{formItem.backLabel}}
        </FormItem>
        <FormItem label="出货单：">
          {{formItem.bill}}
        </FormItem>
        <FormItem label="出货方式：">
          {{formItem.shipWay}}
        </FormItem>
        <FormItem label="出货地点：">
          {{formItem.address}}
        </FormItem>
        <FormItem label="总金额：">
          <div class="amount">{{amount}}</div>
        </FormItem>
        <FormItem label="结款方式：">
          {{formItem.payment}}
        </FormItem>
        <FormItem label="价格序号：">
          {{formItem.seq}}
        </FormItem>
        <FormItem label="现金收款人：">
          {{formItem.reciever}}
        </FormItem>
        <FormItem label="公司人员：">
          {{formItem.staff}}
        </FormItem>
        <FormItem label="转私账号：">
          <div class="text">
            {{formItem.account}}
          </div>
        </FormItem>
        <FormItem label="公司网站：">
          <div class="text">
            {{formItem.website}}
          </div>
        </FormItem>
        <FormItem label="备注：">
          {{formItem.remark}}
        </FormItem>
      </Form>

    </i-col>

  </div>
</template>

<script>

const date = (time, format, isUTC) => {
  if (!time) {
    time = 0;
  }
  const t = new Date(typeof time === 'number'? time : time);
  const tf = function(i) {
    return (i < 10 ? '0' : '') + i;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a) => {
    switch (a) {
      case 'yyyy':
        return tf(isUTC? t.getUTCFullYear() : t.getFullYear());
      case 'MM':
        return tf(isUTC ? t.getUTCMonth() + 1 : t.getMonth() + 1);
      case 'mm':
        return tf(isUTC? t.getUTCMinutes() : t.getMinutes());
      case 'dd':
        return tf(isUTC? t.getUTCDate() : t.getDate());
      case 'HH':
        return tf(isUTC? t.getUTCHours() : t.getHours());
      case 'ss':
        return tf(isUTC? t.getUTCSeconds() : t.getSeconds());
    }
  });
};

const textarea = document.createElement('textarea');
function copyTextToClipboard(text) {
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
export default {
  name: 'Shipment',
  computed: {
    amount() {
      let sum = 0;
      this.formItem.items.forEach((item) => {
        const price = +item.price;
        const count = +item.count;
        sum += price * count;
      })
      return sum;
    },
    result() {
      const d = date(this.date, 'yyyy.MM.dd');
      const assets = this.formItem.items.map((item) => {
        if (!item.name || !item.price || !item.count) {
          return null;
        }
        return `${item.name} ${item.count}${item.unit} ${item.price}元/${item.unit}`;
      }).filter(v => v).join('\n');

      const text = `
客户名称和地址：${this.formItem.name}
时间：${d}
出货数量及价格：
${assets}
背标要求：${this.formItem.backLabel}
出货单：${this.formItem.bill}
出货方式：${this.formItem.shipWay}
出货地点：${this.formItem.address}
总金额：${this.formItem.amount}元
结款方式：${this.formItem.payment}
价格序号：${this.formItem.seq}
现金收款人：${this.formItem.reciever}
公司人员：${this.formItem.staff}
转私账号： 深圳平安银行红宝路支行 尹秀英 6229 8900 0052 7347
公司网站：http://www.europewine.top
备注：${this.formItem.remark}`;
      return text;
    },
  },
  data() {
    return {
      name: '',
      date: Date.now(),
      submitted: false,
      index: 1,
      formItem: {
        items: [{
          value: '',
          index: 1,
          status: 1,
          name: '',
          count: '',
          price: '',
        }],
        backLabel: '要',
        bill: '要',
        shipWay: '送货',
        address: '仓库',
        amount: 0,
        payment: '现金',
        seq: '1',
        remark: '',
        account: '深圳平安银行红宝路支行 尹秀英 6229 8900 0052 7347',
        website: 'http://www.europewine.top',
        staff: '',
        reciever: '',
      }
    }
  },
  filters: {
    date,
  },
  methods: {
    handleSubmit() {
      this.submitted = true;

      copyTextToClipboard(this.result);
    },
    handleAdd () {
      this.index++;
      this.formItem.items.push({
        value: '',
        index: this.index,
        status: 1
      });
    },
    handleRemove (index) {
      this.formItem.items.splice(index, 1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0;
  text-align: center;
}

.form{
  margin: 10px;
}

.output{
  margin: 10px;
}

.asset{
  margin: 10px 0;
  border: 1px dotted #2e8cf0;
}

.noborder{
  border:none;
}

.ivu-form-item{
  margin-bottom: 6px;
}
.title .left{
  text-align: right;
  display: inline-block;
  width: 80px;
  vertical-align: middle;
  padding: 10px 12px;
  /* line-height: 1; */
}
.output .left{
  width: 140px;
}
.title .right{
  vertical-align: middle;
  display: inline-block;
  width: calc(100% - 80px);

}
.output .right{
  width: calc(100% - 140px);

}
.title .right .label{
  /* line-height: 1; */
  padding: 10px 0;
}


</style>
