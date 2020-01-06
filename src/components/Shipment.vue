<template>
  <div class="shipment">
    <i-col :xs="24" :sm="24" :md="12" :lg="12">

      <Form class="form" ref="formItem" :model="formItem" :label-width="80">
        <h3>客户出货信息表</h3>
        <FormItem label="客户名称地址">
          <i-input v-model="formItem.name" placeholder="请输入客户名称地址"></i-input>
        </FormItem>
        <div class="asset">
          <div class="title">货物清单</div>
          <div class="head">
            <i-col span="5">
              <div class="label">品名</div>
            </i-col>
            <i-col span="9">
              <div class="label" style="margin-left:10px;">数量</div>
            </i-col>
            <i-col span="6">
              <div class="label" style="margin-left:10px;">单价</div>
            </i-col>
            <i-col span="4">
              <div class="label" style="margin-left:10px;text-align:center;">操作</div>
            </i-col>
          </div>
          <FormItem
                  v-for="(item, index) in formItem.items"
                  :key="index"
                  :label-width="0"
                  :prop="'items.' + index + '.value'"
                  >
            <Row>
              <i-col span="5">
                <i-input type="text" v-model="item.name" placeholder="品种..."></i-input>
              </i-col>
              <i-col span="9">
                <i-input type="text" v-model="item.count" style="padding-left:10px;" placeholder="数量...">
                  <Select v-model="item.unit" slot="append" style="width:60px;">
                    <Option v-for="item in unitList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                </i-input>
              </i-col>
              <i-col span="6">
                <i-input type="text" v-model="item.price" placeholder="单价..." style="padding-left:10px;">
                  <span slot="append">元</span> 
                </i-input>
              </i-col>
              <i-col span="4" offset="">
                <Button @click="handleRemove(index)" icon="ios-trash-outline" type="text" style="margin-left: 10px;"></Button>
              </i-col>
            </Row>
          </FormItem>

          <FormItem
            :label-width="0"
          >
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
            <Radio label="物流">物流</Radio>
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
        <FormItem label="出货数量及价格："></FormItem>
        <div style="padding: 20px;border: 1px dotted #2e8cf0;">
          <div v-if="filteredItems.length === 0" style="color: #aaa;">暂无出货</div>
          <FormItem
                v-for="(item, index) in filteredItems"
                :key="index"
                :label-width="20"
                :prop="'items.' + index + '.value'"
                >
            <Row>
              <i-col span="5">
                {{item.name}}
              </i-col>
              <i-col span="5" offset="1">
                {{item.count}}{{item.unit}}
              </i-col>
              <i-col span="5" offset="1">
                {{item.price}}元/{{item.unit}}
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
总金额：${this.amount}元
结款方式：${this.formItem.payment}
价格序号：${this.formItem.seq}
现金收款人：${this.formItem.reciever}
公司人员：${this.formItem.staff}
转私账号： 深圳平安银行红宝路支行 尹秀英 6229 8900 0052 7347
公司网站：http://www.europewine.top
备注：${this.formItem.remark}`;
      return text;
    },
    filteredItems() {
      return this.formItem.items.filter(v => v.name && v.price && v.count);
    },
  },
  data() {
    return {
      unitList: [{
        value: '个',
        label: '个',
      }, {
        value: '箱',
        label: '箱',
      }, {
        value: '支',
        label: '支',
      }, {
        value: '件',
        label: '件',
      }],
      date: Date.now(),
      submitted: false,
      index: 1,
      formItem: {
        name: '',
        items: [{
          value: '',
          index: 1,
          status: 1,
          name: '',
          count: '',
          price: '',
          unit: '个',
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
      this.$Message.success('内容已复制到粘贴板')
    },
    handleAdd () {
      this.index++;
      this.formItem.items.push({
        value: '',
        index: this.index,
        status: 1,
        name: '',
        unit: '个',
        price: '',
        count: '',
      });
      
    },
    handleRemove (index) {
      this.formItem.items.splice(index, 1)
    },
    handleReset(name) {
      this.formItem.name = '';
      this.formItem.items = [{
        value: '',
        index: 1,
        status: 1,
        name: '',
        count: '',
        price: '',
        unit: '个',
      }];
      this.formItem.backLabel = '要';
      this.formItem.bill = '要';
      this.formItem.shipWay = '送货';
      this.formItem.address = '仓库';
      this.formItem.amount = 0;
      this.formItem.payment = '现金';
      this.formItem.seq = '1';
      this.formItem.remark = '';
      this.formItem.staff = '';
      this.formItem.reciever = '';
      this.$refs[name].resetFields();
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
  padding: 10px;
}

.output{
  padding: 10px;
}

.asset{
  margin: 10px 0;
  padding: 10px;
  border: 1px dotted #2e8cf0;
}

.noborder{
  border:none;
}

.ivu-form-item{
  margin-bottom: 6px;
}
.title{
  width: 80px;
  text-align: right;
  padding-right: 12px;
  margin-bottom: 10px;
}
.output .left{
  width: 120px;
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
  margin-left: 10px;
}


</style>
