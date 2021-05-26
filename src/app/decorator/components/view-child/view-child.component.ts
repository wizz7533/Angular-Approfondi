import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListUserComponent } from '../list-user/list-user.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  @ViewChild(ListUserComponent, { static: false }) listUser?: ListUserComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.listUser?.users.push('Léa', 'Alex', 'Nico');
  }

  public refresh(): void {
    this.listUser?.refresh()
  }

}
