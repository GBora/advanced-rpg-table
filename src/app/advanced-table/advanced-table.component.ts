import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import IOption from '../interfaces/IOption';
import { initTable, getRandomSubject } from '../utils/utils';

@Component({
  selector: 'advanced-table',
  templateUrl: './advanced-table.component.html',
  styleUrls: ['./advanced-table.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AdvancedTableComponent implements OnInit {

  @Input() subject: string;
  @Input() source: string;

  showTable: boolean = false;
  tableData: any;
  headers: string[] = [];
  options: string[] = [];
  rows: any[] = [];
  generated: IOption[] = [];

  constructor() { }

  ngOnInit(): void {
    [this.tableData,
     this.headers,
     this.options,
     this.rows] = initTable(this.source, this.tableData, this.headers, this.options, this.rows);

     this.generated = getRandomSubject(this.options, this.headers);
  }

  generateNew() {
    this.generated = getRandomSubject(this.options, this.headers);
  }

  toggleTable() {
    this.showTable =  !this.showTable;
  }

}
