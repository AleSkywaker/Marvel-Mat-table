import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MarvelDataService } from 'src/app/services/marvel-data.service';
import { Hero } from '../../../services/marvel-data.interface';

export interface DialogData {
  hero: Hero;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  hero: Hero;
  isEditing: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialog: MatDialog,
    private marvelDataService: MarvelDataService,
    private toastr: ToastrService
  ) {
    this.hero = data.hero;
  }

  ngOnInit(): void {}

  deleteHero() {
    this.marvelDataService.deleteHero(this.hero).subscribe(() => {
      this.marvelDataService.getHeroes();
      this.dialog.closeAll();
      this.toastr.warning('hero deleted!');
    });
  }
  updateHero(hero: Hero) {
    this.hero = hero;
    this.isEditing = true;
  }
  cancelUpdateHero() {
    this.isEditing = false;
    this.dialog.closeAll();
  }

  onSubmit() {
    this.marvelDataService.updateHero(this.hero).subscribe(() => {
      this.toastr.info('hero updated!');
      this.dialog.closeAll();
    });
  }
}
