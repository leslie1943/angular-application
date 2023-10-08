import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routes-demo',
  templateUrl: './routes-demo.component.html',
  styleUrls: ['./routes-demo.component.scss'],
})
export class RoutesDemoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query) => {
      console.info('queryParamMap test:', query.get('test'));
    });
    this.route.paramMap.subscribe((param) => {
      console.info('paramMap:', param.get('name'));
    });
  }
}
