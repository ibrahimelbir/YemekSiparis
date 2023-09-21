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
    let userData = this.authService.getUserData();
    let sendata = {
      product: id,
      customer: userData.id
    };
    console.log(sendata)
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
        for(let catrow of this.datasetCategory){
          this.manageService.getProductsByCategory({category : catrow.name}).subscribe((data2)=>{
            this.datasetCategory.find(k => k.name == catrow.name)['products'] = data2.products;
            $('ul#pills-tab li:first').children().first().addClass('active')
            cato.unsubscribe();
          })
        }
        console.log(this.datasetCategory);
      })
      
  }
}
