goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31143 = (function (f,blockable,meta31144){
this.f = f;
this.blockable = blockable;
this.meta31144 = meta31144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31145,meta31144__$1){
var self__ = this;
var _31145__$1 = this;
return (new cljs.core.async.t_cljs$core$async31143(self__.f,self__.blockable,meta31144__$1));
}));

(cljs.core.async.t_cljs$core$async31143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31145){
var self__ = this;
var _31145__$1 = this;
return self__.meta31144;
}));

(cljs.core.async.t_cljs$core$async31143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31144","meta31144",-2056592957,null)], null);
}));

(cljs.core.async.t_cljs$core$async31143.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31143");

(cljs.core.async.t_cljs$core$async31143.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31143");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31143.
 */
cljs.core.async.__GT_t_cljs$core$async31143 = (function cljs$core$async$__GT_t_cljs$core$async31143(f,blockable,meta31144){
return (new cljs.core.async.t_cljs$core$async31143(f,blockable,meta31144));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31135 = arguments.length;
switch (G__31135) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31143(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31180 = arguments.length;
switch (G__31180) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31190 = arguments.length;
switch (G__31190) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31212 = arguments.length;
switch (G__31212) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34487 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34487) : fn1.call(null, val_34487));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34487) : fn1.call(null, val_34487));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31267 = arguments.length;
switch (G__31267) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___34492 = n;
var x_34493 = (0);
while(true){
if((x_34493 < n__5593__auto___34492)){
(a[x_34493] = x_34493);

var G__34494 = (x_34493 + (1));
x_34493 = G__34494;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31312 = (function (flag,meta31313){
this.flag = flag;
this.meta31313 = meta31313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31314,meta31313__$1){
var self__ = this;
var _31314__$1 = this;
return (new cljs.core.async.t_cljs$core$async31312(self__.flag,meta31313__$1));
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31314){
var self__ = this;
var _31314__$1 = this;
return self__.meta31313;
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31313","meta31313",1791549257,null)], null);
}));

(cljs.core.async.t_cljs$core$async31312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31312");

(cljs.core.async.t_cljs$core$async31312.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31312.
 */
cljs.core.async.__GT_t_cljs$core$async31312 = (function cljs$core$async$__GT_t_cljs$core$async31312(flag,meta31313){
return (new cljs.core.async.t_cljs$core$async31312(flag,meta31313));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31312(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31333 = (function (flag,cb,meta31334){
this.flag = flag;
this.cb = cb;
this.meta31334 = meta31334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31335,meta31334__$1){
var self__ = this;
var _31335__$1 = this;
return (new cljs.core.async.t_cljs$core$async31333(self__.flag,self__.cb,meta31334__$1));
}));

(cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31335){
var self__ = this;
var _31335__$1 = this;
return self__.meta31334;
}));

(cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31334","meta31334",856849591,null)], null);
}));

(cljs.core.async.t_cljs$core$async31333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31333");

(cljs.core.async.t_cljs$core$async31333.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31333.
 */
cljs.core.async.__GT_t_cljs$core$async31333 = (function cljs$core$async$__GT_t_cljs$core$async31333(flag,cb,meta31334){
return (new cljs.core.async.t_cljs$core$async31333(flag,cb,meta31334));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31333(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31363_SHARP_){
var G__31391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31363_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31391) : fret.call(null, G__31391));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31368_SHARP_){
var G__31392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31368_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31392) : fret.call(null, G__31392));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34496 = (i + (1));
i = G__34496;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34497 = arguments.length;
var i__5727__auto___34498 = (0);
while(true){
if((i__5727__auto___34498 < len__5726__auto___34497)){
args__5732__auto__.push((arguments[i__5727__auto___34498]));

var G__34499 = (i__5727__auto___34498 + (1));
i__5727__auto___34498 = G__34499;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31429){
var map__31433 = p__31429;
var map__31433__$1 = cljs.core.__destructure_map(map__31433);
var opts = map__31433__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31417){
var G__31418 = cljs.core.first(seq31417);
var seq31417__$1 = cljs.core.next(seq31417);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31418,seq31417__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31490 = arguments.length;
switch (G__31490) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31015__auto___34502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_31528){
var state_val_31529 = (state_31528[(1)]);
if((state_val_31529 === (7))){
var inst_31524 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31533_34504 = state_31528__$1;
(statearr_31533_34504[(2)] = inst_31524);

(statearr_31533_34504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (1))){
var state_31528__$1 = state_31528;
var statearr_31536_34505 = state_31528__$1;
(statearr_31536_34505[(2)] = null);

(statearr_31536_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (4))){
var inst_31506 = (state_31528[(7)]);
var inst_31506__$1 = (state_31528[(2)]);
var inst_31507 = (inst_31506__$1 == null);
var state_31528__$1 = (function (){var statearr_31540 = state_31528;
(statearr_31540[(7)] = inst_31506__$1);

return statearr_31540;
})();
if(cljs.core.truth_(inst_31507)){
var statearr_31541_34506 = state_31528__$1;
(statearr_31541_34506[(1)] = (5));

} else {
var statearr_31542_34507 = state_31528__$1;
(statearr_31542_34507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (13))){
var state_31528__$1 = state_31528;
var statearr_31549_34508 = state_31528__$1;
(statearr_31549_34508[(2)] = null);

(statearr_31549_34508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (6))){
var inst_31506 = (state_31528[(7)]);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31528__$1,(11),to,inst_31506);
} else {
if((state_val_31529 === (3))){
var inst_31526 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31528__$1,inst_31526);
} else {
if((state_val_31529 === (12))){
var state_31528__$1 = state_31528;
var statearr_31550_34509 = state_31528__$1;
(statearr_31550_34509[(2)] = null);

(statearr_31550_34509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (2))){
var state_31528__$1 = state_31528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31528__$1,(4),from);
} else {
if((state_val_31529 === (11))){
var inst_31517 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
if(cljs.core.truth_(inst_31517)){
var statearr_31552_34510 = state_31528__$1;
(statearr_31552_34510[(1)] = (12));

} else {
var statearr_31553_34511 = state_31528__$1;
(statearr_31553_34511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (9))){
var state_31528__$1 = state_31528;
var statearr_31555_34513 = state_31528__$1;
(statearr_31555_34513[(2)] = null);

(statearr_31555_34513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (5))){
var state_31528__$1 = state_31528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31556_34514 = state_31528__$1;
(statearr_31556_34514[(1)] = (8));

} else {
var statearr_31557_34515 = state_31528__$1;
(statearr_31557_34515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (14))){
var inst_31522 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31558_34517 = state_31528__$1;
(statearr_31558_34517[(2)] = inst_31522);

(statearr_31558_34517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (10))){
var inst_31514 = (state_31528[(2)]);
var state_31528__$1 = state_31528;
var statearr_31559_34518 = state_31528__$1;
(statearr_31559_34518[(2)] = inst_31514);

(statearr_31559_34518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31529 === (8))){
var inst_31511 = cljs.core.async.close_BANG_(to);
var state_31528__$1 = state_31528;
var statearr_31560_34523 = state_31528__$1;
(statearr_31560_34523[(2)] = inst_31511);

(statearr_31560_34523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_31562 = [null,null,null,null,null,null,null,null];
(statearr_31562[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_31562[(1)] = (1));

return statearr_31562;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_31528){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_31528);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e31563){var ex__30793__auto__ = e31563;
var statearr_31564_34529 = state_31528;
(statearr_31564_34529[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_31528[(4)]))){
var statearr_31566_34530 = state_31528;
(statearr_31566_34530[(1)] = cljs.core.first((state_31528[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34531 = state_31528;
state_31528 = G__34531;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_31528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_31528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_31569 = f__31016__auto__();
(statearr_31569[(6)] = c__31015__auto___34502);

return statearr_31569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31574){
var vec__31578 = p__31574;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31578,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31578,(1),null);
var job = vec__31578;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31015__auto___34532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_31585){
var state_val_31586 = (state_31585[(1)]);
if((state_val_31586 === (1))){
var state_31585__$1 = state_31585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31585__$1,(2),res,v);
} else {
if((state_val_31586 === (2))){
var inst_31582 = (state_31585[(2)]);
var inst_31583 = cljs.core.async.close_BANG_(res);
var state_31585__$1 = (function (){var statearr_31589 = state_31585;
(statearr_31589[(7)] = inst_31582);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31585__$1,inst_31583);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0 = (function (){
var statearr_31593 = [null,null,null,null,null,null,null,null];
(statearr_31593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__);

(statearr_31593[(1)] = (1));

return statearr_31593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1 = (function (state_31585){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_31585);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e31594){var ex__30793__auto__ = e31594;
var statearr_31596_34533 = state_31585;
(statearr_31596_34533[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_31585[(4)]))){
var statearr_31597_34534 = state_31585;
(statearr_31597_34534[(1)] = cljs.core.first((state_31585[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34535 = state_31585;
state_31585 = G__34535;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = function(state_31585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1.call(this,state_31585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_31598 = f__31016__auto__();
(statearr_31598[(6)] = c__31015__auto___34532);

return statearr_31598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31599){
var vec__31600 = p__31599;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31600,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31600,(1),null);
var job = vec__31600;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___34539 = n;
var __34540 = (0);
while(true){
if((__34540 < n__5593__auto___34539)){
var G__31603_34541 = type;
var G__31603_34542__$1 = (((G__31603_34541 instanceof cljs.core.Keyword))?G__31603_34541.fqn:null);
switch (G__31603_34542__$1) {
case "compute":
var c__31015__auto___34545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34540,c__31015__auto___34545,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async){
return (function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = ((function (__34540,c__31015__auto___34545,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async){
return (function (state_31616){
var state_val_31617 = (state_31616[(1)]);
if((state_val_31617 === (1))){
var state_31616__$1 = state_31616;
var statearr_31623_34546 = state_31616__$1;
(statearr_31623_34546[(2)] = null);

(statearr_31623_34546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (2))){
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31616__$1,(4),jobs);
} else {
if((state_val_31617 === (3))){
var inst_31614 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31616__$1,inst_31614);
} else {
if((state_val_31617 === (4))){
var inst_31606 = (state_31616[(2)]);
var inst_31607 = process__$1(inst_31606);
var state_31616__$1 = state_31616;
if(cljs.core.truth_(inst_31607)){
var statearr_31626_34548 = state_31616__$1;
(statearr_31626_34548[(1)] = (5));

} else {
var statearr_31627_34549 = state_31616__$1;
(statearr_31627_34549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (5))){
var state_31616__$1 = state_31616;
var statearr_31628_34550 = state_31616__$1;
(statearr_31628_34550[(2)] = null);

(statearr_31628_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (6))){
var state_31616__$1 = state_31616;
var statearr_31629_34552 = state_31616__$1;
(statearr_31629_34552[(2)] = null);

(statearr_31629_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31617 === (7))){
var inst_31612 = (state_31616[(2)]);
var state_31616__$1 = state_31616;
var statearr_31630_34553 = state_31616__$1;
(statearr_31630_34553[(2)] = inst_31612);

(statearr_31630_34553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34540,c__31015__auto___34545,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async))
;
return ((function (__34540,switch__30789__auto__,c__31015__auto___34545,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0 = (function (){
var statearr_31632 = [null,null,null,null,null,null,null];
(statearr_31632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__);

(statearr_31632[(1)] = (1));

return statearr_31632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1 = (function (state_31616){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_31616);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e31634){var ex__30793__auto__ = e31634;
var statearr_31635_34555 = state_31616;
(statearr_31635_34555[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_31616[(4)]))){
var statearr_31636_34556 = state_31616;
(statearr_31636_34556[(1)] = cljs.core.first((state_31616[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34557 = state_31616;
state_31616 = G__34557;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = function(state_31616){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1.call(this,state_31616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__;
})()
;})(__34540,switch__30789__auto__,c__31015__auto___34545,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async))
})();
var state__31017__auto__ = (function (){var statearr_31643 = f__31016__auto__();
(statearr_31643[(6)] = c__31015__auto___34545);

return statearr_31643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
});})(__34540,c__31015__auto___34545,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async))
);


break;
case "async":
var c__31015__auto___34559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34540,c__31015__auto___34559,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async){
return (function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = ((function (__34540,c__31015__auto___34559,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async){
return (function (state_31657){
var state_val_31658 = (state_31657[(1)]);
if((state_val_31658 === (1))){
var state_31657__$1 = state_31657;
var statearr_31659_34561 = state_31657__$1;
(statearr_31659_34561[(2)] = null);

(statearr_31659_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (2))){
var state_31657__$1 = state_31657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31657__$1,(4),jobs);
} else {
if((state_val_31658 === (3))){
var inst_31655 = (state_31657[(2)]);
var state_31657__$1 = state_31657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31657__$1,inst_31655);
} else {
if((state_val_31658 === (4))){
var inst_31646 = (state_31657[(2)]);
var inst_31647 = async(inst_31646);
var state_31657__$1 = state_31657;
if(cljs.core.truth_(inst_31647)){
var statearr_31662_34562 = state_31657__$1;
(statearr_31662_34562[(1)] = (5));

} else {
var statearr_31663_34563 = state_31657__$1;
(statearr_31663_34563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (5))){
var state_31657__$1 = state_31657;
var statearr_31670_34564 = state_31657__$1;
(statearr_31670_34564[(2)] = null);

(statearr_31670_34564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (6))){
var state_31657__$1 = state_31657;
var statearr_31675_34565 = state_31657__$1;
(statearr_31675_34565[(2)] = null);

(statearr_31675_34565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (7))){
var inst_31652 = (state_31657[(2)]);
var state_31657__$1 = state_31657;
var statearr_31684_34569 = state_31657__$1;
(statearr_31684_34569[(2)] = inst_31652);

(statearr_31684_34569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34540,c__31015__auto___34559,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async))
;
return ((function (__34540,switch__30789__auto__,c__31015__auto___34559,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0 = (function (){
var statearr_31685 = [null,null,null,null,null,null,null];
(statearr_31685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__);

(statearr_31685[(1)] = (1));

return statearr_31685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1 = (function (state_31657){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_31657);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e31691){var ex__30793__auto__ = e31691;
var statearr_31692_34570 = state_31657;
(statearr_31692_34570[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_31657[(4)]))){
var statearr_31693_34572 = state_31657;
(statearr_31693_34572[(1)] = cljs.core.first((state_31657[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34573 = state_31657;
state_31657 = G__34573;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = function(state_31657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1.call(this,state_31657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__;
})()
;})(__34540,switch__30789__auto__,c__31015__auto___34559,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async))
})();
var state__31017__auto__ = (function (){var statearr_31702 = f__31016__auto__();
(statearr_31702[(6)] = c__31015__auto___34559);

return statearr_31702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
});})(__34540,c__31015__auto___34559,G__31603_34541,G__31603_34542__$1,n__5593__auto___34539,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31603_34542__$1)].join('')));

}

var G__34574 = (__34540 + (1));
__34540 = G__34574;
continue;
} else {
}
break;
}

var c__31015__auto___34575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_31728){
var state_val_31729 = (state_31728[(1)]);
if((state_val_31729 === (7))){
var inst_31724 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
var statearr_31753_34576 = state_31728__$1;
(statearr_31753_34576[(2)] = inst_31724);

(statearr_31753_34576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (1))){
var state_31728__$1 = state_31728;
var statearr_31760_34577 = state_31728__$1;
(statearr_31760_34577[(2)] = null);

(statearr_31760_34577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (4))){
var inst_31705 = (state_31728[(7)]);
var inst_31705__$1 = (state_31728[(2)]);
var inst_31706 = (inst_31705__$1 == null);
var state_31728__$1 = (function (){var statearr_31767 = state_31728;
(statearr_31767[(7)] = inst_31705__$1);

return statearr_31767;
})();
if(cljs.core.truth_(inst_31706)){
var statearr_31768_34582 = state_31728__$1;
(statearr_31768_34582[(1)] = (5));

} else {
var statearr_31769_34583 = state_31728__$1;
(statearr_31769_34583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (6))){
var inst_31710 = (state_31728[(8)]);
var inst_31705 = (state_31728[(7)]);
var inst_31710__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31711 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31716 = [inst_31705,inst_31710__$1];
var inst_31717 = (new cljs.core.PersistentVector(null,2,(5),inst_31711,inst_31716,null));
var state_31728__$1 = (function (){var statearr_31771 = state_31728;
(statearr_31771[(8)] = inst_31710__$1);

return statearr_31771;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31728__$1,(8),jobs,inst_31717);
} else {
if((state_val_31729 === (3))){
var inst_31726 = (state_31728[(2)]);
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31728__$1,inst_31726);
} else {
if((state_val_31729 === (2))){
var state_31728__$1 = state_31728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31728__$1,(4),from);
} else {
if((state_val_31729 === (9))){
var inst_31721 = (state_31728[(2)]);
var state_31728__$1 = (function (){var statearr_31777 = state_31728;
(statearr_31777[(9)] = inst_31721);

return statearr_31777;
})();
var statearr_31779_34584 = state_31728__$1;
(statearr_31779_34584[(2)] = null);

(statearr_31779_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (5))){
var inst_31708 = cljs.core.async.close_BANG_(jobs);
var state_31728__$1 = state_31728;
var statearr_31780_34585 = state_31728__$1;
(statearr_31780_34585[(2)] = inst_31708);

(statearr_31780_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31729 === (8))){
var inst_31710 = (state_31728[(8)]);
var inst_31719 = (state_31728[(2)]);
var state_31728__$1 = (function (){var statearr_31781 = state_31728;
(statearr_31781[(10)] = inst_31719);

return statearr_31781;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31728__$1,(9),results,inst_31710);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0 = (function (){
var statearr_31784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__);

(statearr_31784[(1)] = (1));

return statearr_31784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1 = (function (state_31728){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_31728);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e31786){var ex__30793__auto__ = e31786;
var statearr_31787_34590 = state_31728;
(statearr_31787_34590[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_31728[(4)]))){
var statearr_31788_34591 = state_31728;
(statearr_31788_34591[(1)] = cljs.core.first((state_31728[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_31728;
state_31728 = G__34592;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = function(state_31728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1.call(this,state_31728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_31789 = f__31016__auto__();
(statearr_31789[(6)] = c__31015__auto___34575);

return statearr_31789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


var c__31015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_31849){
var state_val_31850 = (state_31849[(1)]);
if((state_val_31850 === (7))){
var inst_31845 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
var statearr_31857_34594 = state_31849__$1;
(statearr_31857_34594[(2)] = inst_31845);

(statearr_31857_34594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (20))){
var state_31849__$1 = state_31849;
var statearr_31866_34595 = state_31849__$1;
(statearr_31866_34595[(2)] = null);

(statearr_31866_34595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (1))){
var state_31849__$1 = state_31849;
var statearr_31875_34596 = state_31849__$1;
(statearr_31875_34596[(2)] = null);

(statearr_31875_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (4))){
var inst_31792 = (state_31849[(7)]);
var inst_31792__$1 = (state_31849[(2)]);
var inst_31793 = (inst_31792__$1 == null);
var state_31849__$1 = (function (){var statearr_31884 = state_31849;
(statearr_31884[(7)] = inst_31792__$1);

return statearr_31884;
})();
if(cljs.core.truth_(inst_31793)){
var statearr_31890_34599 = state_31849__$1;
(statearr_31890_34599[(1)] = (5));

} else {
var statearr_31892_34601 = state_31849__$1;
(statearr_31892_34601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (15))){
var inst_31822 = (state_31849[(8)]);
var state_31849__$1 = state_31849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31849__$1,(18),to,inst_31822);
} else {
if((state_val_31850 === (21))){
var inst_31840 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
var statearr_31904_34608 = state_31849__$1;
(statearr_31904_34608[(2)] = inst_31840);

(statearr_31904_34608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (13))){
var inst_31842 = (state_31849[(2)]);
var state_31849__$1 = (function (){var statearr_31912 = state_31849;
(statearr_31912[(9)] = inst_31842);

return statearr_31912;
})();
var statearr_31930_34612 = state_31849__$1;
(statearr_31930_34612[(2)] = null);

(statearr_31930_34612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (6))){
var inst_31792 = (state_31849[(7)]);
var state_31849__$1 = state_31849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31849__$1,(11),inst_31792);
} else {
if((state_val_31850 === (17))){
var inst_31835 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
if(cljs.core.truth_(inst_31835)){
var statearr_31938_34614 = state_31849__$1;
(statearr_31938_34614[(1)] = (19));

} else {
var statearr_31944_34615 = state_31849__$1;
(statearr_31944_34615[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (3))){
var inst_31847 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31849__$1,inst_31847);
} else {
if((state_val_31850 === (12))){
var inst_31806 = (state_31849[(10)]);
var state_31849__$1 = state_31849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31849__$1,(14),inst_31806);
} else {
if((state_val_31850 === (2))){
var state_31849__$1 = state_31849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31849__$1,(4),results);
} else {
if((state_val_31850 === (19))){
var state_31849__$1 = state_31849;
var statearr_31946_34616 = state_31849__$1;
(statearr_31946_34616[(2)] = null);

(statearr_31946_34616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (11))){
var inst_31806 = (state_31849[(2)]);
var state_31849__$1 = (function (){var statearr_31947 = state_31849;
(statearr_31947[(10)] = inst_31806);

return statearr_31947;
})();
var statearr_31948_34617 = state_31849__$1;
(statearr_31948_34617[(2)] = null);

(statearr_31948_34617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (9))){
var state_31849__$1 = state_31849;
var statearr_31949_34618 = state_31849__$1;
(statearr_31949_34618[(2)] = null);

(statearr_31949_34618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (5))){
var state_31849__$1 = state_31849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31951_34619 = state_31849__$1;
(statearr_31951_34619[(1)] = (8));

} else {
var statearr_31952_34620 = state_31849__$1;
(statearr_31952_34620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (14))){
var inst_31822 = (state_31849[(8)]);
var inst_31829 = (state_31849[(11)]);
var inst_31822__$1 = (state_31849[(2)]);
var inst_31824 = (inst_31822__$1 == null);
var inst_31829__$1 = cljs.core.not(inst_31824);
var state_31849__$1 = (function (){var statearr_31953 = state_31849;
(statearr_31953[(8)] = inst_31822__$1);

(statearr_31953[(11)] = inst_31829__$1);

return statearr_31953;
})();
if(inst_31829__$1){
var statearr_31958_34622 = state_31849__$1;
(statearr_31958_34622[(1)] = (15));

} else {
var statearr_31959_34623 = state_31849__$1;
(statearr_31959_34623[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (16))){
var inst_31829 = (state_31849[(11)]);
var state_31849__$1 = state_31849;
var statearr_31964_34624 = state_31849__$1;
(statearr_31964_34624[(2)] = inst_31829);

(statearr_31964_34624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (10))){
var inst_31803 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
var statearr_31969_34625 = state_31849__$1;
(statearr_31969_34625[(2)] = inst_31803);

(statearr_31969_34625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (18))){
var inst_31832 = (state_31849[(2)]);
var state_31849__$1 = state_31849;
var statearr_31971_34627 = state_31849__$1;
(statearr_31971_34627[(2)] = inst_31832);

(statearr_31971_34627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31850 === (8))){
var inst_31796 = cljs.core.async.close_BANG_(to);
var state_31849__$1 = state_31849;
var statearr_31972_34633 = state_31849__$1;
(statearr_31972_34633[(2)] = inst_31796);

(statearr_31972_34633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0 = (function (){
var statearr_31973 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__);

(statearr_31973[(1)] = (1));

return statearr_31973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1 = (function (state_31849){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_31849);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e31974){var ex__30793__auto__ = e31974;
var statearr_31975_34635 = state_31849;
(statearr_31975_34635[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_31849[(4)]))){
var statearr_31976_34637 = state_31849;
(statearr_31976_34637[(1)] = cljs.core.first((state_31849[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34638 = state_31849;
state_31849 = G__34638;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__ = function(state_31849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1.call(this,state_31849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30790__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_31978 = f__31016__auto__();
(statearr_31978[(6)] = c__31015__auto__);

return statearr_31978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));

return c__31015__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31987 = arguments.length;
switch (G__31987) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31994 = arguments.length;
switch (G__31994) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32008 = arguments.length;
switch (G__32008) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31015__auto___34648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_32040){
var state_val_32041 = (state_32040[(1)]);
if((state_val_32041 === (7))){
var inst_32036 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32046_34650 = state_32040__$1;
(statearr_32046_34650[(2)] = inst_32036);

(statearr_32046_34650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (1))){
var state_32040__$1 = state_32040;
var statearr_32047_34651 = state_32040__$1;
(statearr_32047_34651[(2)] = null);

(statearr_32047_34651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (4))){
var inst_32017 = (state_32040[(7)]);
var inst_32017__$1 = (state_32040[(2)]);
var inst_32018 = (inst_32017__$1 == null);
var state_32040__$1 = (function (){var statearr_32048 = state_32040;
(statearr_32048[(7)] = inst_32017__$1);

return statearr_32048;
})();
if(cljs.core.truth_(inst_32018)){
var statearr_32049_34653 = state_32040__$1;
(statearr_32049_34653[(1)] = (5));

} else {
var statearr_32050_34654 = state_32040__$1;
(statearr_32050_34654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (13))){
var state_32040__$1 = state_32040;
var statearr_32052_34655 = state_32040__$1;
(statearr_32052_34655[(2)] = null);

(statearr_32052_34655[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (6))){
var inst_32017 = (state_32040[(7)]);
var inst_32023 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32017) : p.call(null, inst_32017));
var state_32040__$1 = state_32040;
if(cljs.core.truth_(inst_32023)){
var statearr_32053_34658 = state_32040__$1;
(statearr_32053_34658[(1)] = (9));

} else {
var statearr_32054_34660 = state_32040__$1;
(statearr_32054_34660[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (3))){
var inst_32038 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32040__$1,inst_32038);
} else {
if((state_val_32041 === (12))){
var state_32040__$1 = state_32040;
var statearr_32055_34664 = state_32040__$1;
(statearr_32055_34664[(2)] = null);

(statearr_32055_34664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (2))){
var state_32040__$1 = state_32040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32040__$1,(4),ch);
} else {
if((state_val_32041 === (11))){
var inst_32017 = (state_32040[(7)]);
var inst_32027 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32040__$1,(8),inst_32027,inst_32017);
} else {
if((state_val_32041 === (9))){
var state_32040__$1 = state_32040;
var statearr_32056_34665 = state_32040__$1;
(statearr_32056_34665[(2)] = tc);

(statearr_32056_34665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (5))){
var inst_32020 = cljs.core.async.close_BANG_(tc);
var inst_32021 = cljs.core.async.close_BANG_(fc);
var state_32040__$1 = (function (){var statearr_32057 = state_32040;
(statearr_32057[(8)] = inst_32020);

return statearr_32057;
})();
var statearr_32058_34666 = state_32040__$1;
(statearr_32058_34666[(2)] = inst_32021);

(statearr_32058_34666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (14))){
var inst_32034 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
var statearr_32060_34667 = state_32040__$1;
(statearr_32060_34667[(2)] = inst_32034);

(statearr_32060_34667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (10))){
var state_32040__$1 = state_32040;
var statearr_32062_34674 = state_32040__$1;
(statearr_32062_34674[(2)] = fc);

(statearr_32062_34674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32041 === (8))){
var inst_32029 = (state_32040[(2)]);
var state_32040__$1 = state_32040;
if(cljs.core.truth_(inst_32029)){
var statearr_32063_34675 = state_32040__$1;
(statearr_32063_34675[(1)] = (12));

} else {
var statearr_32065_34676 = state_32040__$1;
(statearr_32065_34676[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_32069 = [null,null,null,null,null,null,null,null,null];
(statearr_32069[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_32069[(1)] = (1));

return statearr_32069;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_32040){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_32040);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e32070){var ex__30793__auto__ = e32070;
var statearr_32071_34682 = state_32040;
(statearr_32071_34682[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_32040[(4)]))){
var statearr_32072_34683 = state_32040;
(statearr_32072_34683[(1)] = cljs.core.first((state_32040[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34684 = state_32040;
state_32040 = G__34684;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_32040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_32040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_32073 = f__31016__auto__();
(statearr_32073[(6)] = c__31015__auto___34648);

return statearr_32073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_32096){
var state_val_32097 = (state_32096[(1)]);
if((state_val_32097 === (7))){
var inst_32092 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32100_34686 = state_32096__$1;
(statearr_32100_34686[(2)] = inst_32092);

(statearr_32100_34686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (1))){
var inst_32075 = init;
var inst_32076 = inst_32075;
var state_32096__$1 = (function (){var statearr_32104 = state_32096;
(statearr_32104[(7)] = inst_32076);

return statearr_32104;
})();
var statearr_32105_34687 = state_32096__$1;
(statearr_32105_34687[(2)] = null);

(statearr_32105_34687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (4))){
var inst_32079 = (state_32096[(8)]);
var inst_32079__$1 = (state_32096[(2)]);
var inst_32080 = (inst_32079__$1 == null);
var state_32096__$1 = (function (){var statearr_32107 = state_32096;
(statearr_32107[(8)] = inst_32079__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_32080)){
var statearr_32108_34688 = state_32096__$1;
(statearr_32108_34688[(1)] = (5));

} else {
var statearr_32109_34689 = state_32096__$1;
(statearr_32109_34689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (6))){
var inst_32079 = (state_32096[(8)]);
var inst_32076 = (state_32096[(7)]);
var inst_32083 = (state_32096[(9)]);
var inst_32083__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32076,inst_32079) : f.call(null, inst_32076,inst_32079));
var inst_32084 = cljs.core.reduced_QMARK_(inst_32083__$1);
var state_32096__$1 = (function (){var statearr_32110 = state_32096;
(statearr_32110[(9)] = inst_32083__$1);

return statearr_32110;
})();
if(inst_32084){
var statearr_32112_34690 = state_32096__$1;
(statearr_32112_34690[(1)] = (8));

} else {
var statearr_32114_34691 = state_32096__$1;
(statearr_32114_34691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (3))){
var inst_32094 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32096__$1,inst_32094);
} else {
if((state_val_32097 === (2))){
var state_32096__$1 = state_32096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32096__$1,(4),ch);
} else {
if((state_val_32097 === (9))){
var inst_32083 = (state_32096[(9)]);
var inst_32076 = inst_32083;
var state_32096__$1 = (function (){var statearr_32118 = state_32096;
(statearr_32118[(7)] = inst_32076);

return statearr_32118;
})();
var statearr_32119_34696 = state_32096__$1;
(statearr_32119_34696[(2)] = null);

(statearr_32119_34696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (5))){
var inst_32076 = (state_32096[(7)]);
var state_32096__$1 = state_32096;
var statearr_32120_34698 = state_32096__$1;
(statearr_32120_34698[(2)] = inst_32076);

(statearr_32120_34698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (10))){
var inst_32090 = (state_32096[(2)]);
var state_32096__$1 = state_32096;
var statearr_32121_34700 = state_32096__$1;
(statearr_32121_34700[(2)] = inst_32090);

(statearr_32121_34700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32097 === (8))){
var inst_32083 = (state_32096[(9)]);
var inst_32086 = cljs.core.deref(inst_32083);
var state_32096__$1 = state_32096;
var statearr_32122_34701 = state_32096__$1;
(statearr_32122_34701[(2)] = inst_32086);

(statearr_32122_34701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30790__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30790__auto____0 = (function (){
var statearr_32124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32124[(0)] = cljs$core$async$reduce_$_state_machine__30790__auto__);

(statearr_32124[(1)] = (1));

return statearr_32124;
});
var cljs$core$async$reduce_$_state_machine__30790__auto____1 = (function (state_32096){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_32096);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e32125){var ex__30793__auto__ = e32125;
var statearr_32126_34704 = state_32096;
(statearr_32126_34704[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_32096[(4)]))){
var statearr_32127_34705 = state_32096;
(statearr_32127_34705[(1)] = cljs.core.first((state_32096[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34706 = state_32096;
state_32096 = G__34706;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30790__auto__ = function(state_32096){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30790__auto____1.call(this,state_32096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30790__auto____0;
cljs$core$async$reduce_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30790__auto____1;
return cljs$core$async$reduce_$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_32130 = f__31016__auto__();
(statearr_32130[(6)] = c__31015__auto__);

return statearr_32130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));

return c__31015__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__31015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_32143){
var state_val_32144 = (state_32143[(1)]);
if((state_val_32144 === (1))){
var inst_32138 = cljs.core.async.reduce(f__$1,init,ch);
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32143__$1,(2),inst_32138);
} else {
if((state_val_32144 === (2))){
var inst_32140 = (state_32143[(2)]);
var inst_32141 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32140) : f__$1.call(null, inst_32140));
var state_32143__$1 = state_32143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32143__$1,inst_32141);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30790__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30790__auto____0 = (function (){
var statearr_32149 = [null,null,null,null,null,null,null];
(statearr_32149[(0)] = cljs$core$async$transduce_$_state_machine__30790__auto__);

(statearr_32149[(1)] = (1));

return statearr_32149;
});
var cljs$core$async$transduce_$_state_machine__30790__auto____1 = (function (state_32143){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_32143);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e32152){var ex__30793__auto__ = e32152;
var statearr_32154_34761 = state_32143;
(statearr_32154_34761[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_32143[(4)]))){
var statearr_32156_34762 = state_32143;
(statearr_32156_34762[(1)] = cljs.core.first((state_32143[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34763 = state_32143;
state_32143 = G__34763;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30790__auto__ = function(state_32143){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30790__auto____1.call(this,state_32143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30790__auto____0;
cljs$core$async$transduce_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30790__auto____1;
return cljs$core$async$transduce_$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_32162 = f__31016__auto__();
(statearr_32162[(6)] = c__31015__auto__);

return statearr_32162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));

return c__31015__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32165 = arguments.length;
switch (G__32165) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_32194){
var state_val_32195 = (state_32194[(1)]);
if((state_val_32195 === (7))){
var inst_32176 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32198_34765 = state_32194__$1;
(statearr_32198_34765[(2)] = inst_32176);

(statearr_32198_34765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (1))){
var inst_32170 = cljs.core.seq(coll);
var inst_32171 = inst_32170;
var state_32194__$1 = (function (){var statearr_32199 = state_32194;
(statearr_32199[(7)] = inst_32171);

return statearr_32199;
})();
var statearr_32201_34766 = state_32194__$1;
(statearr_32201_34766[(2)] = null);

(statearr_32201_34766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (4))){
var inst_32171 = (state_32194[(7)]);
var inst_32174 = cljs.core.first(inst_32171);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32194__$1,(7),ch,inst_32174);
} else {
if((state_val_32195 === (13))){
var inst_32188 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32205_34770 = state_32194__$1;
(statearr_32205_34770[(2)] = inst_32188);

(statearr_32205_34770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (6))){
var inst_32179 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
if(cljs.core.truth_(inst_32179)){
var statearr_32206_34784 = state_32194__$1;
(statearr_32206_34784[(1)] = (8));

} else {
var statearr_32207_34785 = state_32194__$1;
(statearr_32207_34785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (3))){
var inst_32192 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32194__$1,inst_32192);
} else {
if((state_val_32195 === (12))){
var state_32194__$1 = state_32194;
var statearr_32208_34786 = state_32194__$1;
(statearr_32208_34786[(2)] = null);

(statearr_32208_34786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (2))){
var inst_32171 = (state_32194[(7)]);
var state_32194__$1 = state_32194;
if(cljs.core.truth_(inst_32171)){
var statearr_32209_34787 = state_32194__$1;
(statearr_32209_34787[(1)] = (4));

} else {
var statearr_32210_34788 = state_32194__$1;
(statearr_32210_34788[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (11))){
var inst_32185 = cljs.core.async.close_BANG_(ch);
var state_32194__$1 = state_32194;
var statearr_32212_34789 = state_32194__$1;
(statearr_32212_34789[(2)] = inst_32185);

(statearr_32212_34789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (9))){
var state_32194__$1 = state_32194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32213_34790 = state_32194__$1;
(statearr_32213_34790[(1)] = (11));

} else {
var statearr_32214_34791 = state_32194__$1;
(statearr_32214_34791[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (5))){
var inst_32171 = (state_32194[(7)]);
var state_32194__$1 = state_32194;
var statearr_32215_34792 = state_32194__$1;
(statearr_32215_34792[(2)] = inst_32171);

(statearr_32215_34792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (10))){
var inst_32190 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32217_34793 = state_32194__$1;
(statearr_32217_34793[(2)] = inst_32190);

(statearr_32217_34793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (8))){
var inst_32171 = (state_32194[(7)]);
var inst_32181 = cljs.core.next(inst_32171);
var inst_32171__$1 = inst_32181;
var state_32194__$1 = (function (){var statearr_32218 = state_32194;
(statearr_32218[(7)] = inst_32171__$1);

return statearr_32218;
})();
var statearr_32219_34803 = state_32194__$1;
(statearr_32219_34803[(2)] = null);

(statearr_32219_34803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_32224 = [null,null,null,null,null,null,null,null];
(statearr_32224[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_32224[(1)] = (1));

return statearr_32224;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_32194){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_32194);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e32226){var ex__30793__auto__ = e32226;
var statearr_32229_34804 = state_32194;
(statearr_32229_34804[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_32194[(4)]))){
var statearr_32230_34805 = state_32194;
(statearr_32230_34805[(1)] = cljs.core.first((state_32194[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34806 = state_32194;
state_32194 = G__34806;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_32194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_32194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_32232 = f__31016__auto__();
(statearr_32232[(6)] = c__31015__auto__);

return statearr_32232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));

return c__31015__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32237 = arguments.length;
switch (G__32237) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34808 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34808(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34809 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34809(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34815 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34815(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34816 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34816(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32278 = (function (ch,cs,meta32279){
this.ch = ch;
this.cs = cs;
this.meta32279 = meta32279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32280,meta32279__$1){
var self__ = this;
var _32280__$1 = this;
return (new cljs.core.async.t_cljs$core$async32278(self__.ch,self__.cs,meta32279__$1));
}));

(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32280){
var self__ = this;
var _32280__$1 = this;
return self__.meta32279;
}));

(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32278.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32279","meta32279",1447473445,null)], null);
}));

(cljs.core.async.t_cljs$core$async32278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32278");

(cljs.core.async.t_cljs$core$async32278.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32278.
 */
cljs.core.async.__GT_t_cljs$core$async32278 = (function cljs$core$async$__GT_t_cljs$core$async32278(ch,cs,meta32279){
return (new cljs.core.async.t_cljs$core$async32278(ch,cs,meta32279));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32278(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31015__auto___34826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_32440){
var state_val_32441 = (state_32440[(1)]);
if((state_val_32441 === (7))){
var inst_32434 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32445_34827 = state_32440__$1;
(statearr_32445_34827[(2)] = inst_32434);

(statearr_32445_34827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (20))){
var inst_32331 = (state_32440[(7)]);
var inst_32349 = cljs.core.first(inst_32331);
var inst_32350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32349,(0),null);
var inst_32351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32349,(1),null);
var state_32440__$1 = (function (){var statearr_32446 = state_32440;
(statearr_32446[(8)] = inst_32350);

return statearr_32446;
})();
if(cljs.core.truth_(inst_32351)){
var statearr_32447_34828 = state_32440__$1;
(statearr_32447_34828[(1)] = (22));

} else {
var statearr_32448_34829 = state_32440__$1;
(statearr_32448_34829[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (27))){
var inst_32298 = (state_32440[(9)]);
var inst_32388 = (state_32440[(10)]);
var inst_32383 = (state_32440[(11)]);
var inst_32381 = (state_32440[(12)]);
var inst_32388__$1 = cljs.core._nth(inst_32381,inst_32383);
var inst_32389 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32388__$1,inst_32298,done);
var state_32440__$1 = (function (){var statearr_32449 = state_32440;
(statearr_32449[(10)] = inst_32388__$1);

return statearr_32449;
})();
if(cljs.core.truth_(inst_32389)){
var statearr_32450_34831 = state_32440__$1;
(statearr_32450_34831[(1)] = (30));

} else {
var statearr_32451_34833 = state_32440__$1;
(statearr_32451_34833[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (1))){
var state_32440__$1 = state_32440;
var statearr_32452_34835 = state_32440__$1;
(statearr_32452_34835[(2)] = null);

(statearr_32452_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (24))){
var inst_32331 = (state_32440[(7)]);
var inst_32356 = (state_32440[(2)]);
var inst_32357 = cljs.core.next(inst_32331);
var inst_32309 = inst_32357;
var inst_32310 = null;
var inst_32311 = (0);
var inst_32312 = (0);
var state_32440__$1 = (function (){var statearr_32453 = state_32440;
(statearr_32453[(13)] = inst_32309);

(statearr_32453[(14)] = inst_32311);

(statearr_32453[(15)] = inst_32310);

(statearr_32453[(16)] = inst_32356);

(statearr_32453[(17)] = inst_32312);

return statearr_32453;
})();
var statearr_32455_34836 = state_32440__$1;
(statearr_32455_34836[(2)] = null);

(statearr_32455_34836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (39))){
var state_32440__$1 = state_32440;
var statearr_32459_34837 = state_32440__$1;
(statearr_32459_34837[(2)] = null);

(statearr_32459_34837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (4))){
var inst_32298 = (state_32440[(9)]);
var inst_32298__$1 = (state_32440[(2)]);
var inst_32299 = (inst_32298__$1 == null);
var state_32440__$1 = (function (){var statearr_32461 = state_32440;
(statearr_32461[(9)] = inst_32298__$1);

return statearr_32461;
})();
if(cljs.core.truth_(inst_32299)){
var statearr_32462_34838 = state_32440__$1;
(statearr_32462_34838[(1)] = (5));

} else {
var statearr_32463_34839 = state_32440__$1;
(statearr_32463_34839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (15))){
var inst_32309 = (state_32440[(13)]);
var inst_32311 = (state_32440[(14)]);
var inst_32310 = (state_32440[(15)]);
var inst_32312 = (state_32440[(17)]);
var inst_32327 = (state_32440[(2)]);
var inst_32328 = (inst_32312 + (1));
var tmp32456 = inst_32309;
var tmp32457 = inst_32311;
var tmp32458 = inst_32310;
var inst_32309__$1 = tmp32456;
var inst_32310__$1 = tmp32458;
var inst_32311__$1 = tmp32457;
var inst_32312__$1 = inst_32328;
var state_32440__$1 = (function (){var statearr_32465 = state_32440;
(statearr_32465[(13)] = inst_32309__$1);

(statearr_32465[(14)] = inst_32311__$1);

(statearr_32465[(15)] = inst_32310__$1);

(statearr_32465[(18)] = inst_32327);

(statearr_32465[(17)] = inst_32312__$1);

return statearr_32465;
})();
var statearr_32467_34844 = state_32440__$1;
(statearr_32467_34844[(2)] = null);

(statearr_32467_34844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (21))){
var inst_32360 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32471_34845 = state_32440__$1;
(statearr_32471_34845[(2)] = inst_32360);

(statearr_32471_34845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (31))){
var inst_32388 = (state_32440[(10)]);
var inst_32392 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32388);
var state_32440__$1 = state_32440;
var statearr_32472_34846 = state_32440__$1;
(statearr_32472_34846[(2)] = inst_32392);

(statearr_32472_34846[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (32))){
var inst_32380 = (state_32440[(19)]);
var inst_32383 = (state_32440[(11)]);
var inst_32382 = (state_32440[(20)]);
var inst_32381 = (state_32440[(12)]);
var inst_32394 = (state_32440[(2)]);
var inst_32395 = (inst_32383 + (1));
var tmp32468 = inst_32380;
var tmp32469 = inst_32382;
var tmp32470 = inst_32381;
var inst_32380__$1 = tmp32468;
var inst_32381__$1 = tmp32470;
var inst_32382__$1 = tmp32469;
var inst_32383__$1 = inst_32395;
var state_32440__$1 = (function (){var statearr_32473 = state_32440;
(statearr_32473[(19)] = inst_32380__$1);

(statearr_32473[(11)] = inst_32383__$1);

(statearr_32473[(20)] = inst_32382__$1);

(statearr_32473[(21)] = inst_32394);

(statearr_32473[(12)] = inst_32381__$1);

return statearr_32473;
})();
var statearr_32474_34859 = state_32440__$1;
(statearr_32474_34859[(2)] = null);

(statearr_32474_34859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (40))){
var inst_32407 = (state_32440[(22)]);
var inst_32411 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_32407);
var state_32440__$1 = state_32440;
var statearr_32478_34860 = state_32440__$1;
(statearr_32478_34860[(2)] = inst_32411);

(statearr_32478_34860[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (33))){
var inst_32398 = (state_32440[(23)]);
var inst_32400 = cljs.core.chunked_seq_QMARK_(inst_32398);
var state_32440__$1 = state_32440;
if(inst_32400){
var statearr_32481_34864 = state_32440__$1;
(statearr_32481_34864[(1)] = (36));

} else {
var statearr_32486_34865 = state_32440__$1;
(statearr_32486_34865[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (13))){
var inst_32321 = (state_32440[(24)]);
var inst_32324 = cljs.core.async.close_BANG_(inst_32321);
var state_32440__$1 = state_32440;
var statearr_32489_34866 = state_32440__$1;
(statearr_32489_34866[(2)] = inst_32324);

(statearr_32489_34866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (22))){
var inst_32350 = (state_32440[(8)]);
var inst_32353 = cljs.core.async.close_BANG_(inst_32350);
var state_32440__$1 = state_32440;
var statearr_32490_34869 = state_32440__$1;
(statearr_32490_34869[(2)] = inst_32353);

(statearr_32490_34869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (36))){
var inst_32398 = (state_32440[(23)]);
var inst_32402 = cljs.core.chunk_first(inst_32398);
var inst_32403 = cljs.core.chunk_rest(inst_32398);
var inst_32404 = cljs.core.count(inst_32402);
var inst_32380 = inst_32403;
var inst_32381 = inst_32402;
var inst_32382 = inst_32404;
var inst_32383 = (0);
var state_32440__$1 = (function (){var statearr_32491 = state_32440;
(statearr_32491[(19)] = inst_32380);

(statearr_32491[(11)] = inst_32383);

(statearr_32491[(20)] = inst_32382);

(statearr_32491[(12)] = inst_32381);

return statearr_32491;
})();
var statearr_32493_34870 = state_32440__$1;
(statearr_32493_34870[(2)] = null);

(statearr_32493_34870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (41))){
var inst_32398 = (state_32440[(23)]);
var inst_32413 = (state_32440[(2)]);
var inst_32414 = cljs.core.next(inst_32398);
var inst_32380 = inst_32414;
var inst_32381 = null;
var inst_32382 = (0);
var inst_32383 = (0);
var state_32440__$1 = (function (){var statearr_32494 = state_32440;
(statearr_32494[(19)] = inst_32380);

(statearr_32494[(11)] = inst_32383);

(statearr_32494[(20)] = inst_32382);

(statearr_32494[(12)] = inst_32381);

(statearr_32494[(25)] = inst_32413);

return statearr_32494;
})();
var statearr_32495_34871 = state_32440__$1;
(statearr_32495_34871[(2)] = null);

(statearr_32495_34871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (43))){
var state_32440__$1 = state_32440;
var statearr_32496_34872 = state_32440__$1;
(statearr_32496_34872[(2)] = null);

(statearr_32496_34872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (29))){
var inst_32422 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32498_34873 = state_32440__$1;
(statearr_32498_34873[(2)] = inst_32422);

(statearr_32498_34873[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (44))){
var inst_32431 = (state_32440[(2)]);
var state_32440__$1 = (function (){var statearr_32501 = state_32440;
(statearr_32501[(26)] = inst_32431);

return statearr_32501;
})();
var statearr_32502_34874 = state_32440__$1;
(statearr_32502_34874[(2)] = null);

(statearr_32502_34874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (6))){
var inst_32370 = (state_32440[(27)]);
var inst_32369 = cljs.core.deref(cs);
var inst_32370__$1 = cljs.core.keys(inst_32369);
var inst_32371 = cljs.core.count(inst_32370__$1);
var inst_32372 = cljs.core.reset_BANG_(dctr,inst_32371);
var inst_32378 = cljs.core.seq(inst_32370__$1);
var inst_32380 = inst_32378;
var inst_32381 = null;
var inst_32382 = (0);
var inst_32383 = (0);
var state_32440__$1 = (function (){var statearr_32503 = state_32440;
(statearr_32503[(19)] = inst_32380);

(statearr_32503[(27)] = inst_32370__$1);

(statearr_32503[(11)] = inst_32383);

(statearr_32503[(20)] = inst_32382);

(statearr_32503[(12)] = inst_32381);

(statearr_32503[(28)] = inst_32372);

return statearr_32503;
})();
var statearr_32505_34879 = state_32440__$1;
(statearr_32505_34879[(2)] = null);

(statearr_32505_34879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (28))){
var inst_32380 = (state_32440[(19)]);
var inst_32398 = (state_32440[(23)]);
var inst_32398__$1 = cljs.core.seq(inst_32380);
var state_32440__$1 = (function (){var statearr_32507 = state_32440;
(statearr_32507[(23)] = inst_32398__$1);

return statearr_32507;
})();
if(inst_32398__$1){
var statearr_32508_34885 = state_32440__$1;
(statearr_32508_34885[(1)] = (33));

} else {
var statearr_32509_34886 = state_32440__$1;
(statearr_32509_34886[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (25))){
var inst_32383 = (state_32440[(11)]);
var inst_32382 = (state_32440[(20)]);
var inst_32385 = (inst_32383 < inst_32382);
var inst_32386 = inst_32385;
var state_32440__$1 = state_32440;
if(cljs.core.truth_(inst_32386)){
var statearr_32510_34887 = state_32440__$1;
(statearr_32510_34887[(1)] = (27));

} else {
var statearr_32511_34888 = state_32440__$1;
(statearr_32511_34888[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (34))){
var state_32440__$1 = state_32440;
var statearr_32514_34889 = state_32440__$1;
(statearr_32514_34889[(2)] = null);

(statearr_32514_34889[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (17))){
var state_32440__$1 = state_32440;
var statearr_32515_34890 = state_32440__$1;
(statearr_32515_34890[(2)] = null);

(statearr_32515_34890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (3))){
var inst_32436 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32440__$1,inst_32436);
} else {
if((state_val_32441 === (12))){
var inst_32365 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32517_34893 = state_32440__$1;
(statearr_32517_34893[(2)] = inst_32365);

(statearr_32517_34893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (2))){
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32440__$1,(4),ch);
} else {
if((state_val_32441 === (23))){
var state_32440__$1 = state_32440;
var statearr_32522_34895 = state_32440__$1;
(statearr_32522_34895[(2)] = null);

(statearr_32522_34895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (35))){
var inst_32420 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32523_34896 = state_32440__$1;
(statearr_32523_34896[(2)] = inst_32420);

(statearr_32523_34896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (19))){
var inst_32331 = (state_32440[(7)]);
var inst_32341 = cljs.core.chunk_first(inst_32331);
var inst_32342 = cljs.core.chunk_rest(inst_32331);
var inst_32343 = cljs.core.count(inst_32341);
var inst_32309 = inst_32342;
var inst_32310 = inst_32341;
var inst_32311 = inst_32343;
var inst_32312 = (0);
var state_32440__$1 = (function (){var statearr_32526 = state_32440;
(statearr_32526[(13)] = inst_32309);

(statearr_32526[(14)] = inst_32311);

(statearr_32526[(15)] = inst_32310);

(statearr_32526[(17)] = inst_32312);

return statearr_32526;
})();
var statearr_32527_34897 = state_32440__$1;
(statearr_32527_34897[(2)] = null);

(statearr_32527_34897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (11))){
var inst_32331 = (state_32440[(7)]);
var inst_32309 = (state_32440[(13)]);
var inst_32331__$1 = cljs.core.seq(inst_32309);
var state_32440__$1 = (function (){var statearr_32528 = state_32440;
(statearr_32528[(7)] = inst_32331__$1);

return statearr_32528;
})();
if(inst_32331__$1){
var statearr_32529_34898 = state_32440__$1;
(statearr_32529_34898[(1)] = (16));

} else {
var statearr_32530_34899 = state_32440__$1;
(statearr_32530_34899[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (9))){
var inst_32367 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32533_34905 = state_32440__$1;
(statearr_32533_34905[(2)] = inst_32367);

(statearr_32533_34905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (5))){
var inst_32306 = cljs.core.deref(cs);
var inst_32307 = cljs.core.seq(inst_32306);
var inst_32309 = inst_32307;
var inst_32310 = null;
var inst_32311 = (0);
var inst_32312 = (0);
var state_32440__$1 = (function (){var statearr_32536 = state_32440;
(statearr_32536[(13)] = inst_32309);

(statearr_32536[(14)] = inst_32311);

(statearr_32536[(15)] = inst_32310);

(statearr_32536[(17)] = inst_32312);

return statearr_32536;
})();
var statearr_32540_34907 = state_32440__$1;
(statearr_32540_34907[(2)] = null);

(statearr_32540_34907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (14))){
var state_32440__$1 = state_32440;
var statearr_32541_34909 = state_32440__$1;
(statearr_32541_34909[(2)] = null);

(statearr_32541_34909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (45))){
var inst_32428 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32542_34910 = state_32440__$1;
(statearr_32542_34910[(2)] = inst_32428);

(statearr_32542_34910[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (26))){
var inst_32370 = (state_32440[(27)]);
var inst_32424 = (state_32440[(2)]);
var inst_32425 = cljs.core.seq(inst_32370);
var state_32440__$1 = (function (){var statearr_32545 = state_32440;
(statearr_32545[(29)] = inst_32424);

return statearr_32545;
})();
if(inst_32425){
var statearr_32546_34911 = state_32440__$1;
(statearr_32546_34911[(1)] = (42));

} else {
var statearr_32547_34912 = state_32440__$1;
(statearr_32547_34912[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (16))){
var inst_32331 = (state_32440[(7)]);
var inst_32334 = cljs.core.chunked_seq_QMARK_(inst_32331);
var state_32440__$1 = state_32440;
if(inst_32334){
var statearr_32548_34913 = state_32440__$1;
(statearr_32548_34913[(1)] = (19));

} else {
var statearr_32549_34914 = state_32440__$1;
(statearr_32549_34914[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (38))){
var inst_32417 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32550_34916 = state_32440__$1;
(statearr_32550_34916[(2)] = inst_32417);

(statearr_32550_34916[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (30))){
var state_32440__$1 = state_32440;
var statearr_32551_34918 = state_32440__$1;
(statearr_32551_34918[(2)] = null);

(statearr_32551_34918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (10))){
var inst_32310 = (state_32440[(15)]);
var inst_32312 = (state_32440[(17)]);
var inst_32320 = cljs.core._nth(inst_32310,inst_32312);
var inst_32321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32320,(0),null);
var inst_32322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32320,(1),null);
var state_32440__$1 = (function (){var statearr_32556 = state_32440;
(statearr_32556[(24)] = inst_32321);

return statearr_32556;
})();
if(cljs.core.truth_(inst_32322)){
var statearr_32558_34920 = state_32440__$1;
(statearr_32558_34920[(1)] = (13));

} else {
var statearr_32559_34921 = state_32440__$1;
(statearr_32559_34921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (18))){
var inst_32363 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32561_34925 = state_32440__$1;
(statearr_32561_34925[(2)] = inst_32363);

(statearr_32561_34925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (42))){
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32440__$1,(45),dchan);
} else {
if((state_val_32441 === (37))){
var inst_32298 = (state_32440[(9)]);
var inst_32398 = (state_32440[(23)]);
var inst_32407 = (state_32440[(22)]);
var inst_32407__$1 = cljs.core.first(inst_32398);
var inst_32408 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32407__$1,inst_32298,done);
var state_32440__$1 = (function (){var statearr_32568 = state_32440;
(statearr_32568[(22)] = inst_32407__$1);

return statearr_32568;
})();
if(cljs.core.truth_(inst_32408)){
var statearr_32569_34926 = state_32440__$1;
(statearr_32569_34926[(1)] = (39));

} else {
var statearr_32570_34927 = state_32440__$1;
(statearr_32570_34927[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (8))){
var inst_32311 = (state_32440[(14)]);
var inst_32312 = (state_32440[(17)]);
var inst_32314 = (inst_32312 < inst_32311);
var inst_32315 = inst_32314;
var state_32440__$1 = state_32440;
if(cljs.core.truth_(inst_32315)){
var statearr_32574_34929 = state_32440__$1;
(statearr_32574_34929[(1)] = (10));

} else {
var statearr_32575_34930 = state_32440__$1;
(statearr_32575_34930[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30790__auto__ = null;
var cljs$core$async$mult_$_state_machine__30790__auto____0 = (function (){
var statearr_32577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32577[(0)] = cljs$core$async$mult_$_state_machine__30790__auto__);

(statearr_32577[(1)] = (1));

return statearr_32577;
});
var cljs$core$async$mult_$_state_machine__30790__auto____1 = (function (state_32440){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_32440);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e32578){var ex__30793__auto__ = e32578;
var statearr_32579_34963 = state_32440;
(statearr_32579_34963[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_32440[(4)]))){
var statearr_32580_34965 = state_32440;
(statearr_32580_34965[(1)] = cljs.core.first((state_32440[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34966 = state_32440;
state_32440 = G__34966;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30790__auto__ = function(state_32440){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30790__auto____1.call(this,state_32440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30790__auto____0;
cljs$core$async$mult_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30790__auto____1;
return cljs$core$async$mult_$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_32582 = f__31016__auto__();
(statearr_32582[(6)] = c__31015__auto___34826);

return statearr_32582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32585 = arguments.length;
switch (G__32585) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34971 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34971(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34972 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34972(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34979 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34979(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34986 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34986(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34987 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34987(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34993 = arguments.length;
var i__5727__auto___34994 = (0);
while(true){
if((i__5727__auto___34994 < len__5726__auto___34993)){
args__5732__auto__.push((arguments[i__5727__auto___34994]));

var G__34995 = (i__5727__auto___34994 + (1));
i__5727__auto___34994 = G__34995;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32670){
var map__32671 = p__32670;
var map__32671__$1 = cljs.core.__destructure_map(map__32671);
var opts = map__32671__$1;
var statearr_32672_34996 = state;
(statearr_32672_34996[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32676_34997 = state;
(statearr_32676_34997[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_32678_34998 = state;
(statearr_32678_34998[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32657){
var G__32658 = cljs.core.first(seq32657);
var seq32657__$1 = cljs.core.next(seq32657);
var G__32659 = cljs.core.first(seq32657__$1);
var seq32657__$2 = cljs.core.next(seq32657__$1);
var G__32660 = cljs.core.first(seq32657__$2);
var seq32657__$3 = cljs.core.next(seq32657__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32658,G__32659,G__32660,seq32657__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32705 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32706){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32706 = meta32706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32707,meta32706__$1){
var self__ = this;
var _32707__$1 = this;
return (new cljs.core.async.t_cljs$core$async32705(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32706__$1));
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32707){
var self__ = this;
var _32707__$1 = this;
return self__.meta32706;
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32705.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async32705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32706","meta32706",-1935693441,null)], null);
}));

(cljs.core.async.t_cljs$core$async32705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32705");

(cljs.core.async.t_cljs$core$async32705.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32705.
 */
cljs.core.async.__GT_t_cljs$core$async32705 = (function cljs$core$async$__GT_t_cljs$core$async32705(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32706){
return (new cljs.core.async.t_cljs$core$async32705(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32706));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32705(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31015__auto___35004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_32821){
var state_val_32822 = (state_32821[(1)]);
if((state_val_32822 === (7))){
var inst_32776 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32776)){
var statearr_32825_35005 = state_32821__$1;
(statearr_32825_35005[(1)] = (8));

} else {
var statearr_32826_35006 = state_32821__$1;
(statearr_32826_35006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (20))){
var inst_32768 = (state_32821[(7)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32821__$1,(23),out,inst_32768);
} else {
if((state_val_32822 === (1))){
var inst_32745 = calc_state();
var inst_32748 = cljs.core.__destructure_map(inst_32745);
var inst_32749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32748,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32748,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32748,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32752 = inst_32745;
var state_32821__$1 = (function (){var statearr_32832 = state_32821;
(statearr_32832[(8)] = inst_32750);

(statearr_32832[(9)] = inst_32751);

(statearr_32832[(10)] = inst_32749);

(statearr_32832[(11)] = inst_32752);

return statearr_32832;
})();
var statearr_32835_35010 = state_32821__$1;
(statearr_32835_35010[(2)] = null);

(statearr_32835_35010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (24))){
var inst_32758 = (state_32821[(12)]);
var inst_32752 = inst_32758;
var state_32821__$1 = (function (){var statearr_32838 = state_32821;
(statearr_32838[(11)] = inst_32752);

return statearr_32838;
})();
var statearr_32839_35011 = state_32821__$1;
(statearr_32839_35011[(2)] = null);

(statearr_32839_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (4))){
var inst_32770 = (state_32821[(13)]);
var inst_32768 = (state_32821[(7)]);
var inst_32767 = (state_32821[(2)]);
var inst_32768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32767,(0),null);
var inst_32769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32767,(1),null);
var inst_32770__$1 = (inst_32768__$1 == null);
var state_32821__$1 = (function (){var statearr_32848 = state_32821;
(statearr_32848[(14)] = inst_32769);

(statearr_32848[(13)] = inst_32770__$1);

(statearr_32848[(7)] = inst_32768__$1);

return statearr_32848;
})();
if(cljs.core.truth_(inst_32770__$1)){
var statearr_32850_35012 = state_32821__$1;
(statearr_32850_35012[(1)] = (5));

} else {
var statearr_32851_35013 = state_32821__$1;
(statearr_32851_35013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (15))){
var inst_32791 = (state_32821[(15)]);
var inst_32760 = (state_32821[(16)]);
var inst_32791__$1 = cljs.core.empty_QMARK_(inst_32760);
var state_32821__$1 = (function (){var statearr_32853 = state_32821;
(statearr_32853[(15)] = inst_32791__$1);

return statearr_32853;
})();
if(inst_32791__$1){
var statearr_32854_35014 = state_32821__$1;
(statearr_32854_35014[(1)] = (17));

} else {
var statearr_32856_35015 = state_32821__$1;
(statearr_32856_35015[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (21))){
var inst_32758 = (state_32821[(12)]);
var inst_32752 = inst_32758;
var state_32821__$1 = (function (){var statearr_32857 = state_32821;
(statearr_32857[(11)] = inst_32752);

return statearr_32857;
})();
var statearr_32860_35016 = state_32821__$1;
(statearr_32860_35016[(2)] = null);

(statearr_32860_35016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (13))){
var inst_32784 = (state_32821[(2)]);
var inst_32785 = calc_state();
var inst_32752 = inst_32785;
var state_32821__$1 = (function (){var statearr_32862 = state_32821;
(statearr_32862[(17)] = inst_32784);

(statearr_32862[(11)] = inst_32752);

return statearr_32862;
})();
var statearr_32863_35017 = state_32821__$1;
(statearr_32863_35017[(2)] = null);

(statearr_32863_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (22))){
var inst_32815 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32864_35021 = state_32821__$1;
(statearr_32864_35021[(2)] = inst_32815);

(statearr_32864_35021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (6))){
var inst_32769 = (state_32821[(14)]);
var inst_32774 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32769,change);
var state_32821__$1 = state_32821;
var statearr_32869_35022 = state_32821__$1;
(statearr_32869_35022[(2)] = inst_32774);

(statearr_32869_35022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (25))){
var state_32821__$1 = state_32821;
var statearr_32872_35023 = state_32821__$1;
(statearr_32872_35023[(2)] = null);

(statearr_32872_35023[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (17))){
var inst_32761 = (state_32821[(18)]);
var inst_32769 = (state_32821[(14)]);
var inst_32794 = (inst_32761.cljs$core$IFn$_invoke$arity$1 ? inst_32761.cljs$core$IFn$_invoke$arity$1(inst_32769) : inst_32761.call(null, inst_32769));
var inst_32795 = cljs.core.not(inst_32794);
var state_32821__$1 = state_32821;
var statearr_32874_35025 = state_32821__$1;
(statearr_32874_35025[(2)] = inst_32795);

(statearr_32874_35025[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (3))){
var inst_32819 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32821__$1,inst_32819);
} else {
if((state_val_32822 === (12))){
var state_32821__$1 = state_32821;
var statearr_32876_35026 = state_32821__$1;
(statearr_32876_35026[(2)] = null);

(statearr_32876_35026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (2))){
var inst_32758 = (state_32821[(12)]);
var inst_32752 = (state_32821[(11)]);
var inst_32758__$1 = cljs.core.__destructure_map(inst_32752);
var inst_32760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32758__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32758__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32758__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32821__$1 = (function (){var statearr_32879 = state_32821;
(statearr_32879[(18)] = inst_32761);

(statearr_32879[(12)] = inst_32758__$1);

(statearr_32879[(16)] = inst_32760);

return statearr_32879;
})();
return cljs.core.async.ioc_alts_BANG_(state_32821__$1,(4),inst_32762);
} else {
if((state_val_32822 === (23))){
var inst_32805 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32805)){
var statearr_32884_35027 = state_32821__$1;
(statearr_32884_35027[(1)] = (24));

} else {
var statearr_32885_35028 = state_32821__$1;
(statearr_32885_35028[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (19))){
var inst_32798 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32887_35029 = state_32821__$1;
(statearr_32887_35029[(2)] = inst_32798);

(statearr_32887_35029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (11))){
var inst_32769 = (state_32821[(14)]);
var inst_32781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32769);
var state_32821__$1 = state_32821;
var statearr_32888_35030 = state_32821__$1;
(statearr_32888_35030[(2)] = inst_32781);

(statearr_32888_35030[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (9))){
var inst_32769 = (state_32821[(14)]);
var inst_32760 = (state_32821[(16)]);
var inst_32788 = (state_32821[(19)]);
var inst_32788__$1 = (inst_32760.cljs$core$IFn$_invoke$arity$1 ? inst_32760.cljs$core$IFn$_invoke$arity$1(inst_32769) : inst_32760.call(null, inst_32769));
var state_32821__$1 = (function (){var statearr_32893 = state_32821;
(statearr_32893[(19)] = inst_32788__$1);

return statearr_32893;
})();
if(cljs.core.truth_(inst_32788__$1)){
var statearr_32897_35031 = state_32821__$1;
(statearr_32897_35031[(1)] = (14));

} else {
var statearr_32898_35032 = state_32821__$1;
(statearr_32898_35032[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (5))){
var inst_32770 = (state_32821[(13)]);
var state_32821__$1 = state_32821;
var statearr_32900_35033 = state_32821__$1;
(statearr_32900_35033[(2)] = inst_32770);

(statearr_32900_35033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (14))){
var inst_32788 = (state_32821[(19)]);
var state_32821__$1 = state_32821;
var statearr_32902_35035 = state_32821__$1;
(statearr_32902_35035[(2)] = inst_32788);

(statearr_32902_35035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (26))){
var inst_32810 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32905_35036 = state_32821__$1;
(statearr_32905_35036[(2)] = inst_32810);

(statearr_32905_35036[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (16))){
var inst_32801 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32801)){
var statearr_32907_35037 = state_32821__$1;
(statearr_32907_35037[(1)] = (20));

} else {
var statearr_32908_35038 = state_32821__$1;
(statearr_32908_35038[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (10))){
var inst_32817 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32912_35039 = state_32821__$1;
(statearr_32912_35039[(2)] = inst_32817);

(statearr_32912_35039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (18))){
var inst_32791 = (state_32821[(15)]);
var state_32821__$1 = state_32821;
var statearr_32917_35040 = state_32821__$1;
(statearr_32917_35040[(2)] = inst_32791);

(statearr_32917_35040[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (8))){
var inst_32768 = (state_32821[(7)]);
var inst_32778 = (inst_32768 == null);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32778)){
var statearr_32918_35041 = state_32821__$1;
(statearr_32918_35041[(1)] = (11));

} else {
var statearr_32919_35042 = state_32821__$1;
(statearr_32919_35042[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30790__auto__ = null;
var cljs$core$async$mix_$_state_machine__30790__auto____0 = (function (){
var statearr_32923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32923[(0)] = cljs$core$async$mix_$_state_machine__30790__auto__);

(statearr_32923[(1)] = (1));

return statearr_32923;
});
var cljs$core$async$mix_$_state_machine__30790__auto____1 = (function (state_32821){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_32821);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e32925){var ex__30793__auto__ = e32925;
var statearr_32926_35043 = state_32821;
(statearr_32926_35043[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_32821[(4)]))){
var statearr_32927_35044 = state_32821;
(statearr_32927_35044[(1)] = cljs.core.first((state_32821[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35045 = state_32821;
state_32821 = G__35045;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30790__auto__ = function(state_32821){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30790__auto____1.call(this,state_32821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30790__auto____0;
cljs$core$async$mix_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30790__auto____1;
return cljs$core$async$mix_$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_32931 = f__31016__auto__();
(statearr_32931[(6)] = c__31015__auto___35004);

return statearr_32931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35049 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35049(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35050 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35050(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35054 = (function() {
var G__35055 = null;
var G__35055__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35055__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35055 = function(p,v){
switch(arguments.length){
case 1:
return G__35055__1.call(this,p);
case 2:
return G__35055__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35055.cljs$core$IFn$_invoke$arity$1 = G__35055__1;
G__35055.cljs$core$IFn$_invoke$arity$2 = G__35055__2;
return G__35055;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32967 = arguments.length;
switch (G__32967) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35054(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35054(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32996 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32997){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32997 = meta32997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32998,meta32997__$1){
var self__ = this;
var _32998__$1 = this;
return (new cljs.core.async.t_cljs$core$async32996(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32997__$1));
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32998){
var self__ = this;
var _32998__$1 = this;
return self__.meta32997;
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32997","meta32997",-470907059,null)], null);
}));

(cljs.core.async.t_cljs$core$async32996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32996");

(cljs.core.async.t_cljs$core$async32996.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32996.
 */
cljs.core.async.__GT_t_cljs$core$async32996 = (function cljs$core$async$__GT_t_cljs$core$async32996(ch,topic_fn,buf_fn,mults,ensure_mult,meta32997){
return (new cljs.core.async.t_cljs$core$async32996(ch,topic_fn,buf_fn,mults,ensure_mult,meta32997));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32980 = arguments.length;
switch (G__32980) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32973_SHARP_){
if(cljs.core.truth_((p1__32973_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32973_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32973_SHARP_.call(null, topic)))){
return p1__32973_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32973_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32996(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31015__auto___35065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_33133){
var state_val_33134 = (state_33133[(1)]);
if((state_val_33134 === (7))){
var inst_33127 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33135_35066 = state_33133__$1;
(statearr_33135_35066[(2)] = inst_33127);

(statearr_33135_35066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (20))){
var state_33133__$1 = state_33133;
var statearr_33136_35067 = state_33133__$1;
(statearr_33136_35067[(2)] = null);

(statearr_33136_35067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (1))){
var state_33133__$1 = state_33133;
var statearr_33144_35068 = state_33133__$1;
(statearr_33144_35068[(2)] = null);

(statearr_33144_35068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (24))){
var inst_33107 = (state_33133[(7)]);
var inst_33118 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33107);
var state_33133__$1 = state_33133;
var statearr_33148_35069 = state_33133__$1;
(statearr_33148_35069[(2)] = inst_33118);

(statearr_33148_35069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (4))){
var inst_33053 = (state_33133[(8)]);
var inst_33053__$1 = (state_33133[(2)]);
var inst_33054 = (inst_33053__$1 == null);
var state_33133__$1 = (function (){var statearr_33149 = state_33133;
(statearr_33149[(8)] = inst_33053__$1);

return statearr_33149;
})();
if(cljs.core.truth_(inst_33054)){
var statearr_33152_35070 = state_33133__$1;
(statearr_33152_35070[(1)] = (5));

} else {
var statearr_33156_35071 = state_33133__$1;
(statearr_33156_35071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (15))){
var inst_33101 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33158_35072 = state_33133__$1;
(statearr_33158_35072[(2)] = inst_33101);

(statearr_33158_35072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (21))){
var inst_33123 = (state_33133[(2)]);
var state_33133__$1 = (function (){var statearr_33159 = state_33133;
(statearr_33159[(9)] = inst_33123);

return statearr_33159;
})();
var statearr_33160_35073 = state_33133__$1;
(statearr_33160_35073[(2)] = null);

(statearr_33160_35073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (13))){
var inst_33081 = (state_33133[(10)]);
var inst_33084 = cljs.core.chunked_seq_QMARK_(inst_33081);
var state_33133__$1 = state_33133;
if(inst_33084){
var statearr_33170_35080 = state_33133__$1;
(statearr_33170_35080[(1)] = (16));

} else {
var statearr_33171_35082 = state_33133__$1;
(statearr_33171_35082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (22))){
var inst_33115 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33115)){
var statearr_33172_35085 = state_33133__$1;
(statearr_33172_35085[(1)] = (23));

} else {
var statearr_33175_35089 = state_33133__$1;
(statearr_33175_35089[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (6))){
var inst_33109 = (state_33133[(11)]);
var inst_33107 = (state_33133[(7)]);
var inst_33053 = (state_33133[(8)]);
var inst_33107__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33053) : topic_fn.call(null, inst_33053));
var inst_33108 = cljs.core.deref(mults);
var inst_33109__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33108,inst_33107__$1);
var state_33133__$1 = (function (){var statearr_33183 = state_33133;
(statearr_33183[(11)] = inst_33109__$1);

(statearr_33183[(7)] = inst_33107__$1);

return statearr_33183;
})();
if(cljs.core.truth_(inst_33109__$1)){
var statearr_33184_35090 = state_33133__$1;
(statearr_33184_35090[(1)] = (19));

} else {
var statearr_33185_35091 = state_33133__$1;
(statearr_33185_35091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (25))){
var inst_33120 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33186_35092 = state_33133__$1;
(statearr_33186_35092[(2)] = inst_33120);

(statearr_33186_35092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (17))){
var inst_33081 = (state_33133[(10)]);
var inst_33092 = cljs.core.first(inst_33081);
var inst_33093 = cljs.core.async.muxch_STAR_(inst_33092);
var inst_33094 = cljs.core.async.close_BANG_(inst_33093);
var inst_33095 = cljs.core.next(inst_33081);
var inst_33066 = inst_33095;
var inst_33067 = null;
var inst_33068 = (0);
var inst_33069 = (0);
var state_33133__$1 = (function (){var statearr_33188 = state_33133;
(statearr_33188[(12)] = inst_33067);

(statearr_33188[(13)] = inst_33068);

(statearr_33188[(14)] = inst_33094);

(statearr_33188[(15)] = inst_33069);

(statearr_33188[(16)] = inst_33066);

return statearr_33188;
})();
var statearr_33189_35093 = state_33133__$1;
(statearr_33189_35093[(2)] = null);

(statearr_33189_35093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (3))){
var inst_33129 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33133__$1,inst_33129);
} else {
if((state_val_33134 === (12))){
var inst_33103 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33192_35094 = state_33133__$1;
(statearr_33192_35094[(2)] = inst_33103);

(statearr_33192_35094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (2))){
var state_33133__$1 = state_33133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33133__$1,(4),ch);
} else {
if((state_val_33134 === (23))){
var state_33133__$1 = state_33133;
var statearr_33194_35097 = state_33133__$1;
(statearr_33194_35097[(2)] = null);

(statearr_33194_35097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (19))){
var inst_33109 = (state_33133[(11)]);
var inst_33053 = (state_33133[(8)]);
var inst_33112 = cljs.core.async.muxch_STAR_(inst_33109);
var state_33133__$1 = state_33133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33133__$1,(22),inst_33112,inst_33053);
} else {
if((state_val_33134 === (11))){
var inst_33081 = (state_33133[(10)]);
var inst_33066 = (state_33133[(16)]);
var inst_33081__$1 = cljs.core.seq(inst_33066);
var state_33133__$1 = (function (){var statearr_33202 = state_33133;
(statearr_33202[(10)] = inst_33081__$1);

return statearr_33202;
})();
if(inst_33081__$1){
var statearr_33203_35100 = state_33133__$1;
(statearr_33203_35100[(1)] = (13));

} else {
var statearr_33204_35101 = state_33133__$1;
(statearr_33204_35101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (9))){
var inst_33105 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33213_35103 = state_33133__$1;
(statearr_33213_35103[(2)] = inst_33105);

(statearr_33213_35103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (5))){
var inst_33060 = cljs.core.deref(mults);
var inst_33061 = cljs.core.vals(inst_33060);
var inst_33062 = cljs.core.seq(inst_33061);
var inst_33066 = inst_33062;
var inst_33067 = null;
var inst_33068 = (0);
var inst_33069 = (0);
var state_33133__$1 = (function (){var statearr_33217 = state_33133;
(statearr_33217[(12)] = inst_33067);

(statearr_33217[(13)] = inst_33068);

(statearr_33217[(15)] = inst_33069);

(statearr_33217[(16)] = inst_33066);

return statearr_33217;
})();
var statearr_33218_35108 = state_33133__$1;
(statearr_33218_35108[(2)] = null);

(statearr_33218_35108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (14))){
var state_33133__$1 = state_33133;
var statearr_33223_35109 = state_33133__$1;
(statearr_33223_35109[(2)] = null);

(statearr_33223_35109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (16))){
var inst_33081 = (state_33133[(10)]);
var inst_33086 = cljs.core.chunk_first(inst_33081);
var inst_33087 = cljs.core.chunk_rest(inst_33081);
var inst_33088 = cljs.core.count(inst_33086);
var inst_33066 = inst_33087;
var inst_33067 = inst_33086;
var inst_33068 = inst_33088;
var inst_33069 = (0);
var state_33133__$1 = (function (){var statearr_33224 = state_33133;
(statearr_33224[(12)] = inst_33067);

(statearr_33224[(13)] = inst_33068);

(statearr_33224[(15)] = inst_33069);

(statearr_33224[(16)] = inst_33066);

return statearr_33224;
})();
var statearr_33228_35111 = state_33133__$1;
(statearr_33228_35111[(2)] = null);

(statearr_33228_35111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (10))){
var inst_33067 = (state_33133[(12)]);
var inst_33068 = (state_33133[(13)]);
var inst_33069 = (state_33133[(15)]);
var inst_33066 = (state_33133[(16)]);
var inst_33074 = cljs.core._nth(inst_33067,inst_33069);
var inst_33076 = cljs.core.async.muxch_STAR_(inst_33074);
var inst_33077 = cljs.core.async.close_BANG_(inst_33076);
var inst_33078 = (inst_33069 + (1));
var tmp33220 = inst_33067;
var tmp33221 = inst_33068;
var tmp33222 = inst_33066;
var inst_33066__$1 = tmp33222;
var inst_33067__$1 = tmp33220;
var inst_33068__$1 = tmp33221;
var inst_33069__$1 = inst_33078;
var state_33133__$1 = (function (){var statearr_33236 = state_33133;
(statearr_33236[(12)] = inst_33067__$1);

(statearr_33236[(13)] = inst_33068__$1);

(statearr_33236[(15)] = inst_33069__$1);

(statearr_33236[(17)] = inst_33077);

(statearr_33236[(16)] = inst_33066__$1);

return statearr_33236;
})();
var statearr_33239_35112 = state_33133__$1;
(statearr_33239_35112[(2)] = null);

(statearr_33239_35112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (18))){
var inst_33098 = (state_33133[(2)]);
var state_33133__$1 = state_33133;
var statearr_33242_35113 = state_33133__$1;
(statearr_33242_35113[(2)] = inst_33098);

(statearr_33242_35113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33134 === (8))){
var inst_33068 = (state_33133[(13)]);
var inst_33069 = (state_33133[(15)]);
var inst_33071 = (inst_33069 < inst_33068);
var inst_33072 = inst_33071;
var state_33133__$1 = state_33133;
if(cljs.core.truth_(inst_33072)){
var statearr_33244_35114 = state_33133__$1;
(statearr_33244_35114[(1)] = (10));

} else {
var statearr_33245_35115 = state_33133__$1;
(statearr_33245_35115[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_33253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33253[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_33253[(1)] = (1));

return statearr_33253;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_33133){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_33133);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e33259){var ex__30793__auto__ = e33259;
var statearr_33261_35116 = state_33133;
(statearr_33261_35116[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_33133[(4)]))){
var statearr_33262_35117 = state_33133;
(statearr_33262_35117[(1)] = cljs.core.first((state_33133[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35118 = state_33133;
state_33133 = G__35118;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_33133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_33133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_33265 = f__31016__auto__();
(statearr_33265[(6)] = c__31015__auto___35065);

return statearr_33265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33274 = arguments.length;
switch (G__33274) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33285 = arguments.length;
switch (G__33285) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33293 = arguments.length;
switch (G__33293) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31015__auto___35129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_33352){
var state_val_33353 = (state_33352[(1)]);
if((state_val_33353 === (7))){
var state_33352__$1 = state_33352;
var statearr_33359_35130 = state_33352__$1;
(statearr_33359_35130[(2)] = null);

(statearr_33359_35130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (1))){
var state_33352__$1 = state_33352;
var statearr_33360_35131 = state_33352__$1;
(statearr_33360_35131[(2)] = null);

(statearr_33360_35131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (4))){
var inst_33298 = (state_33352[(7)]);
var inst_33297 = (state_33352[(8)]);
var inst_33300 = (inst_33298 < inst_33297);
var state_33352__$1 = state_33352;
if(cljs.core.truth_(inst_33300)){
var statearr_33362_35132 = state_33352__$1;
(statearr_33362_35132[(1)] = (6));

} else {
var statearr_33363_35133 = state_33352__$1;
(statearr_33363_35133[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (15))){
var inst_33337 = (state_33352[(9)]);
var inst_33342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33337);
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33352__$1,(17),out,inst_33342);
} else {
if((state_val_33353 === (13))){
var inst_33337 = (state_33352[(9)]);
var inst_33337__$1 = (state_33352[(2)]);
var inst_33338 = cljs.core.some(cljs.core.nil_QMARK_,inst_33337__$1);
var state_33352__$1 = (function (){var statearr_33364 = state_33352;
(statearr_33364[(9)] = inst_33337__$1);

return statearr_33364;
})();
if(cljs.core.truth_(inst_33338)){
var statearr_33367_35141 = state_33352__$1;
(statearr_33367_35141[(1)] = (14));

} else {
var statearr_33370_35142 = state_33352__$1;
(statearr_33370_35142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (6))){
var state_33352__$1 = state_33352;
var statearr_33371_35143 = state_33352__$1;
(statearr_33371_35143[(2)] = null);

(statearr_33371_35143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (17))){
var inst_33344 = (state_33352[(2)]);
var state_33352__$1 = (function (){var statearr_33373 = state_33352;
(statearr_33373[(10)] = inst_33344);

return statearr_33373;
})();
var statearr_33374_35144 = state_33352__$1;
(statearr_33374_35144[(2)] = null);

(statearr_33374_35144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (3))){
var inst_33350 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33352__$1,inst_33350);
} else {
if((state_val_33353 === (12))){
var _ = (function (){var statearr_33375 = state_33352;
(statearr_33375[(4)] = cljs.core.rest((state_33352[(4)])));

return statearr_33375;
})();
var state_33352__$1 = state_33352;
var ex33372 = (state_33352__$1[(2)]);
var statearr_33376_35150 = state_33352__$1;
(statearr_33376_35150[(5)] = ex33372);


if((ex33372 instanceof Object)){
var statearr_33377_35152 = state_33352__$1;
(statearr_33377_35152[(1)] = (11));

(statearr_33377_35152[(5)] = null);

} else {
throw ex33372;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (2))){
var inst_33296 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33297 = cnt;
var inst_33298 = (0);
var state_33352__$1 = (function (){var statearr_33378 = state_33352;
(statearr_33378[(7)] = inst_33298);

(statearr_33378[(8)] = inst_33297);

(statearr_33378[(11)] = inst_33296);

return statearr_33378;
})();
var statearr_33379_35155 = state_33352__$1;
(statearr_33379_35155[(2)] = null);

(statearr_33379_35155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (11))){
var inst_33304 = (state_33352[(2)]);
var inst_33309 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33352__$1 = (function (){var statearr_33380 = state_33352;
(statearr_33380[(12)] = inst_33304);

return statearr_33380;
})();
var statearr_33381_35161 = state_33352__$1;
(statearr_33381_35161[(2)] = inst_33309);

(statearr_33381_35161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (9))){
var inst_33298 = (state_33352[(7)]);
var _ = (function (){var statearr_33383 = state_33352;
(statearr_33383[(4)] = cljs.core.cons((12),(state_33352[(4)])));

return statearr_33383;
})();
var inst_33319 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33298) : chs__$1.call(null, inst_33298));
var inst_33320 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33298) : done.call(null, inst_33298));
var inst_33321 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33319,inst_33320);
var ___$1 = (function (){var statearr_33384 = state_33352;
(statearr_33384[(4)] = cljs.core.rest((state_33352[(4)])));

return statearr_33384;
})();
var state_33352__$1 = state_33352;
var statearr_33385_35162 = state_33352__$1;
(statearr_33385_35162[(2)] = inst_33321);

(statearr_33385_35162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (5))){
var inst_33335 = (state_33352[(2)]);
var state_33352__$1 = (function (){var statearr_33386 = state_33352;
(statearr_33386[(13)] = inst_33335);

return statearr_33386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33352__$1,(13),dchan);
} else {
if((state_val_33353 === (14))){
var inst_33340 = cljs.core.async.close_BANG_(out);
var state_33352__$1 = state_33352;
var statearr_33387_35163 = state_33352__$1;
(statearr_33387_35163[(2)] = inst_33340);

(statearr_33387_35163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (16))){
var inst_33348 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
var statearr_33388_35164 = state_33352__$1;
(statearr_33388_35164[(2)] = inst_33348);

(statearr_33388_35164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (10))){
var inst_33298 = (state_33352[(7)]);
var inst_33324 = (state_33352[(2)]);
var inst_33325 = (inst_33298 + (1));
var inst_33298__$1 = inst_33325;
var state_33352__$1 = (function (){var statearr_33389 = state_33352;
(statearr_33389[(7)] = inst_33298__$1);

(statearr_33389[(14)] = inst_33324);

return statearr_33389;
})();
var statearr_33390_35165 = state_33352__$1;
(statearr_33390_35165[(2)] = null);

(statearr_33390_35165[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (8))){
var inst_33333 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
var statearr_33391_35166 = state_33352__$1;
(statearr_33391_35166[(2)] = inst_33333);

(statearr_33391_35166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_33392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33392[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_33392[(1)] = (1));

return statearr_33392;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_33352){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_33352);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e33395){var ex__30793__auto__ = e33395;
var statearr_33396_35167 = state_33352;
(statearr_33396_35167[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_33352[(4)]))){
var statearr_33397_35168 = state_33352;
(statearr_33397_35168[(1)] = cljs.core.first((state_33352[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35169 = state_33352;
state_33352 = G__35169;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_33352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_33352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_33399 = f__31016__auto__();
(statearr_33399[(6)] = c__31015__auto___35129);

return statearr_33399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33402 = arguments.length;
switch (G__33402) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31015__auto___35173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_33434){
var state_val_33435 = (state_33434[(1)]);
if((state_val_33435 === (7))){
var inst_33413 = (state_33434[(7)]);
var inst_33414 = (state_33434[(8)]);
var inst_33413__$1 = (state_33434[(2)]);
var inst_33414__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33413__$1,(0),null);
var inst_33415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33413__$1,(1),null);
var inst_33416 = (inst_33414__$1 == null);
var state_33434__$1 = (function (){var statearr_33438 = state_33434;
(statearr_33438[(7)] = inst_33413__$1);

(statearr_33438[(8)] = inst_33414__$1);

(statearr_33438[(9)] = inst_33415);

return statearr_33438;
})();
if(cljs.core.truth_(inst_33416)){
var statearr_33439_35177 = state_33434__$1;
(statearr_33439_35177[(1)] = (8));

} else {
var statearr_33440_35181 = state_33434__$1;
(statearr_33440_35181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (1))){
var inst_33403 = cljs.core.vec(chs);
var inst_33404 = inst_33403;
var state_33434__$1 = (function (){var statearr_33441 = state_33434;
(statearr_33441[(10)] = inst_33404);

return statearr_33441;
})();
var statearr_33442_35191 = state_33434__$1;
(statearr_33442_35191[(2)] = null);

(statearr_33442_35191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (4))){
var inst_33404 = (state_33434[(10)]);
var state_33434__$1 = state_33434;
return cljs.core.async.ioc_alts_BANG_(state_33434__$1,(7),inst_33404);
} else {
if((state_val_33435 === (6))){
var inst_33430 = (state_33434[(2)]);
var state_33434__$1 = state_33434;
var statearr_33444_35201 = state_33434__$1;
(statearr_33444_35201[(2)] = inst_33430);

(statearr_33444_35201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (3))){
var inst_33432 = (state_33434[(2)]);
var state_33434__$1 = state_33434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33434__$1,inst_33432);
} else {
if((state_val_33435 === (2))){
var inst_33404 = (state_33434[(10)]);
var inst_33406 = cljs.core.count(inst_33404);
var inst_33407 = (inst_33406 > (0));
var state_33434__$1 = state_33434;
if(cljs.core.truth_(inst_33407)){
var statearr_33453_35212 = state_33434__$1;
(statearr_33453_35212[(1)] = (4));

} else {
var statearr_33454_35213 = state_33434__$1;
(statearr_33454_35213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (11))){
var inst_33404 = (state_33434[(10)]);
var inst_33423 = (state_33434[(2)]);
var tmp33448 = inst_33404;
var inst_33404__$1 = tmp33448;
var state_33434__$1 = (function (){var statearr_33459 = state_33434;
(statearr_33459[(10)] = inst_33404__$1);

(statearr_33459[(11)] = inst_33423);

return statearr_33459;
})();
var statearr_33460_35214 = state_33434__$1;
(statearr_33460_35214[(2)] = null);

(statearr_33460_35214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (9))){
var inst_33414 = (state_33434[(8)]);
var state_33434__$1 = state_33434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33434__$1,(11),out,inst_33414);
} else {
if((state_val_33435 === (5))){
var inst_33428 = cljs.core.async.close_BANG_(out);
var state_33434__$1 = state_33434;
var statearr_33463_35221 = state_33434__$1;
(statearr_33463_35221[(2)] = inst_33428);

(statearr_33463_35221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (10))){
var inst_33426 = (state_33434[(2)]);
var state_33434__$1 = state_33434;
var statearr_33466_35222 = state_33434__$1;
(statearr_33466_35222[(2)] = inst_33426);

(statearr_33466_35222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33435 === (8))){
var inst_33404 = (state_33434[(10)]);
var inst_33413 = (state_33434[(7)]);
var inst_33414 = (state_33434[(8)]);
var inst_33415 = (state_33434[(9)]);
var inst_33418 = (function (){var cs = inst_33404;
var vec__33409 = inst_33413;
var v = inst_33414;
var c = inst_33415;
return (function (p1__33400_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33400_SHARP_);
});
})();
var inst_33419 = cljs.core.filterv(inst_33418,inst_33404);
var inst_33404__$1 = inst_33419;
var state_33434__$1 = (function (){var statearr_33474 = state_33434;
(statearr_33474[(10)] = inst_33404__$1);

return statearr_33474;
})();
var statearr_33477_35226 = state_33434__$1;
(statearr_33477_35226[(2)] = null);

(statearr_33477_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_33486 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33486[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_33486[(1)] = (1));

return statearr_33486;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_33434){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_33434);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e33493){var ex__30793__auto__ = e33493;
var statearr_33494_35227 = state_33434;
(statearr_33494_35227[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_33434[(4)]))){
var statearr_33496_35228 = state_33434;
(statearr_33496_35228[(1)] = cljs.core.first((state_33434[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35229 = state_33434;
state_33434 = G__35229;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_33434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_33434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_33500 = f__31016__auto__();
(statearr_33500[(6)] = c__31015__auto___35173);

return statearr_33500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33508 = arguments.length;
switch (G__33508) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31015__auto___35231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_33540){
var state_val_33541 = (state_33540[(1)]);
if((state_val_33541 === (7))){
var inst_33522 = (state_33540[(7)]);
var inst_33522__$1 = (state_33540[(2)]);
var inst_33523 = (inst_33522__$1 == null);
var inst_33524 = cljs.core.not(inst_33523);
var state_33540__$1 = (function (){var statearr_33542 = state_33540;
(statearr_33542[(7)] = inst_33522__$1);

return statearr_33542;
})();
if(inst_33524){
var statearr_33543_35237 = state_33540__$1;
(statearr_33543_35237[(1)] = (8));

} else {
var statearr_33546_35238 = state_33540__$1;
(statearr_33546_35238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (1))){
var inst_33517 = (0);
var state_33540__$1 = (function (){var statearr_33551 = state_33540;
(statearr_33551[(8)] = inst_33517);

return statearr_33551;
})();
var statearr_33552_35239 = state_33540__$1;
(statearr_33552_35239[(2)] = null);

(statearr_33552_35239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (4))){
var state_33540__$1 = state_33540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33540__$1,(7),ch);
} else {
if((state_val_33541 === (6))){
var inst_33535 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
var statearr_33555_35240 = state_33540__$1;
(statearr_33555_35240[(2)] = inst_33535);

(statearr_33555_35240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (3))){
var inst_33537 = (state_33540[(2)]);
var inst_33538 = cljs.core.async.close_BANG_(out);
var state_33540__$1 = (function (){var statearr_33556 = state_33540;
(statearr_33556[(9)] = inst_33537);

return statearr_33556;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33540__$1,inst_33538);
} else {
if((state_val_33541 === (2))){
var inst_33517 = (state_33540[(8)]);
var inst_33519 = (inst_33517 < n);
var state_33540__$1 = state_33540;
if(cljs.core.truth_(inst_33519)){
var statearr_33557_35242 = state_33540__$1;
(statearr_33557_35242[(1)] = (4));

} else {
var statearr_33558_35243 = state_33540__$1;
(statearr_33558_35243[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (11))){
var inst_33517 = (state_33540[(8)]);
var inst_33527 = (state_33540[(2)]);
var inst_33528 = (inst_33517 + (1));
var inst_33517__$1 = inst_33528;
var state_33540__$1 = (function (){var statearr_33559 = state_33540;
(statearr_33559[(10)] = inst_33527);

(statearr_33559[(8)] = inst_33517__$1);

return statearr_33559;
})();
var statearr_33560_35249 = state_33540__$1;
(statearr_33560_35249[(2)] = null);

(statearr_33560_35249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (9))){
var state_33540__$1 = state_33540;
var statearr_33562_35250 = state_33540__$1;
(statearr_33562_35250[(2)] = null);

(statearr_33562_35250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (5))){
var state_33540__$1 = state_33540;
var statearr_33566_35251 = state_33540__$1;
(statearr_33566_35251[(2)] = null);

(statearr_33566_35251[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (10))){
var inst_33532 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
var statearr_33569_35252 = state_33540__$1;
(statearr_33569_35252[(2)] = inst_33532);

(statearr_33569_35252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (8))){
var inst_33522 = (state_33540[(7)]);
var state_33540__$1 = state_33540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33540__$1,(11),out,inst_33522);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_33572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33572[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_33572[(1)] = (1));

return statearr_33572;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_33540){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_33540);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e33574){var ex__30793__auto__ = e33574;
var statearr_33577_35254 = state_33540;
(statearr_33577_35254[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_33540[(4)]))){
var statearr_33578_35255 = state_33540;
(statearr_33578_35255[(1)] = cljs.core.first((state_33540[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35257 = state_33540;
state_33540 = G__35257;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_33540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_33540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_33580 = f__31016__auto__();
(statearr_33580[(6)] = c__31015__auto___35231);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33592 = (function (f,ch,meta33586,_,fn1,meta33593){
this.f = f;
this.ch = ch;
this.meta33586 = meta33586;
this._ = _;
this.fn1 = fn1;
this.meta33593 = meta33593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33594,meta33593__$1){
var self__ = this;
var _33594__$1 = this;
return (new cljs.core.async.t_cljs$core$async33592(self__.f,self__.ch,self__.meta33586,self__._,self__.fn1,meta33593__$1));
}));

(cljs.core.async.t_cljs$core$async33592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33594){
var self__ = this;
var _33594__$1 = this;
return self__.meta33593;
}));

(cljs.core.async.t_cljs$core$async33592.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33592.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33582_SHARP_){
var G__33634 = (((p1__33582_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33582_SHARP_) : self__.f.call(null, p1__33582_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33634) : f1.call(null, G__33634));
});
}));

(cljs.core.async.t_cljs$core$async33592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33586","meta33586",476975768,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33585","cljs.core.async/t_cljs$core$async33585",-1190283651,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33593","meta33593",1586543779,null)], null);
}));

(cljs.core.async.t_cljs$core$async33592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33592");

(cljs.core.async.t_cljs$core$async33592.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33592.
 */
cljs.core.async.__GT_t_cljs$core$async33592 = (function cljs$core$async$__GT_t_cljs$core$async33592(f,ch,meta33586,_,fn1,meta33593){
return (new cljs.core.async.t_cljs$core$async33592(f,ch,meta33586,_,fn1,meta33593));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33585 = (function (f,ch,meta33586){
this.f = f;
this.ch = ch;
this.meta33586 = meta33586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33587,meta33586__$1){
var self__ = this;
var _33587__$1 = this;
return (new cljs.core.async.t_cljs$core$async33585(self__.f,self__.ch,meta33586__$1));
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33587){
var self__ = this;
var _33587__$1 = this;
return self__.meta33586;
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33592(self__.f,self__.ch,self__.meta33586,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33657 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33657) : self__.f.call(null, G__33657));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33586","meta33586",476975768,null)], null);
}));

(cljs.core.async.t_cljs$core$async33585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33585");

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33585.
 */
cljs.core.async.__GT_t_cljs$core$async33585 = (function cljs$core$async$__GT_t_cljs$core$async33585(f,ch,meta33586){
return (new cljs.core.async.t_cljs$core$async33585(f,ch,meta33586));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33672 = (function (f,ch,meta33673){
this.f = f;
this.ch = ch;
this.meta33673 = meta33673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33674,meta33673__$1){
var self__ = this;
var _33674__$1 = this;
return (new cljs.core.async.t_cljs$core$async33672(self__.f,self__.ch,meta33673__$1));
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33674){
var self__ = this;
var _33674__$1 = this;
return self__.meta33673;
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33673","meta33673",1270866256,null)], null);
}));

(cljs.core.async.t_cljs$core$async33672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33672");

(cljs.core.async.t_cljs$core$async33672.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33672.
 */
cljs.core.async.__GT_t_cljs$core$async33672 = (function cljs$core$async$__GT_t_cljs$core$async33672(f,ch,meta33673){
return (new cljs.core.async.t_cljs$core$async33672(f,ch,meta33673));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33672(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33705 = (function (p,ch,meta33706){
this.p = p;
this.ch = ch;
this.meta33706 = meta33706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33707,meta33706__$1){
var self__ = this;
var _33707__$1 = this;
return (new cljs.core.async.t_cljs$core$async33705(self__.p,self__.ch,meta33706__$1));
}));

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33707){
var self__ = this;
var _33707__$1 = this;
return self__.meta33706;
}));

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33706","meta33706",-1032895091,null)], null);
}));

(cljs.core.async.t_cljs$core$async33705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33705");

(cljs.core.async.t_cljs$core$async33705.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33705.
 */
cljs.core.async.__GT_t_cljs$core$async33705 = (function cljs$core$async$__GT_t_cljs$core$async33705(p,ch,meta33706){
return (new cljs.core.async.t_cljs$core$async33705(p,ch,meta33706));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async33705(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33730 = arguments.length;
switch (G__33730) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31015__auto___35267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_33764){
var state_val_33765 = (state_33764[(1)]);
if((state_val_33765 === (7))){
var inst_33760 = (state_33764[(2)]);
var state_33764__$1 = state_33764;
var statearr_33766_35268 = state_33764__$1;
(statearr_33766_35268[(2)] = inst_33760);

(statearr_33766_35268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (1))){
var state_33764__$1 = state_33764;
var statearr_33767_35274 = state_33764__$1;
(statearr_33767_35274[(2)] = null);

(statearr_33767_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (4))){
var inst_33745 = (state_33764[(7)]);
var inst_33745__$1 = (state_33764[(2)]);
var inst_33746 = (inst_33745__$1 == null);
var state_33764__$1 = (function (){var statearr_33768 = state_33764;
(statearr_33768[(7)] = inst_33745__$1);

return statearr_33768;
})();
if(cljs.core.truth_(inst_33746)){
var statearr_33770_35276 = state_33764__$1;
(statearr_33770_35276[(1)] = (5));

} else {
var statearr_33774_35277 = state_33764__$1;
(statearr_33774_35277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (6))){
var inst_33745 = (state_33764[(7)]);
var inst_33751 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33745) : p.call(null, inst_33745));
var state_33764__$1 = state_33764;
if(cljs.core.truth_(inst_33751)){
var statearr_33775_35278 = state_33764__$1;
(statearr_33775_35278[(1)] = (8));

} else {
var statearr_33780_35279 = state_33764__$1;
(statearr_33780_35279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (3))){
var inst_33762 = (state_33764[(2)]);
var state_33764__$1 = state_33764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33764__$1,inst_33762);
} else {
if((state_val_33765 === (2))){
var state_33764__$1 = state_33764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33764__$1,(4),ch);
} else {
if((state_val_33765 === (11))){
var inst_33754 = (state_33764[(2)]);
var state_33764__$1 = state_33764;
var statearr_33784_35280 = state_33764__$1;
(statearr_33784_35280[(2)] = inst_33754);

(statearr_33784_35280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (9))){
var state_33764__$1 = state_33764;
var statearr_33785_35284 = state_33764__$1;
(statearr_33785_35284[(2)] = null);

(statearr_33785_35284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (5))){
var inst_33749 = cljs.core.async.close_BANG_(out);
var state_33764__$1 = state_33764;
var statearr_33789_35285 = state_33764__$1;
(statearr_33789_35285[(2)] = inst_33749);

(statearr_33789_35285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (10))){
var inst_33757 = (state_33764[(2)]);
var state_33764__$1 = (function (){var statearr_33790 = state_33764;
(statearr_33790[(8)] = inst_33757);

return statearr_33790;
})();
var statearr_33792_35286 = state_33764__$1;
(statearr_33792_35286[(2)] = null);

(statearr_33792_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33765 === (8))){
var inst_33745 = (state_33764[(7)]);
var state_33764__$1 = state_33764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33764__$1,(11),out,inst_33745);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_33798 = [null,null,null,null,null,null,null,null,null];
(statearr_33798[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_33798[(1)] = (1));

return statearr_33798;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_33764){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_33764);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e33799){var ex__30793__auto__ = e33799;
var statearr_33800_35288 = state_33764;
(statearr_33800_35288[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_33764[(4)]))){
var statearr_33801_35289 = state_33764;
(statearr_33801_35289[(1)] = cljs.core.first((state_33764[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35291 = state_33764;
state_33764 = G__35291;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_33764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_33764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_33802 = f__31016__auto__();
(statearr_33802[(6)] = c__31015__auto___35267);

return statearr_33802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33804 = arguments.length;
switch (G__33804) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_33866){
var state_val_33867 = (state_33866[(1)]);
if((state_val_33867 === (7))){
var inst_33862 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33868_35293 = state_33866__$1;
(statearr_33868_35293[(2)] = inst_33862);

(statearr_33868_35293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (20))){
var inst_33832 = (state_33866[(7)]);
var inst_33843 = (state_33866[(2)]);
var inst_33844 = cljs.core.next(inst_33832);
var inst_33818 = inst_33844;
var inst_33819 = null;
var inst_33820 = (0);
var inst_33821 = (0);
var state_33866__$1 = (function (){var statearr_33869 = state_33866;
(statearr_33869[(8)] = inst_33820);

(statearr_33869[(9)] = inst_33818);

(statearr_33869[(10)] = inst_33821);

(statearr_33869[(11)] = inst_33843);

(statearr_33869[(12)] = inst_33819);

return statearr_33869;
})();
var statearr_33870_35294 = state_33866__$1;
(statearr_33870_35294[(2)] = null);

(statearr_33870_35294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (1))){
var state_33866__$1 = state_33866;
var statearr_33871_35295 = state_33866__$1;
(statearr_33871_35295[(2)] = null);

(statearr_33871_35295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (4))){
var inst_33807 = (state_33866[(13)]);
var inst_33807__$1 = (state_33866[(2)]);
var inst_33808 = (inst_33807__$1 == null);
var state_33866__$1 = (function (){var statearr_33872 = state_33866;
(statearr_33872[(13)] = inst_33807__$1);

return statearr_33872;
})();
if(cljs.core.truth_(inst_33808)){
var statearr_33873_35296 = state_33866__$1;
(statearr_33873_35296[(1)] = (5));

} else {
var statearr_33874_35297 = state_33866__$1;
(statearr_33874_35297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (15))){
var state_33866__$1 = state_33866;
var statearr_33878_35298 = state_33866__$1;
(statearr_33878_35298[(2)] = null);

(statearr_33878_35298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (21))){
var state_33866__$1 = state_33866;
var statearr_33879_35299 = state_33866__$1;
(statearr_33879_35299[(2)] = null);

(statearr_33879_35299[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (13))){
var inst_33820 = (state_33866[(8)]);
var inst_33818 = (state_33866[(9)]);
var inst_33821 = (state_33866[(10)]);
var inst_33819 = (state_33866[(12)]);
var inst_33828 = (state_33866[(2)]);
var inst_33829 = (inst_33821 + (1));
var tmp33875 = inst_33820;
var tmp33876 = inst_33818;
var tmp33877 = inst_33819;
var inst_33818__$1 = tmp33876;
var inst_33819__$1 = tmp33877;
var inst_33820__$1 = tmp33875;
var inst_33821__$1 = inst_33829;
var state_33866__$1 = (function (){var statearr_33899 = state_33866;
(statearr_33899[(8)] = inst_33820__$1);

(statearr_33899[(9)] = inst_33818__$1);

(statearr_33899[(10)] = inst_33821__$1);

(statearr_33899[(12)] = inst_33819__$1);

(statearr_33899[(14)] = inst_33828);

return statearr_33899;
})();
var statearr_33900_35300 = state_33866__$1;
(statearr_33900_35300[(2)] = null);

(statearr_33900_35300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (22))){
var state_33866__$1 = state_33866;
var statearr_33901_35301 = state_33866__$1;
(statearr_33901_35301[(2)] = null);

(statearr_33901_35301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (6))){
var inst_33807 = (state_33866[(13)]);
var inst_33816 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33807) : f.call(null, inst_33807));
var inst_33817 = cljs.core.seq(inst_33816);
var inst_33818 = inst_33817;
var inst_33819 = null;
var inst_33820 = (0);
var inst_33821 = (0);
var state_33866__$1 = (function (){var statearr_33904 = state_33866;
(statearr_33904[(8)] = inst_33820);

(statearr_33904[(9)] = inst_33818);

(statearr_33904[(10)] = inst_33821);

(statearr_33904[(12)] = inst_33819);

return statearr_33904;
})();
var statearr_33906_35302 = state_33866__$1;
(statearr_33906_35302[(2)] = null);

(statearr_33906_35302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (17))){
var inst_33832 = (state_33866[(7)]);
var inst_33836 = cljs.core.chunk_first(inst_33832);
var inst_33837 = cljs.core.chunk_rest(inst_33832);
var inst_33838 = cljs.core.count(inst_33836);
var inst_33818 = inst_33837;
var inst_33819 = inst_33836;
var inst_33820 = inst_33838;
var inst_33821 = (0);
var state_33866__$1 = (function (){var statearr_33907 = state_33866;
(statearr_33907[(8)] = inst_33820);

(statearr_33907[(9)] = inst_33818);

(statearr_33907[(10)] = inst_33821);

(statearr_33907[(12)] = inst_33819);

return statearr_33907;
})();
var statearr_33908_35303 = state_33866__$1;
(statearr_33908_35303[(2)] = null);

(statearr_33908_35303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (3))){
var inst_33864 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33866__$1,inst_33864);
} else {
if((state_val_33867 === (12))){
var inst_33852 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33917_35305 = state_33866__$1;
(statearr_33917_35305[(2)] = inst_33852);

(statearr_33917_35305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (2))){
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33866__$1,(4),in$);
} else {
if((state_val_33867 === (23))){
var inst_33860 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33918_35309 = state_33866__$1;
(statearr_33918_35309[(2)] = inst_33860);

(statearr_33918_35309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (19))){
var inst_33847 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33920_35310 = state_33866__$1;
(statearr_33920_35310[(2)] = inst_33847);

(statearr_33920_35310[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (11))){
var inst_33818 = (state_33866[(9)]);
var inst_33832 = (state_33866[(7)]);
var inst_33832__$1 = cljs.core.seq(inst_33818);
var state_33866__$1 = (function (){var statearr_33921 = state_33866;
(statearr_33921[(7)] = inst_33832__$1);

return statearr_33921;
})();
if(inst_33832__$1){
var statearr_33922_35311 = state_33866__$1;
(statearr_33922_35311[(1)] = (14));

} else {
var statearr_33923_35312 = state_33866__$1;
(statearr_33923_35312[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (9))){
var inst_33854 = (state_33866[(2)]);
var inst_33855 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33866__$1 = (function (){var statearr_33927 = state_33866;
(statearr_33927[(15)] = inst_33854);

return statearr_33927;
})();
if(cljs.core.truth_(inst_33855)){
var statearr_33928_35314 = state_33866__$1;
(statearr_33928_35314[(1)] = (21));

} else {
var statearr_33929_35316 = state_33866__$1;
(statearr_33929_35316[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (5))){
var inst_33810 = cljs.core.async.close_BANG_(out);
var state_33866__$1 = state_33866;
var statearr_33930_35320 = state_33866__$1;
(statearr_33930_35320[(2)] = inst_33810);

(statearr_33930_35320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (14))){
var inst_33832 = (state_33866[(7)]);
var inst_33834 = cljs.core.chunked_seq_QMARK_(inst_33832);
var state_33866__$1 = state_33866;
if(inst_33834){
var statearr_33931_35322 = state_33866__$1;
(statearr_33931_35322[(1)] = (17));

} else {
var statearr_33932_35323 = state_33866__$1;
(statearr_33932_35323[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (16))){
var inst_33850 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33933_35324 = state_33866__$1;
(statearr_33933_35324[(2)] = inst_33850);

(statearr_33933_35324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (10))){
var inst_33821 = (state_33866[(10)]);
var inst_33819 = (state_33866[(12)]);
var inst_33826 = cljs.core._nth(inst_33819,inst_33821);
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33866__$1,(13),out,inst_33826);
} else {
if((state_val_33867 === (18))){
var inst_33832 = (state_33866[(7)]);
var inst_33841 = cljs.core.first(inst_33832);
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33866__$1,(20),out,inst_33841);
} else {
if((state_val_33867 === (8))){
var inst_33820 = (state_33866[(8)]);
var inst_33821 = (state_33866[(10)]);
var inst_33823 = (inst_33821 < inst_33820);
var inst_33824 = inst_33823;
var state_33866__$1 = state_33866;
if(cljs.core.truth_(inst_33824)){
var statearr_33938_35325 = state_33866__$1;
(statearr_33938_35325[(1)] = (10));

} else {
var statearr_33939_35326 = state_33866__$1;
(statearr_33939_35326[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30790__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30790__auto____0 = (function (){
var statearr_33940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33940[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30790__auto__);

(statearr_33940[(1)] = (1));

return statearr_33940;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30790__auto____1 = (function (state_33866){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_33866);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e33941){var ex__30793__auto__ = e33941;
var statearr_33942_35333 = state_33866;
(statearr_33942_35333[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_33866[(4)]))){
var statearr_33943_35334 = state_33866;
(statearr_33943_35334[(1)] = cljs.core.first((state_33866[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35335 = state_33866;
state_33866 = G__35335;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30790__auto__ = function(state_33866){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30790__auto____1.call(this,state_33866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30790__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30790__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_33944 = f__31016__auto__();
(statearr_33944[(6)] = c__31015__auto__);

return statearr_33944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));

return c__31015__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33946 = arguments.length;
switch (G__33946) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34002 = arguments.length;
switch (G__34002) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34025 = arguments.length;
switch (G__34025) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31015__auto___35346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_34051){
var state_val_34052 = (state_34051[(1)]);
if((state_val_34052 === (7))){
var inst_34046 = (state_34051[(2)]);
var state_34051__$1 = state_34051;
var statearr_34053_35347 = state_34051__$1;
(statearr_34053_35347[(2)] = inst_34046);

(statearr_34053_35347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (1))){
var inst_34026 = null;
var state_34051__$1 = (function (){var statearr_34054 = state_34051;
(statearr_34054[(7)] = inst_34026);

return statearr_34054;
})();
var statearr_34058_35348 = state_34051__$1;
(statearr_34058_35348[(2)] = null);

(statearr_34058_35348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (4))){
var inst_34031 = (state_34051[(8)]);
var inst_34031__$1 = (state_34051[(2)]);
var inst_34032 = (inst_34031__$1 == null);
var inst_34033 = cljs.core.not(inst_34032);
var state_34051__$1 = (function (){var statearr_34062 = state_34051;
(statearr_34062[(8)] = inst_34031__$1);

return statearr_34062;
})();
if(inst_34033){
var statearr_34066_35350 = state_34051__$1;
(statearr_34066_35350[(1)] = (5));

} else {
var statearr_34067_35352 = state_34051__$1;
(statearr_34067_35352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (6))){
var state_34051__$1 = state_34051;
var statearr_34070_35355 = state_34051__$1;
(statearr_34070_35355[(2)] = null);

(statearr_34070_35355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (3))){
var inst_34048 = (state_34051[(2)]);
var inst_34049 = cljs.core.async.close_BANG_(out);
var state_34051__$1 = (function (){var statearr_34071 = state_34051;
(statearr_34071[(9)] = inst_34048);

return statearr_34071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34051__$1,inst_34049);
} else {
if((state_val_34052 === (2))){
var state_34051__$1 = state_34051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34051__$1,(4),ch);
} else {
if((state_val_34052 === (11))){
var inst_34031 = (state_34051[(8)]);
var inst_34040 = (state_34051[(2)]);
var inst_34026 = inst_34031;
var state_34051__$1 = (function (){var statearr_34072 = state_34051;
(statearr_34072[(7)] = inst_34026);

(statearr_34072[(10)] = inst_34040);

return statearr_34072;
})();
var statearr_34077_35358 = state_34051__$1;
(statearr_34077_35358[(2)] = null);

(statearr_34077_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (9))){
var inst_34031 = (state_34051[(8)]);
var state_34051__$1 = state_34051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34051__$1,(11),out,inst_34031);
} else {
if((state_val_34052 === (5))){
var inst_34026 = (state_34051[(7)]);
var inst_34031 = (state_34051[(8)]);
var inst_34035 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34031,inst_34026);
var state_34051__$1 = state_34051;
if(inst_34035){
var statearr_34093_35359 = state_34051__$1;
(statearr_34093_35359[(1)] = (8));

} else {
var statearr_34098_35360 = state_34051__$1;
(statearr_34098_35360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (10))){
var inst_34043 = (state_34051[(2)]);
var state_34051__$1 = state_34051;
var statearr_34100_35362 = state_34051__$1;
(statearr_34100_35362[(2)] = inst_34043);

(statearr_34100_35362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34052 === (8))){
var inst_34026 = (state_34051[(7)]);
var tmp34086 = inst_34026;
var inst_34026__$1 = tmp34086;
var state_34051__$1 = (function (){var statearr_34104 = state_34051;
(statearr_34104[(7)] = inst_34026__$1);

return statearr_34104;
})();
var statearr_34107_35364 = state_34051__$1;
(statearr_34107_35364[(2)] = null);

(statearr_34107_35364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_34115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34115[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_34115[(1)] = (1));

return statearr_34115;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_34051){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_34051);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e34116){var ex__30793__auto__ = e34116;
var statearr_34117_35367 = state_34051;
(statearr_34117_35367[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_34051[(4)]))){
var statearr_34118_35368 = state_34051;
(statearr_34118_35368[(1)] = cljs.core.first((state_34051[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35369 = state_34051;
state_34051 = G__35369;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_34051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_34051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_34125 = f__31016__auto__();
(statearr_34125[(6)] = c__31015__auto___35346);

return statearr_34125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34127 = arguments.length;
switch (G__34127) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31015__auto___35446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_34168){
var state_val_34172 = (state_34168[(1)]);
if((state_val_34172 === (7))){
var inst_34164 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
var statearr_34173_35447 = state_34168__$1;
(statearr_34173_35447[(2)] = inst_34164);

(statearr_34173_35447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (1))){
var inst_34131 = (new Array(n));
var inst_34132 = inst_34131;
var inst_34133 = (0);
var state_34168__$1 = (function (){var statearr_34174 = state_34168;
(statearr_34174[(7)] = inst_34132);

(statearr_34174[(8)] = inst_34133);

return statearr_34174;
})();
var statearr_34175_35448 = state_34168__$1;
(statearr_34175_35448[(2)] = null);

(statearr_34175_35448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (4))){
var inst_34136 = (state_34168[(9)]);
var inst_34136__$1 = (state_34168[(2)]);
var inst_34137 = (inst_34136__$1 == null);
var inst_34138 = cljs.core.not(inst_34137);
var state_34168__$1 = (function (){var statearr_34176 = state_34168;
(statearr_34176[(9)] = inst_34136__$1);

return statearr_34176;
})();
if(inst_34138){
var statearr_34177_35463 = state_34168__$1;
(statearr_34177_35463[(1)] = (5));

} else {
var statearr_34178_35464 = state_34168__$1;
(statearr_34178_35464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (15))){
var inst_34158 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
var statearr_34179_35466 = state_34168__$1;
(statearr_34179_35466[(2)] = inst_34158);

(statearr_34179_35466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (13))){
var state_34168__$1 = state_34168;
var statearr_34180_35467 = state_34168__$1;
(statearr_34180_35467[(2)] = null);

(statearr_34180_35467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (6))){
var inst_34133 = (state_34168[(8)]);
var inst_34154 = (inst_34133 > (0));
var state_34168__$1 = state_34168;
if(cljs.core.truth_(inst_34154)){
var statearr_34186_35468 = state_34168__$1;
(statearr_34186_35468[(1)] = (12));

} else {
var statearr_34190_35469 = state_34168__$1;
(statearr_34190_35469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (3))){
var inst_34166 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34168__$1,inst_34166);
} else {
if((state_val_34172 === (12))){
var inst_34132 = (state_34168[(7)]);
var inst_34156 = cljs.core.vec(inst_34132);
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34168__$1,(15),out,inst_34156);
} else {
if((state_val_34172 === (2))){
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34168__$1,(4),ch);
} else {
if((state_val_34172 === (11))){
var inst_34148 = (state_34168[(2)]);
var inst_34149 = (new Array(n));
var inst_34132 = inst_34149;
var inst_34133 = (0);
var state_34168__$1 = (function (){var statearr_34194 = state_34168;
(statearr_34194[(7)] = inst_34132);

(statearr_34194[(10)] = inst_34148);

(statearr_34194[(8)] = inst_34133);

return statearr_34194;
})();
var statearr_34195_35470 = state_34168__$1;
(statearr_34195_35470[(2)] = null);

(statearr_34195_35470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (9))){
var inst_34132 = (state_34168[(7)]);
var inst_34146 = cljs.core.vec(inst_34132);
var state_34168__$1 = state_34168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34168__$1,(11),out,inst_34146);
} else {
if((state_val_34172 === (5))){
var inst_34136 = (state_34168[(9)]);
var inst_34132 = (state_34168[(7)]);
var inst_34141 = (state_34168[(11)]);
var inst_34133 = (state_34168[(8)]);
var inst_34140 = (inst_34132[inst_34133] = inst_34136);
var inst_34141__$1 = (inst_34133 + (1));
var inst_34142 = (inst_34141__$1 < n);
var state_34168__$1 = (function (){var statearr_34196 = state_34168;
(statearr_34196[(12)] = inst_34140);

(statearr_34196[(11)] = inst_34141__$1);

return statearr_34196;
})();
if(cljs.core.truth_(inst_34142)){
var statearr_34197_35471 = state_34168__$1;
(statearr_34197_35471[(1)] = (8));

} else {
var statearr_34198_35472 = state_34168__$1;
(statearr_34198_35472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (14))){
var inst_34161 = (state_34168[(2)]);
var inst_34162 = cljs.core.async.close_BANG_(out);
var state_34168__$1 = (function (){var statearr_34200 = state_34168;
(statearr_34200[(13)] = inst_34161);

return statearr_34200;
})();
var statearr_34201_35473 = state_34168__$1;
(statearr_34201_35473[(2)] = inst_34162);

(statearr_34201_35473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (10))){
var inst_34152 = (state_34168[(2)]);
var state_34168__$1 = state_34168;
var statearr_34203_35474 = state_34168__$1;
(statearr_34203_35474[(2)] = inst_34152);

(statearr_34203_35474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (8))){
var inst_34132 = (state_34168[(7)]);
var inst_34141 = (state_34168[(11)]);
var tmp34199 = inst_34132;
var inst_34132__$1 = tmp34199;
var inst_34133 = inst_34141;
var state_34168__$1 = (function (){var statearr_34204 = state_34168;
(statearr_34204[(7)] = inst_34132__$1);

(statearr_34204[(8)] = inst_34133);

return statearr_34204;
})();
var statearr_34205_35475 = state_34168__$1;
(statearr_34205_35475[(2)] = null);

(statearr_34205_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_34168){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_34168);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e34207){var ex__30793__auto__ = e34207;
var statearr_34208_35476 = state_34168;
(statearr_34208_35476[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_34168[(4)]))){
var statearr_34209_35477 = state_34168;
(statearr_34209_35477[(1)] = cljs.core.first((state_34168[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35478 = state_34168;
state_34168 = G__35478;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_34168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_34168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_34210 = f__31016__auto__();
(statearr_34210[(6)] = c__31015__auto___35446);

return statearr_34210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34225 = arguments.length;
switch (G__34225) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31015__auto___35481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_34271){
var state_val_34272 = (state_34271[(1)]);
if((state_val_34272 === (7))){
var inst_34266 = (state_34271[(2)]);
var state_34271__$1 = state_34271;
var statearr_34273_35482 = state_34271__$1;
(statearr_34273_35482[(2)] = inst_34266);

(statearr_34273_35482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (1))){
var inst_34226 = [];
var inst_34227 = inst_34226;
var inst_34228 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34271__$1 = (function (){var statearr_34274 = state_34271;
(statearr_34274[(7)] = inst_34227);

(statearr_34274[(8)] = inst_34228);

return statearr_34274;
})();
var statearr_34275_35484 = state_34271__$1;
(statearr_34275_35484[(2)] = null);

(statearr_34275_35484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (4))){
var inst_34231 = (state_34271[(9)]);
var inst_34231__$1 = (state_34271[(2)]);
var inst_34232 = (inst_34231__$1 == null);
var inst_34233 = cljs.core.not(inst_34232);
var state_34271__$1 = (function (){var statearr_34276 = state_34271;
(statearr_34276[(9)] = inst_34231__$1);

return statearr_34276;
})();
if(inst_34233){
var statearr_34277_35488 = state_34271__$1;
(statearr_34277_35488[(1)] = (5));

} else {
var statearr_34278_35489 = state_34271__$1;
(statearr_34278_35489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (15))){
var inst_34227 = (state_34271[(7)]);
var inst_34258 = cljs.core.vec(inst_34227);
var state_34271__$1 = state_34271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34271__$1,(18),out,inst_34258);
} else {
if((state_val_34272 === (13))){
var inst_34253 = (state_34271[(2)]);
var state_34271__$1 = state_34271;
var statearr_34279_35491 = state_34271__$1;
(statearr_34279_35491[(2)] = inst_34253);

(statearr_34279_35491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (6))){
var inst_34227 = (state_34271[(7)]);
var inst_34255 = inst_34227.length;
var inst_34256 = (inst_34255 > (0));
var state_34271__$1 = state_34271;
if(cljs.core.truth_(inst_34256)){
var statearr_34283_35497 = state_34271__$1;
(statearr_34283_35497[(1)] = (15));

} else {
var statearr_34397_35498 = state_34271__$1;
(statearr_34397_35498[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (17))){
var inst_34263 = (state_34271[(2)]);
var inst_34264 = cljs.core.async.close_BANG_(out);
var state_34271__$1 = (function (){var statearr_34399 = state_34271;
(statearr_34399[(10)] = inst_34263);

return statearr_34399;
})();
var statearr_34400_35500 = state_34271__$1;
(statearr_34400_35500[(2)] = inst_34264);

(statearr_34400_35500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (3))){
var inst_34268 = (state_34271[(2)]);
var state_34271__$1 = state_34271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34271__$1,inst_34268);
} else {
if((state_val_34272 === (12))){
var inst_34227 = (state_34271[(7)]);
var inst_34246 = cljs.core.vec(inst_34227);
var state_34271__$1 = state_34271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34271__$1,(14),out,inst_34246);
} else {
if((state_val_34272 === (2))){
var state_34271__$1 = state_34271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34271__$1,(4),ch);
} else {
if((state_val_34272 === (11))){
var inst_34227 = (state_34271[(7)]);
var inst_34235 = (state_34271[(11)]);
var inst_34231 = (state_34271[(9)]);
var inst_34243 = inst_34227.push(inst_34231);
var tmp34401 = inst_34227;
var inst_34227__$1 = tmp34401;
var inst_34228 = inst_34235;
var state_34271__$1 = (function (){var statearr_34412 = state_34271;
(statearr_34412[(7)] = inst_34227__$1);

(statearr_34412[(12)] = inst_34243);

(statearr_34412[(8)] = inst_34228);

return statearr_34412;
})();
var statearr_34413_35503 = state_34271__$1;
(statearr_34413_35503[(2)] = null);

(statearr_34413_35503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (9))){
var inst_34228 = (state_34271[(8)]);
var inst_34239 = cljs.core.keyword_identical_QMARK_(inst_34228,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34271__$1 = state_34271;
var statearr_34414_35504 = state_34271__$1;
(statearr_34414_35504[(2)] = inst_34239);

(statearr_34414_35504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (5))){
var inst_34236 = (state_34271[(13)]);
var inst_34235 = (state_34271[(11)]);
var inst_34231 = (state_34271[(9)]);
var inst_34228 = (state_34271[(8)]);
var inst_34235__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34231) : f.call(null, inst_34231));
var inst_34236__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34235__$1,inst_34228);
var state_34271__$1 = (function (){var statearr_34415 = state_34271;
(statearr_34415[(13)] = inst_34236__$1);

(statearr_34415[(11)] = inst_34235__$1);

return statearr_34415;
})();
if(inst_34236__$1){
var statearr_34416_35505 = state_34271__$1;
(statearr_34416_35505[(1)] = (8));

} else {
var statearr_34417_35506 = state_34271__$1;
(statearr_34417_35506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (14))){
var inst_34235 = (state_34271[(11)]);
var inst_34231 = (state_34271[(9)]);
var inst_34248 = (state_34271[(2)]);
var inst_34249 = [];
var inst_34250 = inst_34249.push(inst_34231);
var inst_34227 = inst_34249;
var inst_34228 = inst_34235;
var state_34271__$1 = (function (){var statearr_34418 = state_34271;
(statearr_34418[(7)] = inst_34227);

(statearr_34418[(14)] = inst_34248);

(statearr_34418[(15)] = inst_34250);

(statearr_34418[(8)] = inst_34228);

return statearr_34418;
})();
var statearr_34419_35507 = state_34271__$1;
(statearr_34419_35507[(2)] = null);

(statearr_34419_35507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (16))){
var state_34271__$1 = state_34271;
var statearr_34420_35508 = state_34271__$1;
(statearr_34420_35508[(2)] = null);

(statearr_34420_35508[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (10))){
var inst_34241 = (state_34271[(2)]);
var state_34271__$1 = state_34271;
if(cljs.core.truth_(inst_34241)){
var statearr_34436_35509 = state_34271__$1;
(statearr_34436_35509[(1)] = (11));

} else {
var statearr_34437_35510 = state_34271__$1;
(statearr_34437_35510[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (18))){
var inst_34260 = (state_34271[(2)]);
var state_34271__$1 = state_34271;
var statearr_34438_35511 = state_34271__$1;
(statearr_34438_35511[(2)] = inst_34260);

(statearr_34438_35511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34272 === (8))){
var inst_34236 = (state_34271[(13)]);
var state_34271__$1 = state_34271;
var statearr_34439_35512 = state_34271__$1;
(statearr_34439_35512[(2)] = inst_34236);

(statearr_34439_35512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30790__auto__ = null;
var cljs$core$async$state_machine__30790__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34440[(0)] = cljs$core$async$state_machine__30790__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var cljs$core$async$state_machine__30790__auto____1 = (function (state_34271){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_34271);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e34441){var ex__30793__auto__ = e34441;
var statearr_34442_35517 = state_34271;
(statearr_34442_35517[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_34271[(4)]))){
var statearr_34443_35518 = state_34271;
(statearr_34443_35518[(1)] = cljs.core.first((state_34271[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35519 = state_34271;
state_34271 = G__35519;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
cljs$core$async$state_machine__30790__auto__ = function(state_34271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30790__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30790__auto____1.call(this,state_34271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30790__auto____0;
cljs$core$async$state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30790__auto____1;
return cljs$core$async$state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_34444 = f__31016__auto__();
(statearr_34444[(6)] = c__31015__auto___35481);

return statearr_34444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
