import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  public tipoRegistro;
  public categoriaRegistro;
  tipo='';
  valor='';
  descricao='';
  categoria='';
  data='';

  constructor(public navCtrl: NavController,private http: HttpClient) {
    this.tipoRegistro=[
      {tipo:'Despesa'},
      {tipo:'Receita'},
    ];

    this.categoriaRegistro=[
      {nome:'Alimentação'},
      {nome:'Assinaturas'},
      {nome:'Casa'},
      {nome:'Compras'},
      {nome:'Cuidados pessoais'},
      {nome:'Empréstimo'},
      {nome:'Hobbies e lazer '},
      {nome:'Impostos'},
      {nome:'Investimento'},
      {nome:'Mercado'},
      {nome:'Outras despesas'},
      {nome:'Outras receitas'},
      {nome:'Salário'},
      {nome:'Saúde'},
      {nome:'Serviços'},
      {nome:'Taxas'},
      {nome:'Trabalho'},
      {nome:'Transporte'},
    ];
  }

  ngOnInit() {}
    confirmar(){
      this.navCtrl.navigateRoot('lancamentos');
      this.http.post<any[]>('http://localhost/cfp/addLancamento.php',
    {tipo: this.tipo, valor: this.valor,
      categoria: this.categoria, descricao: this.descricao,
      data: this.data
     })
    .subscribe(valor =>{});
    }

    inicio(){
      this.navCtrl.navigateRoot('inicio');
    }



}
