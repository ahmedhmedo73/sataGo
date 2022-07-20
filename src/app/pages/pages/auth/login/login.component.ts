import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { fadeInUp400ms } from "../../../../../@vex/animations/fade-in-up.animation";
import { ServiceService } from "src/app/service.service";
import { NavigationService } from "src/@vex/services/navigation.service";

@Component({
  selector: "vex-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;

  inputType = "password";
  visible = false;
  data: any;
  routes: any;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private _service: ServiceService,
    private _NavigationService: NavigationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  send() {
    const { ...obj } = this.form.value;
    this._service.login(obj).subscribe(
      async (res: any) => {
        if (res) {
          this.data = res;
          console.log(this.data, "data");
          console.log("group name : ", res.user.group.name);
          console.log("group id : ", res.user.group.id);
          localStorage.setItem("token", this.data.token);
          localStorage.setItem("user_id", this.data.user.id);
          localStorage.setItem("username", this.data.user.username);
          localStorage.setItem(
            "RestaurantId",
            this.data.user.restaurants != null
              ? this.data.user.restaurants.id
              : null
          );
          localStorage.setItem(
            "RestaurantName",
            this.data.user.restaurants != null
              ? this.data.user.restaurants.name
              : null
          );
          localStorage.setItem(
            "RestaurantLogo",
            this.data.user.restaurants != null
              ? this.data.user.restaurants.logo
              : null
          );
          localStorage.setItem(
            "BranchId",
            Boolean(this.data.user.branches) ? this.data.user.branches.id : null
          );
          localStorage.setItem(
            "department_positions",
            Boolean(this.data.user.department_positions)
              ? this.data.user.department_positions.role
              : null
          );
          localStorage.setItem(
            "department_id",
            Boolean(this.data.user.department)
              ? this.data.user.department.id
              : 0
          );
          localStorage.setItem("user_group_id", this.data.user.user_group_id);
          localStorage.setItem("user", JSON.stringify(this.data.user));

          // this.message.info("تمت عملية تسجيل الدخول بنجاح");

          this.routes = (await this._service.getNews()) as any;
          this.routes.forEach((v) => (v.extralink = false));
          localStorage.setItem("MenuData", JSON.stringify(this.routes));

          this.router.navigateByUrl("/welcome");

          localStorage.removeItem("returnUrl");
        } else {
          // this.message.error("اسم المستخدم او كلمة المرور خاطئة");
        }
      },
      (err) => {
        // this.message.error("اسم المستخدم او كلمة المرور خاطئة");
        // this.loader = false;
      }
    );
    // this.router.navigate(["/"]);
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = "password";
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = "text";
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
