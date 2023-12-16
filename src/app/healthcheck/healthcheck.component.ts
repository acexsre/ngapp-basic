import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { HealthcheckService } from '../services/healthcheck.service';

@Component({
  selector: 'app-healthcheck',
  templateUrl: './healthcheck.component.html',
  styleUrl: './healthcheck.component.css'
})
export class HealthcheckComponent {
  data: any;
  constructor(private healthCheckService:HealthcheckService){}
  ngOnInit(){
    this.getData();
  }
  getData(){
    this.healthCheckService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data['data'])
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
