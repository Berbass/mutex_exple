#!/bin/bash
curl localhost:8080/make-order-fixed # first order
sleep 1 # wait one second
curl localhost:8080/make-order-fixed & curl localhost:8080/make-order-fixed # second and third orders
sleep 1 # wait another second
curl localhost:8080/make-order-fixed # fourth order
