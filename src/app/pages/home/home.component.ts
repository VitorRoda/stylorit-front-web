import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import { ApiClient } from '../../service/api';

import $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dynamicForm: FormGroup;
  private apiClient: ApiClient;

  constructor(private formBuilder: FormBuilder, apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  ngOnInit(): void {


    this.dynamicForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.dynamicForm.invalid) {
      Swal.fire({
        title: 'Campo vazio',
        text: 'Preencha todos os campos antes de continuar.',
        icon: 'error',
        confirmButtonText: 'Certo',
        confirmButtonColor: '#1FA6CD'
      }

      )
      return;
    }

    this.sendEmail(this.dynamicForm.value)

    this.dynamicForm.reset()

    Swal.fire({
      title: 'E-mail enviado',
      text: 'Seu E-mail foi enviado para nossa equipe.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#1FA6CD'
    })
  }



  public sendEmail(data) {

    // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:8000/send-email',
    //   data: data,
    //   success: function (data) {
    //   },
    //   error: function (data) {
    //   }
    // });
  }

  scroll(section) {
    let top = $("#" + section).offset().top - 85
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    })
  }

}
