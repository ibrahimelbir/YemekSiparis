import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-buttons-dt';

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
  
  id : any;
  name: any;
  description : any;
  price       : any;
  category    : any;
  time        : any;
  image       : any;
  
  constructor(private authService: AuthService, private router: Router, private manageService: ManageService) {}
  onEditSubmit(id:any){
    const data= {
        id  : this.id,
        name          : this.name,
        description : this.description,
        price       : this.price,
        category    : this.category,
        time        : this.time,
        image       : this.image
    };
    console.log(data)
      this.manageService.editProduct(this.id, data).subscribe(res => {
        console.log(res)
      }, err =>{
        console.error(err)
      })
  }
  ngOnInit() {
    var self = this;
    this.authService.getProfile().subscribe(
      (profile) => {
        this.user = profile.user;
      },
      (err) => {
        return false;
      }
      
    );
    
    let table:any;
    //<img src="${data['image']}">
    this.manageService.getAllProduct().subscribe(dataset => {
      $(document).ready(function () {
        for(let data of dataset.products){
          $('table tbody').append(`<tr>
          <td>${data['image']}</td>
          <td>${data['name']}</td>
          <td>${data['category']}</td>
          <td style="white-space: break-spaces;">${data['description']}</td>
          <td>${data['price']}</td>
          <td>${new Date(data['joindate']).toLocaleString()}</td>
          <td>${data['addedby']}</td>
          <td>${data['time']}</td>
          <td style=" width:100px !important">
          <button type="button" class="btn btn-danger btn-action" value='delete_${data['_id']}'><i class="fa-solid fa-trash"></i></button><button type="button" class="btn btn-warning btn-action ms-1" value='edit_${data['_id']}'  data-bs-toggle="modal" data-bs-target="#editModal_${data['_id']}"><i class="fa-solid fa-pen-to-square"></i></button>
          </td>
          </tr>`);
        
          $('body').append(`
            <div class="modal fade" id="editModal_${data['_id']}" tabindex="-1" aria-labelledby="editModalLabel_${data['_id']}" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                <form [formGroup]="myForm" id="editForm_${data['_id']}" (ngSubmit)='onEditSubmit()'>
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editModalLabel_${data['_id']}">Düzenle : ${data['name']} (${data['_id']}) </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  
                    <div class="modal-body">
                      <div class="form-floating mt-2 mb-2">
                        <input type="text" class="form-control" [(ngModel)] ="floatingInputName" name="floatingInputName" value="${data['name']}">
                        <label class="fw-bold" for="floatingInputName">Yemek Adı</label>
                      </div>
                      <div class="form-floating mt-2 mb-2">
                        <input type="text" class="form-control" [(ngModel)] ="floatingInputCategory" name="floatingInputCategory" value="${data['category']}">
                        <label class="fw-bold" for="floatingInputCategory">Kategori</label>
                      </div>
                      <div class="form-floating mt-2 mb-2">
                        <input type="text" class="form-control" [(ngModel)] ="floatingInputDescription" name="floatingInputDescription" value="${data['description']}">
                        <label class="fw-bold" for="floatingInputDescription">Açıklama</label>
                      </div>
                      <div class="form-floating mt-2 mb-2">
                        <input type="text" class="form-control" [(ngModel)] ="floatingInputPrice" name="floatingInputPrice" value="${data['price']}">
                        <label class="fw-bold" for="floatingInputPrice">Fiyat</label>
                      </div>
                      <div class="form-floating mt-2 mb-2">
                        <input type="text" class="form-control" [(ngModel)] ="floatingInputTime" name="floatingInputTime" value="${data['time']}">
                        <label class="fw-bold" for="floatingInputTime">Süre</label>
                      </div>
                      <div class="form-floating mt-2 mb-2">
                        <input type="text" class="form-control" [(ngModel)] ="floatingInputImage" name="floatingInputImage" value="${data['image']}">
                        <label class="fw-bold" for="floatingInputImage">Resim</label>
                      </div>
                    
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                      <button type="submit" class="btn btn-success">Kaydet</button>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          `);
        }
        
        //${data['_id']}
        table = new DataTable('#example', {
          "autoWidth": false,
          responsive: true,
          columnDefs: [
            { orderable: true,  className: 'reorder', targets: 1 ,searchable:true, responsivePriority:7 },
            { orderable: true,  className: 'reorder', targets: 2 ,searchable:true, responsivePriority:6  },
            { orderable: true,  className: 'reorder', targets: 3 ,searchable:true },
            { orderable: true,  className: 'reorder', targets: 4 ,searchable:true, type:'num', responsivePriority:5 },
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
      $(document).on('click', '.btn-action', function(btn) {

        let datas:any = $(this).attr('value')?.split('_');
  
        console.log(btn)
  
        if(datas[0] == "delete"){
  
          self.manageService.deleteProduct(datas[1]).subscribe(res => {
            console.log(res)
            table.
            row( $(this).parents('tr') )
            .remove()
            .draw();
            
  
          },err => {console.log(err)})
  
        }else if(datas[0] == "info"){
  
          console.log("info " + datas[1])
  
        }else if(datas[0] == "edit"){
  
          console.log("edit " + datas[1])
  
        }
  
      })
    
    
    

    
    


  }
  
}
