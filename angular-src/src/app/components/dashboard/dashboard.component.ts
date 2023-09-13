import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder-dt';

import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;
  admin: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (profile) => {
        this.user = profile.user;
      },
      (err) => {
        return false;
      }
    );

    /*
      DOM 

      l - length changing input control
      f - filtering input
      t - The table!
      i - Table information summary
      p - pagination control
      r - processing display element
    */

    $(document).ready(function () {
      new DataTable('#example', {
        dom: 'rtip',
        rowReorder: true,
        columnDefs: [
          { orderable: true, className: 'reorder', targets: 0 },
          { orderable: true, className: 'reorder', targets: 1 },

          { orderable: false, targets: '_all' },
        ],
      });
    });
  }
}
