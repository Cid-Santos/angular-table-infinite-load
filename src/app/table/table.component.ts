import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { PaisesModel } from '../shared/model/Paises.model';
import { AppSettingsService } from '../shared/services/app-settings.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  title = 'Table';
  paises$: Observable<PaisesModel[]>;

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit() {
    this.paises$ = this.appSettingsService.getPaises();
  }

}
