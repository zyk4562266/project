<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#008EC6"
            text-color="#fff" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from './bus';
export default {
    data() {
        return {
            collapse: false,
            items:[
                {
                    icon: 'el-icon-menu',
                    index: 'homePage',
                    title: '租户管理'
                },
            ],
            items1: [
                // {
                //     icon: 'el-icon-menu',
                //     index: 'homePage',
                //     title: '首页'
                // },
                {
                    icon: 'el-icon-tickets',
                    index: '1',
                    name:"任务管理",
                    title: '任务管理',
                    subs: [
                        {
                            index: 'newProject',
                            icon: 'custom-icon-pro',
                            title: '新建任务'
                        },
                        {
                            index: 'send',
                            title: '已发任务'
                        },
                        // {
                        //     index: 'inbox',
                        //     title: '收件箱'
                        // },
                        // {
                        //     index: 'flowSetting',
                        //     title: '流程设置'
                        // }
                    ]
                },
                {
                    icon: 'el-icon-printer',
                    index: '2',
                    name:"资料管理",
                    title: '资料管理',
                    subs: [
                        {
                            index: 'annex',
                            title: '资料列表'
                        },
                        {
                            index: 'classManagement',
                            title: '资料分类'
                        }
                    ]
                },
                {
                    icon: 'el-icon-info',
                    name:"用户及权限管理",
                    index: '3',
                    title: '用户及权限管理',
                    subs: [
                        {
                            index: 'user',
                            title: '架构及用户管理',
                        },
                        {
                            index: 'userPermission',
                            title: '权限及角色管理'
                        },
                        {
                            index: 'postManagement',
                            title: '岗位管理'
                        },
                    ]
                },
                // {
                //     icon: 'el-icon-share',
                //     index: '4',
                //     title: '群组管理',
                //     subs: [
                //         {
                //             index: 'discussionGroup',
                //             title: '讨论组管理'
                //         },
                //         {
                //             index: 'groupChat',
                //             title: '群聊管理'
                //         }
                //     ]
                // },
                // {
                //     icon: 'el-icon-service',
                //     index: 'live',
                //     title: '直播管理'
                // },
                {
                    icon: 'el-icon-edit-outline',
                    name:"试卷管理",
                    index: 'papers',
                    title: '试卷管理'
                },
                // {
                //     icon: 'el-icon-star-on',
                //     index: 'vote',
                //     title: '投票管理'
                // },
                // {
                //     icon: 'el-icon-question',
                //     index: 'qa',
                //     title: '问答管理'
                // },
                {
                    icon: 'el-icon-document',
                    index: '5',
                    name:"新闻管理",
                    title: '新闻管理',
                    subs: [
                        {
                            index: 'newslist',
                            title: '新闻列表'
                        },
                        {
                            index: 'newsclass',
                            title: '新闻分类'
                        }
                    ]
                },
                {
                    icon: 'el-icon-view',
                    index: '7',
                    name:"审核管理",
                    title: '审核管理',
                    subs: [
                        {
                            index: 'informationAudition',
                            title: '资料审核'
                        },
                        {
                            index:'taskReview',
                            title:'任务审核'
                        }
                    ]
                },
                {
                    icon: 'el-icon-date',
                    name:"APP广告",
                    index: 'startAdvertising',
                    title: 'APP广告'
                },
                {
                    icon: 'el-icon-tickets',
                    name:"用户日志",
                    index: 'loginlog',
                    title: '用户日志'
                },
                {
                    icon: 'el-icon-edit',
                    name:"APP协议",
                    index: 'appAgreement',
                    title: 'APP协议'
                },
                {
                    icon: 'el-icon-mobile-phone',
                    name:"在线用户",
                    index: 'onlineUsers',
                    title: '在线用户'
                },
                {
                    icon: 'el-icon-news',
                    name:"广告位管理",
                    index: 'ad',
                    title: '广告位管理'
                },
                {
                    icon: 'el-icon-bell',
                    index: 'notice',
                    name:"系统通知",
                    title: '系统通知'
                },
                {
                    icon: 'el-icon-share',
                    index: '6',
                    name:"会议管理",
                    title: '会议管理',
                    subs: [
                        {
                            index: 'meetingList',
                            title: '会议列表'
                        },
                    ]
                },
                {
                    icon: 'el-icon-refresh',
                    name:"音视频转码",
                    index: 'audioVideo',
                    title: '音视频转码'
                },
                
                // {
                //     icon: 'el-icon-edit',
                //     index: 'learnmodule',
                //     title: '学习模块管理'
                // },
                // {
                //     icon: 'el-icon-more',
                //     index: '404',
                //     title: '其他管理',
                //     subs: [
                //         {
                //             index: 'systemSetup',
                //             title: '系统设置'
                //         },
                //         {
                //             index: 'oplog',
                //             title: '操作日志'
                //         }
                //     ]
                // },
            ],
        }
    },
    computed:{
        onRoutes(){
            // 默认展开的菜单
            return this.$route.path.replace('/','');
        }
    },
    created(){
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })


        const userInfoRole = JSON.parse(localStorage.getItem('userInfoRle'));
        //console.log(userInfoRole)
    

        for(let i=0;i<this.items1.length;i++){
             for(let j=0;j<userInfoRole.length;j++){
                if(this.items1[i].name == userInfoRole[j].name){
                    this.items.push(this.items1[i])
                }
            }
        }

        // console.log(this.items)
        this.routes = this.$route

        const sidebarItems = this.items
        sessionStorage.setItem('sidebarItems',JSON.stringify(sidebarItems))
    },
    
        
}
</script>

<style lang="less" scoped>
.sidebar {
  height: 100%;
  color: #FFFFF6;
  &>ul{
    height: 100%;
  }
}
.el-menu {
  border-right: none;
  /deep/ .el-submenu__title {
    height: 44px;
    line-height: 44px;
  }
  /deep/ .el-menu-item {
      color: #FFFFF6 !important;
      font-size: 2.5rem;
      text-align: center !important;
  }
}
.el-menu-item, {
    height: 44px;
    line-height: 44px;
    // padding-left: 45px !important;
}
</style>

