import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.dynamicForm = this.formBuilder.group({
      nome_in: ['', Validators.required],
      email_in: ['', Validators.required],
      telefone_in: ['', Validators.required],
      mesage_in: ['', Validators.required]
    });
  }

  public onSubmit() {
    debugger
    if (this.dynamicForm.invalid) return;

  }
}
