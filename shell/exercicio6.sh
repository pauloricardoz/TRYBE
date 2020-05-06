#!/bin/bash

read -p "Digite caminho do arquivo ou diretorio: " caminho


	if [ -d $caminho ]
		then
			echo "Eh Diretorio"
	elif [ -f $caminho ]
		then
			echo "Eh arq"
	else
		echo "Outro tipo"
	fi

ls $caminho  -la
