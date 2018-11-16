import { Component, OnInit } from '@angular/core';
import { PioneerRevealRepository } from '../repository/pioneer-reveal.repository';

@Component({
  selector: 'pioneer-reveal-log-table',
  templateUrl: './pioneer-reveal-log-table.component.html',
  styleUrls: ['./pioneer-reveal-log-table.component.scss']
})
export class PioneerRevealLogTableComponent implements OnInit {
  logs: any;

  constructor(private pioneerRevealRepository: PioneerRevealRepository) { }

  ngOnInit() {
  }

  getLogs(indexName: string) {
    return this.pioneerRevealRepository.getLogs(indexName)
      .subscribe((logs) => {
        this.logs = logs.hits.hits;
        console.log(logs.hits.hits);
      });
  }
}
