import{a as Ut}from"./chunk-3YFHLAX3.mjs";import{b as Ht}from"./chunk-AFC6EC46.mjs";import{l as Ct}from"./chunk-UENA7NWE.mjs";import"./chunk-TI4EEUUG.mjs";import{A as J,Da as yt,F as Mt,M as Wt,P as Ot,Q as zt,R as Ft,S as Nt,T as jt,U as Gt,V as ft,b as Z,ja as dt,ka as bt,q as Bt,s as It}from"./chunk-OR2G2HG5.mjs";import"./chunk-6BY5RJGC.mjs";import{a as n}from"./chunk-GTKDMUJJ.mjs";var At=function(){var i=n(function(B,o,c,g){for(c=c||{},g=B.length;g--;c[B[g]]=o);return c},"o"),t=[1,10,12,14,16,18,19,21,23],e=[2,6],s=[1,3],a=[1,5],h=[1,6],u=[1,7],d=[1,5,10,12,14,16,18,19,21,23,34,35,36],y=[1,25],E=[1,26],w=[1,28],_=[1,29],L=[1,30],X=[1,31],k=[1,32],Y=[1,33],f=[1,34],T=[1,35],l=[1,36],R=[1,37],N=[1,43],Pt=[1,42],vt=[1,47],$=[1,50],C=[1,10,12,14,16,18,19,21,23,34,35,36],ht=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],P=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],Et=[1,64],lt={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:n(function(o,c,g,p,b,r,j){var x=r.length-1;switch(b){case 5:p.setOrientation(r[x]);break;case 9:p.setDiagramTitle(r[x].text.trim());break;case 12:p.setLineData({text:"",type:"text"},r[x]);break;case 13:p.setLineData(r[x-1],r[x]);break;case 14:p.setBarData({text:"",type:"text"},r[x]);break;case 15:p.setBarData(r[x-1],r[x]);break;case 16:this.$=r[x].trim(),p.setAccTitle(this.$);break;case 17:case 18:this.$=r[x].trim(),p.setAccDescription(this.$);break;case 19:this.$=r[x-1];break;case 20:this.$=[Number(r[x-2]),...r[x]];break;case 21:this.$=[Number(r[x])];break;case 22:p.setXAxisTitle(r[x]);break;case 23:p.setXAxisTitle(r[x-1]);break;case 24:p.setXAxisTitle({type:"text",text:""});break;case 25:p.setXAxisBand(r[x]);break;case 26:p.setXAxisRangeData(Number(r[x-2]),Number(r[x]));break;case 27:this.$=r[x-1];break;case 28:this.$=[r[x-2],...r[x]];break;case 29:this.$=[r[x]];break;case 30:p.setYAxisTitle(r[x]);break;case 31:p.setYAxisTitle(r[x-1]);break;case 32:p.setYAxisTitle({type:"text",text:""});break;case 33:p.setYAxisRangeData(Number(r[x-2]),Number(r[x]));break;case 37:this.$={text:r[x],type:"text"};break;case 38:this.$={text:r[x],type:"text"};break;case 39:this.$={text:r[x],type:"markdown"};break;case 40:this.$=r[x];break;case 41:this.$=r[x-1]+""+r[x];break}},"anonymous"),table:[i(t,e,{3:1,4:2,7:4,5:s,34:a,35:h,36:u}),{1:[3]},i(t,e,{4:2,7:4,3:8,5:s,34:a,35:h,36:u}),i(t,e,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:a,35:h,36:u}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},i(d,[2,34]),i(d,[2,35]),i(d,[2,36]),{1:[2,1]},i(t,e,{4:2,7:4,3:21,5:s,34:a,35:h,36:u}),{1:[2,3]},i(d,[2,5]),i(t,[2,7],{4:22,34:a,35:h,36:u}),{11:23,37:24,38:y,39:E,40:27,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R},{11:39,13:38,24:N,27:Pt,29:40,30:41,37:24,38:y,39:E,40:27,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R},{11:45,15:44,27:vt,33:46,37:24,38:y,39:E,40:27,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R},{11:49,17:48,24:$,37:24,38:y,39:E,40:27,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R},{11:52,17:51,24:$,37:24,38:y,39:E,40:27,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R},{20:[1,53]},{22:[1,54]},i(C,[2,18]),{1:[2,2]},i(C,[2,8]),i(C,[2,9]),i(ht,[2,37],{40:55,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R}),i(ht,[2,38]),i(ht,[2,39]),i(P,[2,40]),i(P,[2,42]),i(P,[2,43]),i(P,[2,44]),i(P,[2,45]),i(P,[2,46]),i(P,[2,47]),i(P,[2,48]),i(P,[2,49]),i(P,[2,50]),i(P,[2,51]),i(C,[2,10]),i(C,[2,22],{30:41,29:56,24:N,27:Pt}),i(C,[2,24]),i(C,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:y,39:E,40:27,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R},i(C,[2,11]),i(C,[2,30],{33:60,27:vt}),i(C,[2,32]),{31:[1,61]},i(C,[2,12]),{17:62,24:$},{25:63,27:Et},i(C,[2,14]),{17:65,24:$},i(C,[2,16]),i(C,[2,17]),i(P,[2,41]),i(C,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},i(C,[2,31]),{27:[1,69]},i(C,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},i(C,[2,15]),i(C,[2,26]),i(C,[2,27]),{11:59,32:72,37:24,38:y,39:E,40:27,41:w,42:_,43:L,44:X,45:k,46:Y,47:f,48:T,49:l,50:R},i(C,[2,33]),i(C,[2,19]),{25:73,27:Et},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:n(function(o,c){if(c.recoverable)this.trace(o);else{var g=new Error(o);throw g.hash=c,g}},"parseError"),parse:n(function(o){var c=this,g=[0],p=[],b=[null],r=[],j=this.table,x="",q=0,Lt=0,Xt=0,oe=2,Yt=1,he=r.slice.call(arguments,1),A=Object.create(this.lexer),I={yy:{}};for(var gt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,gt)&&(I.yy[gt]=this.yy[gt]);A.setInput(o,I.yy),I.yy.lexer=A,I.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var pt=A.yylloc;r.push(pt);var le=A.options&&A.options.ranges;typeof I.yy.parseError=="function"?this.parseError=I.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ke(S){g.length=g.length-2*S,b.length=b.length-S,r.length=r.length-S}n(ke,"popStack");function ce(){var S;return S=p.pop()||A.lex()||Yt,typeof S!="number"&&(S instanceof Array&&(p=S,S=p.pop()),S=c.symbols_[S]||S),S}n(ce,"lex");for(var D,ut,M,v,Se,xt,W={},Q,V,Vt,K;;){if(M=g[g.length-1],this.defaultActions[M]?v=this.defaultActions[M]:((D===null||typeof D>"u")&&(D=ce()),v=j[M]&&j[M][D]),typeof v>"u"||!v.length||!v[0]){var mt="";K=[];for(Q in j[M])this.terminals_[Q]&&Q>oe&&K.push("'"+this.terminals_[Q]+"'");A.showPosition?mt="Parse error on line "+(q+1)+`:
`+A.showPosition()+`
Expecting `+K.join(", ")+", got '"+(this.terminals_[D]||D)+"'":mt="Parse error on line "+(q+1)+": Unexpected "+(D==Yt?"end of input":"'"+(this.terminals_[D]||D)+"'"),this.parseError(mt,{text:A.match,token:this.terminals_[D]||D,line:A.yylineno,loc:pt,expected:K})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+D);switch(v[0]){case 1:g.push(D),b.push(A.yytext),r.push(A.yylloc),g.push(v[1]),D=null,ut?(D=ut,ut=null):(Lt=A.yyleng,x=A.yytext,q=A.yylineno,pt=A.yylloc,Xt>0&&Xt--);break;case 2:if(V=this.productions_[v[1]][1],W.$=b[b.length-V],W._$={first_line:r[r.length-(V||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(V||1)].first_column,last_column:r[r.length-1].last_column},le&&(W._$.range=[r[r.length-(V||1)].range[0],r[r.length-1].range[1]]),xt=this.performAction.apply(W,[x,Lt,q,I.yy,v[1],b,r].concat(he)),typeof xt<"u")return xt;V&&(g=g.slice(0,-1*V*2),b=b.slice(0,-1*V),r=r.slice(0,-1*V)),g.push(this.productions_[v[1]][0]),b.push(W.$),r.push(W._$),Vt=j[g[g.length-2]][g[g.length-1]],g.push(Vt);break;case 3:return!0}}return!0},"parse")},re=function(){var B={EOF:1,parseError:n(function(c,g){if(this.yy.parser)this.yy.parser.parseError(c,g);else throw new Error(c)},"parseError"),setInput:n(function(o,c){return this.yy=c||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:n(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var c=o.match(/(?:\r\n?|\n).*/g);return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:n(function(o){var c=o.length,g=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-c),this.offset-=c;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),g.length-1&&(this.yylineno-=g.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:g?(g.length===p.length?this.yylloc.first_column:0)+p[p.length-g.length].length-g[0].length:this.yylloc.first_column-c},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-c]),this.yyleng=this.yytext.length,this},"unput"),more:n(function(){return this._more=!0,this},"more"),reject:n(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:n(function(o){this.unput(this.match.slice(o))},"less"),pastInput:n(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:n(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:n(function(){var o=this.pastInput(),c=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+c+"^"},"showPosition"),test_match:n(function(o,c){var g,p,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),p=o[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],g=this.performAction.call(this,this.yy,this,c,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),g)return g;if(this._backtrack){for(var r in b)this[r]=b[r];return!1}return!1},"test_match"),next:n(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,c,g,p;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),r=0;r<b.length;r++)if(g=this._input.match(this.rules[b[r]]),g&&(!c||g[0].length>c[0].length)){if(c=g,p=r,this.options.backtrack_lexer){if(o=this.test_match(g,b[r]),o!==!1)return o;if(this._backtrack){c=!1;continue}else return!1}else if(!this.options.flex)break}return c?(o=this.test_match(c,b[p]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:n(function(){var c=this.next();return c||this.lex()},"lex"),begin:n(function(c){this.conditionStack.push(c)},"begin"),popState:n(function(){var c=this.conditionStack.length-1;return c>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(c){return c=this.conditionStack.length-1-Math.abs(c||0),c>=0?this.conditionStack[c]:"INITIAL"},"topState"),pushState:n(function(c){this.begin(c)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(c,g,p,b){var r=b;switch(p){case 0:break;case 1:break;case 2:return this.popState(),34;break;case 3:return this.popState(),34;break;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;break;case 8:return this.popState(),"acc_title_value";break;case 9:return this.pushState("acc_descr"),21;break;case 10:return this.popState(),"acc_descr_value";break;case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";break;case 17:return this.pushState("axis_data"),"Y_AXIS";break;case 18:return this.pushState("axis_band_data"),24;break;case 19:return 31;case 20:return this.pushState("data"),16;break;case 21:return this.pushState("data"),18;break;case 22:return this.pushState("data_inner"),24;break;case 23:return 27;case 24:return this.popState(),26;break;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return B}();lt.lexer=re;function ct(){this.yy={}}return n(ct,"Parser"),ct.prototype=lt,lt.Parser=ct,new ct}();At.parser=At;var $t=At;function Tt(i){return i.type==="bar"}n(Tt,"isBarPlot");function tt(i){return i.type==="band"}n(tt,"isBandAxisData");function O(i){return i.type==="linear"}n(O,"isLinearAxisData");var z=class{constructor(t){this.parentGroup=t}static{n(this,"TextDimensionCalculatorWithFont")}getMaxDimension(t,e){if(!this.parentGroup)return{width:t.reduce((h,u)=>Math.max(u.length,h),0)*e,height:e};let s={width:0,height:0},a=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",e);for(let h of t){let u=Ht(a,1,h),d=u?u.width:h.length*e,y=u?u.height:e;s.width=Math.max(s.width,d),s.height=Math.max(s.height,y)}return a.remove(),s}};var F=class{constructor(t,e,s,a){this.axisConfig=t;this.title=e;this.textDimensionCalculator=s;this.axisThemeConfig=a;this.boundingRect={x:0,y:0,width:0,height:0};this.axisPosition="left";this.showTitle=!1;this.showLabel=!1;this.showTick=!1;this.showAxisLine=!1;this.outerPadding=0;this.titleTextHeight=0;this.labelTextHeight=0;this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}static{n(this,"BaseAxis")}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){let t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){.7*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(.7*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let e=t.height;if(this.axisConfig.showAxisLine&&e>this.axisConfig.axisLineWidth&&(e-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let s=this.getLabelDimension(),a=.2*t.width;this.outerPadding=Math.min(s.width/2,a);let h=s.height+this.axisConfig.labelPadding*2;this.labelTextHeight=s.height,h<=e&&(e-=h,this.showLabel=!0)}if(this.axisConfig.showTick&&e>=this.axisConfig.tickLength&&(this.showTick=!0,e-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),a=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,a<=e&&(e-=a,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-e}calculateSpaceIfDrawnVertical(t){let e=t.width;if(this.axisConfig.showAxisLine&&e>this.axisConfig.axisLineWidth&&(e-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){let s=this.getLabelDimension(),a=.2*t.height;this.outerPadding=Math.min(s.height/2,a);let h=s.width+this.axisConfig.labelPadding*2;h<=e&&(e-=h,this.showLabel=!0)}if(this.axisConfig.showTick&&e>=this.axisConfig.tickLength&&(this.showTick=!0,e-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){let s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),a=s.height+this.axisConfig.titlePadding*2;this.titleTextHeight=s.height,a<=e&&(e-=a,this.showTitle=!0)}this.boundingRect.width=t.width-e,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){let t=[];if(this.showAxisLine){let e=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${e},${this.boundingRect.y} L ${e},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(e=>({text:e.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(e),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){let e=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${e},${this.getScaleValue(s)} L ${e-this.axisConfig.tickLength},${this.getScaleValue(s)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){let t=[];if(this.showAxisLine){let e=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${e} L ${this.boundingRect.x+this.boundingRect.width},${e}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(e=>({text:e.toString(),x:this.getScaleValue(e),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let e=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${e} L ${this.getScaleValue(s)},${e+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){let t=[];if(this.showAxisLine){let e=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${e} L ${this.boundingRect.x+this.boundingRect.width},${e}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(e=>({text:e.toString(),x:this.getScaleValue(e),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){let e=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(s=>({path:`M ${this.getScaleValue(s)},${e+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(s)},${e+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}};var et=class extends F{static{n(this,"BandAxis")}constructor(t,e,s,a,h){super(t,a,h,e),this.categories=s,this.scale=dt().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=dt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),Z.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}};var it=class extends F{static{n(this,"LinearAxis")}constructor(t,e,s,a,h){super(t,a,h,e),this.domain=s,this.scale=bt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){let t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=bt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}};function Dt(i,t,e,s){let a=new z(s);return tt(i)?new et(t,e,i.categories,i.title,a):new it(t,e,[i.min,i.max],i.title,a)}n(Dt,"getAxis");var wt=class{constructor(t,e,s,a){this.textDimensionCalculator=t;this.chartConfig=e;this.chartData=s;this.chartThemeConfig=a;this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}static{n(this,"ChartTitle")}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){let e=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),s=Math.max(e.width,t.width),a=e.height+2*this.chartConfig.titlePadding;return e.width<=s&&e.height<=a&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=s,this.boundingRect.height=a,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){let t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}};function qt(i,t,e,s){let a=new z(s);return new wt(a,i,t,e)}n(qt,"getChartTitleComponent");var st=class{constructor(t,e,s,a,h){this.plotData=t;this.xAxis=e;this.yAxis=s;this.orientation=a;this.plotIndex=h}static{n(this,"LinePlot")}getDrawableElement(){let t=this.plotData.data.map(s=>[this.xAxis.getScaleValue(s[0]),this.yAxis.getScaleValue(s[1])]),e;return this.orientation==="horizontal"?e=yt().y(s=>s[0]).x(s=>s[1])(t):e=yt().x(s=>s[0]).y(s=>s[1])(t),e?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:e,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}};var nt=class{constructor(t,e,s,a,h,u){this.barData=t;this.boundingRect=e;this.xAxis=s;this.yAxis=a;this.orientation=h;this.plotIndex=u}static{n(this,"BarPlot")}getDrawableElement(){let t=this.barData.data.map(h=>[this.xAxis.getScaleValue(h[0]),this.yAxis.getScaleValue(h[1])]),s=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-.05),a=s/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(h=>({x:this.boundingRect.x,y:h[0]-a,height:s,width:h[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(h=>({x:h[0]-a,y:h[1],width:s,height:this.boundingRect.y+this.boundingRect.height-h[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}};var kt=class{constructor(t,e,s){this.chartConfig=t;this.chartData=e;this.chartThemeConfig=s;this.boundingRect={x:0,y:0,width:0,height:0}}static{n(this,"BasePlot")}setAxes(t,e){this.xAxis=t,this.yAxis=e}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");let t=[];for(let[e,s]of this.chartData.plots.entries())switch(s.type){case"line":{let a=new st(s,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,e);t.push(...a.getDrawableElement())}break;case"bar":{let a=new nt(s,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,e);t.push(...a.getDrawableElement())}break}return t}};function Qt(i,t,e){return new kt(i,t,e)}n(Qt,"getPlotComponent");var at=class{constructor(t,e,s,a){this.chartConfig=t;this.chartData=e;this.componentStore={title:qt(t,e,s,a),plot:Qt(t,e,s),xAxis:Dt(e.xAxis,t.xAxis,{titleColor:s.xAxisTitleColor,labelColor:s.xAxisLabelColor,tickColor:s.xAxisTickColor,axisLineColor:s.xAxisLineColor},a),yAxis:Dt(e.yAxis,t.yAxis,{titleColor:s.yAxisTitleColor,labelColor:s.yAxisLabelColor,tickColor:s.yAxisTickColor,axisLineColor:s.yAxisLineColor},a)}}static{n(this,"Orchestrator")}calculateVerticalSpace(){let t=this.chartConfig.width,e=this.chartConfig.height,s=0,a=0,h=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),u=Math.floor(e*this.chartConfig.plotReservedSpacePercent/100),d=this.componentStore.plot.calculateSpace({width:h,height:u});t-=d.width,e-=d.height,d=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:e}),a=d.height,e-=d.height,this.componentStore.xAxis.setAxisPosition("bottom"),d=this.componentStore.xAxis.calculateSpace({width:t,height:e}),e-=d.height,this.componentStore.yAxis.setAxisPosition("left"),d=this.componentStore.yAxis.calculateSpace({width:t,height:e}),s=d.width,t-=d.width,t>0&&(h+=t,t=0),e>0&&(u+=e,e=0),this.componentStore.plot.calculateSpace({width:h,height:u}),this.componentStore.plot.setBoundingBoxXY({x:s,y:a}),this.componentStore.xAxis.setRange([s,s+h]),this.componentStore.xAxis.setBoundingBoxXY({x:s,y:a+u}),this.componentStore.yAxis.setRange([a,a+u]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:a}),this.chartData.plots.some(y=>Tt(y))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,e=this.chartConfig.height,s=0,a=0,h=0,u=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),d=Math.floor(e*this.chartConfig.plotReservedSpacePercent/100),y=this.componentStore.plot.calculateSpace({width:u,height:d});t-=y.width,e-=y.height,y=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:e}),s=y.height,e-=y.height,this.componentStore.xAxis.setAxisPosition("left"),y=this.componentStore.xAxis.calculateSpace({width:t,height:e}),t-=y.width,a=y.width,this.componentStore.yAxis.setAxisPosition("top"),y=this.componentStore.yAxis.calculateSpace({width:t,height:e}),e-=y.height,h=s+y.height,t>0&&(u+=t,t=0),e>0&&(d+=e,e=0),this.componentStore.plot.calculateSpace({width:u,height:d}),this.componentStore.plot.setBoundingBoxXY({x:a,y:h}),this.componentStore.yAxis.setRange([a,a+u]),this.componentStore.yAxis.setBoundingBoxXY({x:a,y:s}),this.componentStore.xAxis.setRange([h,h+d]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:h}),this.chartData.plots.some(E=>Tt(E))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();let t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(let e of Object.values(this.componentStore))t.push(...e.getDrawableElements());return t}};var rt=class{static{n(this,"XYChartBuilder")}static build(t,e,s,a){return new at(t,e,s,a).getDrawableElement()}};var G=0,Kt,H=Jt(),U=Zt(),m=te(),St=U.plotColorPalette.split(",").map(i=>i.trim()),ot=!1,_t=!1;function Zt(){let i=Bt(),t=J();return Ct(i.xyChart,t.themeVariables.xyChart)}n(Zt,"getChartDefaultThemeConfig");function Jt(){let i=J();return Ct(It.xyChart,i.xyChart)}n(Jt,"getChartDefaultConfig");function te(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}n(te,"getChartDefaultData");function Rt(i){let t=J();return Mt(i.trim(),t)}n(Rt,"textSanitizer");function ge(i){Kt=i}n(ge,"setTmpSVGG");function pe(i){i==="horizontal"?H.chartOrientation="horizontal":H.chartOrientation="vertical"}n(pe,"setOrientation");function ue(i){m.xAxis.title=Rt(i.text)}n(ue,"setXAxisTitle");function ee(i,t){m.xAxis={type:"linear",title:m.xAxis.title,min:i,max:t},ot=!0}n(ee,"setXAxisRangeData");function xe(i){m.xAxis={type:"band",title:m.xAxis.title,categories:i.map(t=>Rt(t.text))},ot=!0}n(xe,"setXAxisBand");function me(i){m.yAxis.title=Rt(i.text)}n(me,"setYAxisTitle");function fe(i,t){m.yAxis={type:"linear",title:m.yAxis.title,min:i,max:t},_t=!0}n(fe,"setYAxisRangeData");function de(i){let t=Math.min(...i),e=Math.max(...i),s=O(m.yAxis)?m.yAxis.min:1/0,a=O(m.yAxis)?m.yAxis.max:-1/0;m.yAxis={type:"linear",title:m.yAxis.title,min:Math.min(s,t),max:Math.max(a,e)}}n(de,"setYAxisRangeFromPlotData");function ie(i){let t=[];if(i.length===0)return t;if(!ot){let e=O(m.xAxis)?m.xAxis.min:1/0,s=O(m.xAxis)?m.xAxis.max:-1/0;ee(Math.min(e,1),Math.max(s,i.length))}if(_t||de(i),tt(m.xAxis)&&(t=m.xAxis.categories.map((e,s)=>[e,i[s]])),O(m.xAxis)){let e=m.xAxis.min,s=m.xAxis.max,a=(s-e)/(i.length-1),h=[];for(let u=e;u<=s;u+=a)h.push(`${u}`);t=h.map((u,d)=>[u,i[d]])}return t}n(ie,"transformDataWithoutCategory");function se(i){return St[i===0?0:i%St.length]}n(se,"getPlotColorFromPalette");function be(i,t){let e=ie(t);m.plots.push({type:"line",strokeFill:se(G),strokeWidth:2,data:e}),G++}n(be,"setLineData");function ye(i,t){let e=ie(t);m.plots.push({type:"bar",fill:se(G),data:e}),G++}n(ye,"setBarData");function Ce(){if(m.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return m.title=ft(),rt.build(H,m,U,Kt)}n(Ce,"getDrawableElem");function Ae(){return U}n(Ae,"getChartThemeConfig");function Te(){return H}n(Te,"getChartConfig");var De=n(function(){Ot(),G=0,H=Jt(),m=te(),U=Zt(),St=U.plotColorPalette.split(",").map(i=>i.trim()),ot=!1,_t=!1},"clear"),ne={getDrawableElem:Ce,clear:De,setAccTitle:zt,getAccTitle:Ft,setDiagramTitle:Gt,getDiagramTitle:ft,getAccDescription:jt,setAccDescription:Nt,setOrientation:pe,setXAxisTitle:ue,setXAxisRangeData:ee,setXAxisBand:xe,setYAxisTitle:me,setYAxisRangeData:fe,setLineData:be,setBarData:ye,setTmpSVGG:ge,getChartThemeConfig:Ae,getChartConfig:Te};var we=n((i,t,e,s)=>{let a=s.db,h=a.getChartThemeConfig(),u=a.getChartConfig();function d(f){return f==="top"?"text-before-edge":"middle"}n(d,"getDominantBaseLine");function y(f){return f==="left"?"start":f==="right"?"end":"middle"}n(y,"getTextAnchor");function E(f){return`translate(${f.x}, ${f.y}) rotate(${f.rotation||0})`}n(E,"getTextTransformation"),Z.debug(`Rendering xychart chart
`+i);let w=Ut(t),_=w.append("g").attr("class","main"),L=_.append("rect").attr("width",u.width).attr("height",u.height).attr("class","background");Wt(w,u.height,u.width,!0),w.attr("viewBox",`0 0 ${u.width} ${u.height}`),L.attr("fill",h.backgroundColor),a.setTmpSVGG(w.append("g").attr("class","mermaid-tmp-group"));let X=a.getDrawableElem(),k={};function Y(f){let T=_,l="";for(let[R]of f.entries()){let N=_;R>0&&k[l]&&(N=k[l]),l+=f[R],T=k[l],T||(T=k[l]=N.append("g").attr("class",f[R]))}return T}n(Y,"getGroup");for(let f of X){if(f.data.length===0)continue;let T=Y(f.groupTexts);switch(f.type){case"rect":T.selectAll("rect").data(f.data).enter().append("rect").attr("x",l=>l.x).attr("y",l=>l.y).attr("width",l=>l.width).attr("height",l=>l.height).attr("fill",l=>l.fill).attr("stroke",l=>l.strokeFill).attr("stroke-width",l=>l.strokeWidth);break;case"text":T.selectAll("text").data(f.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",l=>l.fill).attr("font-size",l=>l.fontSize).attr("dominant-baseline",l=>d(l.verticalPos)).attr("text-anchor",l=>y(l.horizontalPos)).attr("transform",l=>E(l)).text(l=>l.text);break;case"path":T.selectAll("path").data(f.data).enter().append("path").attr("d",l=>l.path).attr("fill",l=>l.fill?l.fill:"none").attr("stroke",l=>l.strokeFill).attr("stroke-width",l=>l.strokeWidth);break}}},"draw"),ae={draw:we};var Bi={parser:$t,db:ne,renderer:ae};export{Bi as diagram};
