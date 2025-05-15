goog.provide('cljs.core.async.impl.channels');

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238 = (function (val,meta28239){
this.val = val;
this.meta28239 = meta28239;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28240,meta28239__$1){
var self__ = this;
var _28240__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238(self__.val,meta28239__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28240){
var self__ = this;
var _28240__$1 = this;
return self__.meta28239;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta28239","meta28239",808757930,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28238");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28238");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels28238.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels28238 = (function cljs$core$async$impl$channels$__GT_t_cljs$core$async$impl$channels28238(val,meta28239){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238(val,meta28239));
});


cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels28238(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

var cljs$core$async$impl$channels$MMC$abort$dyn_28462 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
});
cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
return cljs$core$async$impl$channels$MMC$abort$dyn_28462(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_28468 = self__.puts.pop();
if((putter_28468 == null)){
} else {
var put_handler_28469 = putter_28468.handler;
var val_28470 = putter_28468.val;
if(put_handler_28469.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, )){
var put_cb_28471 = put_handler_28469.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
cljs.core.async.impl.dispatch.run(((function (put_cb_28471,put_handler_28469,val_28470,putter_28468,this$__$1){
return (function (){
return (put_cb_28471.cljs$core$IFn$_invoke$arity$1 ? put_cb_28471.cljs$core$IFn$_invoke$arity$1(true) : put_cb_28471.call(null, true));
});})(put_cb_28471,put_handler_28469,val_28470,putter_28468,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null, );
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, )))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(closed__$1){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );

return cljs.core.async.impl.channels.box(false);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null, ));
} else {
return and__5000__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null, self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, )){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null, );
var G__28474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null, val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__28474;
continue;
} else {
var G__28483 = takers;
takers = G__28483;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null, );
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__28288_28484 = cljs.core.seq(take_cbs);
var chunk__28289_28485 = null;
var count__28290_28486 = (0);
var i__28291_28487 = (0);
while(true){
if((i__28291_28487 < count__28290_28486)){
var f_28489 = chunk__28289_28485.cljs$core$IIndexed$_nth$arity$2(null, i__28291_28487);
cljs.core.async.impl.dispatch.run(f_28489);


var G__28490 = seq__28288_28484;
var G__28491 = chunk__28289_28485;
var G__28492 = count__28290_28486;
var G__28493 = (i__28291_28487 + (1));
seq__28288_28484 = G__28490;
chunk__28289_28485 = G__28491;
count__28290_28486 = G__28492;
i__28291_28487 = G__28493;
continue;
} else {
var temp__5823__auto___28494 = cljs.core.seq(seq__28288_28484);
if(temp__5823__auto___28494){
var seq__28288_28495__$1 = temp__5823__auto___28494;
if(cljs.core.chunked_seq_QMARK_(seq__28288_28495__$1)){
var c__5525__auto___28496 = cljs.core.chunk_first(seq__28288_28495__$1);
var G__28497 = cljs.core.chunk_rest(seq__28288_28495__$1);
var G__28498 = c__5525__auto___28496;
var G__28499 = cljs.core.count(c__5525__auto___28496);
var G__28500 = (0);
seq__28288_28484 = G__28497;
chunk__28289_28485 = G__28498;
count__28290_28486 = G__28499;
i__28291_28487 = G__28500;
continue;
} else {
var f_28503 = cljs.core.first(seq__28288_28495__$1);
cljs.core.async.impl.dispatch.run(f_28503);


var G__28504 = cljs.core.next(seq__28288_28495__$1);
var G__28505 = null;
var G__28506 = (0);
var G__28507 = (0);
seq__28288_28484 = G__28504;
chunk__28289_28485 = G__28505;
count__28290_28486 = G__28506;
i__28291_28487 = G__28507;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, ))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null, val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null, ))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, )))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5821__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
if(cljs.core.truth_(temp__5821__auto__)){
var take_cb = temp__5821__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null, );
var vec__28309 = ((((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null, ))) && ((self__.puts.length > (0)))))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__5000__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(and__5000__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null, self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (((cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null, ))) && ((self__.puts.length > (0))))))){
var G__28536 = cbs__$1;
cbs = G__28536;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28309,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28309,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null, );
} else {
}

