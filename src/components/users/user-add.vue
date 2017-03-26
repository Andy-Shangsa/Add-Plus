<template>
    <div class="user-add">
        <el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
            <el-col :span="14" :offset="5">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="addForm.name" placeholder="输入用户姓名"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="14" :offset="5">
                <el-form-item label="手机" prop="call">
                    <el-input v-model="addForm.call" placeholder="输入手机号码"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="14" :offset="5">
                <el-form-item label="卡号" prop="carNo">
                    <el-input v-model="addForm.carNo" placeholder="输入用户卡号"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="14" :offset="5">
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="addForm.sex">
                        <el-radio class="radio" :label="1">男</el-radio>
                        <el-radio class="radio" :label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-col>
            
            <el-col :md="7" :xs="14" :offset="5">
                <el-form-item label="交易日期" prop="transTime">
                    <el-date-picker type="date" placeholder="选择交易日期" v-model="addForm.transTime" :picker-options="pickerOptions"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :md="7" :xs="{span:14,offset:5}">
                <el-form-item label="预警日期" prop="warnTime">
                    <el-date-picker type="date" placeholder="选择预警日期" v-model="addForm.warnTime" :picker-options="warnDateOptions"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="14" :offset="5">
                <el-form-item label="备注信息" prop="info">
                    <el-input type="textarea" placeholder="输入备注信息" v-model="addForm.info"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="14" :offset="5">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('addForm')">立即创建</el-button>
                    <el-button @click="resetForm('addForm')">重置</el-button>
                </el-form-item>
            </el-col>
        </el-form>
    </div>
</template>
<script>
import util from '../../common/js/util'
import {
    addUser
} from '../../api/api'
export default {
    name: 'user-add',
    data() {
        return {
            addFormRules: {
                name: [{
                    required: true,
                    message: '姓名不能为空',
                    trigger: 'blur'
                }],
                call: [{
                    required: true,
                    message: '手机号不能为空',
                    trigger: 'blur'
                }],
                carNo: [{
                    required: true,
                    message: '卡号不能为空',
                    trigger: 'blur'
                }],
                transTime: [{
                    type: 'date',
                    required: true,
                    message: '交易日期不能为空',
                    trigger: 'change'
                }],
                warnTime: [{
                    type: 'date',
                    required: true,
                    message: '预警日期不能为空',
                    trigger: 'change'
                }]
            },
            //新增界面数据
            addForm: {
                name: '',
                sex: -1,
                call: '',
                carNo: '',
                date1: '',
                date2: '',
                transTime: '',
                warnTime: '',
                info: ''
            },
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            },
            warnDateOptions: {
                shortcuts: [{
                    text: '一周后',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let para = Object.assign({}, this.addForm);
                    para.transTime = util.formatDate.format(new Date(para.transTime), 'yyyy-MM-dd')
                    para.warnTime = util.formatDate.format(new Date(para.warnTime), 'yyyy-MM-dd')
                    addUser(para).then((res) => {
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                        this.$refs['addForm'].resetFields();
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }

}
</script>
<style scoped>
</style>
