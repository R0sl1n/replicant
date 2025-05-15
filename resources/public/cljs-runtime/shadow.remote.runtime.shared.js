goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30967){
var map__30968 = p__30967;
var map__30968__$1 = cljs.core.__destructure_map(map__30968);
var runtime = map__30968__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30968__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31587 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31587)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30975 = runtime;
var G__30976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31587);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30975,G__30976) : shadow.remote.runtime.shared.process.call(null, G__30975,G__30976));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30979,res){
var map__30980 = p__30979;
var map__30980__$1 = cljs.core.__destructure_map(map__30980);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30980__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30981 = res;
var G__30981__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30981,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30981);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30981__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30981__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30986 = arguments.length;
switch (G__30986) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30997,msg,handlers,timeout_after_ms){
var map__30998 = p__30997;
var map__30998__$1 = cljs.core.__destructure_map(map__30998);
var runtime = map__30998__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30998__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31666 = arguments.length;
var i__5727__auto___31667 = (0);
while(true){
if((i__5727__auto___31667 < len__5726__auto___31666)){
args__5732__auto__.push((arguments[i__5727__auto___31667]));

var G__31668 = (i__5727__auto___31667 + (1));
i__5727__auto___31667 = G__31668;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31106,ev,args){
var map__31107 = p__31106;
var map__31107__$1 = cljs.core.__destructure_map(map__31107);
var runtime = map__31107__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31107__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31109 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31112 = null;
var count__31113 = (0);
var i__31114 = (0);
while(true){
if((i__31114 < count__31113)){
var ext = chunk__31112.cljs$core$IIndexed$_nth$arity$2(null, i__31114);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31674 = seq__31109;
var G__31676 = chunk__31112;
var G__31677 = count__31113;
var G__31678 = (i__31114 + (1));
seq__31109 = G__31674;
chunk__31112 = G__31676;
count__31113 = G__31677;
i__31114 = G__31678;
continue;
} else {
var G__31680 = seq__31109;
var G__31681 = chunk__31112;
var G__31682 = count__31113;
var G__31683 = (i__31114 + (1));
seq__31109 = G__31680;
chunk__31112 = G__31681;
count__31113 = G__31682;
i__31114 = G__31683;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31109);
if(temp__5823__auto__){
var seq__31109__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31109__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31109__$1);
var G__31686 = cljs.core.chunk_rest(seq__31109__$1);
var G__31687 = c__5525__auto__;
var G__31688 = cljs.core.count(c__5525__auto__);
var G__31689 = (0);
seq__31109 = G__31686;
chunk__31112 = G__31687;
count__31113 = G__31688;
i__31114 = G__31689;
continue;
} else {
var ext = cljs.core.first(seq__31109__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31694 = cljs.core.next(seq__31109__$1);
var G__31695 = null;
var G__31696 = (0);
var G__31697 = (0);
seq__31109 = G__31694;
chunk__31112 = G__31695;
count__31113 = G__31696;
i__31114 = G__31697;
continue;
} else {
var G__31698 = cljs.core.next(seq__31109__$1);
var G__31699 = null;
var G__31700 = (0);
var G__31701 = (0);
seq__31109 = G__31698;
chunk__31112 = G__31699;
count__31113 = G__31700;
i__31114 = G__31701;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31022){
var G__31024 = cljs.core.first(seq31022);
var seq31022__$1 = cljs.core.next(seq31022);
var G__31025 = cljs.core.first(seq31022__$1);
var seq31022__$2 = cljs.core.next(seq31022__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31024,G__31025,seq31022__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31199,p__31200){
var map__31202 = p__31199;
var map__31202__$1 = cljs.core.__destructure_map(map__31202);
var runtime = map__31202__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31202__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31203 = p__31200;
var map__31203__$1 = cljs.core.__destructure_map(map__31203);
var msg = map__31203__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31203__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31205 = cljs.core.deref(state_ref);
var map__31205__$1 = cljs.core.__destructure_map(map__31205);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31205__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31205__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31251,msg){
var map__31252 = p__31251;
var map__31252__$1 = cljs.core.__destructure_map(map__31252);
var runtime = map__31252__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31252__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31286,key,p__31287){
var map__31288 = p__31286;
var map__31288__$1 = cljs.core.__destructure_map(map__31288);
var state = map__31288__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31288__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31289 = p__31287;
var map__31289__$1 = cljs.core.__destructure_map(map__31289);
var spec = map__31289__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31289__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31289__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31330,key,spec){
var map__31331 = p__31330;
var map__31331__$1 = cljs.core.__destructure_map(map__31331);
var runtime = map__31331__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31331__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___31775 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___31775 == null)){
} else {
var on_welcome_31778 = temp__5827__auto___31775;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31778.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31778.cljs$core$IFn$_invoke$arity$0() : on_welcome_31778.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31338_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31338_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31339_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31339_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31340_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31340_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31341_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31341_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31342_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31342_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31369,key){
var map__31370 = p__31369;
var map__31370__$1 = cljs.core.__destructure_map(map__31370);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31370__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31382,msg){
var map__31383 = p__31382;
var map__31383__$1 = cljs.core.__destructure_map(map__31383);
var runtime = map__31383__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31383__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31426,p__31427){
var map__31430 = p__31426;
var map__31430__$1 = cljs.core.__destructure_map(map__31430);
var runtime = map__31430__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31430__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31431 = p__31427;
var map__31431__$1 = cljs.core.__destructure_map(map__31431);
var msg = map__31431__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31431__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31431__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31476 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31478 = null;
var count__31479 = (0);
var i__31480 = (0);
while(true){
if((i__31480 < count__31479)){
var map__31499 = chunk__31478.cljs$core$IIndexed$_nth$arity$2(null, i__31480);
var map__31499__$1 = cljs.core.__destructure_map(map__31499);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31499__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31913 = seq__31476;
var G__31914 = chunk__31478;
var G__31915 = count__31479;
var G__31916 = (i__31480 + (1));
seq__31476 = G__31913;
chunk__31478 = G__31914;
count__31479 = G__31915;
i__31480 = G__31916;
continue;
} else {
var G__31917 = seq__31476;
var G__31918 = chunk__31478;
var G__31919 = count__31479;
var G__31920 = (i__31480 + (1));
seq__31476 = G__31917;
chunk__31478 = G__31918;
count__31479 = G__31919;
i__31480 = G__31920;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31476);
if(temp__5823__auto__){
var seq__31476__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31476__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31476__$1);
var G__31926 = cljs.core.chunk_rest(seq__31476__$1);
var G__31927 = c__5525__auto__;
var G__31928 = cljs.core.count(c__5525__auto__);
var G__31929 = (0);
seq__31476 = G__31926;
chunk__31478 = G__31927;
count__31479 = G__31928;
i__31480 = G__31929;
continue;
} else {
var map__31534 = cljs.core.first(seq__31476__$1);
var map__31534__$1 = cljs.core.__destructure_map(map__31534);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31534__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__31934 = cljs.core.next(seq__31476__$1);
var G__31935 = null;
var G__31936 = (0);
var G__31937 = (0);
seq__31476 = G__31934;
chunk__31478 = G__31935;
count__31479 = G__31936;
i__31480 = G__31937;
continue;
} else {
var G__31940 = cljs.core.next(seq__31476__$1);
var G__31941 = null;
var G__31942 = (0);
var G__31943 = (0);
seq__31476 = G__31940;
chunk__31478 = G__31941;
count__31479 = G__31942;
i__31480 = G__31943;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
