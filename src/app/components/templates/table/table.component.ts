import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BarChartData, Hero } from 'src/app/services/marvel-data.interface';
import { MarvelDataService } from 'src/app/services/marvel-data.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../molecules/modal/modal.component';
import { Subscription } from 'rxjs';

export interface Heroe {
  name: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'creatorLabel',
    'genderLabel',
    'memberOfLabel',
    'nameLabel',
    'occupationLabel',
    'skillsLabel',
    'citizenshipLabel',
  ];
  heroes: Heroe[] = [];
  dataHeroes: Hero[] = [];
  dataSource!: MatTableDataSource<Hero>;
  @ViewChild(MatSort) sort!: MatSort;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  nationalitiesData: BarChartData[] = [];
  suscription!: Subscription;

  constructor(
    private marvelDataService: MarvelDataService,
    public dialog: MatDialog
  ) {
    this.marvelDataService.getHeroes().subscribe((data: Hero[]) => {
      this.dataHeroes = data;
      this.dataSource = new MatTableDataSource<Hero>(data);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.suscription = this.marvelDataService.__refreshData$.subscribe(() => {
      this.marvelDataService.getHeroes().subscribe((data: Hero[]) => {
        this.dataSource = new MatTableDataSource<Hero>(data);
        this.sort.sort({ id: 'id', start: 'desc' } as MatSortable);
        this.dataSource.sort = this.sort;
      });
    });
  }

  openDialog(hero: Hero) {
    this.dialog.open(ModalComponent, {
      data: {
        hero,
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.heroes.push({ name: value });
      const filterValue = event.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(hero: Heroe): void {
    const index = this.heroes.indexOf(hero);
    if (index >= 0) {
      this.heroes.splice(index, 1);
    }
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }
}



