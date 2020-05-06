#!/bin/bash

echo "$# $1"
if [ $# != 0 ]
then
	if [ -d $1 ]
	then
		var1=`find $1 -type f | wc -l`
		echo "O diretorio $1 tem $var1 arquivo(s)"


		else
		echo "O argumento $1 nao eh um diretorio"
	fi
	else
	echo "sem argumento"
fi
