import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  public tipoRegistro;
  public categoriaRegistro;

  constructor(public navCtrl: NavController) {
    this.tipoRegistro=[
      {tipo:'Despesa'},
      {tipo:'Receita'},
    ];

    this.categoriaRegistro=[
      {nome:'Alimentação'},
    ];
  }

  ngOnInit() {}
    confirmar(){
      this.navCtrl.navigateRoot('lancamentos');
    }
    inicio(){
      this.navCtrl.navigateRoot('inicio');
    }



}
