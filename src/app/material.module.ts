import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  imports: [MatFormFieldModule, MatTableModule, MatInputModule, MatSortModule, MatChipsModule, MatIconModule, MatDialogModule, MatButtonModule, MatRadioModule, ScrollingModule],
  exports: [MatFormFieldModule, MatTableModule, MatInputModule, MatSortModule, MatChipsModule, MatIconModule, MatDialogModule, MatButtonModule, MatRadioModule, ScrollingModule],
})
export class MaterialModule {}
