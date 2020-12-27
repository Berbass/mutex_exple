#!/bin/bash
curl localhost:8080/make-order # first order
sleep 1 # wait one second
curl localhost:8080/make-order & curl localhost:8080/make-order # second and third orders
sleep 1 # wait another second
curl localhost:8080/make-order # fourth order
