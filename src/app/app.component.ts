import { CertificadoService } from './_services/certificado.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CommonModule,
    BaseUiComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService){}


  ngOnInit(): void {
      const certificados = localStorage.getItem('certificados')
      this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
  }
}
