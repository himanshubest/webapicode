import { Component } from '@angular/core';

import { FormGroup, FormBuilder, Validators,FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AUTH_ID } from 'src/app/app.constants';
import { UserDto } from 'src/app/models/UserDto';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
 
]
})
export class LoginComponent {
  userForm: FormGroup;
  returnUrl: string | undefined;
  error: string | undefined;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth : AuthServiceService) {
   localStorage.removeItem(AUTH_ID);
    this.userForm = fb.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }
  LoginUser() {
    if (this.userForm.valid) {
      this.auth.LoginUser(this.userForm.value).subscribe(res => {
         
        if (res.body != null) {
          const user: UserDto = res.body;
          this.auth.SetAuthUser(user);
          
            this.router.navigate(['/CreateCaf']);
         
        }
        else {
          this.error = 'Username or Password is Invalid!';
        }

      })
    }
    
  }

  ngOnInit(): void {
    const st1 = document.createElement('link')
    st1.href = "/assets/Content/assets/owl/owl.carousel.css";
    st1.rel="stylesheet"
    document.head.appendChild(st1)

    const st2 = document.createElement('link')
    st2.href = "/assets/Content/assets/owl/owl.theme.default.css";
    st2.rel="stylesheet"
    document.head.appendChild(st2)

    const st3 = document.createElement('link')
    st3.href = "/assets/Content/assets/css/preloader.min.css";
    st3.rel="stylesheet"
    document.head.appendChild(st3)

    const st4 = document.createElement('link')
    st4.href = "/assets/Content/assets/css/bootstrap.min.css";
    st4.rel="stylesheet"
    document.head.appendChild(st4)

    const st5 = document.createElement('link')
    st5.href = "/assets/Content/assets/css/icons.min.css";
    st5.rel="stylesheet"
    document.head.appendChild(st5)

    const st6 = document.createElement('link')
    st6.href = "/assets/Content/assets/css/app.min.css";
    st6.rel="stylesheet"
    document.head.appendChild(st6)

    const st7 = document.createElement('link')
    st7.href = "/assets/Content/assets/css/login.css";
    st7.rel="stylesheet"
    document.head.appendChild(st7)


  const script = document.createElement('script')
  script.src = "/assets/Content/assets/libs/jquery/jquery.min.js";
  script.async = true
  document.body.appendChild(script)
  const script1 = document.createElement('script')
  script1.src = "/assets/Content/assets/libs/bootstrap/js/bootstrap.bundle.min.js";
  script1.async = true
  document.body.appendChild(script1)
  const script2 = document.createElement('script')
  script2.src = "/assets/Content/assets/libs/metismenu/metisMenu.min.js";
  script2.async = true
  document.body.appendChild(script2)
  const script3 = document.createElement('script')
  script3.src = "/assets/Content/assets/libs/simplebar/simplebar.min.js";
  script3.async = true
  document.body.appendChild(script3)
  const script4 = document.createElement('script')
  script4.src = "/assets/Content/assets/libs/node-waves/waves.min.js";
  script4.async = true
  document.body.appendChild(script4)
  const script5 = document.createElement('script')
  script5.src = "/assets/Content/assets/libs/feather-icons/feather.min.js";
  script5.async = true
  document.body.appendChild(script5)
  const script6 = document.createElement('script')
  script6.src = "/assets/Content/assets/libs/pace-js/pace.min.js";
  script6.async = true
  document.body.appendChild(script6)
  const script7 = document.createElement('script')
  script7.src = "/assets/Content/assets/js/app1.js";
  script7.async = true
  document.body.appendChild(script7)
  const script8 = document.createElement('script')
  script8.src = "/assets/Content/assets/owl/owl.carousel.js";
  script8.async = true
  document.body.appendChild(script8)
      
  }
  

}
