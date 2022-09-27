import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  nome='';
  email='';
  senha='';

  constructor(public navCtrl: NavController, private http: HttpClient) { }

  ngOnInit() {}
   cadastrar(){
      this.navCtrl.navigateRoot('login');
      this.http.post<any[]>('http://localhost/cfp/cadastroUsuario.php',
    {nome : this.nome, email : this.email, senha: this.senha})
    .subscribe(valor =>{});
  }

}
