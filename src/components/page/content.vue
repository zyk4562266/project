<template>
    <div>
        <div class="topcontent">
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple">名称</div></el-col>
                <el-col :span="20">
                    <div class="grid-content bg-purple">名称<i class="el-icon-search3" @click="imgBtn"></i><div></div></div>
                </el-col>
            </el-row>
            <el-row >
                <el-col :span="4">
                    <div class="grid-content bg-purple">账户数</div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">账户数</div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">组织机构数</div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">账户数</div>
                </el-col>
            </el-row>
            <el-row >
                <el-col :span="4">
                    <div class="grid-content bg-purple">到期时间</div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">到期时间</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-button size='small' @click="openCertificate" ><i class="el-icon-search1"></i>更新证书</el-button>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-button size='small'><i class="el-icon-search2"></i>下载证书</el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-tabs  v-model="activeName2" type="card" @tab-click="handleClick" >
                <el-tab-pane label="服务器状态" name="first" >
                    <el-table :data="tableData"  style="width: 100%; background: #F4F4F4;">
                        <el-table-column prop="date" label="服务器名称">
                        </el-table-column>
                        <el-table-column prop="name" label="地址" >
                        </el-table-column>
                        <el-table-column prop="address" label="端口号">
                        </el-table-column>
                        <el-table-column prop="address" label="状态">
                        </el-table-column>
                        <el-table-column prop="address" label="操作">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="组织架构" name="second">
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" default-expand-all='true'></el-tree>
                </el-tab-pane>
                <el-tab-pane label="账号列表" name="third">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="服务器名称">
                        </el-table-column>
                        <el-table-column prop="name" label="地址" >
                        </el-table-column>
                        <el-table-column prop="address" label="端口号">
                        </el-table-column>
                        <el-table-column prop="address" label="状态">
                        </el-table-column>
                        <el-table-column prop="address" label="操作">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </div>
        <el-dialog title="修改名称" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-form  :model="name" label-width="80px">
                <el-form-item label="名称">
                    <el-input v-model="name.name" placeholder="请输入名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="uploadName">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="更新证书" :visible.sync="dialogCertificate" width="60%" :before-close="handleClose">
            <el-form  :model="certificateForm" label-width="200px">
                <el-form-item label="证书到期时间">
                    <el-input v-model="certificateForm.time" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item label="更新到期时间">
                    <el-input v-model="certificateForm.time" placeholder="请输入名称"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="uploadCertificate">创建新证书</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:{},
            certificateForm:{},
            dialogVisible:false,
            dialogCertificate:false,
            activeName2: 'first',
            data: [{
                label: '一级 1',
                children: [
                    {
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    },{
                        label:'二级 1-2'
                    }
                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市'
            }]
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleNodeClick(data) {
            console.log(data);
        },
        imgBtn(){
            console.log(1111111);
            this.dialogVisible = true;
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        uploadName(){
            console.log(222222222)
        },
        openCertificate(){
            this.dialogCertificate = true;
        },
        uploadCertificate(){
            console.log(33333)
        }
    }
}
</script>
<style lang="less" scoped>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
        /deep/.el-button {
            background-color: #008EC6;
            color: #f9fafc;
        }
    }
    .el-tabs{
        /deep/.el-tabs__header{
            margin-bottom: 0;
            /deep/.el-tabs__nav{
                border: none;
            }
            /deep/.el-tabs__item{ 
                margin-right: 10px;
                border: 1px solid #e4e7ed;
                &:hover{
                    color: black;
                }
                &:first-child{
                    border-left: 1px solid #e4e7ed;
                }
                
            } 
            /deep/.is-active{
                    background-color: #74C8E2;
                    color: #f9fafc;
            }
        }
        /deep/.el-tabs__content{
            background-color: #F4F4F4;
            /deep/.el-table{
                 background-color: #F4F4F4;
            }
        }
        
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        // text-align: center;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-icon-search1{
        background: url(../../assets/images/certificate.svg) center no-repeat;
        background-size: cover;
    }
    .el-icon-search1:before{
        content: "\e611";
        font-size: 20px;
        visibility: hidden;
    }
    .el-icon-search2{
        background: url(../../assets/images/download.svg) center no-repeat;
        background-size: cover;
    }
    .el-icon-search2:before{
        content: "\e611";
        font-size: 20px;
        visibility: hidden;
    }
    .el-icon-search3{
        background: url(../../assets/images/modification.svg) center no-repeat;
        background-size: cover;
        &:hover{
            cursor:pointer;
        }
    }
    .el-icon-search3:before{
        content: "\e611";
        font-size: 20px;
        visibility: hidden;
    }
    .topcontent{
        margin-bottom: 50px;
        font-size: 15px;
        // .el-icon-my-export::before{
        // background-image: url(../../assets/images/certificate.svg) ;
        //     // background-size: cover;
        // }
        /deep/.el-dialog__header{
            text-align: center;
        }
    }
</style>
