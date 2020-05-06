#!/bin/bash
data=$(date +"%Y-%m-%d")

for arquivo in `find *.jpg`
do
	` mv $arquivo $data"-"$arquivo `
done
