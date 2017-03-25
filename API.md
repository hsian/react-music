
# 企鹅音乐API

## 搜索

https://c.y.qq.com/soso/fcgi-bin/client_search_cp?qqmusic_ver=1298&remoteplace=txt.yqq.center&searchid=49187172393762708&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w=【 搜索关键字 】&g_tk=5381&jsonpCallback=searchCallbacksong8210&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0

主要参数：

- w = 【 搜索关键字 】
- loginUin = 【 登陆用户名，如QQ号码 】


## 歌曲信息

### 选中歌曲时根据 albummid 获取信息

https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?albummid=002PSykb2LNyPt&g_tk=5381&jsonpCallback=albuminfoCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0

主要参数：

- albummid ： 【 搜索返回的 JSONP 对象下的 song.list[n].albummid 】

### 播放信息

https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=5381&jsonpCallback=MusicJsonCallback37426532594423034&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&callback=MusicJsonCallback37426532594423034&uin=0&songmid=000GBQdt03B4EQ&filename=C400000GBQdt03B4EQ.m4a&guid=129638144

主要参数：

songmid ： 【 搜索返回的 JSONP 对象下的 song.list[n].media_mid 】
filename ： "c400" + 【 搜索返回的 JSONP 对象下的 song.list[n].media_mid 】

返回信息：

- filename ： items.filename
- vkey : items.vkey


**播放源**

- filename ： items.filename
- vkey : items.vkey

source src="http://dl.stream.qqmusic.qq.com/【 filename 】.m4a?vkey=【 vkey 】&amp;guid=129638144&amp;uin=0&amp;fromtag=66"

**图片**

- albummid ： 【 搜索返回的 JSONP 对象下的 song.list[n].albummid 】

https://y.gtimg.cn/music/photo_new/T002R300x300M000【 albummid 】.jpg?max_age=2592000

**歌词**

- songmid ： 【 搜索返回的 JSONP 对象下的 song.list[n].media_mid 】
- pcachetime ： 时间戳 Date.parse(new Date())

https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=【 pcachetime 】&songmid=【 songmid 】&g_tk=5381&jsonpCallback=MusicJsonCallback_lrc&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0






