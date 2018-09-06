<template>
    <HeaderMenu>
    <div class="main-content">
        <Breadcrumb>
            <BreadcrumbItem to="/">电梯总览</BreadcrumbItem>
            <BreadcrumbItem>详情</BreadcrumbItem>
        </Breadcrumb>
       <EleTabs></EleTabs>

       <div>
           <Form ref="formInline" :model="search" inline label-position="left" :label-width="70">
                <FormItem label="时间范围">
                    <DatePicker type="daterange" :value="search.time" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                </FormItem>
                <FormItem label="事件级别">
                    <Select v-model="search.level" style="width:200px">
                        <Option value="info" key="11">info</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
                </FormItem>
            </Form>
       </div>
    </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu.vue';
    import EleTabs from '../components/elevator/tabs.vue';
    export default {
        data () {
            return {
                search: {
                    time: '',
                    level: '',
                }
            }
        },
        components: {
            EleTabs,
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
