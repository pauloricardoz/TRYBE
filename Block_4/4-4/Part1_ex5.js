let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
info.recorrente="Sim";

let info2= {};
info2.personagem="Tio Patinhas";
info2.origem="Christmas on Bear Mountain, Dell’s Four Color Comics #178";
info2.nota="O último MacPatinhas"
info2.recorrente= "Sim";

for (const chave in info) {
  if (chave=="recorrente" && info[chave]=="Sim"&& info2[chave]=="Sim") {
    console.log("Ambos recorrentes")
  }else{
  console.log(info[chave]+" e "+info2[chave]);
  }
}
