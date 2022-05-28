import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { PaisesModel } from '../shared/model/Paises.model';
import { ScrollableModel } from '../shared/model/scrollable.model';
import { AppSettingsService } from '../shared/services/app-settings.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  title = 'Material Table Infinite Scroll';
  subtitle = 'Infinite Scroll automatically adds the next page, saving users from a full page load.';
  selectedRowIndex: number;

  displayedColumns: string[] = ['code', 'iso3', 'name', 'formalname'];
  dataSource$: PaisesModel[] = [];
  closeDataSource: Subscription;

  scrollable: ScrollableModel;

  constructor(private appSettingsService: AppSettingsService) {
    this.scrollable = new ScrollableModel(15, 0);
  }

  ngOnInit() {
    this.getTableData(this.scrollable);
  }

  ngOnDestroy(): void {
    if (this.closeDataSource) this.closeDataSource.unsubscribe();
  }

  onTableScroll(e: any) {
    if (this.scrollable.setScrollLimit(e.target, 20))
      this.getTableData(this.scrollable);
  }

  getTableData(scrollable: ScrollableModel) {
    this.closeDataSource = this.appSettingsService.getPaises()
      .subscribe((data: Array<PaisesModel>) => {
        if (data.length > 0) {
          this.dataSource$ = this.dataSource$.concat(
            data.filter((value, index) =>
              index >= scrollable.start && index < scrollable.end
            ));
          scrollable.updateIndex();
        }
      });
  }

  selectedRow(row: number) {
    console.log('selectedRow', row);
  }

}
