import { Component, OnInit } from '@angular/core';
import { MarvelDataService } from 'src/app/services/marvel-data.service';
import { NgForm } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { MatDialog } from '@angular/material/dialog';
import { Hero } from 'src/app/services/marvel-data.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  heroId!: number;

  constructor(
    private marvelDataService: MarvelDataService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.marvelDataService.getHeroes().subscribe((data: Hero[]) => {
      this.heroId = data.length;
    });
    // UUID.UUID()
    let hero = {
      id: this.heroId,
      ...form.value,
    };
    this.marvelDataService.createHero(hero).subscribe((response) => {
      this.toastr.success('hero added!');
    });
    form.reset();
    this.dialog.closeAll();
  }
}
