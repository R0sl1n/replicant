goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37759 = arguments.length;
var i__5727__auto___37760 = (0);
while(true){
if((i__5727__auto___37760 < len__5726__auto___37759)){
args__5732__auto__.push((arguments[i__5727__auto___37760]));

var G__37761 = (i__5727__auto___37760 + (1));
i__5727__auto___37760 = G__37761;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37465){
var G__37466 = cljs.core.first(seq37465);
var seq37465__$1 = cljs.core.next(seq37465);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37466,seq37465__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37470 = cljs.core.seq(sources);
var chunk__37471 = null;
var count__37472 = (0);
var i__37473 = (0);
while(true){
if((i__37473 < count__37472)){
var map__37478 = chunk__37471.cljs$core$IIndexed$_nth$arity$2(null, i__37473);
var map__37478__$1 = cljs.core.__destructure_map(map__37478);
var src = map__37478__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37478__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37478__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37478__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37478__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37479){var e_37762 = e37479;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37762);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37762.message)].join('')));
}

var G__37763 = seq__37470;
var G__37764 = chunk__37471;
var G__37765 = count__37472;
var G__37766 = (i__37473 + (1));
seq__37470 = G__37763;
chunk__37471 = G__37764;
count__37472 = G__37765;
i__37473 = G__37766;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37470);
if(temp__5823__auto__){
var seq__37470__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37470__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37470__$1);
var G__37767 = cljs.core.chunk_rest(seq__37470__$1);
var G__37768 = c__5525__auto__;
var G__37769 = cljs.core.count(c__5525__auto__);
var G__37770 = (0);
seq__37470 = G__37767;
chunk__37471 = G__37768;
count__37472 = G__37769;
i__37473 = G__37770;
continue;
} else {
var map__37480 = cljs.core.first(seq__37470__$1);
var map__37480__$1 = cljs.core.__destructure_map(map__37480);
var src = map__37480__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37480__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37480__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37480__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37480__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37481){var e_37771 = e37481;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37771);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37771.message)].join('')));
}

var G__37772 = cljs.core.next(seq__37470__$1);
var G__37773 = null;
var G__37774 = (0);
var G__37775 = (0);
seq__37470 = G__37772;
chunk__37471 = G__37773;
count__37472 = G__37774;
i__37473 = G__37775;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null, ));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37482 = cljs.core.seq(js_requires);
var chunk__37483 = null;
var count__37484 = (0);
var i__37485 = (0);
while(true){
if((i__37485 < count__37484)){
var js_ns = chunk__37483.cljs$core$IIndexed$_nth$arity$2(null, i__37485);
var require_str_37776 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37776);


var G__37777 = seq__37482;
var G__37778 = chunk__37483;
var G__37779 = count__37484;
var G__37780 = (i__37485 + (1));
seq__37482 = G__37777;
chunk__37483 = G__37778;
count__37484 = G__37779;
i__37485 = G__37780;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37482);
if(temp__5823__auto__){
var seq__37482__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37482__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37482__$1);
var G__37781 = cljs.core.chunk_rest(seq__37482__$1);
var G__37782 = c__5525__auto__;
var G__37783 = cljs.core.count(c__5525__auto__);
var G__37784 = (0);
seq__37482 = G__37781;
chunk__37483 = G__37782;
count__37484 = G__37783;
i__37485 = G__37784;
continue;
} else {
var js_ns = cljs.core.first(seq__37482__$1);
var require_str_37785 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37785);


