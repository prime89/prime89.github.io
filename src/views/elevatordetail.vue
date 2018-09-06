<template>
    <HeaderMenu>
    <div class="main-content">
        <Breadcrumb>
            <BreadcrumbItem to="/">电梯总览</BreadcrumbItem>
            <BreadcrumbItem>详情</BreadcrumbItem>
        </Breadcrumb>
       <EleTabs></EleTabs>

       <div>
           <h3>深圳市龙华区东环一路384号 1号梯</h3>

           <div>
               <div class="elevator-img">
                   <img src="../images/u1335.png" alt="">
               </div>
               <Row class="elevator-info">
                    <Col span="8">
                        <dl class="info-line">
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                        </dl>
                    </Col>
                    <Col span="8">
                        <h3>电梯基本信息</h3>
                        <dl class="info-line">
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                        </dl>
                    </Col>
                    <Col span="8">
                        <h3>使用单位</h3>
                        <dl class="info-line">
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                        </dl>
                        <h3>维保单位</h3>
                        <dl class="info-line">
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                            <dt>在线状态</dt>
                            <dd>在线</dd>
                            <dt>运行状态</dt>
                            <dd>上行（下行、停止）</dd>
                        </dl>
                    </Col>
               </Row>
           </div>
       </div>
       </div>
    </HeaderMenu>
</template>
<script>
    import HeaderMenu from '../components/common/headerMenu';
    import EleTabs from '../components/elevator/tabs.vue';
    export default {
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
