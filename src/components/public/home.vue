<template>
	<div class="home">
		<v-head :userInfo="userInfo"></v-head>
		<el-row>
			<!-- 侧边栏 -->
			<el-col :xl="3" :lg="4" :md="5" :sm="6" :xs="6" id="leftContent" :class="{'content-collapse':collapse}">
				<v-sidebar></v-sidebar>
			</el-col>
			<!-- 右边内容区域 -->
			<el-col :xl="21" :lg="20" :md="19" :sm="18" :xs="18" id="rightContent" :class="{'content-collapse':collapse}">
				<div class="content-box">
					<div class="content">
						<transition name="move" mode="out-in">
							<keep-alive>
								<router-view :treeData="organizationalStructureData"></router-view>
							</keep-alive>
						</transition>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import vHead from "./header.vue";
import vSidebar from "./sidebar.vue";
import bus from "./bus";
export default {
    name: "home",
    data() {
        return {
            collapse: false,
            msg: "12323",
            // 组织架构数据
            organizationalStructureData: [],
            userInfo: {}
        };
    },
    methods: {
        toTreeData(data) {
            let resData = data;
            let tree = [];
            // for (let i = 0; i < resData.length; i++) {
            //     if (resData[i].parentNode === 0) {
            //         let obj = {
            //             id: resData[i].id, // 1
            //             label: resData[i].name, // 一级部门
            //             children: []
            //         };
            //         tree.push(obj);
            //         resData.splice(i, 1);
            //         i--;
            //     }
            // }
            // console.log(resData)
            // console.log(tree)
            // run(tree);
            // function run(chiArr) {
            //     if (resData.length !== 0) {
            //         for (let i = 0; i < chiArr.length; i++) {
            //             for (let j = 0; j < resData.length; j++) {
            //                 if (chiArr[i].id === resData[j].parentNode) {
            //                     let obj = {
            //                         id: resData[j].id,
            //                         label: resData[j].name,
            //                         children: []
            //                     };
            //                     chiArr[i].children.push(obj);
            //                     resData.splice(j, 1);
            //                     j--;
            //                 }
            //             }
            //             // console.log(chiArr[i].children);
            //             run(chiArr[i].children);
            //         }
            //     }
            // }
            // // console.log(tree)
            // return tree;
        }
    },
    components: {
        vHead,
        vSidebar
    },
    created() {
        bus.$on("collapse", msg => {
            this.collapse = msg;
        });
        // this.$http
        //     .get(this.GLOBAL.serverUrl + "web/organizationalStructure/findAll?")
        //     .then(res => {
        //         // console.log(res)
        //         if (res.data.code === 0) {
        //             let resData = res.data.result; // 服务器返回的组织架构数据
        //             // console.log(resData)
        //             this.organizationalStructureData = this.toTreeData(resData);
        //             // console.log(this.organizationalStructureData)
        //         }
        //     });
    },
    mounted() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // this.userInfo.ApiToken = '?access_token=' + this.userInfo.access_token //必传token字段
        // console.log(this.userInfo)
    }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/base.less";
.home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f0f0f0;
    & > .el-row {
        position: static;
    }
}
#leftContent {
    position: absolute;
    left: 0;
    top: 90px;
    bottom: 0;
    z-index: 999;
}
#leftContent.content-collapse {
    width: 64px;
}
#rightContent {
    position: absolute;
    right: 0;
    top: 90px;
    bottom: 0;
    overflow-y: auto;
    background-color: #f0f0f0;
    transition: all 0.5s;
}
#rightContent.content-collapse {
    box-sizing: border-box;
    width: 100%;
    padding-left: 64px;
}
.el-menu {
    height: 100%;
    border-right: none;
}
// .content-collapse {
//   position: absolute;
//   top: 0;
//   left: 64px;
//   width: 100%;
//   padding-right: 64px;
// }
.main-border {
    .borderStyle1;
    .borderStyle2;
}
</style>

