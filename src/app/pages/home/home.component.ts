import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import SwiperCore from 'swiper/core';
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

  }
  public sendEmail(data) {

    // fetch('http://localhost:8000/send-email', {
    //   method: 'post',
    //   body: data,
    // 	headers: { "Content-type": "application/json;charset=utf-8" }
    // }).then(function (response) {
    //   debugger
    //   return response.blob();
    // }).then(function (myBlob) {
    //   debugger
    // });

    // let res = this.apiClient.postEmail<void>(data);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8000/send-email',
      data: data,
      success: function (data) {
      },
      error: function (data) {
      }
    });

    Swal.fire({
      title: 'E-mail enviado',
      text: 'Seu E-mail foi enviado para nossa equipe.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#1FA6CD'
    })

  }
}
