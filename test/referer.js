
// 设置referer 
// 获取歌词

const https = require('https');

var options = {
  hostname: 'c.y.qq.com',
  port: 443,
  path: '/lyric/fcgi-bin/fcg_query_lyric_new.fcg?callback=MusicJsonCallback_lrc&pcachetime=1490156820868&songmid=000AlR5V47HUlj&g_tk=5381&jsonpCallback=MusicJsonCallback_lrc&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0',
  method: 'GET',
  headers : {
  	Referer : "https://y.qq.com/portal/player.html"
  }
};

var req = https.request(options, (res) => {
  console.log('状态码：', res.statusCode);
  console.log('请求头：', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();