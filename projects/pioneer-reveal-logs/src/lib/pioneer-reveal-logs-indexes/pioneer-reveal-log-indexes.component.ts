import { Component, OnInit } from '@angular/core';
import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { Index } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-logs-query-builder';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';

@Component({
  selector: 'pioneer-reveal-log-indexes',
  templateUrl: './pioneer-reveal-log-indexes.component.html',
  styleUrls: ['./pioneer-reveal-log-indexes.component.scss']
})
export class PioneerRevealLogIndexesComponent implements OnInit {
  form: FormGroup;
  indices = [] as Index[];

  constructor(
    private logService: PioneerRevealLogService,
    private pioneerRevealRepository: PioneerRevealRepository,
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      index: [{}]
    });

    this.pioneerRevealRepository.getIndices()
      .subscribe(indices => this.indices = indices.filter(x => x.index !== '.kibana_1'));

    this.form.valueChanges.subscribe(val => {
      this.queryBuilder.setIndex(val.index);
      this.logService.getLogs();
    });
  }

  onCheckboxChanged(val: Index): void {
    if (this.queryBuilder.isIndexSet(val.index)) {
      this.queryBuilder.removeIndex(val.index);
    } else {
      this.queryBuilder.setIndex(val.index);
    }
    this.logService.getLogs();
  }
}
