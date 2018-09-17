import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isAdmin: Observable<boolean>;
  isSpecialist: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isSpecialist = this.authService.isSpecialist();
  }

}
