(ns guis.core
  (:require [replicant.dom :as r]
            [guis.counter :as counter]
            [guis.layout :as layout]
            [guis.temperature :as temperature]
            [clojure.walk :as walk]))

(def views
  [{:id :counter
    :text "Counter"}
   {:id :temperatures
    :text "Temperatures"}])

(defn get-current-view [state]
  (:current-view state))

(defn render-ui [state]
  (let [current-view (get-current-view state)]
    [:div.m-8
     (layout/tab-bar current-view views)
     (case current-view
       :counter
       (counter/render-ui state)
       :temperatures
       (temperature/render-ui state)

       [:h1.text-lg "Select your UI of choice"])]))


(defn process-effect [store [effect & args]]
  (case effect
    :effect/assoc-in
    (apply swap! store assoc-in args)))

(defn perform-actions [state event-data]
  (mapcat
    (fn [action]
      (println (first action) (rest action))
      (or (counter/perform-action state action) 
          (temperature/perform-action state action)
          (case (first action)
            :action/assoc-in
            [(into [:effect/assoc-in] (rest action))]
            (println "Unknown action"))))
    event-data))

(defn interpolate [event data]
  (walk/postwalk
   (fn [x]
    (case x
      :event.target/value-as-number (some-> event .-target .-valueAsNumber)
      x))
   data))

(defn init [store]
  (add-watch store ::render (fn [_ _ _ new-state]
                              (r/render
                               js/document.body
                               (render-ui new-state))))
  (r/set-dispatch!
   (fn [{:replicant/keys [dom-event]} event-data] 
     (->> (interpolate dom-event event-data)
          (perform-actions @store)
          (run! #(process-effect store %)))))
                 
  (swap! store assoc ::loaded-at (.getTime (js/Date.))))
