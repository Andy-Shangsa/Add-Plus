<template>
    <div class="user-query">
        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-form :inline="true" :model="filters" class="demo-form-inline">
                <el-form-item>
                    <el-input v-model="filters.name" placeholder="查询"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click.native.stop="getUsers">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="exportTable()">导出</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table :data="tableData" v-loading="listLoading" @selection-change="selsChange" style="width: 100%">
            <el-table-column type="selection" width="45">
            </el-table-column>
            <el-table-column type="index" width="65">
            </el-table-column>
            <el-table-column property="transTime" label="日期" sortable width="120">
            </el-table-column>
            <el-table-column property="name" label="姓名" sortable width="100">
            </el-table-column>
            <el-table-column property="sex" label="性别" sortable :formatter="formatSex" width="100">
            </el-table-column>
            <el-table-column property="call" label="手机号" sortable width="130">
            </el-table-column>
            <el-table-column property="carNo" label="卡号" sortable width="150">
            </el-table-column>
            <el-table-column property="warnTime" label="预警" sortable width="120">
            </el-table-column>
            <el-table-column property="info" label="备注">
            </el-table-column>
            <el-table-column label="操作" width="150">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="12" :total="total" style="float:right;">
            </el-pagination>
        </el-col>
        <!--编辑界面-->
        <el-dialog title="编辑" v-model="editFormVisible" :modal-append-to-body="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="editForm.sex">
                        <el-radio class="radio" :label="1">男</el-radio>
                        <el-radio class="radio" :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="手机号码" prop="call">
                    <el-input v-model="editForm.call" placeholder="输入手机号码"></el-input>
                </el-form-item>
                <el-form-item label="用户卡号" prop="carNo">
                    <el-input v-model="editForm.carNo" placeholder="输入用户卡号"></el-input>
                </el-form-item>
                <el-form-item label="交易日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="editForm.transTime"></el-date-picker>
                </el-form-item>
                <el-form-item label="预警日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="editForm.warnTime"></el-date-picker>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="editForm.info"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import util from '../../common/js/util'
import {
    getUserList,
    getUserListPage,
    removeUser,
    batchRemoveUser,
    editUser
} from '../../api/api'
export default {
    name: 'user-query',
    data() {
        return {
            filters: {
                name: ''
            },
            listLoading: false,
            tableData: [],
            total: 10,
            page: 1,
            sels: [],
            filterData: [],
            editFormVisible: false, //新增界面是否显示
            editLoading: false,
            editFormRules: {
                name: [{
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                }]
            },
            //编辑界面数据
            editForm: {
                id: 0,
                name: '',
                sex: -1,
                call: '',
                carNo: '',
                transTime: '',
                warnTime: '',
                info: ''
            },
            currentRow: null
        }
    },
    methods: {
        //性别显示转换
        formatSex: function(row, column) {
            return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
        },
        //获取用户列表
        getUsers() {
            let para = {
                page: this.page,
                name: this.filters.name
            };
            this.listLoading = true;
            getUserListPage(para).then((res) => {
                this.total = res.data.total;
                this.tableData = res.data.users;
                this.listLoading = false;
            });
        },
        handleCurrentChange(val) { //点击分页
            this.page = val;
            this.getUsers();
        },
        //显示编辑界面
        handleEdit: function(index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        },
        //编辑
        editSubmit: function () {
            this.$refs.editForm.validate((valid) => {
                if (valid) {
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.editLoading = true;
                        //NProgress.start();
                        let para = Object.assign({}, this.editForm);
                        para.transTime = (!para.transTime || para.transTime == '') ? '' : util.formatDate.format(new Date(para.transTime), 'yyyy-MM-dd');
                         para.warnTime = (!para.warnTime || para.warnTime == '') ? '' : util.formatDate.format(new Date(para.warnTime), 'yyyy-MM-dd');
                        editUser(para).then((res) => {
                            this.editLoading = false;
                            //NProgress.done();
                            this.$message({
                                message: '提交成功',
                                type: 'success'
                            });
                            this.$refs['editForm'].resetFields();
                            this.editFormVisible = false;
                            this.getUsers();
                        });
                    });
                }
            });
        },
        exportTable() { //导出用户
            this.$message('信息导出成功！');
        },
        selsChange: function(sels) {
            this.sels = sels;
        },
        //删除
        handleDel: function(index, row) {
            this.$confirm('确认删除该记录吗?', '提示', {
                type: 'warning'
            }).then(() => {
                this.listLoading = true;
                //NProgress.start();
                let para = {
                    id: row.id
                };
                removeUser(para).then((res) => {
                    this.listLoading = false;
                    //NProgress.done();
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.getUsers();
                });
            }).catch(() => {});
        },
        //批量删除
        batchRemove: function() {
            var ids = this.sels.map(item => item.id).toString();
            this.$confirm('确认删除选中记录吗？', '提示', {
                type: 'warning'
            }).then(() => {
                this.listLoading = true;
                //NProgress.start();
                let para = {
                    ids: ids
                };
                batchRemoveUser(para).then((res) => {
                    this.listLoading = false;
                    //NProgress.done();
                    this.$message({
                        message: '删除成功',
                        type: 'success'
                    });
                    this.getUsers();
                });
            }).catch(() => {});
        }
    },
    created() {
        this.getUsers();
    }

}
</script>
<style scoped>
.toolbar {
    background: #f2f2f2;
    padding: 10px;
    margin: 10px 0;
}

.toolbar .el-form-item {
    margin-bottom: 0px!important;
}
</style>
