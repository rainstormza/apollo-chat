import { Component } from '@angular/core';

import { ModelService } from '../shared/models/model.service';

@Component({
  selector: 'ac-home',
  styles: [`
    blockquote {
      border-left:5px #158126 solid;
      background:#fff;
      padding:20px 20px 20px 40px;
    }
    blockquote::before {
      left: 1em;
    }
  `],
  template: `
    <div class="home">
      Home component
      <strong>Async data call return value:</strong>
      <pre>{{ data | json }}</pre>
      <blockquote>{{ data.data }}</blockquote>
    </div>
  `
})
export class HomeComponent {
  data: any = {};
  constructor(public model: ModelService) {

    // we need the data synchronously for the client to set the server response
    // we create another method so we have more control for testing
    this.universalInit();
  }

  universalInit() {
    this.model.get('/data.json').subscribe(data => {
      this.data = data;
    });
  }
}
