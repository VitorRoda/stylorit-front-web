import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'
import SwiperCore from 'swiper/core';
import { ApiClient } from '../../service/api';

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
      mesage: ['', Validators.required]
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
    let message = `<p>Nome: <strong>` + data.nome_in + `</strong></p>` +
      `<p>Email: <strong>` + data.email_in + `</strong></p>` +
      `<p>Telefone/WhatsApp: <strong>` + data.telefone_in + `</strong></p>` +
      `<p>Mensagem: <strong>` + data.mesage_in + `</strong></p>`

    console.log(message);

    // fetch('http://localhost:8000/send-email', {
    //   method: 'POST',
    //   body: data
    // })
    //   .then(function (response) {
    //     debugger
    //     return response.blob();
    //   })
    //   .then(function (myBlob) {
    //     debugger
    //   });

    let res = this.apiClient.postEmail<void>(data);

  }
}
