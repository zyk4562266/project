<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style lang="less">
@import "../static/css/main.css";
// .el-dropdown-menu {
//   top: 32px !important;
//   padding: 0;
// }
.el-message {
    min-width: 220px;
    top: 50px;
    /deep/ .el-message__content {
        font-size: 16px;
        font-size: 1.6rem;
    }
}
</style>
