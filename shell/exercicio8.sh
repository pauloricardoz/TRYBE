#!/bin/bash

echo "$# $1"

if [ $# >=  "1" ]
then
	for arg in $*
	do
	caminho=($arg)
	if [ -d $caminho ]
		then
			echo "Eh Diretorio"
	elif [ -f $caminho ]
		then
			echo "Eh arq"
	else
		echo "Outro tipo"
	fi
	done
else	
	echo "Forneca ao menos um artributo"
fi
