/*


GIFTED-MD
VERSION 3.0.0


*/


var _0x109f3b=_0x3d90;(function(_0x3cdb52,_0x2d3f73){var _0x221296=_0x3d90,_0x397bc5=_0x3cdb52();while(!![]){try{var _0x3732bc=-parseInt(_0x221296(0x1b4))/0x1*(-parseInt(_0x221296(0x1e5))/0x2)+parseInt(_0x221296(0x1a2))/0x3+parseInt(_0x221296(0x1de))/0x4*(-parseInt(_0x221296(0x1a4))/0x5)+-parseInt(_0x221296(0x1d6))/0x6*(-parseInt(_0x221296(0x1a0))/0x7)+parseInt(_0x221296(0x1bd))/0x8*(-parseInt(_0x221296(0x1cc))/0x9)+parseInt(_0x221296(0x1ba))/0xa*(-parseInt(_0x221296(0x1b8))/0xb)+-parseInt(_0x221296(0x1c0))/0xc*(-parseInt(_0x221296(0x1da))/0xd);if(_0x3732bc===_0x2d3f73)break;else _0x397bc5['push'](_0x397bc5['shift']());}catch(_0x2e9f73){_0x397bc5['push'](_0x397bc5['shift']());}}}(_0x402f,0xe8bfa));const moment=require('moment-timezone'),Config=require('../config');let {smd,prefix,updateProfilePicture,parsedJid}=require(_0x109f3b(0x1b3));function _0x3d90(_0x31f378,_0x407ef3){var _0x402fac=_0x402f();return _0x3d90=function(_0x3d90cf,_0x1c5547){_0x3d90cf=_0x3d90cf-0x19d;var _0x5a0834=_0x402fac[_0x3d90cf];return _0x5a0834;},_0x3d90(_0x31f378,_0x407ef3);}const {cmd}=require('../lib/plugins');let mtypes=[_0x109f3b(0x1dd)];function _0x402f(){var _0x206468=['\x0a║\x20*👤Num\x20:*\x20','superadmin','reply_message','\x0a╔════◇\x0a║\x20*『User\x27s\x20\x20Information』*\x0a║\x20\x0a║\x20*🍫Name\x20:*\x20','desc','admins','join','caption','../lib','7OvwrbS','length','wa.me/','status','8383331nSHhDc','```Profile\x20Pic\x20Not\x20Fetched```','10bGLrut','\x0a*▢\x20Members\x20:*\x0a\x20\x20\x20•\x20','mentionedJid','10790536CLEYJZ','from','isGroup','216dYsNEM','sendMessage','subject','\x0a\x20\x20\x20','Makes\x20wa\x20me\x20of\x20quoted\x20or\x20mentioned\x20user.','\x0a\x0acommand\x20:\x20getpp','<reply\x20to\x20any\x20person>','slice','user','split','metadata','owner','9ehVtOI','\x0a║\x20*🎐Bio\x20\x20\x20\x20:*\x20\x20','find','https://telegra.ph/file/29a8c892a1d18fdb26028.jpg','sender','_not\x20set_','image','setAt','error','getName','6XcZhCL','toString','profilePictureUrl','\x0a*▢\x20Admins\x20:*\x0a','1771887cdNOxg','reply','.\x20wa.me/','imageMessage','723916QWZetv','Get\x20Profile\x20Pic\x20For\x20Given\x20User','\x0a\x0acommand\x20:\x20whois','bot','Makes\x20photo\x20of\x20replied\x20sticker.','whois','*Please\x20Reply\x20Or\x20Mention\x20A\x20User*','131710nyPbek','*_Please\x20Reply\x20To\x20A\x20Person!_*','\x0a║\x20\x20\x20\x20*Powered\x20by\x20\x20𝐀𝐧𝐣𝐚𝐧-𝐓𝐞𝐜𝐡-𝟐.𝟎*\x20\x20\x20\x20◇\x0a╚════════════════╝\x0a','mee','getpp','<@user>','6320580HGklmT','\x0a*▢\x20Group\x20Owner\x20:*\x0a\x20\x20\x20•\x20','998529hBnKuk','chat','30HdottD','https://wa.me/','fetchStatus','map','\x0a*▢\x20Description\x20:*\x0a\x20\x20\x20•\x20','catch','jid'];_0x402f=function(){return _0x206468;};return _0x402f();}smd({'pattern':_0x109f3b(0x1aa),'desc':'get\x20jid\x20of\x20all\x20user\x20in\x20a\x20group.','category':_0x109f3b(0x1c8),'filename':__filename,'use':_0x109f3b(0x19f)},async({jid:_0x5f1930,reply:_0x453328,quoted:_0x5e0f24})=>{var _0x1e45fc=_0x109f3b;return _0x5e0f24?_0x453328(_0x5e0f24[_0x1e45fc(0x1d0)]):_0x453328(_0x5f1930);}),smd({'pattern':_0x109f3b(0x19e),'desc':_0x109f3b(0x1df),'category':'user','filename':__filename},async _0x15b380=>{var _0x44d7f4=_0x109f3b;try{let _0x29377a=_0x15b380[_0x44d7f4(0x1ad)]?_0x15b380[_0x44d7f4(0x1ad)][_0x44d7f4(0x1d0)]:_0x15b380[_0x44d7f4(0x1bc)][0x0]?_0x15b380[_0x44d7f4(0x1bc)][0x0]:_0x15b380[_0x44d7f4(0x1be)],_0x3f4bff;try{_0x3f4bff=await _0x15b380[_0x44d7f4(0x1e1)][_0x44d7f4(0x1d8)](_0x29377a,_0x44d7f4(0x1d2));}catch(_0x48aeba){return _0x15b380[_0x44d7f4(0x1db)](_0x44d7f4(0x1b9));}return await _0x15b380[_0x44d7f4(0x1e1)][_0x44d7f4(0x1c1)](_0x15b380['chat'],{'image':{'url':_0x3f4bff},'caption':'\x20\x20*---Profile\x20Pic\x20Is\x20Here---*\x0a'+Config[_0x44d7f4(0x1b2)]},{'quoted':_0x15b380});}catch(_0x11866d){await _0x15b380['error'](_0x11866d+_0x44d7f4(0x1c5),_0x11866d);}}),smd({'pattern':_0x109f3b(0x1e3),'desc':_0x109f3b(0x1e2),'category':_0x109f3b(0x1c8),'use':_0x109f3b(0x1c6),'filename':__filename},async _0xb1877b=>{var _0x517d11=_0x109f3b;try{let _0x4a6e8d=_0xb1877b[_0x517d11(0x1ad)]?_0xb1877b['reply_message'][_0x517d11(0x1d0)]:_0xb1877b[_0x517d11(0x1bc)][0x0]?_0xb1877b[_0x517d11(0x1bc)][0x0]:![];if(!_0x4a6e8d&&_0xb1877b[_0x517d11(0x1bf)]){const _0x1480d3=await _0xb1877b[_0x517d11(0x1e1)][_0x517d11(0x1d8)](_0xb1877b[_0x517d11(0x1a3)],_0x517d11(0x1d2))[_0x517d11(0x1a9)](_0xb15cbf=>_0x517d11(0x1cf))||THUMB_IMAGE,_0x329f80=_0xb1877b[_0x517d11(0x1ca)],_0x18154d=_0xb1877b[_0x517d11(0x1b0)][_0x517d11(0x1a7)]((_0x4ee4b0,_0x169054)=>'\x20\x20'+(_0x169054+0x1)+_0x517d11(0x1dc)+_0x4ee4b0['id']['split']('@')[0x0])[_0x517d11(0x1b1)]('\x0a'),_0x1545e4=_0x329f80[_0x517d11(0x1cb)]||_0xb1877b[_0x517d11(0x1b0)][_0x517d11(0x1ce)](_0x18da82=>_0x18da82['admin']===_0x517d11(0x1ac))?.['id']||![];let _0x4a22dc='\x0a\x20\x20\x20\x20\x20\x20*「\x20GROUP\x20INFORMATION\x20」*\x0a*▢\x20NAME\x20:*\x20\x0a\x20\x20\x20•\x20'+_0x329f80[_0x517d11(0x1c2)]+_0x517d11(0x1bb)+_0x329f80['participants'][_0x517d11(0x1b5)]+_0x517d11(0x1a1)+(_0x1545e4?_0x517d11(0x1b6)+_0x1545e4[_0x517d11(0x1c9)]('@')[0x0]:'notFound')+_0x517d11(0x1d9)+_0x18154d+_0x517d11(0x1a8)+(_0x329f80[_0x517d11(0x1af)]?.['toString']()||_0x517d11(0x1d1))+_0x517d11(0x1c3);return await _0xb1877b[_0x517d11(0x1db)](_0x1480d3,{'caption':_0x4a22dc},'image');}else{if(!_0x4a6e8d)return _0xb1877b[_0x517d11(0x1db)](_0x517d11(0x1e6));try{var _0x25f719=await _0xb1877b['bot'][_0x517d11(0x1a6)](_0x4a6e8d),_0x1577c3=_0x25f719[_0x517d11(0x1b7)],_0x2f3cb4=_0x25f719[_0x517d11(0x1d3)][_0x517d11(0x1d7)](),_0x15dbe1=_0x2f3cb4[_0x517d11(0x1c9)]('\x20');_0x15dbe1[_0x517d11(0x1b5)]>0x3&&(_0x2f3cb4=_0x15dbe1[_0x517d11(0x1c7)](0x0,0x5)[_0x517d11(0x1b1)]('\x20'));}catch{var _0x1577c3='undefined',_0x2f3cb4='';}var _0x536ea2=_0x4a6e8d['split']('@')[0x0];let _0x5be7b5;try{_0x5be7b5=await _0xb1877b[_0x517d11(0x1e1)]['profilePictureUrl'](_0x4a6e8d,_0x517d11(0x1d2));}catch(_0x43c4bc){_0x5be7b5=_0x517d11(0x1cf);}var _0xf77d21=await _0xb1877b[_0x517d11(0x1e1)][_0x517d11(0x1d5)](_0x4a6e8d);return await _0xb1877b[_0x517d11(0x1e1)]['sendMessage'](_0xb1877b[_0x517d11(0x1aa)],{'image':{'url':_0x5be7b5},'caption':_0x517d11(0x1ae)+_0xf77d21+_0x517d11(0x1ab)+_0x536ea2+_0x517d11(0x1cd)+_0x1577c3+'\x0a║\x20*🌟Set\x20On\x20:*\x20'+_0x2f3cb4+_0x517d11(0x1e7)},{'quoted':_0xb1877b});}}catch(_0x2efd5d){await _0xb1877b[_0x517d11(0x1d4)](_0x2efd5d+_0x517d11(0x1e0),_0x2efd5d);}}),smd({'pattern':'wa','desc':_0x109f3b(0x1c4),'category':_0x109f3b(0x1c8),'filename':__filename},async _0x4dfbc0=>{var _0x2c1814=_0x109f3b;try{let _0xb2b819=_0x4dfbc0[_0x2c1814(0x1ad)]?_0x4dfbc0[_0x2c1814(0x1ad)][_0x2c1814(0x1d0)]:_0x4dfbc0[_0x2c1814(0x1bc)][0x0]?_0x4dfbc0[_0x2c1814(0x1bc)][0x0]:![];await _0x4dfbc0[_0x2c1814(0x1db)](!_0xb2b819?_0x2c1814(0x1e4):_0x2c1814(0x1a5)+_0xb2b819[_0x2c1814(0x1c9)]('@')[0x0]);}catch(_0x5366ab){await _0x4dfbc0[_0x2c1814(0x1d4)](_0x5366ab+'\x0a\x0acommand\x20:\x20wa',_0x5366ab,![]);}}),smd({'pattern':_0x109f3b(0x19d),'desc':'Makes\x20wa\x20me\x20for\x20user.','category':'user','filename':__filename},async _0x43d07a=>{var _0x44d98a=_0x109f3b;try{return await _0x43d07a['reply']('https://wa.me/'+_0x43d07a[_0x44d98a(0x1d0)][_0x44d98a(0x1c9)]('@')[0x0]);}catch{}});
