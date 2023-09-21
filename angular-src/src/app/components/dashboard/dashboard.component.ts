import {
  Component,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import DataTable from 'datatables.net-dt';
import 'datatables.net-rowreorder-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-buttons-dt';
const lang = require('datatables.net/tr.json');

import { ManageService } from 'src/app/services/manage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { FlashService } from 'simple-flash-message';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;
  admin: boolean;
  datasetProduct: any[] = [];
  datasetCategory: any[] = [];
  datasetOrder: any[] = [];
  datasetUser: any[] = [];
  id: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private manageService: ManageService,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private flashMessage: FlashService,
    private validateService: ValidateService
  ) {}
  onEditProductSubmit(id: any) {
    let name = $(`#editProductForm_${id}`)
      .find("[name='floatingInputProductName']")
      .val();
    let description = $(`#editProductForm_${id}`)
      .find("[name='floatingInputProductDescription']")
      .val();
    let price = $(`#editProductForm_${id}`)
      .find("[name='floatingInputProductPrice']")
      .val();
    let category = $(`#editProductForm_${id}`)
      .find("[name='floatingInputProductCategory']")
      .val();
    let time = $(`#editProductForm_${id}`)
      .find("[name='floatingInputProductTime']")
      .val();
    let image = $(`#editProductForm_${id}`)
      .find("[name='floatingInputProductImage']")
      .val();

    const data = {
      id          : id,
      name        : name,
      description : description,
      price       : price,
      category    : category,
      time        : time,
      image       : image,
    };
    console.log(data)
    this.manageService.editProduct(id, data).subscribe(
      (res) => {
        console.log(res);
        $(`#editProductModal_${id}`).modal('hide');
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onEditCategorySubmit(id: any) {
    let name = $(`#editCategoryForm_${id}`)
      .find("[name='floatingInputCategoryName']")
      .val();
    let valid = $(`#editCategoryForm_${id}`)
      .find("[name='floatingInputCategoryValid']")
      .val();

    const data = {
      id          : id,
      name        : name,
      valid       : valid
    };

    this.manageService.editCategory(id, data).subscribe(
      (res) => {
        console.log(res);
        $(`#editCategoryModal_${id}`).modal('hide');
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onEditOrderSubmit(id: any) {
    let status = $(`#editOrderForm_${id}`)
      .find("[name='floatingInputOrderStatus']")
      .val();

    const data = {
      id          : id,
      status      : status
    };

    this.manageService.editOrder(id, data).subscribe(
      (res) => {
        console.log(res);
        $(`#editOrderModal_${id}`).modal('hide');
      },
      (err) => {
        console.error(err);
      }
    );
  }
  loadDatasetProduct(){
    this.manageService.getAllProduct().subscribe(
      (data) => {
        this.datasetProduct = data.products;
      })
  }
  loadDatasetCategory(){
    this.manageService.getAllCategory().subscribe(
      (data) => {
        this.datasetCategory = data.categories;
      })
  }
  loadDatasetOrder(){
    this.manageService.getAllOrders().subscribe(
      (data) => {
        this.datasetOrder = data.orders;
      })
  }


  addProduct(){
      let name = $(`#addProductForm`)
        .find("[name='addProductName']")
        .val();
      let category = $(`#addProductForm`)
        .find("[name='addProductCategory']")
        .val();
      let description = $(`#addProductForm`)
        .find("[name='addProductDescription']")
        .val();
      let price = $(`#addProductForm`)
        .find("[name='addProductPrice']")
        .val();
      let time = $(`#addProductForm`)
        .find("[name='addProductTime']")
        .val();

      let data = {
        name: name,
        category: category,
        description: description,
        price: price,
        time: time
      }
      if(!this.validateService.validateProduct(data)){
        console.log(data)
        return this.flashMessage.showFlash("error", "Kontrol Hatası", "Tüm alanlar doldurulmalıdır.")
      }
      this.manageService.addProduct(data).subscribe((res) => {
        if(!res.success)
          return this.flashMessage.showFlash("error", "Kaydetme Hatası", "Tüm alanlar eksiksiz ve doğru bir şekilde doldurulmalıdır!")

        return this.flashMessage.showFlash("success", "Başarılı", "Ürün başarıyla kaydedildi.")
      },
      (err) =>{
        console.error(err)
        return this.flashMessage.showFlash("error", "Kaydetme Hatası", "Bir hata meydana geldi!")

      })
  }


  addCategory(){
    let name = $(`#addCategoryForm`)
      .find("[name='addCategoryName']")
      .val();
    let data = {
      name: name
    }
    if(!this.validateService.validateCategory(data)){
      console.error(data)
      return this.flashMessage.showFlash("error", "Kontrol Hatası", "Tüm alanlar doldurulmalıdır.")
    }
    this.manageService.addCategory(data).subscribe((res) => {
      if(!res.success)
        return this.flashMessage.showFlash("error", "Kaydetme Hatası", "üm alanlar eksiksiz ve doğru bir şekilde doldurulmalıdır!")

      return this.flashMessage.showFlash("success", "Başarılı", "Kategori başarıyla kaydedildi.")
    },
    (err) =>{
      console.error(err)
      return this.flashMessage.showFlash("error", "Kaydetme Hatası", "Bir hata meydana geldi!")

    })
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

    await this.manageService.getAllProduct().subscribe(
      (data) => {
        this.datasetProduct = data.products;
        this.datasetProduct.forEach(k => {
          let con = this.manageService.getCategory(k['category']).subscribe((res) =>{
            if(res.success && res.categories != null){
              console.log(k['name'],res)
              k['categoryEdited'] = `${res.categories.name}`;
            }
            con.unsubscribe();
          })
        })
        $(document).ready(function () {
          new DataTable('#tableProduct', {
            autoWidth: false,
            responsive: true,
            destroy: true,
            buttons: [
                {
                  text: 'Yeni Ürün',
                  className: 'btn btn-success',
                  attr:{'data-bs-toggle': 'modal',
                  'data-bs-target': '#addProductModal'}
              }
            ],
            language: lang,
            columnDefs: [
              { orderable: false, targets: 0 },
              { orderable: true,  className: 'reorder', targets: 1,  searchable: true,  responsivePriority: 7 },
              { orderable: true,  className: 'reorder', targets: 2,  searchable: true,  responsivePriority: 6 },
              { orderable: true,  className: 'reorder', targets: 3,  searchable: true },
              { orderable: true,  className: 'reorder', targets: 4,  searchable: true,  type: 'num',  responsivePriority: 5 },
              { orderable: true,  className: 'reorder', targets: 5,  searchable: true,  type: 'date-eu' },
              { orderable: true,  className: 'reorder', targets: 8,  searchable: true,  responsivePriority: 8 },
              { orderable: false, searchable: false,    targets: '_all' },
            ],
            dom: 'Bfrtip',
          });
        });
      },
      (error) => {  console.error(error);  }
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
      }
    });
    await this.manageService.getAllUsers().subscribe((data) =>{
      this.datasetUser = data.users;
    })
    
    await this.manageService.getAllCategory().subscribe(
      (data) => {
        this.datasetCategory = data.categories;
        this.datasetCategory.forEach(k => {
          let con = this.manageService.getUser(k['addedby']).subscribe((res) => {
            k['addedbyEdited'] = `${res.users.email} (${res.users._id})`;
            con.unsubscribe();
          })
        })
        $(document).ready(function () {
          new DataTable('#tableCategory', {
            autoWidth: false,
            responsive: true,
            destroy: true,
            buttons: [
              {
                text: 'Yeni Kategori',
                className: 'btn btn-success',
                attr:{'data-bs-toggle': 'modal',
                'data-bs-target': '#addCategoryModal'}
            }
          ],
            language: lang,
            columnDefs: [
              { orderable: true,  className: 'reorder', targets: 0,  searchable: true},
              { orderable: true,  className: 'reorder', targets: 1,  searchable: true},
              { orderable: true,  className: 'reorder', targets: 2,  searchable: true,  type: 'date-eu' },
              { orderable: false, searchable: false, targets: '_all' },
            ],
            dom: 'Bfrtip',
          });
        });
      },
      (error) => {  console.error(error);  }
    );
    
    await this.manageService.getAllOrders().subscribe(
      (orders) => {
        console.log(orders)
        this.datasetOrder = orders.orders;
        $(document).ready(function () {
          new DataTable('#tableOrder', {
            autoWidth: false,
            responsive: true,
            destroy: true,
            language: lang,
            columnDefs: [
              { orderable: true,  className: 'reorder', targets: 0,  searchable: true},
              { orderable: true,  className: 'reorder', targets: 1,  searchable: true},
              { orderable: true,  className: 'reorder', targets: 3,  searchable: true,  type: 'date-eu' },
              { orderable: false, searchable: false, targets: '_all' },
            ],
            dom: 'frtip',
          });
        });
      },
      (error) => {  console.error(error);  }
    );
  }
}
