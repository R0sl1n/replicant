goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36015){
var map__36016 = p__36015;
var map__36016__$1 = cljs.core.__destructure_map(map__36016);
var m = map__36016__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36018_36340 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36019_36341 = null;
var count__36020_36342 = (0);
var i__36021_36343 = (0);
while(true){
if((i__36021_36343 < count__36020_36342)){
var f_36344 = chunk__36019_36341.cljs$core$IIndexed$_nth$arity$2(null, i__36021_36343);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36344], 0));


var G__36345 = seq__36018_36340;
var G__36346 = chunk__36019_36341;
var G__36347 = count__36020_36342;
var G__36348 = (i__36021_36343 + (1));
seq__36018_36340 = G__36345;
chunk__36019_36341 = G__36346;
count__36020_36342 = G__36347;
i__36021_36343 = G__36348;
continue;
} else {
var temp__5823__auto___36349 = cljs.core.seq(seq__36018_36340);
if(temp__5823__auto___36349){
var seq__36018_36350__$1 = temp__5823__auto___36349;
if(cljs.core.chunked_seq_QMARK_(seq__36018_36350__$1)){
var c__5525__auto___36351 = cljs.core.chunk_first(seq__36018_36350__$1);
var G__36352 = cljs.core.chunk_rest(seq__36018_36350__$1);
var G__36353 = c__5525__auto___36351;
var G__36354 = cljs.core.count(c__5525__auto___36351);
var G__36355 = (0);
seq__36018_36340 = G__36352;
chunk__36019_36341 = G__36353;
count__36020_36342 = G__36354;
i__36021_36343 = G__36355;
continue;
} else {
var f_36356 = cljs.core.first(seq__36018_36350__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36356], 0));


var G__36357 = cljs.core.next(seq__36018_36350__$1);
var G__36358 = null;
var G__36359 = (0);
var G__36360 = (0);
seq__36018_36340 = G__36357;
chunk__36019_36341 = G__36358;
count__36020_36342 = G__36359;
i__36021_36343 = G__36360;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36361 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36361], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36361)))?cljs.core.second(arglists_36361):arglists_36361)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36022_36363 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36023_36364 = null;
var count__36024_36365 = (0);
var i__36025_36366 = (0);
while(true){
if((i__36025_36366 < count__36024_36365)){
var vec__36073_36367 = chunk__36023_36364.cljs$core$IIndexed$_nth$arity$2(null, i__36025_36366);
var name_36368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073_36367,(0),null);
var map__36076_36369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36073_36367,(1),null);
var map__36076_36370__$1 = cljs.core.__destructure_map(map__36076_36369);
var doc_36371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076_36370__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076_36370__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36368], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36372], 0));

if(cljs.core.truth_(doc_36371)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36371], 0));
} else {
}


var G__36373 = seq__36022_36363;
var G__36374 = chunk__36023_36364;
var G__36375 = count__36024_36365;
var G__36376 = (i__36025_36366 + (1));
seq__36022_36363 = G__36373;
chunk__36023_36364 = G__36374;
count__36024_36365 = G__36375;
i__36025_36366 = G__36376;
continue;
} else {
var temp__5823__auto___36377 = cljs.core.seq(seq__36022_36363);
if(temp__5823__auto___36377){
var seq__36022_36378__$1 = temp__5823__auto___36377;
if(cljs.core.chunked_seq_QMARK_(seq__36022_36378__$1)){
var c__5525__auto___36379 = cljs.core.chunk_first(seq__36022_36378__$1);
var G__36380 = cljs.core.chunk_rest(seq__36022_36378__$1);
var G__36381 = c__5525__auto___36379;
var G__36382 = cljs.core.count(c__5525__auto___36379);
var G__36383 = (0);
seq__36022_36363 = G__36380;
chunk__36023_36364 = G__36381;
count__36024_36365 = G__36382;
i__36025_36366 = G__36383;
continue;
} else {
var vec__36082_36384 = cljs.core.first(seq__36022_36378__$1);
var name_36385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36082_36384,(0),null);
var map__36085_36386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36082_36384,(1),null);
var map__36085_36387__$1 = cljs.core.__destructure_map(map__36085_36386);
var doc_36388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085_36387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36085_36387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36385], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36389], 0));

if(cljs.core.truth_(doc_36388)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36388], 0));
} else {
}


var G__36390 = cljs.core.next(seq__36022_36378__$1);
var G__36391 = null;
var G__36392 = (0);
var G__36393 = (0);
seq__36022_36363 = G__36390;
chunk__36023_36364 = G__36391;
count__36024_36365 = G__36392;
i__36025_36366 = G__36393;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36090 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36091 = null;
var count__36092 = (0);
var i__36093 = (0);
while(true){
if((i__36093 < count__36092)){
var role = chunk__36091.cljs$core$IIndexed$_nth$arity$2(null, i__36093);
var temp__5823__auto___36394__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___36394__$1)){
var spec_36395 = temp__5823__auto___36394__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36395)], 0));
} else {
}


