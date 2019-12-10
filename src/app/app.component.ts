import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  cars:any[] = [];
  date1:Date = new Date();
  text: string;
  selectedCities: string[] = [];
  val: number = 2;
  temperatura: number = 10;
  selected: string = "";
  
  ngOnInit(): void {
    this.cars.push({codigo: "45344", empresa: "ADEPSA", codigoPostal: "08020", email: "info@adepsa.com"});
    this.cars.push({codigo: "98245", empresa: "CIRCOSA", codigoPostal: "08445", email: "admin@circosa.es"});
    this.cars.push({codigo: "23439", empresa: "Comercial Millo, S.L.", codigoPostal: "68022", email: "p.damaso@millo.com"});
    this.cars.push({codigo: "10933", empresa: "Ferretería Hermanos Matanzas", codigoPostal: "08012", email: "info@technomat.com"});
    this.cars.push({codigo: "10552", empresa: "Central de la Gafa Distribución S.A.", codigoPostal: "08044", email: "admin@cgd.com" });
    this.cars.push({codigo: "48924", empresa: "DIBUG S.A.", codigoPostal: "25912", email: "dibug@dibug.net"});
    this.cars.push({codigo: "29233", empresa: "Aceral S.L.", codigoPostal: "08072", email: "carlos.moreno544@gmail.com"});
    this.cars.push({codigo: "31562", empresa: "CIM S.A.", codigoPostal: "08020", email: "info@cim.com"});
    this.cars.push({codigo: "48992", empresa: "Ramón Batlle", codigoPostal: "08013", email: "r.batlle@gmail.com"});
    this.cars.push({codigo: "10935", empresa: "SOFyGEST, S.L.", codigoPostal: "08003", email: "c.vilagut@sofygest.com"});

  }
  
}