var G__37786 = cljs.core.next(seq__37482__$1);
var G__37787 = null;
var G__37788 = (0);
var G__37789 = (0);
seq__37482 = G__37786;
chunk__37483 = G__37787;
count__37484 = G__37788;
i__37485 = G__37789;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37490){
var map__37491 = p__37490;
var map__37491__$1 = cljs.core.__destructure_map(map__37491);
var msg = map__37491__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37492(s__37493){
return (new cljs.core.LazySeq(null,(function (){
var s__37493__$1 = s__37493;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__37493__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__37499 = cljs.core.first(xs__6383__auto__);
var map__37499__$1 = cljs.core.__destructure_map(map__37499);
var src = map__37499__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__37493__$1,map__37499,map__37499__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37491,map__37491__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37492_$_iter__37494(s__37495){
return (new cljs.core.LazySeq(null,((function (s__37493__$1,map__37499,map__37499__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37491,map__37491__$1,msg,info,reload_info){
return (function (){
var s__37495__$1 = s__37495;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__37495__$1);
if(temp__5823__auto____$1){
var s__37495__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37495__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__37495__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__37497 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__37496 = (0);
while(true){
if((i__37496 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__37496);
cljs.core.chunk_append(b__37497,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37790 = (i__37496 + (1));
i__37496 = G__37790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37497),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37492_$_iter__37494(cljs.core.chunk_rest(s__37495__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37497),null);
}
} else {
var warning = cljs.core.first(s__37495__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37492_$_iter__37494(cljs.core.rest(s__37495__$2)));
}
} else {
return null;
}
break;
}
});})(s__37493__$1,map__37499,map__37499__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37491,map__37491__$1,msg,info,reload_info))
,null,null));
});})(s__37493__$1,map__37499,map__37499__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__37491,map__37491__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37492(cljs.core.rest(s__37493__$1)));
} else {
var G__37791 = cljs.core.rest(s__37493__$1);
s__37493__$1 = G__37791;
continue;
}
} else {
var G__37792 = cljs.core.rest(s__37493__$1);
s__37493__$1 = G__37792;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37501_37793 = cljs.core.seq(warnings);
var chunk__37502_37794 = null;
var count__37503_37795 = (0);
var i__37504_37796 = (0);
while(true){
if((i__37504_37796 < count__37503_37795)){
var map__37507_37797 = chunk__37502_37794.cljs$core$IIndexed$_nth$arity$2(null, i__37504_37796);
var map__37507_37798__$1 = cljs.core.__destructure_map(map__37507_37797);
var w_37799 = map__37507_37798__$1;
var msg_37800__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507_37798__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507_37798__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507_37798__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507_37798__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37803)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37801),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37802),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37800__$1)].join(''));


var G__37804 = seq__37501_37793;
var G__37805 = chunk__37502_37794;
var G__37806 = count__37503_37795;
var G__37807 = (i__37504_37796 + (1));
seq__37501_37793 = G__37804;
chunk__37502_37794 = G__37805;
count__37503_37795 = G__37806;
i__37504_37796 = G__37807;
continue;
} else {
var temp__5823__auto___37808 = cljs.core.seq(seq__37501_37793);
if(temp__5823__auto___37808){
var seq__37501_37809__$1 = temp__5823__auto___37808;
if(cljs.core.chunked_seq_QMARK_(seq__37501_37809__$1)){
var c__5525__auto___37810 = cljs.core.chunk_first(seq__37501_37809__$1);
var G__37811 = cljs.core.chunk_rest(seq__37501_37809__$1);
var G__37812 = c__5525__auto___37810;
var G__37813 = cljs.core.count(c__5525__auto___37810);
var G__37814 = (0);
seq__37501_37793 = G__37811;
chunk__37502_37794 = G__37812;
count__37503_37795 = G__37813;
i__37504_37796 = G__37814;
continue;
} else {
var map__37508_37815 = cljs.core.first(seq__37501_37809__$1);
var map__37508_37816__$1 = cljs.core.__destructure_map(map__37508_37815);
var w_37817 = map__37508_37816__$1;
var msg_37818__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37508_37816__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37508_37816__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37508_37816__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37508_37816__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37821)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37819),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37820),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37818__$1)].join(''));


var G__37822 = cljs.core.next(seq__37501_37809__$1);
var G__37823 = null;
var G__37824 = (0);
var G__37825 = (0);
seq__37501_37793 = G__37822;
chunk__37502_37794 = G__37823;
count__37503_37795 = G__37824;
i__37504_37796 = G__37825;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37489_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37489_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37511 = node_uri;
G__37511.setQuery(null);

G__37511.setPath(new$);

