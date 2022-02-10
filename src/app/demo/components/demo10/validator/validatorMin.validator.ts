import { ValidatorFn,AbstractControl } from "@angular/forms";

export function minimumC(longueur :number) :ValidatorFn{
    return (control:AbstractControl) =>{
  let myValue :string = control.value
  if (myValue==null) return null;
  if (control.dirty && myValue.length < longueur) return {minValide : longueur + " Caractères minimum"}
  return null
    
  } 

    
}


