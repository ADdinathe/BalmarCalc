
 function eval(){
let Consetrate,
   out,
    sex_m,
    sex_w,
    Result,
    alc_mass,
   R_koef =0.7,
    weight =72;
    
Resorb_N = document.getElementById("No_resorb");
Resorb_L = document.getElementById("Light_resorb");
Resorb_G = document.getElementById("Good_resorb")
if (Resorb_G.checked){

   Resorb = +document.getElementById("Good_resorb").value ;
} else if (Resorb_L.checked){
   Resorb = +document.getElementById("Light_resorb").value ;
}else Resorb = +document.getElementById("No_resorb").value ;

sex_m = document.getElementById("sex_m");
sex_w = document.getElementById("sex_w");

if (sex_m.checked){

   R_koef = 0.7 ;
} else if (sex_w.checked){
     R_koef = 0.6;
}


Consetrate = document.getElementById("Consetrate").value;
weight = document.getElementById("weight").value;
Vol = document.getElementById("Volume").value;

//mass of alcohol
alc_mass = Vol* (Consetrate/100)*0.78;
//finall consetrate in body
out = (alc_mass*Resorb/(weight*R_koef));

//  console.log(Consetrate);
//  console.log(weight);
//  console.log(R_koef);
//  console.log(alc_mass);
//  console.log(Resorb);
console.log(out);
 if (out > 0.138){
    out = (out-0.138)*400;
     Result = `Вы выпили слишком МНОГО. Вам стоит подождать ${(out.toFixed(3))}минут`;
   } else if (out < 0.129) {
      out = (0.129-out)*(weight*R_koef)/((Consetrate/100)*0.78*Resorb);
       Result = `Вы выпили слишком МАЛО. Вам стоит выпить еще ${out.toFixed(3)}мл для достижения`;
   } else  Result = `Позравляю, Вы вы достили пика балмера. Теперь вы должны выпивать по 0,1промилле каждые 40 минут`;
   
document.getElementById('out').innerHTML = Result;
 }