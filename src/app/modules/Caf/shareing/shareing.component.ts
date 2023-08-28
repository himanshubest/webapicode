import { Component } from '@angular/core';

@Component({
  selector: 'app-shareing',
  templateUrl: './shareing.component.html',
  styleUrls: ['./shareing.component.css']
})
export class ShareingComponent {


  ngOnInit(): void {
    const st1 = document.createElement('link')
    st1.href = "/assets/Content/assets/images/UC.png";
    st1.rel="shortcut icon"
    document.head.appendChild(st1)

    const st2 = document.createElement('link')
    st2.href = "/assets/Content/assets/css/bootstrap.min.css";
    st2.rel="stylesheet"
    document.head.appendChild(st2)

    const st3 = document.createElement('link')
    st3.href = "/assets/Content/assets/css/icons.min.css";
    st3.rel="stylesheet"
    document.head.appendChild(st3)

    const st4 = document.createElement('link')
    st4.href = "/assets/Content/assets/css/app.min.css?v1.1";
    st4.rel="stylesheet"
    document.head.appendChild(st4)

    const st5 = document.createElement('link')
    st5.href = "/assets/Content/assets/css/style.css";
    st5.rel="stylesheet"
    document.head.appendChild(st5)

    const st6 = document.createElement('link')
    st6.href = "/assets/Content/assets/css/icofont.css";
    st6.rel="stylesheet"
    document.head.appendChild(st6)

    


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
  
      
  }

}
