import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-responsive-dt';

import * as $ from 'jquery';
import { ManageService } from 'src/app/services/manage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;
  admin: boolean;
  constructor(private authService: AuthService, private router: Router, private manageService: ManageService) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      (profile) => {
        this.user = profile.user;
      },
      (err) => {
        return false;
      }
    );


    
    
    this.manageService.getAllProduct().subscribe(dataset => {
      $(document).ready(function () {
        for(let data of dataset.products){
          $('table tbody').append(`<tr>
          <td><img src="${data['image']}"></td>
          <td>${data['name']}</td>
          <td>${data['category']}</td>
          <td style="white-space: nowrap;">${data['description']}</td>
          <td>${data['price']}</td>
          <td>${new Date(data['joindate']).toLocaleString()}</td>
          <td>${data['addedby']}</td>
          <td>${data['time']}</td>
          <td style=" width:130px !important">
          <button type="button" class="btn btn-danger btn-action" value='delete_${data['_id']}'><i class="fa-solid fa-trash"></i></button><button type="button" class="btn btn-info btn-action" value='info_${data['_id']}'><i class="fa-solid fa-circle-info"></i></button><button type="button" class="btn btn-warning btn-action" value='edit_${data['_id']}'><i class="fa-solid fa-pen-to-square"></i></button>
          </td>
          </tr>`);
        }
        //${data['_id']}
        new DataTable('#example', {
          "autoWidth": false,
          responsive: true,
          columnDefs: [
            { orderable: true,  className: 'reorder', targets: 1 ,searchable:true, responsivePriority:7 },
            { orderable: true,  className: 'reorder', targets: 2 ,searchable:true, responsivePriority:6  },
            { orderable: true,  className: 'reorder', width:"400px",  targets: 3 ,searchable:true },
            { orderable: true,  className: 'reorder',  targets: 4 ,searchable:true, type:'num', responsivePriority:5 },
            { orderable: true,  className: 'reorder', targets: 5 ,searchable:true, type:'date-eu' },
            { orderable: true,  className: 'reorder', targets: 8 ,searchable:true, responsivePriority:8 },
            
            { orderable: false, searchable:false, targets: '_all' },
          ],
          dom: 'frtip',
        });
        
      }); 

    });

    /*
      DOM 

      l - length changing input control
      f - filtering input
      t - The table!
      i - Table information summary
      p - pagination control
      r - processing display element
    */

    
    
    

    
    


  }
}
