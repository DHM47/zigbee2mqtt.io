"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[44344],{73697:(e,a,t)=>{t.r(a),t.d(a,{data:()=>o});const o={key:"v-7003860b",path:"/guide/adapters/flashing/copy_ieeaddr.html",title:"Copying the ieee address of an adapter",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"ZigStar Multi Tool",slug:"zigstar-multi-tool",children:[]},{level:2,title:"cc2538-bsl",slug:"cc2538-bsl",children:[]},{level:2,title:"FLASH-PROGRAMMER-2",slug:"flash-programmer-2",children:[]}],filePathRelative:"guide/adapters/flashing/copy_ieeaddr.md",git:{updatedTime:1640366575e3}}},28829:(e,a,t)=>{t.r(a),t.d(a,{default:()=>A});var o=t(66252);const s=(0,o.uE)('<h1 id="copying-the-ieee-address-of-an-adapter" tabindex="-1"><a class="header-anchor" href="#copying-the-ieee-address-of-an-adapter" aria-hidden="true">#</a> Copying the ieee address of an adapter</h1><p>When migrating from one stick to another it is important that the new stick uses the same ieee address as the old stick. Some devices lookup the coordinator by its ieee address, this fails when the ieee address of the coordinator changes. There are various tools which can do this.</p><p>First you have to determine the ieee address of your old stick, to do this:</p><ol><li>Open the <code>data/database.db</code>; on the first line you will find the coordinator ieee address:</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;Coordinator&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ieeeAddr&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x00124b000e89686d&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;nwkAddr&quot;</span><span class="token operator">:</span><span class="token number">0</span>...\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="zigstar-multi-tool" tabindex="-1"><a class="header-anchor" href="#zigstar-multi-tool" aria-hidden="true">#</a> ZigStar Multi Tool</h2><p>Supports: CC2652, CC1352, CC2538</p>',7),n={href:"https://github.com/xyzroe/ZigStarGW-MT/releases",target:"_blank",rel:"noopener noreferrer"},r=(0,o.Uk)("Download"),l=(0,o.Uk)(" and run the tool"),i=(0,o._)("li",null,"Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode mode",-1),d=(0,o._)("li",null,"Click refresh icon and select your adapter",-1),p=(0,o._)("li",null,[(0,o.Uk)('Fill in the old coordinators ieee address under "IEEE" (first '),(0,o._)("code",null,"0x"),(0,o.Uk)(" can be skipped)")],-1),u=(0,o._)("li",null,'Check "Write IEEE" and click "Write IEEE"',-1),c=(0,o._)("li",null,"Reflash the firmware on your stick (this is important, otherwise the coordinator will not use the new ieee address)",-1),h=(0,o._)("h2",{id:"cc2538-bsl",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#cc2538-bsl","aria-hidden":"true"},"#"),(0,o.Uk)(" cc2538-bsl")],-1),k=(0,o._)("p",null,"Supports: CC2652, CC1352, CC2538",-1),m={href:"https://github.com/JelmerT/cc2538-bsl",target:"_blank",rel:"noopener noreferrer"},f=(0,o.Uk)("Download"),b=(0,o.Uk)(" the tool"),g=(0,o.uE)("<li>Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode</li><li>Run <code>./cc2538-bsl.py -evw --ieee-address 00:12:4b:aa:bb:cc:dd:ee -p /dev/tty.usbserial-10 ./fw.hex</code>, replace: <ul><li><code>00:12:4b:aa:bb:cc:dd:ee</code> with your coordinator ieee address (first <code>0x</code> can be skipped)</li><li><code>/dev/tty.usbserial-10</code> with the path to your adapter</li><li><code>./fw.hex</code> with the path to your adapters firmware.</li></ul></li>",2),y=(0,o._)("h2",{id:"flash-programmer-2",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#flash-programmer-2","aria-hidden":"true"},"#"),(0,o.Uk)(" FLASH-PROGRAMMER-2")],-1),w=(0,o._)("p",null,"Supports: CC2652, CC1352, CC2538",-1),_={href:"https://www.ti.com/tool/FLASH-PROGRAMMER",target:"_blank",rel:"noopener noreferrer"},C=(0,o.Uk)("Download"),S=(0,o.Uk)(" the tool"),v=(0,o._)("li",null,"Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode",-1),E=(0,o._)("li",null,'Select your adapter, go to "MAC address"',-1),x=(0,o._)("li",null,[(0,o.Uk)('Fill the old coordinator ieee address into "Secondary Address" -> "IEEE 802.15.4 MAC address" (first '),(0,o._)("code",null,"0x"),(0,o.Uk)(" can be skipped)")],-1),R=(0,o._)("li",null,'Press "Write"',-1),U=(0,o._)("li",null,"Reflash the firmware on your stick (this is important, otherwise the coordinator will not use the new ieee address)",-1),q={},A=(0,t(83744).Z)(q,[["render",function(e,a){const t=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o._)("a",n,[r,(0,o.Wm)(t)]),l]),i,d,p,u,c]),h,k,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o._)("a",m,[f,(0,o.Wm)(t)]),b]),g]),y,w,(0,o._)("ol",null,[(0,o._)("li",null,[(0,o._)("a",_,[C,(0,o.Wm)(t)]),S]),v,E,x,R,U])],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{for(const[t,o]of a)e[t]=o;return e}}}]);