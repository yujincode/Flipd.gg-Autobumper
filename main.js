const _0x17dee5=_0x475a;(function(_0x428419,_0x10540a){const _0x284608=_0x475a,_0x1528b8=_0x428419();while(!![]){try{const _0x3a8cc0=parseInt(_0x284608(0x214))/0x1+parseInt(_0x284608(0x1a0))/0x2*(-parseInt(_0x284608(0x19c))/0x3)+-parseInt(_0x284608(0x1c1))/0x4+-parseInt(_0x284608(0x1c0))/0x5+-parseInt(_0x284608(0x1b4))/0x6+-parseInt(_0x284608(0x20c))/0x7*(parseInt(_0x284608(0x202))/0x8)+-parseInt(_0x284608(0x19d))/0x9*(-parseInt(_0x284608(0x185))/0xa);if(_0x3a8cc0===_0x10540a)break;else _0x1528b8['push'](_0x1528b8['shift']());}catch(_0x390ecc){_0x1528b8['push'](_0x1528b8['shift']());}}}(_0x1a4c,0xa9976),url_prefix=_0x17dee5(0x207),restore_prefix=_0x17dee5(0x18d),cookie_split=_0x17dee5(0x1d9),bump_every=(0xf+0.5)*0x3c,time_between_bumps=0.5*0x3c,time_between_retry_bump=0.5*0x3c,current_version=_0x17dee5(0x194));function getTimeFull(){const _0x551b8c=_0x17dee5;return new Date()[_0x551b8c(0x182)]()/0x3e8;}function getDateStr(){const _0x3d34ab=_0x17dee5;return date=new Date(),date['getDate']()+'-'+(date[_0x3d34ab(0x203)]()+0x1)+'-'+date['getFullYear']();}function getTime(){return parseInt(getTimeFull());}function getLoadedSince(){const _0x28540a=_0x17dee5;return getTimeFull()-window[_0x28540a(0x20e)][_0x28540a(0x1ef)][_0x28540a(0x1c2)]/0x3e8;}const zeroPad=(_0x5e0c93,_0x47a50f)=>String(_0x5e0c93)[_0x17dee5(0x21b)](_0x47a50f,'0');function getLatestVersion(){const _0x15033e=_0x17dee5;return xhr=new XMLHttpRequest(),xhr[_0x15033e(0x222)](_0x15033e(0x183),_0x15033e(0x212)+getDateStr(),![]),xhr['send'](),xhr[_0x15033e(0x177)][_0x15033e(0x1ce)](_0x15033e(0x1df))[0x1][_0x15033e(0x1ce)]('\x22')[0x0];}function cmpVersions(_0x2e5419,_0x3521ab){const _0x38480a=_0x17dee5;regExStrip0=/(\.0+)+$/,segmentsA=_0x2e5419[_0x38480a(0x198)](regExStrip0,'')[_0x38480a(0x1ce)]('.'),segmentsB=_0x3521ab[_0x38480a(0x198)](regExStrip0,'')['split']('.'),l=Math[_0x38480a(0x1b5)](segmentsA[_0x38480a(0x17a)],segmentsB[_0x38480a(0x17a)]);for(i=0x0;i<l;i++){diff=parseInt(segmentsA[i],0xa)-parseInt(segmentsB[i],0xa);if(diff)return diff;}return segmentsA['length']-segmentsB['length'];}try{latest_version=getLatestVersion(),update_available=cmpVersions(latest_version,current_version)>0x0;}catch(_0x3be34e){console[_0x17dee5(0x1f3)](_0x17dee5(0x1d8)),latest_version=current_version,update_available=![];}function getCookieNames(){const _0x5d9c22=_0x17dee5;ca=document[_0x5d9c22(0x1d4)][_0x5d9c22(0x1ce)](';\x20');for(i=0x0;i<ca['length'];i++){ca[i]=ca[i][_0x5d9c22(0x1ce)]('=')[0x0];}return ca;}function getBumpingTIDs(){const _0x307a47=_0x17dee5;ca=getCookieNames(),out=[];for(i=0x0;i<ca[_0x307a47(0x17a)];i++){Number['isInteger'](ca[i]*0x1)&&out[_0x307a47(0x1b7)](ca[i]);}return out;}function getRestoreBumpingTIDs(){const _0x28f31d=_0x17dee5;ca=getCookieNames(),out=[];for(i=0x0;i<ca[_0x28f31d(0x17a)];i++){ca[i][_0x28f31d(0x211)](restore_prefix)&&Number['isInteger'](ca[i][_0x28f31d(0x1ce)](restore_prefix)[0x1]*0x1)&&out[_0x28f31d(0x1b7)](ca[i]);}return out;}function setCookie(_0x1bfa44,_0x579864,_0x789e98=0x16d*0x18*0x3c*0x3c){const _0x39cf61=_0x17dee5;cvalue_enc=CryptoJS[_0x39cf61(0x218)][_0x39cf61(0x221)](_0x579864,_0x39cf61(0x1d4))[_0x39cf61(0x216)](),d=new Date(),d[_0x39cf61(0x181)](d[_0x39cf61(0x182)]()+_0x789e98*0x3e8),expires='expires='+d['toUTCString'](),document[_0x39cf61(0x1d4)]=_0x1bfa44+'='+cvalue_enc+';'+expires+';path=/';while(_0x579864!=getCookie(_0x1bfa44)){}}function getCookie(_0x16634b){const _0x418965=_0x17dee5;name_prefix=_0x16634b+'=',ca=document['cookie'][_0x418965(0x1ce)](';');for(i=0x0;i<ca[_0x418965(0x17a)];i++){c=ca[i];while(c[_0x418965(0x1fa)](0x0)=='\x20'){c=c[_0x418965(0x1d0)](0x1);}if(c['indexOf'](name_prefix)==0x0){out=c[_0x418965(0x1d0)](name_prefix[_0x418965(0x17a)],c[_0x418965(0x17a)]);try{return CryptoJS['AES'][_0x418965(0x17b)](out,_0x418965(0x1d4))['toString'](CryptoJS[_0x418965(0x18c)]['Utf8']);}catch{return out;}}}return'';}function removeCookie(_0x5698f4){const _0xf2c37b=_0x17dee5;document[_0xf2c37b(0x1d4)]=_0x5698f4+_0xf2c37b(0x1fc);}function _0x475a(_0x5cf3e7,_0x32a5ed){const _0x1a4c6e=_0x1a4c();return _0x475a=function(_0x475a1f,_0x4fd941){_0x475a1f=_0x475a1f-0x173;let _0x3dd5f2=_0x1a4c6e[_0x475a1f];return _0x3dd5f2;},_0x475a(_0x5cf3e7,_0x32a5ed);}function check_alerts(_0x131275){const _0x4bf863=_0x17dee5;url=url_prefix+_0x4bf863(0x197),xhr=new XMLHttpRequest(),xhr[_0x4bf863(0x222)](_0x4bf863(0x183),url),xhr[_0x4bf863(0x209)]=function(){const _0x566df9=_0x4bf863;xhr['readyState']===0x4&&(xhr[_0x566df9(0x1b0)]==0xc8?(response=xhr[_0x566df9(0x177)],test_element=new DOMParser()[_0x566df9(0x21d)](response,_0x566df9(0x1a8)),unread_elements=test_element['getElementsByClassName'](_0x566df9(0x1e8)),unreads=unread_elements['length'],unreads!=0x0&&(console[_0x566df9(0x1f3)]('Alert'),unreads==0x1?(pfp=unread_elements[0x0][_0x566df9(0x1e5)][0x0][_0x566df9(0x1e5)][0x0][_0x566df9(0x1e5)][0x0]['src'],data_link=unread_elements[0x0]['children'][0x1]['children'][0x0][_0x566df9(0x1c4)],data=unread_elements[0x0][_0x566df9(0x1e5)][0x1][_0x566df9(0x1e5)][0x0][_0x566df9(0x1ed)][_0x566df9(0x1ce)]('\x0a'),user=data[0x0][_0x566df9(0x1ce)]('\x20')[0x0],data_text=data[0x0],time=data[0x1],alertLog(_0x131275,message=data_text,user=user,time=time,data_link=data_link,pfp=pfp)):alertLogMultiple(_0x131275,unreads))):console[_0x566df9(0x1f3)](_0x566df9(0x1bf)));},xhr[_0x4bf863(0x1b9)]();}function _0x1a4c(){const _0xb5d64c=['newpoints.php','webhook','log','<p\x20class=\x22','Stop','getElementsByTagName','saved_messages','documentElement','Alerts','charAt','<div\x20id=\x22posts\x22>','=;\x20Max-Age=-99999999;','autobumper','#ff0000','</a></td><td>','\x20day','newpoints.php?action=autobump','8GcEuTD','getMonth','Autobumper\x20v','wraps','my_post_key\x20not\x20found,\x20refreshing\x20in\x201\x20minute','https://flipd.gg/',':\x20Activated\x20(','onreadystatechange','newpoints.php?action=autobump\x22>','New\x20Message\x20(1)','4896479qykDxY','Error\x20-\x20','performance','\x20|\x20Bumping\x20Tab\x20Not\x20Open','\x22\x20target=\x22_blank\x22>','startsWith','https://raw.githubusercontent.com/yujincode/Flipd.gg-Autobumper/main/manifest.json?date=','Autobump','1139023TYTArM','removeChild','toString','Bumping...','AES','localStorage','Same\x20loaded_since!\x20Refresh.','padStart','There\x20are\x20','parseFromString','Higher\x20loaded_since!\x20Continue.','red_alert','POST','encrypt','open','floor','newreply.php?tid=','<tr><td\x20align=\x22center\x22><a\x20href=\x22https://flipd.gg/showthread.php?tid=','display:\x20inline;','\x20month','responseText','<p\x20class=\x22red_alert\x22><a\x20href=\x22https://github.com/yujincode/Flipd.gg-Autobumper\x22>','Error\x20Detected,\x20Refreshing\x20in\x201\x20minute.','length','decrypt','stringify','pid=','appendChild','contains','table','setTime','getTime','GET','index.php','78930WqVVqH','Message\x20cannot\x20be\x20shorter\x20than\x208\x20characters.','New\x20Messages\x20(','\x0a\x09\x09\x09\x09\x09\x09\x09<table\x20border=\x220\x22\x20cellspacing=\x220\x22\x20cellpadding=\x225\x22\x20class=\x22tborder\x20hundo\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<tbody><tr>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22thead\x22\x20colspan=\x223\x22><strong>Your\x20Current\x20Autobumping\x20Threads</strong></td>\x0a\x09\x09\x09\x09\x09\x09\x09</tr>\x0a\x09\x09\x09\x09\x09\x09\x09<tr>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2220%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Thread\x20ID\x20(TID)</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2240%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Message</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2220%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Next\x20Autobump</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09<td\x20class=\x22tcat\x22\x20width=\x2220%\x22\x20align=\x22center\x22><span\x20class=\x22smalltext\x22><strong>Stop</strong></span></td>\x0a\x09\x09\x09\x09\x09\x09\x09</tr>','setRequestHeader','newposts',':\x20Deactivated\x20(Key\x20Expired)','enc','restore-','URL','<p\x20class=\x22red_alert\x22><a\x20href=\x22','getElementsByName','Utf8','content-type','\x20|\x20Alerts:\x20Activated','3.5','bumping','Unlimited','alerts.php','replace','getElementsByClassName','refreshing','location','6vbqOUw','4203CHjOoX','<span\x20style=\x22font-weight:500\x20!important;\x22>Try\x20again\x20in\x201\x20minute.</span>','reload','341680XQjker','innerHTML','application/x-www-form-urlencoded','Discord\x20Webhook\x20(Leave\x20empty\x20to\x20deactivate):\x20','my_post_key=','application/json',':\x20Update\x20Available','textarea','text/html','readyState','breadcrumb','undefined','navigation','body','<form\x20id=\x22challenge-form\x22','cf-error-details','status',':\x20Deactivated','Lower\x20loaded_since!\x20Stop.','Cloudflare\x20Detected\x20Bump\x20Error,\x20Refreshing\x20in\x205\x20seconds...','3283836QJeXqz','min','responseURL','push','New\x20Alert','send','Thread','Key:\x20','challenge-form','Key','\x22author\x22:\x20{\x0a\x20\x20\x22name\x22:\x20\x22','Error\x20getting\x20alerts.','5878105ADgNjN','5465216WAZYBJ','domContentLoadedEventEnd','Locked','href','random','value','heartbeat','Incorrect\x20Webhook','includes','search.php','<textarea','getElementById',':\x20Deactivated\x20(Invalid\x20Key)','split','</tbody></table>','substring','Closed','\x20year','parentElement','cookie','parse','@everyone','onclick','Error\x20getting\x20latest\x20version.','<|.|>','bam_announcements','&method=quickreply&message=','toLowerCase','Waiting\x20for\x20reload...','newposts\x20not\x20found,\x20Refreshing\x20in\x201\x20minute.','\x22version\x22:\x20\x22','head','createElement','trow1\x20highlight\x20truncate\x20td-rounded','Content-type','style','children','<tr><td\x20colspan=\x224\x22>No\x20threads\x20are\x20being\x20autobumped.</td></tr>','Removed\x20-\x20','alert--unread','</a></p>','][/color]','tid=','onload','innerText','Bumped\x20-\x20','timing','button'];_0x1a4c=function(){return _0xb5d64c;};return _0x1a4c();}function check_messages(_0x26f792){const _0x419c4f=_0x17dee5;url=url_prefix+'messages',xhr=new XMLHttpRequest(),xhr[_0x419c4f(0x222)]('GET',url),xhr['onreadystatechange']=function(){const _0x698b4=_0x419c4f;if(xhr[_0x698b4(0x1a9)]===0x4){if(xhr['status']==0xc8){response=xhr['responseText'],test_element_1=new DOMParser()[_0x698b4(0x21d)](response,'text/html'),messages={},unread_tds=test_element_1[_0x698b4(0x199)](_0x698b4(0x1e2));for(i=0x0;i<unread_tds[_0x698b4(0x17a)];i++){message_user=unread_tds[i][_0x698b4(0x1e5)][0x0]['innerText'],message_link=unread_tds[i]['children'][0x0][_0x698b4(0x1c4)],message_user_pfp=unread_tds[i]['parentElement'][_0x698b4(0x1e5)][0x1][_0x698b4(0x1e5)][0x0][_0x698b4(0x1e5)][0x1]['src'],message_message=unread_tds[i][_0x698b4(0x1e5)][0x1]['innerText'],message_count=unread_tds[i][_0x698b4(0x1d3)][_0x698b4(0x1e5)][0x1][_0x698b4(0x1e5)][0x0]['children'][0x3]['innerText']*0x1,messages[message_user]=[message_message,message_count,message_link,message_user_pfp];}window[_0x698b4(0x219)][_0x698b4(0x1f7)]==undefined&&(window['localStorage'][_0x698b4(0x1f7)]=JSON[_0x698b4(0x17c)]({}));saved_messages=JSON[_0x698b4(0x1d5)](window[_0x698b4(0x219)][_0x698b4(0x1f7)]);for(saved_message_user in saved_messages){!(saved_message_user in messages)&&delete saved_messages[saved_message_user];}for(message_user in messages){if(message_user in saved_messages&&saved_messages[message_user][0x0]==messages[message_user][0x0]&&saved_messages[message_user][0x1]==messages[message_user][0x1]){}else console[_0x698b4(0x1f3)]('Message'),message_message=messages[message_user][0x0],message_count=messages[message_user][0x1],message_link=messages[message_user][0x2],message_user_pfp=messages[message_user][0x3],messageLog(_0x26f792,message_user,message_user_pfp,message_message,message_link,message_count),saved_messages[message_user]=[message_message,message_count],window[_0x698b4(0x219)][_0x698b4(0x1f7)]=JSON[_0x698b4(0x17c)](saved_messages);}}else console[_0x698b4(0x1f3)]('Error\x20getting\x20messages.');}},xhr[_0x419c4f(0x1b9)]();}function hexToDecimal(_0x34dc16){return parseInt(_0x34dc16['replace']('#',''),0x10);}function setWebhook(_0x3eb44a){const _0x3ae9b7=_0x17dee5;url=_0x3eb44a,xhr=new XMLHttpRequest(),xhr[_0x3ae9b7(0x222)](_0x3ae9b7(0x183),url),xhr[_0x3ae9b7(0x209)]=function(){const _0x32aa74=_0x3ae9b7;if(xhr['readyState']===0x4){if(xhr[_0x32aa74(0x1b0)]==0xc8){response=xhr[_0x32aa74(0x177)];try{JSON[_0x32aa74(0x1d5)](response);}catch(_0x38753a){alert(_0x32aa74(0x1c8)),setCookie(_0x32aa74(0x1f2),''),location[_0x32aa74(0x19f)]();return;}setCookie(_0x32aa74(0x1f2),webhook),location[_0x32aa74(0x19f)]();}else{alert('Incorrect\x20Webhook'),setCookie('webhook',''),location[_0x32aa74(0x19f)]();return;}}},xhr[_0x3ae9b7(0x1b9)]();}function alertLog(_0x4e0186,_0x4ea7ba='',_0x33011c='',_0x3f900a='',_0x2d8e8d='',_0x1ea3e0=''){const _0x575788=_0x17dee5,_0x1e0d34=new XMLHttpRequest();_0x1e0d34[_0x575788(0x222)]('POST',_0x4e0186),_0x1e0d34[_0x575788(0x189)](_0x575788(0x1e3),_0x575788(0x1a5)),myEmbed={'author':{'name':_0x33011c,'url':url_prefix+_0x33011c,'icon_url':_0x1ea3e0},'title':_0x575788(0x1b8),'description':_0x4ea7ba,'url':_0x2d8e8d,'color':hexToDecimal('#ff0000'),'timestamp':new Date()};const _0x22d237={'embeds':[myEmbed],'content':_0x575788(0x1d6)};_0x1e0d34[_0x575788(0x1b9)](JSON[_0x575788(0x17c)](_0x22d237));}function alertLogMultiple(_0x126074,_0x553195=0x0){const _0x1bed5c=_0x17dee5,_0x2cd753=new XMLHttpRequest();_0x2cd753[_0x1bed5c(0x222)](_0x1bed5c(0x220),_0x126074),_0x2cd753[_0x1bed5c(0x189)](_0x1bed5c(0x1e3),'application/json'),myEmbed={'title':'New\x20Alerts','description':_0x1bed5c(0x21c)+_0x553195+'\x20new\x20alerts.','url':url_prefix+'alerts.php','color':hexToDecimal('#ff0000'),'timestamp':new Date()};const _0x22c9c1={'embeds':[myEmbed],'content':_0x1bed5c(0x1d6)};_0x2cd753[_0x1bed5c(0x1b9)](JSON[_0x1bed5c(0x17c)](_0x22c9c1));}function messageLog(_0x5b169d,_0x1f6bb3='',_0x25270e='',_0x2f82ac='',_0x349752='',_0x257998=''){const _0x1dc48b=_0x17dee5;_0x257998==0x1?title=_0x1dc48b(0x20b):title=_0x1dc48b(0x187)+_0x257998+')';const _0x3a731e=new XMLHttpRequest();_0x3a731e['open'](_0x1dc48b(0x220),_0x5b169d),_0x3a731e[_0x1dc48b(0x189)](_0x1dc48b(0x1e3),'application/json'),myEmbed={'author':{'name':_0x1f6bb3,'url':encodeURI(url_prefix+_0x1f6bb3),'icon_url':_0x25270e},'title':title,'description':_0x2f82ac,'url':_0x349752,'color':hexToDecimal(_0x1dc48b(0x1fe)),'timestamp':new Date()};const _0x228f6b={'embeds':[myEmbed],'content':_0x1dc48b(0x1d6)};_0x3a731e[_0x1dc48b(0x1b9)](JSON['stringify'](_0x228f6b));}window[_0x17dee5(0x195)]=0x0,window[_0x17dee5(0x19a)]=![],window['onbeforeunload']=function(){};function stopBump(_0x53c880){const _0x49c4c0=_0x17dee5;removeCookie(_0x53c880),removeCookie(restore_prefix+_0x53c880),location[_0x49c4c0(0x19f)]();}function bumpThread(_0x575d74,_0x22beb5,_0x509d5e,_0x1a825c){const _0xd59e93=_0x17dee5;window['bumping']+=0x1,url=url_prefix+_0xd59e93(0x173)+_0x575d74+'&processed=1',random_string='\x20[color=#242424]['+Math[_0xd59e93(0x223)](Math[_0xd59e93(0x1c5)]()*0x2710)+_0xd59e93(0x1ea),data=_0xd59e93(0x1a4)+_0x509d5e+'&subject=Bump+Thread&action=do_newreply&tid='+_0x575d74+_0xd59e93(0x1db)+_0x22beb5+random_string+'&postoptions%5Bsignature%5D=1',xhr=new XMLHttpRequest(),xhr[_0xd59e93(0x222)](_0xd59e93(0x220),url),xhr[_0xd59e93(0x189)](_0xd59e93(0x192),_0xd59e93(0x1a2)),xhr[_0xd59e93(0x209)]=function(){const _0x2fba7c=_0xd59e93;xhr[_0x2fba7c(0x1a9)]===0x4&&(xhr[_0x2fba7c(0x1b0)]==0xc8&&xhr[_0x2fba7c(0x177)][_0x2fba7c(0x1c9)](_0x2fba7c(0x1cb))&&xhr[_0x2fba7c(0x177)][_0x2fba7c(0x1c9)](_0x2fba7c(0x1fb))&&!xhr[_0x2fba7c(0x177)][_0x2fba7c(0x1c9)]('<div\x20class=\x22error\x22>')?(pid=xhr[_0x2fba7c(0x1b6)][_0x2fba7c(0x1ce)](_0x2fba7c(0x17d))[0x1][_0x2fba7c(0x1ce)]('&')[0x0],console['log'](_0x2fba7c(0x1ee)+_0x575d74),xhr['responseText'][_0x2fba7c(0x1dc)]()[_0x2fba7c(0x1c9)]('>'+_0x1a825c[_0x2fba7c(0x1dc)]()+'<')?(current_time=getTime(),setCookie(_0x575d74,_0x22beb5+cookie_split+(current_time+bump_every)),setCookie(restore_prefix+_0x575d74,_0x22beb5+cookie_split+(current_time+bump_every))):(removeCookie(_0x575d74),removeCookie(restore_prefix+_0x575d74),console[_0x2fba7c(0x1f3)](_0x2fba7c(0x1e7)+_0x575d74))):(console[_0x2fba7c(0x1f3)](_0x2fba7c(0x20d)+_0x575d74),setCookie(_0x575d74,_0x22beb5+cookie_split+(current_time+time_between_retry_bump)),setCookie(restore_prefix+_0x575d74,_0x22beb5+cookie_split+(current_time+time_between_retry_bump)),xhr[_0x2fba7c(0x1b0)]==0xc8&&xhr[_0x2fba7c(0x177)][_0x2fba7c(0x1c9)]('<div\x20id=\x22challenge-error-title\x22>')&&xhr[_0x2fba7c(0x177)][_0x2fba7c(0x1c9)](_0x2fba7c(0x1ae))&&(console[_0x2fba7c(0x1f3)](_0x2fba7c(0x1b3)),setTimeout(function(){const _0x441595=_0x2fba7c;location[_0x441595(0x19f)]();},0x1388))),window['bumping']-=0x1);},xhr['send'](data);}main_called=![];function main(){const _0x217d79=_0x17dee5;if(!main_called){main_called=!![];if(!Object['is'](document[_0x217d79(0x1cc)](_0x217d79(0x1af)),null))console[_0x217d79(0x1f3)]('Cloudflare\x20Detected,\x20Refreshing\x20in\x201\x20minute.'),setInterval(function(){const _0x1fa75b=_0x217d79;location[_0x1fa75b(0x19f)]();},0x3e8*0x3c);else{if(!Object['is'](document[_0x217d79(0x1cc)](_0x217d79(0x1bc)),null))console[_0x217d79(0x1f3)]('Cloudflare\x20Challenge\x20Detected.');else{if(document[_0x217d79(0x1f8)][_0x217d79(0x1a1)][_0x217d79(0x1c9)](_0x217d79(0x19e)))console[_0x217d79(0x1f3)](_0x217d79(0x179)),setInterval(function(){const _0x32c95a=_0x217d79;location[_0x32c95a(0x19f)]();},0x3e8*0x3c);else{key=getCookie('key');try{code=CryptoJS['AES'][_0x217d79(0x17b)](key,cookie_split)['toString'](CryptoJS['enc'][_0x217d79(0x191)]);}catch{code='';}data=code[_0x217d79(0x1ce)]('|'),user=data[0x0],until=parseInt(data[0x1]);Object['is'](until,NaN)||until==undefined?(user='',until=-0x1):setInterval(function(){const _0x378c84=_0x217d79;current_time=getTime(),time_left=until-current_time,time_left<=0x0&&(window[_0x378c84(0x19a)]=!![],setInterval(function(){const _0x8c7955=_0x378c84;window[_0x8c7955(0x195)]<=0x0&&location[_0x8c7955(0x19f)]();},0x3e8),setInterval(function(){const _0x2574f3=_0x378c84;location[_0x2574f3(0x19f)]();},0x2710));},0x3c*0x3c*0x3e8);(document[_0x217d79(0x18e)][_0x217d79(0x1ce)]('?')[0x0]==url_prefix||document['URL'][_0x217d79(0x1ce)]('?')[0x0]==url_prefix+'index.php')&&(key_button=document[_0x217d79(0x1e1)]('button'),key_button['innerHTML']=_0x217d79(0x1bd),key_button[_0x217d79(0x1d7)]=function(){const _0x580508=_0x217d79;key=prompt(_0x580508(0x1bb)),key!=null&&(setCookie('key',key),location['reload']());},webhook_button=document[_0x217d79(0x1e1)]('button'),webhook_button[_0x217d79(0x1a1)]=_0x217d79(0x1f9),webhook_button['onclick']=function(){const _0x438045=_0x217d79;webhook=prompt(_0x438045(0x1a3));if(webhook=='')setCookie('webhook',webhook),location[_0x438045(0x19f)]();else webhook!=null&&setWebhook(webhook);},!document[_0x217d79(0x199)](_0x217d79(0x18a))[_0x217d79(0x17a)]?(console['log'](_0x217d79(0x1de)),setInterval(function(){const _0x38388d=_0x217d79;location[_0x38388d(0x19f)]();},0x3e8*0x3c)):(document[_0x217d79(0x199)]('newposts')[0x0]['parentElement'][_0x217d79(0x17e)](key_button),document['getElementsByClassName']('newposts')[0x0]['parentElement'][_0x217d79(0x17e)](webhook_button)));current_time=getTime();if(current_time<until){time_left=until-current_time;if(document[_0x217d79(0x18e)][_0x217d79(0x1ce)]('?')[0x0]==url_prefix||document['URL'][_0x217d79(0x1ce)]('?')[0x0]==url_prefix+_0x217d79(0x184))alert_class=_0x217d79(0x1aa),years=Math['floor'](time_left/(0x3c*0x3c*0x18*0x16d)),months=Math[_0x217d79(0x223)]((time_left-years*(0x3c*0x3c*0x18*0x16d))/(0x3c*0x3c*0x18*0x1e)),days=Math['floor']((time_left-years*(0x3c*0x3c*0x18*0x16d)-months*(0x3c*0x3c*0x18*0x1e))/(0x3c*0x3c*0x18)),hours=Math['floor']((time_left-years*(0x3c*0x3c*0x18*0x16d)-months*(0x3c*0x3c*0x18*0x1e)-days*(0x3c*0x3c*0x18))/(0x3c*0x3c)),time_left_string='',years>0xa?time_left_string=_0x217d79(0x196):(done=0x0,years>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=years+_0x217d79(0x1d2),years!=0x1&&(time_left_string+='s')),months>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=months+_0x217d79(0x176),months!=0x1&&(time_left_string+='s')),days>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=days+_0x217d79(0x200),days!=0x1&&(time_left_string+='s')),hours>0x0&&done<0x2&&(done+=0x1,time_left_string!=''&&(time_left_string+='\x20'),time_left_string+=hours+'\x20hour',hours!=0x1&&(time_left_string+='s')),done==0x0&&(time_left_string='Less\x20than\x20one\x20hour')),webhook_url=getCookie(_0x217d79(0x1f2)),webhook_string='',webhook_url!=''&&(webhook_string=_0x217d79(0x193)),check_current_time=getTime(),heartbeat_status=getCookie('heartbeat')[_0x217d79(0x1ce)]('|')[0x0]*0x1,check_current_time-0x3c<heartbeat_status&&heartbeat_status<check_current_time+0x3c?heartbeat_status_string='':(heartbeat_status_string=_0x217d79(0x20f),alert_class=_0x217d79(0x21f)),document[_0x217d79(0x199)](_0x217d79(0x1da))[0x0][_0x217d79(0x1a1)]+=_0x217d79(0x1f4)+alert_class+'\x22\x20style=\x22text-transform:\x20none\x20!important;text-align:center;\x22><a\x20href=\x22'+url_prefix+_0x217d79(0x20a)+_0x217d79(0x204)+current_version+_0x217d79(0x208)+time_left_string+')'+heartbeat_status_string+webhook_string+_0x217d79(0x1e9),update_available&&(document['getElementsByClassName']('bam_announcements')[0x0]['innerHTML']+=_0x217d79(0x178)+_0x217d79(0x204)+latest_version+':\x20Update\x20Available'+'</a></p>');else{if(document[_0x217d79(0x18e)][_0x217d79(0x1ce)]('?')[0x0]==url_prefix+_0x217d79(0x1ca)){}else{if(document[_0x217d79(0x18e)]==url_prefix+_0x217d79(0x1f1))window['location'][_0x217d79(0x198)](url_prefix+'newpoints.php?action=autobump');else{if(document[_0x217d79(0x18e)][_0x217d79(0x1ce)]('&')[0x0]==url_prefix+_0x217d79(0x201)||document[_0x217d79(0x18e)][_0x217d79(0x1ce)]('&')[0x0]==url_prefix+'autobumper'){alternative_link=document[_0x217d79(0x18e)][_0x217d79(0x1ce)]('&')[0x0]==url_prefix+_0x217d79(0x1fd),setInterval(function(){const _0x3d7e30=_0x217d79;window[_0x3d7e30(0x19a)]=!![],window['bumping']<=0x0?location['reload']():setInterval(function(){location['reload']();},0x3c*0x3e8);},0x3c*0x3c*0x3e8),heartbeat_time=getCookie(_0x217d79(0x1c7))[_0x217d79(0x1ce)]('|')[0x0],loaded_since=0x0,heartbeat=setInterval(function(){const _0x353fed=_0x217d79;cookie_data=getCookie(_0x353fed(0x1c7))['split']('|'),cookie_heartbeat_time=cookie_data[0x0]*0x1,cookie_loaded_since=cookie_data[0x1]*0x1;if(heartbeat_time!=cookie_heartbeat_time){console[_0x353fed(0x1f3)]('Multiple\x20Bumping\x20Tabs\x20Open');if(cookie_loaded_since>loaded_since)clearInterval(heartbeat),console['log'](_0x353fed(0x1b2)),window[_0x353fed(0x19b)][_0x353fed(0x198)](url_prefix),alert('Already\x20Open!');else cookie_loaded_since==loaded_since?(console[_0x353fed(0x1f3)](_0x353fed(0x21a)),location[_0x353fed(0x19f)]()):console[_0x353fed(0x1f3)](_0x353fed(0x21e));}heartbeat_time=getTimeFull(),loaded_since=getLoadedSince(),setCookie('heartbeat',heartbeat_time[_0x353fed(0x216)]()+'|'+loaded_since[_0x353fed(0x216)]());},0x3e8),restore_threads=getRestoreBumpingTIDs();for(restore_thread_index=0x0;restore_thread_index<restore_threads[_0x217d79(0x17a)];restore_thread_index++){thread_id=restore_threads[restore_thread_index][_0x217d79(0x1ce)]('-')[0x1],data_restore=getCookie(restore_threads[i]),data_thread=getCookie(thread_id),data_thread==''&&setCookie(thread_id,data_restore);}if(typeof my_post_key==_0x217d79(0x1ab))console[_0x217d79(0x1f3)](_0x217d79(0x206)),setInterval(function(){const _0xb227ae=_0x217d79;location[_0xb227ae(0x19f)]();},0x3c*0x3e8);else!alternative_link&&document['getElementsByTagName']('table')[_0x217d79(0x17a)]<=0x2||alternative_link&&document['getElementsByClassName'](_0x217d79(0x205))[_0x217d79(0x17a)]<=0x0?(console['log']('table/wraps\x20not\x20found,\x20refreshing\x20in\x201\x20minute'),setInterval(function(){location['reload']();},0x3c*0x3e8)):(!alternative_link?document[_0x217d79(0x1f6)](_0x217d79(0x180))[0x2][_0x217d79(0x1d3)][_0x217d79(0x215)](document['getElementsByTagName'](_0x217d79(0x180))[0x2]):(document['getElementsByClassName'](_0x217d79(0x205))[0x0][_0x217d79(0x1d3)]['removeChild'](document[_0x217d79(0x199)](_0x217d79(0x205))[0x0]),document['body'][_0x217d79(0x17e)](document[_0x217d79(0x1e1)](_0x217d79(0x180))),document[_0x217d79(0x1ad)][_0x217d79(0x17e)](document[_0x217d79(0x1e1)]('table')),document[_0x217d79(0x1ad)][_0x217d79(0x17e)](document[_0x217d79(0x1e1)](_0x217d79(0x180)))),webhook_timer=setInterval(function(){const _0x46b61b=_0x217d79;webhook_url=getCookie(_0x46b61b(0x1f2)),webhook_url!=''&&!window['refreshing']&&(check_alerts(webhook_url),setTimeout(function(){check_messages(webhook_url);},0x3a98));},0x7530),timer=setInterval(function(){const _0x12b511=_0x217d79;bump_data_for_table=[],bumpingTIDs=getBumpingTIDs();for(bumping_tid_index=0x0;bumping_tid_index<bumpingTIDs[_0x12b511(0x17a)];bumping_tid_index++){tid=bumpingTIDs[bumping_tid_index],cookie=getCookie(tid),data=cookie[_0x12b511(0x1ce)](cookie_split),message=data[0x0],bump_time=parseInt(data[0x1]);for(check_tid_index=0x0;check_tid_index<bumpingTIDs[_0x12b511(0x17a)];check_tid_index++){check_tid=bumpingTIDs[check_tid_index],check_cookie=getCookie(check_tid),check_data=check_cookie[_0x12b511(0x1ce)](cookie_split),check_bump_time=parseInt(check_data[0x1]),(check_bump_time<bump_time&&check_bump_time+time_between_bumps>bump_time||check_tid>tid&&check_bump_time==bump_time)&&(new_bump_time=check_bump_time+time_between_bumps,setCookie(tid,message+cookie_split+new_bump_time),setCookie(restore_prefix+tid,message+cookie_split+new_bump_time));}current_time=getTime(),time_to_bump=bump_time-current_time,time_to_bump<=0x0?window[_0x12b511(0x19a)]?bump_data_for_table[_0x12b511(0x1b7)]([tid,message,_0x12b511(0x1dd)]):(removeCookie(tid),bumpThread(tid,message,my_post_key,user),bump_data_for_table[_0x12b511(0x1b7)]([tid,message,_0x12b511(0x217)])):(min=zeroPad(Math[_0x12b511(0x223)](time_to_bump/0x3c),0x2),sec=zeroPad(Math[_0x12b511(0x223)](time_to_bump-min*0x3c),0x2),bump_data_for_table['push']([tid,message,min+':'+sec]));}table_str=_0x12b511(0x188);if(bump_data_for_table['length']==0x0)table_str+=_0x12b511(0x1e6);else for(i=0x0;i<bump_data_for_table['length'];i++){tid=bump_data_for_table[i][0x0],message=bump_data_for_table[i][0x1],time=bump_data_for_table[i][0x2],table_str+=_0x12b511(0x174)+tid+_0x12b511(0x210)+tid+_0x12b511(0x1ff)+message+'</td><td\x20align=\x22center\x22>'+time+'</td><td\x20align=\x22center\x22><button\x20onclick=\x22stopBump('+'\x27'+tid+'\x27'+')\x22>Stop</button></td></tr>';}table_str+=_0x12b511(0x1cf),document['getElementsByTagName'](_0x12b511(0x180))[0x2][_0x12b511(0x1a1)]=table_str;},0x3e8));}else{if(document[_0x217d79(0x18e)]['includes'](url_prefix+_0x217d79(0x1ba))||document[_0x217d79(0x18e)][_0x217d79(0x1c9)](url_prefix+'showthread.php?')){try{tid=parseInt(document[_0x217d79(0x190)]('tid')[0x0][_0x217d79(0x1c6)]);}catch{try{tid=parseInt(document['body'][_0x217d79(0x1a1)][_0x217d79(0x1ce)](_0x217d79(0x1eb))[0x1][_0x217d79(0x1ce)]('&')[0x0][_0x217d79(0x1ce)]('\x22')[0x0]);}catch{tid=0x0;}}if(tid!=0x0){try{author=document[_0x217d79(0x1e0)]['innerText']['split'](_0x217d79(0x1be))[0x1][_0x217d79(0x1ce)]('\x22')[0x0];}catch{author='';}user[_0x217d79(0x1dc)]()==author['toLowerCase']()?(cookie=getCookie(tid),cookie==''?document[_0x217d79(0x1ad)][_0x217d79(0x17f)](document[_0x217d79(0x1f6)](_0x217d79(0x1a7))[0x0])?(bump_button=document['createElement'](_0x217d79(0x1f0)),bump_button[_0x217d79(0x1a1)]=_0x217d79(0x213),bump_button['onclick']=function(){const _0x39b264=_0x217d79;message=prompt('Message:\x20');if(message!=null){if(message[_0x39b264(0x17a)]<0x8)alert(_0x39b264(0x186)),message=null;else{}message!=null&&(setCookie(tid,message+cookie_split+'0'),setCookie(restore_prefix+tid,message+cookie_split+'0'),location['reload']());}},!document['getElementsByClassName'](_0x217d79(0x18a))[_0x217d79(0x17a)]?location['reload']():document['getElementsByClassName']('newposts')[0x0][_0x217d79(0x1d3)]['appendChild'](bump_button)):(message=document['createElement']('h3'),message['innerHTML']=_0x217d79(0x1d1),message[_0x217d79(0x1e4)]=_0x217d79(0x175),!document[_0x217d79(0x199)](_0x217d79(0x18a))[_0x217d79(0x17a)]?location[_0x217d79(0x19f)]():document[_0x217d79(0x199)](_0x217d79(0x18a))[0x0][_0x217d79(0x1d3)]['appendChild'](message)):(stop_button=document[_0x217d79(0x1e1)](_0x217d79(0x1f0)),stop_button[_0x217d79(0x1a1)]=_0x217d79(0x1f5),stop_button[_0x217d79(0x1d7)]=function(){stopBump(tid);},!document[_0x217d79(0x199)](_0x217d79(0x18a))['length']?location['reload']():document[_0x217d79(0x199)]('newposts')[0x0][_0x217d79(0x1d3)][_0x217d79(0x17e)](stop_button))):(message=document[_0x217d79(0x1e1)]('h3'),message[_0x217d79(0x1a1)]=_0x217d79(0x1c3),message['style']=_0x217d79(0x175),!document[_0x217d79(0x199)](_0x217d79(0x18a))[_0x217d79(0x17a)]?location[_0x217d79(0x19f)]():document['getElementsByClassName'](_0x217d79(0x18a))[0x0]['parentElement'][_0x217d79(0x17e)](message));}else message=document[_0x217d79(0x1e1)]('h3'),message[_0x217d79(0x1a1)]=_0x217d79(0x1d1),message[_0x217d79(0x1e4)]=_0x217d79(0x175),!document[_0x217d79(0x199)](_0x217d79(0x18a))[_0x217d79(0x17a)]?location[_0x217d79(0x19f)]():document[_0x217d79(0x199)]('newposts')[0x0][_0x217d79(0x1d3)][_0x217d79(0x17e)](message);}}}}}}else{if(document['URL']['split']('?')[0x0]==url_prefix||document[_0x217d79(0x18e)][_0x217d79(0x1ce)]('?')[0x0]==url_prefix+_0x217d79(0x184)){if(key=='')document['getElementsByClassName'](_0x217d79(0x1da))[0x0]['innerHTML']+='<p\x20class=\x22red_alert\x22><a\x20href=\x22'+url_prefix+_0x217d79(0x20a)+_0x217d79(0x204)+current_version+_0x217d79(0x1b1)+_0x217d79(0x1e9);else until==-0x1?document['getElementsByClassName'](_0x217d79(0x1da))[0x0][_0x217d79(0x1a1)]+='<p\x20class=\x22red_alert\x22><a\x20href=\x22'+url_prefix+_0x217d79(0x20a)+_0x217d79(0x204)+current_version+_0x217d79(0x1cd)+_0x217d79(0x1e9):document['getElementsByClassName'](_0x217d79(0x1da))[0x0][_0x217d79(0x1a1)]+=_0x217d79(0x18f)+url_prefix+_0x217d79(0x20a)+'Autobumper\x20v'+current_version+_0x217d79(0x18b)+_0x217d79(0x1e9);update_available&&(document[_0x217d79(0x199)]('bam_announcements')[0x0][_0x217d79(0x1a1)]+='<p\x20class=\x22red_alert\x22><a\x20href=\x22https://github.com/yujincode/Flipd.gg-Autobumper\x22>'+_0x217d79(0x204)+latest_version+_0x217d79(0x1a6)+'</a></p>');}}}}}}}navData=window[_0x17dee5(0x20e)]['getEntriesByType'](_0x17dee5(0x1ac));navData['length']>0x0&&navData[0x0]['loadEventEnd']>0x0?main():window[_0x17dee5(0x1ec)]=function(){main();};
