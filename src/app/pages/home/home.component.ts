import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import Swal from 'sweetalert2'

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

  }
}
