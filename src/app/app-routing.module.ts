import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AllUsersComponent } from './components/admin/all-users/all-users.component';
import { EditUsersComponent } from './components/admin/edit-users/edit-users.component';
import { AddSubjectComponent } from './components/admin/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/common/all-subject/all-subject.component';
import { EditSubjectComponent } from './components/admin/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './components/admin/view-all-attendance/view-all-attendance.component';
import { AddStudentComponent } from './components/faculty/add-student/add-student.component';
import { AllStudentComponent } from './components/faculty/all-student/all-student.component';
import { TakeAttendanceComponent } from './components/faculty/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './components/faculty/view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'faculty-dashboard',
    component:FacultyDashboardComponent
  }
  ,
  {
    path:'add-user',
    component:AddUserComponent
  },
  {
    path:'all-users',
    component:AllUsersComponent
  },
  {
    path:'edit-user',
    component:EditUsersComponent
  }
  ,
  {
    path:'add-subject',
    component:AddSubjectComponent
  },
  {
    path:'all-subject',
    component:AllSubjectComponent
  },
  {
    path:'edit-subject/:subjectid',
    component:EditSubjectComponent
  },
  {
    path:'view-all-attendance',
    component:ViewAllAttendanceComponent
  },
  {
    path:'add-student',
    component:AddStudentComponent
  },
  {
    path:'all-student',
    component:AllStudentComponent
  },
  {
    path:'take-attendance',
    component:TakeAttendanceComponent
  }
  ,
  {
    path:'view-attendance',
    component:ViewAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
