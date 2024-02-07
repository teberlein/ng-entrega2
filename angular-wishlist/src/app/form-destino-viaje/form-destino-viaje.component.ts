import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DestinoViaje } from '../models/destino-viaje.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-destino-viaje',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './form-destino-viaje.component.html',
  styleUrl: './form-destino-viaje.component.css'
})
export class FormDestinoViajeComponent implements OnInit{
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  public fg! : FormGroup
  minLongitud = 5;

  constructor(fb: FormBuilder) {  
    this.onItemAdded = new EventEmitter();

    this.fg = new FormGroup({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
/*         this.nombreValidator,*/
         this.nombreValidatorParametrizable(this.minLongitud)
      ])),
      url: new FormControl('')
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('cambió el formulario', form)
    })
  }

  ngOnInit() {   
  }

  guardar(nombre:string, url:string):boolean {
    let d = new DestinoViaje (nombre, url, false);
    this.onItemAdded.emit(d);
    console.log(this.fg.value);
    return false;
  }  

/*   nombreValidator(control: FormControl): { [s:string]: boolean } {
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5) {
      return { invalidNombre: true };
    }
     else {
      return {invalidNombre: false};
     }
  } */

  nombreValidatorParametrizable(minLong: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLong) {
        return { minLongNombre: true };
      }
      return null;
    };
  }
}
