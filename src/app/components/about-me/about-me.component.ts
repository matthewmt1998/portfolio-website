import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "About me"
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar sapien in nisi lobortis, nec volutpat enim suscipit. Sed ac malesuada dolor. Duis iaculis leo elit, et egestas sem mollis nec. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut volutpat odio enim. Nam a sodales turpis."
}
