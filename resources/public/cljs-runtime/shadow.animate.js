goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_36679 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_from[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_36679(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_36680 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_to[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_36680(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_36683 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_36683(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_36684 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_36684(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_36687 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_36687(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35897){
var vec__35898 = p__35897;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__5000__auto__ = delay;
if(cljs.core.truth_(and__5000__auto__)){
return (delay > (0));
} else {
return and__5000__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_36688 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.get_duration[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_36688(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_36689 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_36689(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_36690 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_36690(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_36691 = (function (animator){
var x__5350__auto__ = (((animator == null))?null:animator);
var m__5351__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5351__auto__.call(null, animator));
} else {
var m__5349__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__5349__auto__.call(null, animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_36691(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5593__auto__ = self__.items.length;
var i__30889__auto__ = (0);
while(true){
if((i__30889__auto__ < n__5593__auto__)){
var map__36135_36692 = (self__.items[i__30889__auto__]);
var map__36135_36693__$1 = cljs.core.__destructure_map(map__36135_36692);
var el_36694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135_36693__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_36695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135_36693__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_36694,from_36695);

var G__36696 = (i__30889__auto__ + (1));
i__30889__auto__ = G__36696;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5593__auto__ = self__.items.length;
var i__30889__auto__ = (0);
while(true){
if((i__30889__auto__ < n__5593__auto__)){
var map__36151_36697 = (self__.items[i__30889__auto__]);
var map__36151_36698__$1 = cljs.core.__destructure_map(map__36151_36697);
var el_36699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36698__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_36700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36698__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_36701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36698__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_36700["transition"] = transition_36701);

goog.style.setStyle(el_36699,to_36700);

var G__36703 = (i__30889__auto__ + (1));
i__30889__auto__ = G__36703;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__5593__auto__ = self__.items.length;
var i__30889__auto__ = (0);
while(true){
if((i__30889__auto__ < n__5593__auto__)){
var map__36162_36704 = (self__.items[i__30889__auto__]);
var map__36162_36705__$1 = cljs.core.__destructure_map(map__36162_36704);
var el_36706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36705__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_36707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36705__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_36707["transition"] = null);

goog.style.setStyle(el_36706,toggles_36707);

var G__36708 = (i__30889__auto__ + (1));
i__30889__auto__ = G__36708;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k36171,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__36176 = k36171;
var G__36176__$1 = (((G__36176 instanceof cljs.core.Keyword))?G__36176.fqn:null);
switch (G__36176__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36171,else__5303__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__36223){
var vec__36225 = p__36223;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36225,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36170){
var self__ = this;
var G__36170__$1 = this;
return (new cljs.core.RecordIter((0),G__36170__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36172,other36173){
var self__ = this;
var this36172__$1 = this;
return (((!((other36173 == null)))) && ((((this36172__$1.constructor === other36173.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36172__$1.el,other36173.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36172__$1.from,other36173.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36172__$1.to,other36173.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36172__$1.toggles,other36173.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36172__$1.transition,other36173.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36172__$1.__extmap,other36173.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k36171){
var self__ = this;
var this__5307__auto____$1 = this;
var G__36405 = k36171;
var G__36405__$1 = (((G__36405 instanceof cljs.core.Keyword))?G__36405.fqn:null);
switch (G__36405__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36171);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__36170){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__36415 = cljs.core.keyword_identical_QMARK_;
var expr__36416 = k__5309__auto__;
if(cljs.core.truth_((pred__36415.cljs$core$IFn$_invoke$arity$2 ? pred__36415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__36416) : pred__36415.call(null, new cljs.core.Keyword(null,"el","el",-1618201118),expr__36416)))){
return (new shadow.animate.AnimationStep(G__36170,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36415.cljs$core$IFn$_invoke$arity$2 ? pred__36415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__36416) : pred__36415.call(null, new cljs.core.Keyword(null,"from","from",1815293044),expr__36416)))){
return (new shadow.animate.AnimationStep(self__.el,G__36170,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36415.cljs$core$IFn$_invoke$arity$2 ? pred__36415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__36416) : pred__36415.call(null, new cljs.core.Keyword(null,"to","to",192099007),expr__36416)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__36170,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36415.cljs$core$IFn$_invoke$arity$2 ? pred__36415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__36416) : pred__36415.call(null, new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__36416)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__36170,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36415.cljs$core$IFn$_invoke$arity$2 ? pred__36415.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__36416) : pred__36415.call(null, new cljs.core.Keyword(null,"transition","transition",765692007),expr__36416)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__36170,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__36170),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__36170){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__36170,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__36174){
var extmap__5342__auto__ = (function (){var G__36426 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36174,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__36174)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36426);
} else {
return G__36426;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__36174),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__36174),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__36174),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__36174),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__36174),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$animate$setup_$_iter__36433(s__36434){
return (new cljs.core.LazySeq(null,(function (){
var s__36434__$1 = s__36434;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__36434__$1);
if(temp__5823__auto__){
var s__36434__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36434__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__36434__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__36436 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__36435 = (0);
while(true){
if((i__36435 < size__5479__auto__)){
var vec__36437 = cljs.core._nth(c__5478__auto__,i__36435);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36437,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36437,(1),null);
cljs.core.chunk_append(b__36436,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__36721 = (i__36435 + (1));
i__36435 = G__36721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36436),shadow$animate$setup_$_iter__36433(cljs.core.chunk_rest(s__36434__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36436),null);
}
} else {
var vec__36446 = cljs.core.first(s__36434__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36446,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36446,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__36433(cljs.core.rest(s__36434__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__31015__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31016__auto__ = (function (){var switch__30789__auto__ = (function (state_36464){
var state_val_36465 = (state_36464[(1)]);
if((state_val_36465 === (1))){
var inst_36458 = shadow.animate.get_duration(animator);
var inst_36459 = cljs.core.async.timeout(inst_36458);
var state_36464__$1 = state_36464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36464__$1,(2),inst_36459);
} else {
if((state_val_36465 === (2))){
var inst_36461 = (state_36464[(2)]);
var inst_36462 = shadow.animate.finish_BANG_(animator);
var state_36464__$1 = (function (){var statearr_36470 = state_36464;
(statearr_36470[(7)] = inst_36461);

(statearr_36470[(8)] = inst_36462);

return statearr_36470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36464__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__30790__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__30790__auto____0 = (function (){
var statearr_36471 = [null,null,null,null,null,null,null,null,null];
(statearr_36471[(0)] = shadow$animate$continue_BANG__$_state_machine__30790__auto__);

(statearr_36471[(1)] = (1));

return statearr_36471;
});
var shadow$animate$continue_BANG__$_state_machine__30790__auto____1 = (function (state_36464){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_36464);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e36476){var ex__30793__auto__ = e36476;
var statearr_36477_36724 = state_36464;
(statearr_36477_36724[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_36464[(4)]))){
var statearr_36478_36725 = state_36464;
(statearr_36478_36725[(1)] = cljs.core.first((state_36464[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36726 = state_36464;
state_36464 = G__36726;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__30790__auto__ = function(state_36464){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__30790__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__30790__auto____1.call(this,state_36464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__30790__auto____0;
shadow$animate$continue_BANG__$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__30790__auto____1;
return shadow$animate$continue_BANG__$_state_machine__30790__auto__;
})()
})();
var state__31017__auto__ = (function (){var statearr_36479 = f__31016__auto__();
(statearr_36479[(6)] = c__31015__auto__);

return statearr_36479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31017__auto__);
}));

return c__31015__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null, );

return shadow.animate.continue_BANG_(animator);
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36502 = (function (attr,from,to,timing,delay,meta36503){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta36503 = meta36503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36504,meta36503__$1){
var self__ = this;
var _36504__$1 = this;
return (new shadow.animate.t_shadow$animate36502(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta36503__$1));
}));

(shadow.animate.t_shadow$animate36502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36504){
var self__ = this;
var _36504__$1 = this;
return self__.meta36503;
}));

(shadow.animate.t_shadow$animate36502.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36502.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate36502.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate36502.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36502.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate36502.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate36502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta36503","meta36503",1212928372,null)], null);
}));

(shadow.animate.t_shadow$animate36502.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36502.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36502");

(shadow.animate.t_shadow$animate36502.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36502");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36502.
 */
shadow.animate.__GT_t_shadow$animate36502 = (function shadow$animate$__GT_t_shadow$animate36502(attr,from,to,timing,delay,meta36503){
return (new shadow.animate.t_shadow$animate36502(attr,from,to,timing,delay,meta36503));
});


/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__36496 = arguments.length;
switch (G__36496) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
return (new shadow.animate.t_shadow$animate36502(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36511 = (function (attr,from,to,meta36512){
this.attr = attr;
this.from = from;
this.to = to;
this.meta36512 = meta36512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36513,meta36512__$1){
var self__ = this;
var _36513__$1 = this;
return (new shadow.animate.t_shadow$animate36511(self__.attr,self__.from,self__.to,meta36512__$1));
}));

(shadow.animate.t_shadow$animate36511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36513){
var self__ = this;
var _36513__$1 = this;
return self__.meta36512;
}));

(shadow.animate.t_shadow$animate36511.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36511.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36511.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate36511.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate36511.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36511.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta36512","meta36512",2082400727,null)], null);
}));

(shadow.animate.t_shadow$animate36511.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36511.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36511");

(shadow.animate.t_shadow$animate36511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36511");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36511.
 */
shadow.animate.__GT_t_shadow$animate36511 = (function shadow$animate$__GT_t_shadow$animate36511(attr,from,to,meta36512){
return (new shadow.animate.t_shadow$animate36511(attr,from,to,meta36512));
});


shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
return (new shadow.animate.t_shadow$animate36511(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36521 = (function (attrs,meta36522){
this.attrs = attrs;
this.meta36522 = meta36522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36523,meta36522__$1){
var self__ = this;
var _36523__$1 = this;
return (new shadow.animate.t_shadow$animate36521(self__.attrs,meta36522__$1));
}));

(shadow.animate.t_shadow$animate36521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36523){
var self__ = this;
var _36523__$1 = this;
return self__.meta36522;
}));

(shadow.animate.t_shadow$animate36521.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36521.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36521.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate36521.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36521.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36521.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36522","meta36522",799036897,null)], null);
}));

(shadow.animate.t_shadow$animate36521.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36521.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36521");

(shadow.animate.t_shadow$animate36521.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36521");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36521.
 */
shadow.animate.__GT_t_shadow$animate36521 = (function shadow$animate$__GT_t_shadow$animate36521(attrs,meta36522){
return (new shadow.animate.t_shadow$animate36521(attrs,meta36522));
});


/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__36519 = arguments.length;
switch (G__36519) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
return (new shadow.animate.t_shadow$animate36521(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36533 = (function (attr,meta36534){
this.attr = attr;
this.meta36534 = meta36534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36535,meta36534__$1){
var self__ = this;
var _36535__$1 = this;
return (new shadow.animate.t_shadow$animate36533(self__.attr,meta36534__$1));
}));

(shadow.animate.t_shadow$animate36533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36535){
var self__ = this;
var _36535__$1 = this;
return self__.meta36534;
}));

(shadow.animate.t_shadow$animate36533.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36533.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36533.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36533.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate36533.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36533.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta36534","meta36534",-321597392,null)], null);
}));

(shadow.animate.t_shadow$animate36533.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36533.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36533");

(shadow.animate.t_shadow$animate36533.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36533");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36533.
 */
shadow.animate.__GT_t_shadow$animate36533 = (function shadow$animate$__GT_t_shadow$animate36533(attr,meta36534){
return (new shadow.animate.t_shadow$animate36533(attr,meta36534));
});


/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
return (new shadow.animate.t_shadow$animate36533(attr,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36567 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta36568){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta36568 = meta36568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36569,meta36568__$1){
var self__ = this;
var _36569__$1 = this;
return (new shadow.animate.t_shadow$animate36567(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta36568__$1));
}));

(shadow.animate.t_shadow$animate36567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36569){
var self__ = this;
var _36569__$1 = this;
return self__.meta36568;
}));

(shadow.animate.t_shadow$animate36567.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36567.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate36567.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate36567.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate36567.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate36567.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate36567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta36568","meta36568",1728052589,null)], null);
}));

(shadow.animate.t_shadow$animate36567.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36567.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36567");

(shadow.animate.t_shadow$animate36567.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36567");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36567.
 */
shadow.animate.__GT_t_shadow$animate36567 = (function shadow$animate$__GT_t_shadow$animate36567(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta36568){
return (new shadow.animate.t_shadow$animate36567(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta36568));
});



/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36574 = (function (transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta36575){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5821__auto__ = temp__5821__auto__;
this.meta36575 = meta36575;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36574.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36576,meta36575__$1){
var self__ = this;
var _36576__$1 = this;
return (new shadow.animate.t_shadow$animate36574(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5821__auto__,meta36575__$1));
}));

(shadow.animate.t_shadow$animate36574.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36576){
var self__ = this;
var _36576__$1 = this;
return self__.meta36575;
}));

(shadow.animate.t_shadow$animate36574.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36574.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
}));

(shadow.animate.t_shadow$animate36574.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
}));

(shadow.animate.t_shadow$animate36574.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
}));

(shadow.animate.t_shadow$animate36574.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
}));

(shadow.animate.t_shadow$animate36574.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
}));

(shadow.animate.t_shadow$animate36574.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5821__auto__","temp__5821__auto__",-711172737,null),new cljs.core.Symbol(null,"meta36575","meta36575",-1882094330,null)], null);
}));

(shadow.animate.t_shadow$animate36574.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36574.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36574");

(shadow.animate.t_shadow$animate36574.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36574");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36574.
 */
shadow.animate.__GT_t_shadow$animate36574 = (function shadow$animate$__GT_t_shadow$animate36574(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta36575){
return (new shadow.animate.t_shadow$animate36574(transitions,to,from,toggles,timings,delays,temp__5821__auto__,meta36575));
});


shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36739 = arguments.length;
var i__5727__auto___36740 = (0);
while(true){
if((i__5727__auto___36740 < len__5726__auto___36739)){
args__5732__auto__.push((arguments[i__5727__auto___36740]));

var G__36742 = (i__5727__auto___36740 + (1));
i__5727__auto___36740 = G__36742;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5821__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5821__auto__)){
var adef = temp__5821__auto__;
var G__36745 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__36746 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__36747 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__36748 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__36749 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__36750 = cljs.core.rest(transitions__$1);
to = G__36745;
from = G__36746;
toggles = G__36747;
timings = G__36748;
delays = G__36749;
transitions__$1 = G__36750;
continue;
} else {
return (new shadow.animate.t_shadow$animate36574(transitions__$1,to,from,toggles,timings,delays,temp__5821__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq36566){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36566));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__36595 = arguments.length;
switch (G__36595) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__36605 = arguments.length;
switch (G__36605) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36614 = (function (from,to,timing,delay,meta36615){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta36615 = meta36615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36616,meta36615__$1){
var self__ = this;
var _36616__$1 = this;
return (new shadow.animate.t_shadow$animate36614(self__.from,self__.to,self__.timing,self__.delay,meta36615__$1));
}));

(shadow.animate.t_shadow$animate36614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36616){
var self__ = this;
var _36616__$1 = this;
return self__.meta36615;
}));

(shadow.animate.t_shadow$animate36614.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36614.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate36614.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate36614.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate36614.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36614.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate36614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta36615","meta36615",1793875910,null)], null);
}));

(shadow.animate.t_shadow$animate36614.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36614.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36614");

(shadow.animate.t_shadow$animate36614.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36614");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36614.
 */
shadow.animate.__GT_t_shadow$animate36614 = (function shadow$animate$__GT_t_shadow$animate36614(from,to,timing,delay,meta36615){
return (new shadow.animate.t_shadow$animate36614(from,to,timing,delay,meta36615));
});


shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__36608 = arguments.length;
switch (G__36608) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate36614(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate36631 = (function (from,to,timing,delay,meta36632){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta36632 = meta36632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate36631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36633,meta36632__$1){
var self__ = this;
var _36633__$1 = this;
return (new shadow.animate.t_shadow$animate36631(self__.from,self__.to,self__.timing,self__.delay,meta36632__$1));
}));

(shadow.animate.t_shadow$animate36631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36633){
var self__ = this;
var _36633__$1 = this;
return self__.meta36632;
}));

(shadow.animate.t_shadow$animate36631.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate36631.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate36631.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate36631.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate36631.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate36631.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate36631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta36632","meta36632",1172671397,null)], null);
}));

(shadow.animate.t_shadow$animate36631.cljs$lang$type = true);

(shadow.animate.t_shadow$animate36631.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate36631");

(shadow.animate.t_shadow$animate36631.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.animate/t_shadow$animate36631");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate36631.
 */
shadow.animate.__GT_t_shadow$animate36631 = (function shadow$animate$__GT_t_shadow$animate36631(from,to,timing,delay,meta36632){
return (new shadow.animate.t_shadow$animate36631(from,to,timing,delay,meta36632));
});


shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__36627 = arguments.length;
switch (G__36627) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
return (new shadow.animate.t_shadow$animate36631(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
