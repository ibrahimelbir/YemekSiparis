
import { Component,AfterViewInit,Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as bootstrap from "bootstrap";
import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-buttons-dt';
const lang = require('datatables.net/tr.json');


import { ManageService } from 'src/app/services/manage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  itemForms: { [key: string]: FormGroup } = {};
  user: any;
  admin: boolean;
  dataset: any[] = [];
  id: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private manageService: ManageService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
  ) {
  }
  onEditSubmit(id: any) {
    
    let name = $(`#editForm_${id}`).find("[name='floatingInputName']").val();
    let description = $(`#editForm_${id}`).find("[name='floatingInputDescription']").val();
    let price = $(`#editForm_${id}`).find("[name='floatingInputPrice']").val();
    let category = $(`#editForm_${id}`).find("[name='floatingInputCategory']").val();
    let time = $(`#editForm_${id}`).find("[name='floatingInputTime']").val();
    let image = $(`#editForm_${id}`).find("[name='floatingInputImage']").val();
    
    const data = {
      id: id,
      name: name,
      description: description,
      price: price,
      category: category,
      time: time,
      image: image,
    };
    console.log(data);

    this.manageService.editProduct(id, data).subscribe(
      (res) => {
        console.log(res);
        $(`#editModal_${id}`).modal("hide");
      },
      (err) => {
        console.error(err);
      }
    )
  }

  async ngOnInit() {
    var self = this;
    this.authService.getProfile().subscribe(
      (profile) => {
        this.user = profile.user;
      },
      (err) => {
        return false;
      }
    );
    let table: any;
    //<img src="${data['image']}">
    let x = await this.manageService.getAllProduct().subscribe(
      (data) => {
        this.dataset = data.products;
        $(document).ready(function () {
          new DataTable('#example',{
             autoWidth: false,
             responsive: true,
             destroy: true,
             language: lang,
            //  columns: [
            //    { data: 'image' },
            //    { data: 'name' },
            //    { data: 'category' },
            //    { data: 'description' },
            //    { data: 'price' },
            //    { data: 'joindate' },
            //    { data: 'addedby' },
            //    { data: 'time' },
            //  ],
             columnDefs: [
              {
                orderable: false,
                target: 0
              },
              {
                 orderable: true,
                 className: 'reorder',
                 targets: 1,
                 searchable: true,
                 responsivePriority: 7,
               },
               {
                 orderable: true,
                 className: 'reorder',
                 targets: 2,
                 searchable: true,
                 responsivePriority: 6,
               },
               {
                 orderable: true,
                 className: 'reorder',
                 targets: 3,
                 searchable: true,
               },
               {
                 orderable: true,
                 className: 'reorder',
                 targets: 4,
                 searchable: true,
                 type: 'num',
                 responsivePriority: 5,
               },
               {
                 orderable: true,
                 className: 'reorder',
                 targets: 5,
                 searchable: true,
                 type: 'date-eu',
               },
               {
                 orderable: true,
                 className: 'reorder',
                 targets: 8,
                 searchable: true,
                 responsivePriority: 8,
               },
     
               { orderable: false, searchable: false, targets: '_all' },
             ],
             dom: 'frtip',
           });
         });
      },
      (error) => {
        console.error(error);
      }
    );
    
    /*
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
                <form [formGroup]="myForm" id="editForm_${data['_id']}">
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
      $(`#editForm_${data['_id']}`)
      .attr('formGroup', 'myForm') // Set the formGroup attribute
        .on('submit', (event) => {
        event.preventDefault();
        self.onEditSubmit(data['_id']);
      });

        }
        
        //${data['_id']}
        
      }); 
      
    });
    */
    
    /*
    DOM 
    
      l - length changing input control
      f - filtering input
      t - The table!
      i - Table information summary
      p - pagination control
      r - processing display element
    */
    $(document).on('click', '.btn-action', function (btn) {
      let datas: any = $(this).attr('value')?.split('_');

      console.log(btn);

      if (datas[0] == 'delete') {
        self.manageService.deleteProduct(datas[1]).subscribe(
          (res) => {
            console.log(res);
            table.row($(this).parents('tr')).remove().draw();
          },
          (err) => {
            console.log(err);
          }
        );
      } else if (datas[0] == 'info') {
        console.log('info ' + datas[1]);
      } else if (datas[0] == 'edit') {
        console.log('edit ' + datas[1]);
      }
    });
  }
  ngAfterViewInit() {
     
  }
}