return G__37511;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37513){
var map__37514 = p__37513;
var map__37514__$1 = cljs.core.__destructure_map(map__37514);
var msg = map__37514__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37515 = cljs.core.seq(updates);
var chunk__37517 = null;
var count__37518 = (0);
var i__37519 = (0);
while(true){
if((i__37519 < count__37518)){
var path = chunk__37517.cljs$core$IIndexed$_nth$arity$2(null, i__37519);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37629_37826 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37633_37827 = null;
var count__37634_37828 = (0);
var i__37635_37829 = (0);
while(true){
if((i__37635_37829 < count__37634_37828)){
var node_37830 = chunk__37633_37827.cljs$core$IIndexed$_nth$arity$2(null, i__37635_37829);
if(cljs.core.not(node_37830.shadow$old)){
var path_match_37831 = shadow.cljs.devtools.client.browser.match_paths(node_37830.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37831)){
var new_link_37832 = (function (){var G__37661 = node_37830.cloneNode(true);
G__37661.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37831),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37661;
})();
(node_37830.shadow$old = true);

(new_link_37832.onload = ((function (seq__37629_37826,chunk__37633_37827,count__37634_37828,i__37635_37829,seq__37515,chunk__37517,count__37518,i__37519,new_link_37832,path_match_37831,node_37830,path,map__37514,map__37514__$1,msg,updates,reload_info){
return (function (e){
var seq__37662_37833 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37664_37834 = null;
var count__37665_37835 = (0);
var i__37666_37836 = (0);
while(true){
if((i__37666_37836 < count__37665_37835)){
var map__37670_37837 = chunk__37664_37834.cljs$core$IIndexed$_nth$arity$2(null, i__37666_37836);
var map__37670_37838__$1 = cljs.core.__destructure_map(map__37670_37837);
var task_37839 = map__37670_37838__$1;
var fn_str_37840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37670_37838__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37670_37838__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37842 = goog.getObjectByName(fn_str_37840,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37841)].join(''));

(fn_obj_37842.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37842.cljs$core$IFn$_invoke$arity$2(path,new_link_37832) : fn_obj_37842.call(null, path,new_link_37832));


var G__37843 = seq__37662_37833;
var G__37844 = chunk__37664_37834;
var G__37845 = count__37665_37835;
var G__37846 = (i__37666_37836 + (1));
seq__37662_37833 = G__37843;
chunk__37664_37834 = G__37844;
count__37665_37835 = G__37845;
i__37666_37836 = G__37846;
continue;
} else {
var temp__5823__auto___37847 = cljs.core.seq(seq__37662_37833);
if(temp__5823__auto___37847){
var seq__37662_37848__$1 = temp__5823__auto___37847;
if(cljs.core.chunked_seq_QMARK_(seq__37662_37848__$1)){
var c__5525__auto___37849 = cljs.core.chunk_first(seq__37662_37848__$1);
var G__37850 = cljs.core.chunk_rest(seq__37662_37848__$1);
var G__37851 = c__5525__auto___37849;
var G__37852 = cljs.core.count(c__5525__auto___37849);
var G__37853 = (0);
seq__37662_37833 = G__37850;
chunk__37664_37834 = G__37851;
count__37665_37835 = G__37852;
i__37666_37836 = G__37853;
continue;
} else {
var map__37671_37854 = cljs.core.first(seq__37662_37848__$1);
var map__37671_37855__$1 = cljs.core.__destructure_map(map__37671_37854);
var task_37856 = map__37671_37855__$1;
var fn_str_37857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37671_37855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37671_37855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37859 = goog.getObjectByName(fn_str_37857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37858)].join(''));

(fn_obj_37859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37859.cljs$core$IFn$_invoke$arity$2(path,new_link_37832) : fn_obj_37859.call(null, path,new_link_37832));


var G__37860 = cljs.core.next(seq__37662_37848__$1);
var G__37861 = null;
var G__37862 = (0);
var G__37863 = (0);
seq__37662_37833 = G__37860;
chunk__37664_37834 = G__37861;
count__37665_37835 = G__37862;
i__37666_37836 = G__37863;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37830);
});})(seq__37629_37826,chunk__37633_37827,count__37634_37828,i__37635_37829,seq__37515,chunk__37517,count__37518,i__37519,new_link_37832,path_match_37831,node_37830,path,map__37514,map__37514__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37831], 0));

goog.dom.insertSiblingAfter(new_link_37832,node_37830);


var G__37864 = seq__37629_37826;
var G__37865 = chunk__37633_37827;
var G__37866 = count__37634_37828;
var G__37867 = (i__37635_37829 + (1));
seq__37629_37826 = G__37864;
chunk__37633_37827 = G__37865;
count__37634_37828 = G__37866;
i__37635_37829 = G__37867;
continue;
} else {
var G__37868 = seq__37629_37826;
var G__37869 = chunk__37633_37827;
var G__37870 = count__37634_37828;
var G__37871 = (i__37635_37829 + (1));
seq__37629_37826 = G__37868;
chunk__37633_37827 = G__37869;
count__37634_37828 = G__37870;
i__37635_37829 = G__37871;
continue;
}
} else {
var G__37872 = seq__37629_37826;
var G__37873 = chunk__37633_37827;
var G__37874 = count__37634_37828;
var G__37875 = (i__37635_37829 + (1));
seq__37629_37826 = G__37872;
chunk__37633_37827 = G__37873;
count__37634_37828 = G__37874;
i__37635_37829 = G__37875;
continue;
}
} else {
var temp__5823__auto___37876 = cljs.core.seq(seq__37629_37826);
if(temp__5823__auto___37876){
var seq__37629_37877__$1 = temp__5823__auto___37876;
if(cljs.core.chunked_seq_QMARK_(seq__37629_37877__$1)){
var c__5525__auto___37878 = cljs.core.chunk_first(seq__37629_37877__$1);
var G__37879 = cljs.core.chunk_rest(seq__37629_37877__$1);
var G__37880 = c__5525__auto___37878;
var G__37881 = cljs.core.count(c__5525__auto___37878);
var G__37882 = (0);
seq__37629_37826 = G__37879;
chunk__37633_37827 = G__37880;
count__37634_37828 = G__37881;
i__37635_37829 = G__37882;
continue;
} else {
var node_37883 = cljs.core.first(seq__37629_37877__$1);
if(cljs.core.not(node_37883.shadow$old)){
var path_match_37884 = shadow.cljs.devtools.client.browser.match_paths(node_37883.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37884)){
var new_link_37885 = (function (){var G__37672 = node_37883.cloneNode(true);
G__37672.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37884),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37672;
})();
(node_37883.shadow$old = true);

(new_link_37885.onload = ((function (seq__37629_37826,chunk__37633_37827,count__37634_37828,i__37635_37829,seq__37515,chunk__37517,count__37518,i__37519,new_link_37885,path_match_37884,node_37883,seq__37629_37877__$1,temp__5823__auto___37876,path,map__37514,map__37514__$1,msg,updates,reload_info){
return (function (e){
var seq__37673_37886 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37675_37887 = null;
var count__37676_37888 = (0);
var i__37677_37889 = (0);
while(true){
if((i__37677_37889 < count__37676_37888)){
var map__37681_37890 = chunk__37675_37887.cljs$core$IIndexed$_nth$arity$2(null, i__37677_37889);
var map__37681_37891__$1 = cljs.core.__destructure_map(map__37681_37890);
var task_37892 = map__37681_37891__$1;
var fn_str_37893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37681_37891__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37681_37891__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37895 = goog.getObjectByName(fn_str_37893,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37894)].join(''));

(fn_obj_37895.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37895.cljs$core$IFn$_invoke$arity$2(path,new_link_37885) : fn_obj_37895.call(null, path,new_link_37885));


var G__37896 = seq__37673_37886;
var G__37897 = chunk__37675_37887;
var G__37898 = count__37676_37888;
var G__37899 = (i__37677_37889 + (1));
seq__37673_37886 = G__37896;
chunk__37675_37887 = G__37897;
count__37676_37888 = G__37898;
i__37677_37889 = G__37899;
continue;
} else {
var temp__5823__auto___37900__$1 = cljs.core.seq(seq__37673_37886);
if(temp__5823__auto___37900__$1){
var seq__37673_37901__$1 = temp__5823__auto___37900__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37673_37901__$1)){
var c__5525__auto___37902 = cljs.core.chunk_first(seq__37673_37901__$1);
var G__37903 = cljs.core.chunk_rest(seq__37673_37901__$1);
var G__37904 = c__5525__auto___37902;
var G__37905 = cljs.core.count(c__5525__auto___37902);
var G__37906 = (0);
seq__37673_37886 = G__37903;
chunk__37675_37887 = G__37904;
count__37676_37888 = G__37905;
i__37677_37889 = G__37906;
continue;
} else {
var map__37682_37907 = cljs.core.first(seq__37673_37901__$1);
var map__37682_37908__$1 = cljs.core.__destructure_map(map__37682_37907);
var task_37909 = map__37682_37908__$1;
var fn_str_37910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37682_37908__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37682_37908__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37912 = goog.getObjectByName(fn_str_37910,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37911)].join(''));

(fn_obj_37912.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37912.cljs$core$IFn$_invoke$arity$2(path,new_link_37885) : fn_obj_37912.call(null, path,new_link_37885));


var G__37913 = cljs.core.next(seq__37673_37901__$1);
var G__37914 = null;
var G__37915 = (0);
var G__37916 = (0);
seq__37673_37886 = G__37913;
chunk__37675_37887 = G__37914;
count__37676_37888 = G__37915;
i__37677_37889 = G__37916;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37883);
});})(seq__37629_37826,chunk__37633_37827,count__37634_37828,i__37635_37829,seq__37515,chunk__37517,count__37518,i__37519,new_link_37885,path_match_37884,node_37883,seq__37629_37877__$1,temp__5823__auto___37876,path,map__37514,map__37514__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37884], 0));

goog.dom.insertSiblingAfter(new_link_37885,node_37883);


var G__37917 = cljs.core.next(seq__37629_37877__$1);
var G__37918 = null;
var G__37919 = (0);
var G__37920 = (0);
seq__37629_37826 = G__37917;
chunk__37633_37827 = G__37918;
count__37634_37828 = G__37919;
i__37635_37829 = G__37920;
continue;
} else {
var G__37921 = cljs.core.next(seq__37629_37877__$1);
var G__37922 = null;
var G__37923 = (0);
var G__37924 = (0);
seq__37629_37826 = G__37921;
chunk__37633_37827 = G__37922;
count__37634_37828 = G__37923;
i__37635_37829 = G__37924;
continue;
}
} else {
var G__37925 = cljs.core.next(seq__37629_37877__$1);
var G__37926 = null;
var G__37927 = (0);
var G__37928 = (0);
seq__37629_37826 = G__37925;
chunk__37633_37827 = G__37926;
count__37634_37828 = G__37927;
i__37635_37829 = G__37928;
continue;
}
}
} else {
}
}
break;
}


