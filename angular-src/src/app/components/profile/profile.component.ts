import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ManageService } from 'src/app/services/manage.service';
import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-buttons-dt';
const lang = require('datatables.net/tr.json');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any;
  admin: any;
  orderList: any[] = [];
  orderStatus:any[] = [
    {
      val : 0,
      msg : "Sipariş alındı."
    },
    {
      val : 1,
      msg : "Sipariş hazırlanıyor."
    },
    {
      val : 2,
      msg : "Sipariş yola çıktı."
    },
    {
      val : 3,
      msg : "Sipariş teslim edildi."
    },
    {
      val : 4,
      msg : "Sipariş iptal edildi."
    }
    
    
  ];
  constructor(
    private authService: AuthService,
    private router : Router,
    private manageService: ManageService
  ){}

  ngOnInit(){
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.admin = this.user?.admin;
      this.manageService.getOrdersByUser().subscribe((res) =>{
        this.orderList = res.orders;
        this.orderList.forEach(k => {
          let con = this.manageService.getProduct(k.product).subscribe((res2)=>{
            k['productEdited'] = res2.products?.name
            con.unsubscribe();
          })
        })
        $(document).ready(function () {
          new DataTable('#tableOrder', {
            autoWidth: false,
            responsive: true,
            destroy: true,
            language: lang,
            columnDefs: [
              { orderable: true,  className: 'reorder', targets: 0,  searchable: true},
              { orderable: true,  className: 'reorder', targets: 1,  searchable: false,  type: 'date-eu' },
              { orderable: true,  className: 'reorder', targets: 2,  searchable: true},
              { orderable: false, searchable: false, targets: '_all' },
            ],
            dom: 'rtip',
          });
        });
      })
      
    }, err =>{
      console.log(err);
      return false;
    });

    
  }
}
