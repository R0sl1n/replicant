(ns guis.counter)

(defn perform-action [state [action]] 
  (when (= ::inc-number action) 
       [[:effect/assoc-in [:number] (inc (:number state))]]))
       
(defn render-ui [state]
 [:div
 [:h1.text-lg "Counter!"]
 [:div.flex.gap-4.items.center
  [:div.text-2xl "Number is " (:number state)]
  [:button.btn.btn-primary
  {:on {:click [[::inc-number]]}} ;; Forventer global handler. 
   "Count!"]]])