var G__37929 = seq__37515;
var G__37930 = chunk__37517;
var G__37931 = count__37518;
var G__37932 = (i__37519 + (1));
seq__37515 = G__37929;
chunk__37517 = G__37930;
count__37518 = G__37931;
i__37519 = G__37932;
continue;
} else {
var G__37933 = seq__37515;
var G__37934 = chunk__37517;
var G__37935 = count__37518;
var G__37936 = (i__37519 + (1));
seq__37515 = G__37933;
chunk__37517 = G__37934;
count__37518 = G__37935;
i__37519 = G__37936;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37515);
if(temp__5823__auto__){
var seq__37515__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37515__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37515__$1);
var G__37937 = cljs.core.chunk_rest(seq__37515__$1);
var G__37938 = c__5525__auto__;
var G__37939 = cljs.core.count(c__5525__auto__);
var G__37940 = (0);
seq__37515 = G__37937;
chunk__37517 = G__37938;
count__37518 = G__37939;
i__37519 = G__37940;
continue;
} else {
var path = cljs.core.first(seq__37515__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37683_37941 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37687_37942 = null;
var count__37688_37943 = (0);
var i__37689_37944 = (0);
while(true){
if((i__37689_37944 < count__37688_37943)){
var node_37945 = chunk__37687_37942.cljs$core$IIndexed$_nth$arity$2(null, i__37689_37944);
if(cljs.core.not(node_37945.shadow$old)){
var path_match_37946 = shadow.cljs.devtools.client.browser.match_paths(node_37945.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37946)){
var new_link_37947 = (function (){var G__37715 = node_37945.cloneNode(true);
G__37715.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37946),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37715;
})();
(node_37945.shadow$old = true);

(new_link_37947.onload = ((function (seq__37683_37941,chunk__37687_37942,count__37688_37943,i__37689_37944,seq__37515,chunk__37517,count__37518,i__37519,new_link_37947,path_match_37946,node_37945,path,seq__37515__$1,temp__5823__auto__,map__37514,map__37514__$1,msg,updates,reload_info){
return (function (e){
var seq__37716_37948 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37718_37949 = null;
var count__37719_37950 = (0);
var i__37720_37951 = (0);
while(true){
if((i__37720_37951 < count__37719_37950)){
var map__37724_37952 = chunk__37718_37949.cljs$core$IIndexed$_nth$arity$2(null, i__37720_37951);
var map__37724_37953__$1 = cljs.core.__destructure_map(map__37724_37952);
var task_37954 = map__37724_37953__$1;
var fn_str_37955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37724_37953__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37724_37953__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37957 = goog.getObjectByName(fn_str_37955,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37956)].join(''));

(fn_obj_37957.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37957.cljs$core$IFn$_invoke$arity$2(path,new_link_37947) : fn_obj_37957.call(null, path,new_link_37947));


var G__37958 = seq__37716_37948;
var G__37959 = chunk__37718_37949;
var G__37960 = count__37719_37950;
var G__37961 = (i__37720_37951 + (1));
seq__37716_37948 = G__37958;
chunk__37718_37949 = G__37959;
count__37719_37950 = G__37960;
i__37720_37951 = G__37961;
continue;
} else {
var temp__5823__auto___37962__$1 = cljs.core.seq(seq__37716_37948);
if(temp__5823__auto___37962__$1){
var seq__37716_37963__$1 = temp__5823__auto___37962__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37716_37963__$1)){
var c__5525__auto___37964 = cljs.core.chunk_first(seq__37716_37963__$1);
var G__37965 = cljs.core.chunk_rest(seq__37716_37963__$1);
var G__37966 = c__5525__auto___37964;
var G__37967 = cljs.core.count(c__5525__auto___37964);
var G__37968 = (0);
seq__37716_37948 = G__37965;
chunk__37718_37949 = G__37966;
count__37719_37950 = G__37967;
i__37720_37951 = G__37968;
continue;
} else {
var map__37725_37969 = cljs.core.first(seq__37716_37963__$1);
var map__37725_37970__$1 = cljs.core.__destructure_map(map__37725_37969);
var task_37971 = map__37725_37970__$1;
var fn_str_37972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725_37970__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725_37970__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37974 = goog.getObjectByName(fn_str_37972,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37973)].join(''));

(fn_obj_37974.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37974.cljs$core$IFn$_invoke$arity$2(path,new_link_37947) : fn_obj_37974.call(null, path,new_link_37947));


var G__37975 = cljs.core.next(seq__37716_37963__$1);
var G__37976 = null;
var G__37977 = (0);
var G__37978 = (0);
seq__37716_37948 = G__37975;
chunk__37718_37949 = G__37976;
count__37719_37950 = G__37977;
i__37720_37951 = G__37978;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37945);
});})(seq__37683_37941,chunk__37687_37942,count__37688_37943,i__37689_37944,seq__37515,chunk__37517,count__37518,i__37519,new_link_37947,path_match_37946,node_37945,path,seq__37515__$1,temp__5823__auto__,map__37514,map__37514__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37946], 0));

goog.dom.insertSiblingAfter(new_link_37947,node_37945);


var G__37979 = seq__37683_37941;
var G__37980 = chunk__37687_37942;
var G__37981 = count__37688_37943;
var G__37982 = (i__37689_37944 + (1));
seq__37683_37941 = G__37979;
chunk__37687_37942 = G__37980;
count__37688_37943 = G__37981;
i__37689_37944 = G__37982;
continue;
} else {
var G__37983 = seq__37683_37941;
var G__37984 = chunk__37687_37942;
var G__37985 = count__37688_37943;
var G__37986 = (i__37689_37944 + (1));
seq__37683_37941 = G__37983;
chunk__37687_37942 = G__37984;
count__37688_37943 = G__37985;
i__37689_37944 = G__37986;
continue;
}
} else {
var G__37987 = seq__37683_37941;
var G__37988 = chunk__37687_37942;
var G__37989 = count__37688_37943;
var G__37990 = (i__37689_37944 + (1));
seq__37683_37941 = G__37987;
chunk__37687_37942 = G__37988;
count__37688_37943 = G__37989;
i__37689_37944 = G__37990;
continue;
}
} else {
var temp__5823__auto___37991__$1 = cljs.core.seq(seq__37683_37941);
if(temp__5823__auto___37991__$1){
var seq__37683_37992__$1 = temp__5823__auto___37991__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37683_37992__$1)){
var c__5525__auto___37993 = cljs.core.chunk_first(seq__37683_37992__$1);
var G__37994 = cljs.core.chunk_rest(seq__37683_37992__$1);
var G__37995 = c__5525__auto___37993;
var G__37996 = cljs.core.count(c__5525__auto___37993);
var G__37997 = (0);
seq__37683_37941 = G__37994;
chunk__37687_37942 = G__37995;
count__37688_37943 = G__37996;
i__37689_37944 = G__37997;
continue;
} else {
var node_37998 = cljs.core.first(seq__37683_37992__$1);
if(cljs.core.not(node_37998.shadow$old)){
var path_match_37999 = shadow.cljs.devtools.client.browser.match_paths(node_37998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37999)){
var new_link_38000 = (function (){var G__37726 = node_37998.cloneNode(true);
G__37726.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37999),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37726;
})();
(node_37998.shadow$old = true);

(new_link_38000.onload = ((function (seq__37683_37941,chunk__37687_37942,count__37688_37943,i__37689_37944,seq__37515,chunk__37517,count__37518,i__37519,new_link_38000,path_match_37999,node_37998,seq__37683_37992__$1,temp__5823__auto___37991__$1,path,seq__37515__$1,temp__5823__auto__,map__37514,map__37514__$1,msg,updates,reload_info){
return (function (e){
var seq__37727_38001 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37729_38002 = null;
var count__37730_38003 = (0);
var i__37731_38004 = (0);
while(true){
if((i__37731_38004 < count__37730_38003)){
var map__37735_38005 = chunk__37729_38002.cljs$core$IIndexed$_nth$arity$2(null, i__37731_38004);
var map__37735_38006__$1 = cljs.core.__destructure_map(map__37735_38005);
var task_38007 = map__37735_38006__$1;
var fn_str_38008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37735_38006__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37735_38006__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38010 = goog.getObjectByName(fn_str_38008,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38009)].join(''));

(fn_obj_38010.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38010.cljs$core$IFn$_invoke$arity$2(path,new_link_38000) : fn_obj_38010.call(null, path,new_link_38000));


var G__38011 = seq__37727_38001;
var G__38012 = chunk__37729_38002;
var G__38013 = count__37730_38003;
var G__38014 = (i__37731_38004 + (1));
seq__37727_38001 = G__38011;
chunk__37729_38002 = G__38012;
count__37730_38003 = G__38013;
i__37731_38004 = G__38014;
continue;
} else {
var temp__5823__auto___38015__$2 = cljs.core.seq(seq__37727_38001);
if(temp__5823__auto___38015__$2){
var seq__37727_38016__$1 = temp__5823__auto___38015__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37727_38016__$1)){
var c__5525__auto___38017 = cljs.core.chunk_first(seq__37727_38016__$1);
var G__38018 = cljs.core.chunk_rest(seq__37727_38016__$1);
var G__38019 = c__5525__auto___38017;
var G__38020 = cljs.core.count(c__5525__auto___38017);
var G__38021 = (0);
seq__37727_38001 = G__38018;
chunk__37729_38002 = G__38019;
count__37730_38003 = G__38020;
i__37731_38004 = G__38021;
continue;
} else {
var map__37736_38022 = cljs.core.first(seq__37727_38016__$1);
var map__37736_38023__$1 = cljs.core.__destructure_map(map__37736_38022);
var task_38024 = map__37736_38023__$1;
var fn_str_38025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37736_38023__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37736_38023__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38027 = goog.getObjectByName(fn_str_38025,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38026)].join(''));

(fn_obj_38027.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38027.cljs$core$IFn$_invoke$arity$2(path,new_link_38000) : fn_obj_38027.call(null, path,new_link_38000));


var G__38028 = cljs.core.next(seq__37727_38016__$1);
var G__38029 = null;
var G__38030 = (0);
var G__38031 = (0);
seq__37727_38001 = G__38028;
chunk__37729_38002 = G__38029;
count__37730_38003 = G__38030;
i__37731_38004 = G__38031;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37998);
});})(seq__37683_37941,chunk__37687_37942,count__37688_37943,i__37689_37944,seq__37515,chunk__37517,count__37518,i__37519,new_link_38000,path_match_37999,node_37998,seq__37683_37992__$1,temp__5823__auto___37991__$1,path,seq__37515__$1,temp__5823__auto__,map__37514,map__37514__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37999], 0));

