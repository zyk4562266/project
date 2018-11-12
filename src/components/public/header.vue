<template>
	<div class="header">
		<el-row>
			<el-col :xl="3" :lg="4" :md="5" :sm="6" :xs="6" class="logo" :class="{'hideChange':collapse}">
                <!-- 测试服 -->
				<!-- {{ !collapse ? '强军微课堂' : 'V1.0'}} -->
                <!-- 正式服 -->
                <!-- {{ !collapse ? '学习强军微课堂管理后台' : 'V1.0'}} -->
                <!-- 推广服 -->
                {{ !collapse ? '党建产品管理后台' : 'V1.0'}}
                <!-- 红星高炮二团 -->
                <!-- {{ !collapse ? '红星E课管理后台' : 'V1.0'}} -->
				<!-- 折叠按钮 -->
				<!-- <div class="collapse-btn" @click="collapseChage"></div> -->
			</el-col>
			<el-col :xl="21" :lg="20" :md="19" :sm="18" :xs="18" class="top-nav" :class="{'activeChange':collapse}">
				<el-row type="flex" justify="end" id="top-menu">
					<!-- <el-col :xl="3" :lg="4" :md="5" :sm="6" :xs="7">{{ nowTime }}</el-col> -->
					<el-col :xl="3" :lg="3" :md="4" :sm="6" :xs="6"><img src="../../assets/images/portrait.svg" alt="" width="30px" height="30px">  {{userInfo.name}}</el-col>
					<!-- <el-col :xl="1" :lg="1" :md="2" :sm="3"><i class="el-icon-setting"></i>设置</el-col> -->
					<el-col :xl="2" :lg="2" :md="3" :sm="4" :xs="4" @click.native="signOut">
                        <span class="sign-out custom-icon" >登出</span>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import bus from "./bus";
export default {
    props: ["userInfo"],
    data() {
        return {
            collapse: false,
            nowTime: "",
            name: ""
        };
    },
    methods: {
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit("collapse", this.collapse);
        },
        checkTime(i) {
            if (i < 10) {
                i = "0" + i;
                //    当数值小于10的时候，在i前面加个0字符串。
            }
            return i;
        },
        startTime() {
            let _this = this;
            setInterval(function() {
                let today = new Date();
                let y = today.getFullYear();
                let month = today.getMonth();
                let d = today.getDate();
                let h = today.getHours();
                let m = today.getMinutes();
                let s = today.getSeconds();
                month = _this.checkTime(month + 1); // 月份加1
                d = _this.checkTime(d);
                h = _this.checkTime(h);
                m = _this.checkTime(m);
                s = _this.checkTime(s);
                _this.nowTime =
                    y + "-" + month + "-" + d + " " + h + ":" + m + ":" + s;
            }, 1000);
        },
        signOut() {
            let _this = this;
            let userInfoRle = JSON.parse(localStorage.getItem('userInfoRle'));
            console.log(userInfoRle);
            userInfoRle.forEach(row =>{
                if(row.description == '游客'){
                    _this.$confirm("确认退出吗?", "提示", {
                        type: "warning"
                    })
                    .then(() => {
                        localStorage.removeItem("userInfo");
                        localStorage.removeItem("userInfoRle");
                        _this.$router.push("/");
                    })
                    .catch(() => {
                        console.log("取消");
                    });
                   
                }else{
                    _this.$confirm("确认退出吗?", "提示", {
                        type: "warning"
                    })
                    .then(() => {
                        // _this.$router.push("/");
                        _this.$http.post(_this.GLOBAL.serverUrl + "logouting?").then(res => {
                                if (res.data.code === 0) {
                                    localStorage.removeItem("userInfo");
                                    localStorage.removeItem("userInfoRle");
                                    _this.$router.push("/");

                                    console.log("OK");
                                } else {
                                    _this.$message({
                                        type: "error",
                                        message: res.data.msg
                                    });
                                }
                            });
                    })
                    .catch(() => {
                        console.log("取消");
                    });
                }
            })
            
        }
    },
    computed: {
        //   username(){
        //       let username = sessionStorage.getItem('ms_username');
        //       return username ? username : this.name;
        //   }
    },
    created() {
        this.startTime();
    }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/base.less";
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    line-height: 80px;
    .fontColorWhite;
    text-align: center;
    .logo {
        position: relative;
        // .fontSize16;
        font-size: 2.5rem;
        font-weight: 900;
        background-color:#008EC6;
    }
    .el-col {
        height: 80px;
    }
    .collapse-btn {
        position: absolute;
        right: -50px;
        top: 0;
        width: 80px;
        height: 80px;
        z-index: 999;
        background: url(../../assets/images/menu-tg.svg) no-repeat center center;
    }
    .top-nav {
        position: relative;
        background-color: #008EC6;
        img{
            margin-top: 23px;
        }
    }
    .hideChange {
        position: absolute;
        top: 0;
        left: 0;
        width: 64px;
        z-index: 999;
    }
    .activeChange {
        box-sizing: 100%;
        width: 100%;
        padding-left: 64px;
    }
    .el-dropdown {
        color: #fff;
    }
}
#top-menu {
    .el-col {
        font-size: 14px;
        font-size: 1.4rem;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
        .sign-out::before {
            background-image: url(../../assets/images/sign-out.svg);
        }
    }
}
</style>


