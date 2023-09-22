import { Component } from '@angular/core';
import { faCaretDown, faCoins, faStarOfLife, faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import { ManageService } from 'src/app/services/manage.service';
import { ObjectToArrayPipe } from 'src/app/pipes/objectToArray';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  user : any;
  logged:any;
  datasetCategory: any[] = [];
  dataset =new Object();
  faStarOfLife = faStarOfLife;
  faCaretDown = faCaretDown;
  faTurkishLiraSign = faTurkishLiraSign;
  constructor(
    private manageService:ManageService,
    private obj:ObjectToArrayPipe,
    private authService:AuthService
  ){}
  order(id:any){
    let sendata = {
      product: id
    };
    this.manageService.addOrder(id, sendata).subscribe((res) => {
      console.log(res)
    })
  }
  
  ngOnInit(){
    this.logged = this.authService.loggedIn();
    if(this.logged){
      let pro = this.authService.getProfile().subscribe(profile => {
        this.user = profile.user;
        pro.unsubscribe();
      }, err =>{
        console.log(err);
        return false;
      });
    }

    let cato = this.manageService.getAllCategory().subscribe((data)=>{
      this.datasetCategory = data.categories;
      for(let catrow of data.categories){
        this.manageService.getProductsByCategory({category : catrow._id}).subscribe((data2)=>{
          if(data2.products.length == 0){
            this.datasetCategory = this.datasetCategory.filter(category => category._id !== catrow._id);
          }else{
            this.datasetCategory.find(k => k._id == catrow._id)['products'] = data2.products;
          }
          
          cato.unsubscribe();
        })
      }
      console.log(this.datasetCategory);
    })

    setTimeout(() => {
      
    $('ul#pills-tab li:first').children().first().addClass('active')
    $('#pills-tabContent').children().first().addClass('show active')
    }, 1000);    
      
      
  }
}
