import {
  Component,
  ViewEncapsulation,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import IOption from '../interfaces/IOption';
import { initTable, getRandomSubject } from '../utils/utils';

@Component({
  selector: 'advanced-table',
  templateUrl: './advanced-table.component.html',
  styleUrls: ['./advanced-table.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AdvancedTableComponent implements AfterViewInit {

  @Input() subject: string;

  showTable: boolean = false;
  tableData: any;
  headers: string[] = [];
  options: string[] = [];
  rows: any[] = [];
  generated: IOption[] = [];

  @ViewChild('contentWrapper') content: ElementRef;

  constructor() { }

  generateNew() {
    this.generated = getRandomSubject(this.options, this.headers);
  }

  toggleTable() {
    this.showTable =  !this.showTable;
  }

  ngAfterViewInit(): void {
    let text = this.content.nativeElement.firstChild.textContent;
    let parsed = JSON.parse(text);

    [this.tableData,
     this.headers,
     this.options,
     this.rows] = initTable(parsed, this.tableData, this.headers, this.options, this.rows);

     this.generated = getRandomSubject(this.options, this.headers);
  }

}
