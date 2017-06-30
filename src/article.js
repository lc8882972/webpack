import Vue from 'vue'
import Utils from './utils.js'

var articleId = Utils.Url.queryString('articleId')
var platform = Utils.Url.queryString('platform')
if (articleId == '') {
    alert('11')
}

new Vue({
    data: {
        reqPara: {
            page: 1,
            pageSize: 10,
            articleId: articleId
        },
        article: {
            title: '',
            content: '',
            viewCount: 0,
            commentCount: 0,
            comments: []
        },
        loading: false,
        platform: platform
    },
    methods: {
        loadData() {
            let self = this
            var xhr = new XMLHttpRequest()
            xhr.open('get', '/api/article/get?articleId=' + self.reqPara.articleId)
            xhr.send()
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText)

                    if (result.status == 200) {
                        self.article.title = result.data.title
                        self.article.content = result.data.content
                        self.article.viewCount = result.data.viewcount
                        self.article.commentCount = result.data.commentcount
                    }
                }
            }
        },
        loadComment() {
            let self = this
            var xhr = new XMLHttpRequest()
            xhr.open('get', '/api/article/getComment?articleId=' + self.reqPara.articleId + '&page=' + self.reqPara.page + '&pageSize=' + self.reqPara.pageSize)
            xhr.send()
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText)

                    if (result.status == 200) {
                        if (result.data.length == 0) {
                            return
                        }

                        if (self.reqPara.page == 1) {
                            self.scroll()
                        }

                        self.article.comments = self.article.comments.concat(result.data)
                        self.loading = false
                    }
                }
            }
        },
        scroll() {
            let self = this
            document.querySelector('.scroll-view').addEventListener('scroll', function() {
                let clientHeight = this.clientHeight
                let scrollTop = this.scrollTop
                let scrollHeight = this.scrollHeight
                if (!self.loading && (clientHeight + scrollTop) / scrollHeight > 0.9) {
                    self.loading = true
                    self.reqPara.page += 1
                    self.loadComment()
                }
            })
        }
    },
    mounted() {
        this.loadData()

        if (platform != 'app') {
            this.loadComment()
        }

    }
}).$mount('#app')