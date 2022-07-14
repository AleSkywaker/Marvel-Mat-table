import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/organisms/bar-chart/bar-chart.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/templates/table/table.component';
import { PieChartComponent } from './components/organisms/pie-chart/pie-chart.component';
import { ModalComponent } from './components/molecules/modal/modal.component';
import { CustomButtonComponent } from './components/atoms/custom-button/custom-button.component';
import { ModalFormComponent } from './components/molecules/modal-form/modal-form.component';
import { ToastrModule } from 'ngx-toastr';
import { PieChartGenderComponent } from './components/organisms/pie-chart-gender/pie-chart-gender.component';
import { BarChartMemberComponent } from './components/organisms/bar-chart-member/bar-chart-member.component';
import { BarChartNameComponent } from './components/organisms/bar-chart-name/bar-chart-name.component';
import { BarChartOccupationComponent } from './components/organisms/bar-chart-occupation/bar-chart-occupation.component';
import { BarChartSkillsComponent } from './components/organisms/bar-chart-skills/bar-chart-skills.component';
import { TransformDataPipe } from './pipes/transform-data.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    HomeComponent,
    PieChartComponent,
    TableComponent,
    ModalComponent,
    CustomButtonComponent,
    ModalFormComponent,
    PieChartGenderComponent,
    BarChartMemberComponent,
    BarChartNameComponent,
    BarChartOccupationComponent,
    BarChartSkillsComponent,
    TransformDataPipe,
  ],
  imports: [
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
