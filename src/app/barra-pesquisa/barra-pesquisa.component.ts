import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produtos } from '../proutos';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css']
})
export class BarraPesquisaComponent implements OnInit {
  descricao = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  pesquisar() {
    if (this.descricao) {
      this.router.navigate([produtos],{ queryParams: {descricao: this.descricao }});
      return;
    }

    this.router.navigate(["produtos"]);
  }
}