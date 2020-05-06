#!/bin/bash
data=$(date +"%Y-%m-%d")
if [ -d $1 ]
then
	caminho=$1"/"

	
	for tipos in $*
	do
#echo "tipos = "$tipos	
		if [[ ! -d $tipos ]]
		then
		for arquivo in `find $caminho*.$tipos`
		do
			echo "${arquivo##*/} -->>  $data-${arquivo##*/}"
			` mv $arquivo $caminho$data-"${arquivo##*/}"`
		done
		fi
	done

else
		echo "Nao eh um diretorio"
fi
