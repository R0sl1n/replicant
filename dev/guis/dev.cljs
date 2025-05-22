(ns guis.dev
  (:require [guis.core :as guis]))

(defonce store (atom {:number 0}))
(defn main []
  (guis.core/init store)
  (println "Loaded!"))

(defn ^:dev/after-load reload []
  (guis.core/init store)
  (println "Reloaded!!"))