import { Component, OnInit } from '@angular/core';
import { JSONplaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  data: Array<any>;

  constructor(private JSONplaceholder: JSONplaceholderService) {
    this.data = new Array<any>();
  }

  getDataFromAPI() {
    this.JSONplaceholder.getData().subscribe((data) => {
      // console.log(data);
      this.data = data
    });
  }
  ngOnInit(): void {}
}
