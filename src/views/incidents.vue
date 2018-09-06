<template>
    <HeaderMenu>
        <Form ref="formInline" :model="search" inline label-position="left" :label-width="70" class="search-bar">
            <FormItem label="时间范围">
                <DatePicker type="daterange" :value="search.time" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
            </FormItem>
            <FormItem label="事件名称">
                <Select v-model="search.level" style="width:200px">
                    <Option value="info" key="11">info</Option>
                </Select>
            </FormItem>
            <FormItem label="事件级别">
                <Select v-model="search.level" style="width:200px">
                    <Option value="info" key="11">info</Option>
                </Select>
            </FormItem>
            <FormItem label="电梯注册码" :label-width="80">
                <Select v-model="search.level"  style="width:200px">
                    <Option value="info" key="11">info</Option>
                </Select>
            </FormItem>
            <FormItem label="区域">
                <Cascader :data="data" v-model="search.zone" style="width: 300px;"></Cascader>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
            </FormItem>
        </Form>
       <div class="main-content">
           
       </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    export default {
        data () {
            return {
                search: {
                    time: '',
                    level: '',
                    zone: [],
                },
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
            }
        },
        components: {
            HeaderMenu,
        },
        
    }
</script>
<style scoped>
h3{
    font-size: 16px;
    margin-bottom: 20px;
}
.elevator-img{
    float:left;
    width: 300px;
}
.elevator-img img{
    width: 300px;
}
.elevator-info{
    margin-left: 330px;
}
</style>
