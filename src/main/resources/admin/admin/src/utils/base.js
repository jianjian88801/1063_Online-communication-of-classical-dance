const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootts2gs/",
            name: "springbootts2gs",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootts2gs/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "古典舞在线交流平台"
        } 
    }
}
export default base
