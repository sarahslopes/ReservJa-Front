import { ApartamentService } from './../services/apartament.service';
import { ApartamentInterface } from './../model/apartament-interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apartaments',
  templateUrl: './apartaments.component.html',
  styleUrls: ['./apartaments.component.scss']
})
export class ApartamentsComponent implements OnInit {

  apartaments : Observable<ApartamentInterface>[] = [];
  displayedColumns = ['id', 'name', 'customers', 'status'];
  apartamentService: any;


  constructor(private service: ApartamentService) {
    this.apartaments = this.apartamentService.list();
  }

  ngOnInit(): void {
  }

}
