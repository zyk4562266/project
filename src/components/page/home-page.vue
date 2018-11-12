<template>
    <div>
        <div class="mian">
            <div class="newBtn">
                <el-button type="primary" round>创建租户</el-button>
            </div>
            <div class="contents">
                <el-container>
                    <el-aside width="250px">
                        <!-- <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" 
                        text-color="#4F8EC9" active-text-color="#fff" unique-opened router>
                            <template v-for="item in items">
                                    <el-menu-item :index="item.index" :key="item.index">
                                        <span slot="title" @click="btn(item)">{{ item.title }}</span>
                                    </el-menu-item>
                            </template>
                        </el-menu> -->
                        <ul >
                            <li v-for="(item,index) in items" :key="index" class="">
                                <div class="list" :class="{active:index==isActive}" @click="btn(item,index)">
                                    <span slot="title" >{{ item.title }}</span>
                                </div>
                            </li>
                        </ul>
                    </el-aside>
                    <el-main>
                        <con-tent></con-tent>
                    </el-main>
                </el-container>
            </div>
        </div>
        
    </div>
</template>
<script>
import conTent from './content'
export default {
    components:{conTent},
    data(){
        return{
            isActive:-1,
            items: [
                {
                    title: '装备发展部'
                },
                {
                    title: '高炮二团'
                },
            ],
        }
    },
    methods:{
        btn(data,index){
            console.log(data);
            this.isActive = index;
        }
    }
}
</script>
<style lang="less" scoped>
.mian{
    width: 99%;
    .newBtn{
        background: white;
        width: 100%;
        height: 100px;
        text-align: right;
        line-height: 100px;
        button{
            margin-right: 50px;
        }
    }
    .contents{
        margin: 20px 0;
        padding: 30px 0;
        background-color: white;
    }
    .el-aside {
        background-color: white;
        padding: 0 20px;
        color: #333;
        text-align: center;
        // line-height: 200px;
        border-right: 1px solid #EFEFEF;
        .el-menu{
            border-right: 1px solid white;
            .el-menu-item{
                border: 1px solid #D3EBF5;
                margin-bottom: 10px;
            }
        }
        .list{
            width: 100%;
            height: 50px;
            border: 1px solid #79C3E1;
            margin-bottom: 10px;
            line-height: 50px;
            font-size: 2vh;
            color: #4F8EC9;
            &:hover{
                color: #409EFF;
                cursor:pointer;
            }
        }
        .active{
            background-color: #8DCAE1;
        }
    }
    .el-main {
        background-color: white;
        color: #333;
        // text-align: center;
        // line-height: 160px;
        
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }
}
    
</style>
