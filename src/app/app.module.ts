import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AddUsersComponent } from './components/admin/add-users/add-users.component';
import { EditUsersComponent } from './components/admin/edit-users/edit-users.component';
import { AddSubjectComponent } from './components/admin/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/common/all-subject/all-subject.component';
import { EditSubjectComponent } from './components/admin/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './components/admin/view-all-attendance/view-all-attendance.component';
import { FacultyDashboardComponent } from './components/faculty/faculty-dashboard/faculty-dashboard.component';
import { FacultyMenuComponent } from './components/faculty/faculty-menu/faculty-menu.component';
import { AddStudentComponent } from './components/faculty/add-student/add-student.component';
import { AllStudentComponent } from './components/faculty/all-student/all-student.component';
import { EditStudentComponent } from './components/faculty/edit-student/edit-student.component';
import { TakeAttendanceComponent } from './components/faculty/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './components/faculty/view-attendance/view-attendance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './components/admin/all-users/all-users.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    AddUserComponent,
    AddUsersComponent,
    EditUsersComponent,
    AddSubjectComponent,
    AllSubjectComponent,
    EditSubjectComponent,
    ViewAllAttendanceComponent,
    FacultyDashboardComponent,
    FacultyMenuComponent,
    AddStudentComponent,
    AllStudentComponent,
    EditStudentComponent,
    TakeAttendanceComponent,
    ViewAttendanceComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
