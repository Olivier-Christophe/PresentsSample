
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { minimumC } from './validator/validatorMin.validator'
@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo8Component implements OnInit {

myFormGroup: FormGroup = this._formBuild.group({})

  constructor(
    private _formBuild:FormBuilder) { }

  ngOnInit(): void {
    this.myFormGroup=this._formBuild.group({
      nom:["", [Validators.required,this.Min3Caracteres()]],
      titre:["",[Validators.required,minimumC(4)]],
      email:["",[Validators.required, Validators.email]],
      files:this._formBuild.array([])


    })
  }
getFileArray():FormArray{
  return this.myFormGroup.get('files') as FormArray
} 
addcontrolToArray(){
  this.getFileArray().push(new FormControl('', Validators.required))
}

 

onSubmit(){
  console.log("nom : " + this.myFormGroup.value['nom'])
  console.log("titre : " + this.myFormGroup.value['titre']) 
  console.log("e-mail : " + this.myFormGroup.value['email'])
  console.log("files: " + this.myFormGroup.value['files'])
}

Min3Caracteres(): ValidatorFn{
  return (control:AbstractControl) =>{
let myValue :string = control.value
if (myValue==null) return null;
if (control.dirty && myValue.length < 3) return {min3 : "3 Caractères minimum"}
return null
  
} }}

