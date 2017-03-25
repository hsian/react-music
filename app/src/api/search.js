
module.exports = function(Api){

	Api.changeApi = function(value){
		var url = "https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&key="+ value +"&g_tk=5381&jsonpCallback=SmartboxKeysCallbackmod_search4272&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";

		var promise = new Promise(function(resolve,reject){		
			createScript(url,"change",resolve);
		});

		return promise;
	}

	Api.searchApi = function(word,fn){
		var url = "https://c.y.qq.com/soso/fcgi-bin/client_search_cp?qqmusic_ver=1298&remoteplace=txt.yqq.center&searchid=49187172393762708&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=50&w="+word+"&g_tk=5381&jsonpCallback=searchCallbacksong8210&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0";

		var promise = new Promise(function(resolve,reject){		
			createScript(url,"search",resolve);
		});

		return promise;
	}

	Api.playInfo = function(id){
		var url = "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg?g_tk=5381&jsonpCallback=MusicJsonCallback37426532594423034&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cid=205361747&callback=MusicJsonCallback37426532594423034&uin=0&songmid="+ id +"&filename=C400"+ id +".m4a&guid=129638144";

		var promise = new Promise(function(resolve,reject){		
			createScript(url,"playinfo",resolve);
		});

		return promise;
	}

	var callbackName = {
		head : document.querySelector("head"),

		change(fn){
			window.SmartboxKeysCallbackmod_search4272 = function(data){
				callbackName._handle(fn,data)
			}
		},

		search(fn){
			window.searchCallbacksong8210 = function(data){
				callbackName._handle(fn,data)
			}
		},

		playinfo(fn){
			window.MusicJsonCallback37426532594423034 = function(data){
				callbackName._handle(fn,data)
			}
		},

		_handle(fn,data){
			this._removeScript();
			fn(data);
		},

		_removeScript(){
			this.head.removeChild(document.querySelector("#lastScript"));
		}
	}

	function createScript(url,method,fn){
		var script = document.createElement("script");
		script.src = url;
		script.id = "lastScript";
		callbackName.head.appendChild(script);
		callbackName[method].call(callbackName,fn)
	}

}