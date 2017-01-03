import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { AddWorkoutPage } from '../add-workouts/add-workouts';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() {
    this.tab1Root = WorkoutsPage;
    this.tab2Root = AddWorkoutPage;
    this.tab3Root = AboutPage;
  }
}
