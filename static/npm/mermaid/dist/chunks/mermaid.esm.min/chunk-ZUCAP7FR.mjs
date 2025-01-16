import{c as Y,d as L}from"./chunk-E7A2AWYO.mjs";import{a as O}from"./chunk-S67DUUA5.mjs";import{a as U}from"./chunk-LM6QDVU5.mjs";import{d as X}from"./chunk-AFC6EC46.mjs";import{m as w}from"./chunk-UENA7NWE.mjs";import{Da as W,G as H,Ha as R,X as b,b as d,ga as C}from"./chunk-OR2G2HG5.mjs";import{a as f}from"./chunk-GTKDMUJJ.mjs";var A=f((r,t,a,o,l)=>{t.arrowTypeStart&&Z(r,"start",t.arrowTypeStart,a,o,l),t.arrowTypeEnd&&Z(r,"end",t.arrowTypeEnd,a,o,l)},"addEdgeMarkers"),z={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"},Z=f((r,t,a,o,l,i)=>{let s=z[a];if(!s){d.warn(`Unknown arrow type: ${a}`);return}let n=t==="start"?"Start":"End";r.attr(`marker-${t}`,`url(${o}#${l}_${i}-${s}${n})`)},"addEdgeMarker");var T=new Map,x=new Map,Et=f(()=>{T.clear(),x.clear()},"clear"),M=f(r=>r?r.reduce((a,o)=>a+";"+o,""):"","getLabelStyles"),$t=f(async(r,t)=>{let a=H(b().flowchart.htmlLabels),o=await X(r,t.label,{style:M(t.labelStyle),useHtmlLabels:a,addSvgBackground:!0,isNode:!1});d.info("abc82",t,t.labelType);let l=r.insert("g").attr("class","edgeLabel"),i=l.insert("g").attr("class","label");i.node().appendChild(o);let s=o.getBBox();if(a){let e=o.children[0],p=C(o);s=e.getBoundingClientRect(),p.attr("width",s.width),p.attr("height",s.height)}i.attr("transform","translate("+-s.width/2+", "+-s.height/2+")"),T.set(t.id,l),t.width=s.width,t.height=s.height;let n;if(t.startLabelLeft){let e=await L(t.startLabelLeft,M(t.labelStyle)),p=r.insert("g").attr("class","edgeTerminals"),h=p.insert("g").attr("class","inner");n=h.node().appendChild(e);let c=e.getBBox();h.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),x.get(t.id)||x.set(t.id,{}),x.get(t.id).startLeft=p,$(n,t.startLabelLeft)}if(t.startLabelRight){let e=await L(t.startLabelRight,M(t.labelStyle)),p=r.insert("g").attr("class","edgeTerminals"),h=p.insert("g").attr("class","inner");n=p.node().appendChild(e),h.node().appendChild(e);let c=e.getBBox();h.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),x.get(t.id)||x.set(t.id,{}),x.get(t.id).startRight=p,$(n,t.startLabelRight)}if(t.endLabelLeft){let e=await L(t.endLabelLeft,M(t.labelStyle)),p=r.insert("g").attr("class","edgeTerminals"),h=p.insert("g").attr("class","inner");n=h.node().appendChild(e);let c=e.getBBox();h.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),p.node().appendChild(e),x.get(t.id)||x.set(t.id,{}),x.get(t.id).endLeft=p,$(n,t.endLabelLeft)}if(t.endLabelRight){let e=await L(t.endLabelRight,M(t.labelStyle)),p=r.insert("g").attr("class","edgeTerminals"),h=p.insert("g").attr("class","inner");n=h.node().appendChild(e);let c=e.getBBox();h.attr("transform","translate("+-c.width/2+", "+-c.height/2+")"),p.node().appendChild(e),x.get(t.id)||x.set(t.id,{}),x.get(t.id).endRight=p,$(n,t.endLabelRight)}return o},"insertEdgeLabel");function $(r,t){b().flowchart.htmlLabels&&r&&(r.style.width=t.length*9+"px",r.style.height="12px")}f($,"setTerminalWidth");var Tt=f((r,t)=>{d.debug("Moving label abc88 ",r.id,r.label,T.get(r.id),t);let a=t.updatedPath?t.updatedPath:t.originalPath,o=b(),{subGraphTitleTotalMargin:l}=U(o);if(r.label){let i=T.get(r.id),s=r.x,n=r.y;if(a){let e=w.calcLabelPosition(a);d.debug("Moving label "+r.label+" from (",s,",",n,") to (",e.x,",",e.y,") abc88"),t.updatedPath&&(s=e.x,n=e.y)}i.attr("transform",`translate(${s}, ${n+l/2})`)}if(r.startLabelLeft){let i=x.get(r.id).startLeft,s=r.x,n=r.y;if(a){let e=w.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_left",a);s=e.x,n=e.y}i.attr("transform",`translate(${s}, ${n})`)}if(r.startLabelRight){let i=x.get(r.id).startRight,s=r.x,n=r.y;if(a){let e=w.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_right",a);s=e.x,n=e.y}i.attr("transform",`translate(${s}, ${n})`)}if(r.endLabelLeft){let i=x.get(r.id).endLeft,s=r.x,n=r.y;if(a){let e=w.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_left",a);s=e.x,n=e.y}i.attr("transform",`translate(${s}, ${n})`)}if(r.endLabelRight){let i=x.get(r.id).endRight,s=r.x,n=r.y;if(a){let e=w.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_right",a);s=e.x,n=e.y}i.attr("transform",`translate(${s}, ${n})`)}},"positionEdgeLabel"),D=f((r,t)=>{let a=r.x,o=r.y,l=Math.abs(t.x-a),i=Math.abs(t.y-o),s=r.width/2,n=r.height/2;return l>=s||i>=n},"outsideNode"),F=f((r,t,a)=>{d.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(a)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);let o=r.x,l=r.y,i=Math.abs(o-a.x),s=r.width/2,n=a.x<t.x?s-i:s+i,e=r.height/2,p=Math.abs(t.y-a.y),h=Math.abs(t.x-a.x);if(Math.abs(l-t.y)*s>Math.abs(o-t.x)*e){let c=a.y<t.y?t.y-e-l:l-e-t.y;n=h*c/p;let m={x:a.x<t.x?a.x+n:a.x-h+n,y:a.y<t.y?a.y+p-c:a.y-p+c};return n===0&&(m.x=t.x,m.y=t.y),h===0&&(m.x=t.x),p===0&&(m.y=t.y),d.debug(`abc89 top/bottom calc, Q ${p}, q ${c}, R ${h}, r ${n}`,m),m}else{a.x<t.x?n=t.x-s-o:n=o-s-t.x;let c=p*n/h,m=a.x<t.x?a.x+h-n:a.x-h+n,y=a.y<t.y?a.y+c:a.y-c;return d.debug(`sides calc abc89, Q ${p}, q ${c}, R ${h}, r ${n}`,{_x:m,_y:y}),n===0&&(m=t.x,y=t.y),h===0&&(m=t.x),p===0&&(y=t.y),{x:m,y}}},"intersection"),q=f((r,t)=>{d.warn("abc88 cutPathAtIntersect",r,t);let a=[],o=r[0],l=!1;return r.forEach(i=>{if(d.info("abc88 checking point",i,t),!D(t,i)&&!l){let s=F(t,o,i);d.debug("abc88 inside",i,o,s),d.debug("abc88 intersection",s,t);let n=!1;a.forEach(e=>{n=n||e.x===s.x&&e.y===s.y}),a.some(e=>e.x===s.x&&e.y===s.y)?d.warn("abc88 no intersect",s,a):a.push(s),l=!0}else d.warn("abc88 outside",i,o),o=i,l||a.push(i)}),d.debug("returning points",a),a},"cutPathAtIntersect");function K(r){let t=[],a=[];for(let o=1;o<r.length-1;o++){let l=r[o-1],i=r[o],s=r[o+1];(l.x===i.x&&i.y===s.y&&Math.abs(i.x-s.x)>5&&Math.abs(i.y-l.y)>5||l.y===i.y&&i.x===s.x&&Math.abs(i.x-l.x)>5&&Math.abs(i.y-s.y)>5)&&(t.push(i),a.push(o))}return{cornerPoints:t,cornerPointPositions:a}}f(K,"extractCornerPoints");var N=f(function(r,t,a){let o=t.x-r.x,l=t.y-r.y,i=Math.sqrt(o*o+l*l),s=a/i;return{x:t.x-s*o,y:t.y-s*l}},"findAdjacentPoint"),P=f(function(r){let{cornerPointPositions:t}=K(r),a=[];for(let o=0;o<r.length;o++)if(t.includes(o)){let l=r[o-1],i=r[o+1],s=r[o],n=N(l,s,5),e=N(i,s,5),p=e.x-n.x,h=e.y-n.y;a.push(n);let c=Math.sqrt(2)*2,m={x:s.x,y:s.y};if(Math.abs(i.x-l.x)>10&&Math.abs(i.y-l.y)>=10){d.debug("Corner point fixing",Math.abs(i.x-l.x),Math.abs(i.y-l.y));let y=5;s.x===n.x?m={x:p<0?n.x-y+c:n.x+y-c,y:h<0?n.y-c:n.y+c}:m={x:p<0?n.x-c:n.x+c,y:h<0?n.y-y+c:n.y+y-c}}else d.debug("Corner point skipping fixing",Math.abs(i.x-l.x),Math.abs(i.y-l.y));a.push(m,e)}else a.push(r[o]);return a},"fixCorners"),vt=f(function(r,t,a,o,l,i,s){let{handDrawnSeed:n}=b(),e=t.points,p=!1,h=l;var c=i;c.intersect&&h.intersect&&(e=e.slice(1,t.points.length-1),e.unshift(h.intersect(e[0])),d.debug("Last point APA12",t.start,"-->",t.end,e[e.length-1],c,c.intersect(e[e.length-1])),e.push(c.intersect(e[e.length-1]))),t.toCluster&&(d.info("to cluster abc88",a.get(t.toCluster)),e=q(t.points,a.get(t.toCluster).node),p=!0),t.fromCluster&&(d.debug("from cluster abc88",a.get(t.fromCluster),JSON.stringify(e,null,2)),e=q(e.reverse(),a.get(t.fromCluster).node).reverse(),p=!0);let m=e.filter(u=>!Number.isNaN(u.y));m=P(m);let y=R;t.curve&&(y=t.curve);let{x:G,y:V}=O(t),j=W().x(G).y(V).curve(y),k;switch(t.thickness){case"normal":k="edge-thickness-normal";break;case"thick":k="edge-thickness-thick";break;case"invisible":k="edge-thickness-invisible";break;default:k="edge-thickness-normal"}switch(t.pattern){case"solid":k+=" edge-pattern-solid";break;case"dotted":k+=" edge-pattern-dotted";break;case"dashed":k+=" edge-pattern-dashed";break;default:k+=" edge-pattern-solid"}let g,B=j(m),S=Array.isArray(t.style)?t.style:[t.style];if(t.look==="handDrawn"){let u=Y.svg(r);Object.assign([],m);let _=u.path(B,{roughness:.3,seed:n});k+=" transition",g=C(_).select("path").attr("id",t.id).attr("class"," "+k+(t.classes?" "+t.classes:"")).attr("style",S?S.reduce((J,Q)=>J+";"+Q,""):"");let I=g.attr("d");g.attr("d",I),r.node().appendChild(g.node())}else g=r.append("path").attr("d",B).attr("id",t.id).attr("class"," "+k+(t.classes?" "+t.classes:"")).attr("style",S?S.reduce((u,_)=>u+";"+_,""):"");let E="";(b().flowchart.arrowMarkerAbsolute||b().state.arrowMarkerAbsolute)&&(E=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,E=E.replace(/\(/g,"\\(").replace(/\)/g,"\\)")),d.info("arrowTypeStart",t.arrowTypeStart),d.info("arrowTypeEnd",t.arrowTypeEnd),A(g,t,E,s,o);let v={};return p&&(v.updatedPath=e),v.originalPath=t.points,v},"insertEdge");var tt=f((r,t,a,o)=>{t.forEach(l=>{pt[l](r,a,o)})},"insertMarkers"),rt=f((r,t,a)=>{d.trace("Making markers for ",a),r.append("defs").append("marker").attr("id",a+"_"+t+"-extensionStart").attr("class","marker extension "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},"extension"),at=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-compositionStart").attr("class","marker composition "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"composition"),et=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},"aggregation"),st=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",a+"_"+t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},"dependency"),nt=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6),r.append("defs").append("marker").attr("id",a+"_"+t+"-lollipopEnd").attr("class","marker lollipop "+t).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6)},"lollipop"),ot=f((r,t,a)=>{r.append("marker").attr("id",a+"_"+t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",8).attr("markerHeight",8).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",a+"_"+t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",8).attr("markerHeight",8).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"point"),it=f((r,t,a)=>{r.append("marker").attr("id",a+"_"+t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",a+"_"+t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},"circle"),lt=f((r,t,a)=>{r.append("marker").attr("id",a+"_"+t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),r.append("marker").attr("id",a+"_"+t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},"cross"),ct=f((r,t,a)=>{r.append("defs").append("marker").attr("id",a+"_"+t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","userSpaceOnUse").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb"),pt={extension:rt,composition:at,aggregation:et,dependency:st,lollipop:nt,point:ot,circle:it,cross:lt,barb:ct},Ht=tt;export{Et as a,$t as b,Tt as c,vt as d,Ht as e};
