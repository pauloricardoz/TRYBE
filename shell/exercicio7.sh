#!/bin/bash

echo "$# $1"

if [ $# ==  "1" ]
then
	caminho=$1
	if [ -d $caminho ]
		then
			echo "Eh Diretorio"
	elif [ -f $caminho ]
		then
			echo "Eh arq"
	else
		echo "Outro tipo"
	fi
else
	echo "forneceu menos ou mais argumentos que o permitido."
fi
