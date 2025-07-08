import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
activeTab = 'about';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  }