goog.dom.insertSiblingAfter(new_link_38000,node_37998);


var G__38032 = cljs.core.next(seq__37683_37992__$1);
var G__38033 = null;
var G__38034 = (0);
var G__38035 = (0);
seq__37683_37941 = G__38032;
chunk__37687_37942 = G__38033;
count__37688_37943 = G__38034;
i__37689_37944 = G__38035;
continue;
} else {
var G__38036 = cljs.core.next(seq__37683_37992__$1);
var G__38037 = null;
var G__38038 = (0);
var G__38039 = (0);
seq__37683_37941 = G__38036;
chunk__37687_37942 = G__38037;
count__37688_37943 = G__38038;
i__37689_37944 = G__38039;
continue;
}
} else {
var G__38040 = cljs.core.next(seq__37683_37992__$1);
var G__38041 = null;
var G__38042 = (0);
var G__38043 = (0);
seq__37683_37941 = G__38040;
chunk__37687_37942 = G__38041;
count__37688_37943 = G__38042;
i__37689_37944 = G__38043;
continue;
}
}
} else {
}
}
break;
}


var G__38044 = cljs.core.next(seq__37515__$1);
var G__38045 = null;
var G__38046 = (0);
var G__38047 = (0);
seq__37515 = G__38044;
chunk__37517 = G__38045;
count__37518 = G__38046;
i__37519 = G__38047;
continue;
} else {
var G__38048 = cljs.core.next(seq__37515__$1);
var G__38049 = null;
var G__38050 = (0);
var G__38051 = (0);
seq__37515 = G__38048;
chunk__37517 = G__38049;
count__37518 = G__38050;
i__37519 = G__38051;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__37738 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37738) : success.call(null, G__37738));
}catch (e37737){var e = e37737;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__37739,success,fail){
var map__37740 = p__37739;
var map__37740__$1 = cljs.core.__destructure_map(map__37740);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__37742 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__37742) : success.call(null, G__37742));
}catch (e37741){var e = e37741;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37743,done,error){
var map__37744 = p__37743;
var map__37744__$1 = cljs.core.__destructure_map(map__37744);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37744__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37745,done,error){
var map__37746 = p__37745;
var map__37746__$1 = cljs.core.__destructure_map(map__37746);
var msg = map__37746__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37746__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37746__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37746__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37747){
var map__37748 = p__37747;
var map__37748__$1 = cljs.core.__destructure_map(map__37748);
var src = map__37748__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37748__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37749 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37749) : done.call(null, G__37749));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37750){
var map__37751 = p__37750;
var map__37751__$1 = cljs.core.__destructure_map(map__37751);
var msg__$1 = map__37751__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37751__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e37752){var ex = e37752;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37753){
var map__37754 = p__37753;
var map__37754__$1 = cljs.core.__destructure_map(map__37754);
var env = map__37754__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37754__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37755){
var map__37756 = p__37755;
var map__37756__$1 = cljs.core.__destructure_map(map__37756);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37757){
var map__37758 = p__37757;
var map__37758__$1 = cljs.core.__destructure_map(map__37758);
var svc = map__37758__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37758__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
