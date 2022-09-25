import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}
    cadastrar(){
      this.navCtrl.navigateRoot('login');
  }

}