var G__36396 = seq__36090;
var G__36397 = chunk__36091;
var G__36398 = count__36092;
var G__36399 = (i__36093 + (1));
seq__36090 = G__36396;
chunk__36091 = G__36397;
count__36092 = G__36398;
i__36093 = G__36399;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__36090);
if(temp__5823__auto____$1){
var seq__36090__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36090__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36090__$1);
var G__36400 = cljs.core.chunk_rest(seq__36090__$1);
var G__36401 = c__5525__auto__;
var G__36402 = cljs.core.count(c__5525__auto__);
var G__36403 = (0);
seq__36090 = G__36400;
chunk__36091 = G__36401;
count__36092 = G__36402;
i__36093 = G__36403;
continue;
} else {
var role = cljs.core.first(seq__36090__$1);
var temp__5823__auto___36404__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___36404__$2)){
var spec_36406 = temp__5823__auto___36404__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36406)], 0));
} else {
}


var G__36411 = cljs.core.next(seq__36090__$1);
var G__36412 = null;
var G__36413 = (0);
var G__36414 = (0);
seq__36090 = G__36411;
chunk__36091 = G__36412;
count__36092 = G__36413;
i__36093 = G__36414;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36131 = datafied_throwable;
var map__36131__$1 = cljs.core.__destructure_map(map__36131);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36131__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36131__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36131__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36132 = cljs.core.last(via);
var map__36132__$1 = cljs.core.__destructure_map(map__36132);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36133 = data;
var map__36133__$1 = cljs.core.__destructure_map(map__36133);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36134 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36134__$1 = cljs.core.__destructure_map(map__36134);
var top_data = map__36134__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36134__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36136 = phase;
var G__36136__$1 = (((G__36136 instanceof cljs.core.Keyword))?G__36136.fqn:null);
switch (G__36136__$1) {
case "read-source":
var map__36139 = data;
var map__36139__$1 = cljs.core.__destructure_map(map__36139);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36149 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36149__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36149,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36149);
var G__36149__$2 = (cljs.core.truth_((function (){var fexpr__36150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36150.cljs$core$IFn$_invoke$arity$1 ? fexpr__36150.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36150.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36149__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36149__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36149__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36149__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36153 = top_data;
var G__36153__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36153,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36153);
var G__36153__$2 = (cljs.core.truth_((function (){var fexpr__36158 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36158.cljs$core$IFn$_invoke$arity$1 ? fexpr__36158.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36158.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36153__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36153__$1);
var G__36153__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36153__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36153__$2);
var G__36153__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36153__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36153__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36153__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36153__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36159 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159,(3),null);
var G__36163 = top_data;
var G__36163__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36163,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36163);
var G__36163__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36163__$1);
var G__36163__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36163__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36163__$2);
var G__36163__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36163__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36163__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36163__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36163__$4;
}

break;
case "execution":
var vec__36164 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36164,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36164,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36164,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36164,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36130_SHARP_){
var or__5002__auto__ = (p1__36130_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__36167 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36167.cljs$core$IFn$_invoke$arity$1 ? fexpr__36167.cljs$core$IFn$_invoke$arity$1(p1__36130_SHARP_) : fexpr__36167.call(null, p1__36130_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__36169 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36169__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36169,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36169);
var G__36169__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36169__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36169__$1);
var G__36169__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36169__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36169__$2);
var G__36169__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36169__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36169__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36169__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36169__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36136__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36276){
var map__36277 = p__36276;
var map__36277__$1 = cljs.core.__destructure_map(map__36277);
var triage_data = map__36277__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36281 = phase;
var G__36281__$1 = (((G__36281 instanceof cljs.core.Keyword))?G__36281.fqn:null);
switch (G__36281__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36290 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36292 = loc;
var G__36293 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36294_36442 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36295_36443 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36296_36444 = true;
var _STAR_print_fn_STAR__temp_val__36297_36445 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36296_36444);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36297_36445);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36267_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36267_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36295_36443);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36294_36442);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36290,G__36291,G__36292,G__36293) : format.call(null, G__36290,G__36291,G__36292,G__36293));

break;
case "macroexpansion":
var G__36298 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36299 = cause_type;
var G__36300 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36301 = loc;
var G__36302 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36298,G__36299,G__36300,G__36301,G__36302) : format.call(null, G__36298,G__36299,G__36300,G__36301,G__36302));

break;
case "compile-syntax-check":
var G__36303 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36304 = cause_type;
var G__36305 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36306 = loc;
var G__36307 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36303,G__36304,G__36305,G__36306,G__36307) : format.call(null, G__36303,G__36304,G__36305,G__36306,G__36307));

break;
case "compilation":
var G__36308 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36309 = cause_type;
var G__36310 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36311 = loc;
var G__36312 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36308,G__36309,G__36310,G__36311,G__36312) : format.call(null, G__36308,G__36309,G__36310,G__36311,G__36312));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36313 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36314 = symbol;
var G__36315 = loc;
var G__36316 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36317_36450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36318_36451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36319_36452 = true;
var _STAR_print_fn_STAR__temp_val__36320_36453 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36319_36452);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36320_36453);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36269_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36269_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36318_36451);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36317_36450);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36313,G__36314,G__36315,G__36316) : format.call(null, G__36313,G__36314,G__36315,G__36316));
} else {
var G__36325 = "Execution error%s at %s(%s).\n%s\n";
var G__36326 = cause_type;
var G__36327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36328 = loc;
var G__36329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36325,G__36326,G__36327,G__36328,G__36329) : format.call(null, G__36325,G__36326,G__36327,G__36328,G__36329));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36281__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