var seq__28348_28545 = cljs.core.seq(cbs);
var chunk__28349_28546 = null;
var count__28350_28547 = (0);
var i__28351_28548 = (0);
while(true){
if((i__28351_28548 < count__28350_28547)){
var cb_28558 = chunk__28349_28546.cljs$core$IIndexed$_nth$arity$2(null, i__28351_28548);
cljs.core.async.impl.dispatch.run(((function (seq__28348_28545,chunk__28349_28546,count__28350_28547,i__28351_28548,cb_28558,val,vec__28309,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1){
return (function (){
return (cb_28558.cljs$core$IFn$_invoke$arity$1 ? cb_28558.cljs$core$IFn$_invoke$arity$1(true) : cb_28558.call(null, true));
});})(seq__28348_28545,chunk__28349_28546,count__28350_28547,i__28351_28548,cb_28558,val,vec__28309,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1))
);


var G__28566 = seq__28348_28545;
var G__28567 = chunk__28349_28546;
var G__28568 = count__28350_28547;
var G__28569 = (i__28351_28548 + (1));
seq__28348_28545 = G__28566;
chunk__28349_28546 = G__28567;
count__28350_28547 = G__28568;
i__28351_28548 = G__28569;
continue;
} else {
var temp__5823__auto___28571 = cljs.core.seq(seq__28348_28545);
if(temp__5823__auto___28571){
var seq__28348_28573__$1 = temp__5823__auto___28571;
if(cljs.core.chunked_seq_QMARK_(seq__28348_28573__$1)){
var c__5525__auto___28574 = cljs.core.chunk_first(seq__28348_28573__$1);
var G__28576 = cljs.core.chunk_rest(seq__28348_28573__$1);
var G__28577 = c__5525__auto___28574;
var G__28578 = cljs.core.count(c__5525__auto___28574);
var G__28579 = (0);
seq__28348_28545 = G__28576;
chunk__28349_28546 = G__28577;
count__28350_28547 = G__28578;
i__28351_28548 = G__28579;
continue;
} else {
var cb_28580 = cljs.core.first(seq__28348_28573__$1);
cljs.core.async.impl.dispatch.run(((function (seq__28348_28545,chunk__28349_28546,count__28350_28547,i__28351_28548,cb_28580,seq__28348_28573__$1,temp__5823__auto___28571,val,vec__28309,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1){
return (function (){
return (cb_28580.cljs$core$IFn$_invoke$arity$1 ? cb_28580.cljs$core$IFn$_invoke$arity$1(true) : cb_28580.call(null, true));
});})(seq__28348_28545,chunk__28349_28546,count__28350_28547,i__28351_28548,cb_28580,seq__28348_28573__$1,temp__5823__auto___28571,val,vec__28309,done_QMARK_,cbs,take_cb,temp__5821__auto__,this$__$1))
);


var G__28584 = cljs.core.next(seq__28348_28573__$1);
var G__28585 = null;
var G__28586 = (0);
var G__28587 = (0);
seq__28348_28545 = G__28584;
chunk__28349_28546 = G__28585;
count__28350_28547 = G__28586;
i__28351_28548 = G__28587;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null, true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null, self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__5000__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})())){
var has_val = (function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5000__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null, ):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null, ))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return (self__.puts.length === (0));
} else {
return and__5000__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null, self__.buf));
} else {
}

while(true){
var taker_28631 = self__.takes.pop();
if((taker_28631 == null)){
} else {
if(taker_28631.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, )){
var take_cb_28633 = taker_28631.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
var val_28634 = (cljs.core.truth_((function (){var and__5000__auto__ = self__.buf;
if(cljs.core.truth_(and__5000__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__5000__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null, ):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_28633,val_28634,taker_28631,this$__$1){
return (function (){
return (take_cb_28633.cljs$core$IFn$_invoke$arity$1 ? take_cb_28633.cljs$core$IFn$_invoke$arity$1(val_28634) : take_cb_28633.call(null, val_28634));
});})(take_cb_28633,val_28634,taker_28631,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null, );
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__28441 = (function (){var or__5002__auto__ = exh;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__28441.cljs$core$IFn$_invoke$arity$1 ? fexpr__28441.cljs$core$IFn$_invoke$arity$1(t) : fexpr__28441.call(null, t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__28443 = arguments.length;
switch (G__28443) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null, cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__28669 = null;
var G__28669__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null, buf__$1));
}catch (e28451){var t = e28451;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__28669__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null, buf__$1,val));
}catch (e28454){var t = e28454;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__28669 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__28669__1.call(this,buf__$1);
case 2:
return G__28669__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28669.cljs$core$IFn$_invoke$arity$1 = G__28669__1;
G__28669.cljs$core$IFn$_invoke$arity$2 = G__28669__2;
return G__28669;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
