import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_ID } from 'src/app/app.constants';
import { TopicMasterList } from 'src/app/models/TopicMasterList';
import { UserDto } from 'src/app/models/UserDto';
import { topic } from 'src/app/models/topic';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CafService } from 'src/app/services/caf.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-caf',
  templateUrl: './create-caf.component.html',
  styleUrls: ['./create-caf.component.css']
})
export class CreateCafComponent {
  login:string|undefined
  au:UserDto|undefined
  TopicMaster:topic[]|undefined

  constructor(private rout:Router,private caf:CafService,private auth:AuthServiceService)
  {  
       this.au = auth.user;
       if(this.au!=undefined)
       {
           this.caf.GetTopics(162,this.au.EmailAddress).subscribe(res=>{
            if (res.body != undefined)
            {
              
                this.TopicMaster =  res.body as topic[] 
                
            }
          })
       }
       else
       {
         this.rout.navigate(['/login']);
       }
      
  }
   datasubmit(CafName:any ) : void {

    if (CafName != "null" && CafName != null && CafName != "") {

       alert(CafName);
    }
   else{
      
        Swal.fire({
            title: 'Please Enter CAF Name',
            html: `<input type="text" id="Caf_Name" class="swal2-input" placeholder="CAF NAME">`,
            confirmButtonText: 'Create',

            showDenyButton: true,
            denyButtonText: `Cancel`,
            focusConfirm: false,
            preConfirm: () => {
               this.login =  ($("#Caf_Name").val())?.toString();
                //const password = Swal.getPopup().querySelector('#password').value
                if (!this.login) {
                    Swal.showValidationMessage(`Please Enter CAF Name`)
                }
                else {
                    this.datasubmit(this.login);
                }
                //return { login: login, password: password }
            }
        }).then((result) => {

            if (result.isDenied) {
                window.location.href = '@Url.Action("Index","Home")';
            } else if ( $("#Caf_Name").val() == "") {
              //  alert();
                this.datasubmit($("#Caf_Name").val());

            }
        })
   }
  

}



}
