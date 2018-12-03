import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-logs-query-builder';
import { PioneerRevealLogService } from '../pioneer-reveal-logs.service';
import { StateService } from '../state.service';
import { IndexTypeEnum } from '../models/response/hits';

@Component({
  selector: 'pioneer-reveal-log-indexes',
  templateUrl: './pioneer-reveal-log-indexes.component.html',
  styleUrls: ['./pioneer-reveal-log-indexes.component.scss']
})
export class PioneerRevealLogIndexesComponent implements OnInit {
  public form: FormGroup;
  public indexTypeEnum = IndexTypeEnum;

  constructor(
    public stateService: StateService,
    private logService: PioneerRevealLogService,
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      index: [{}]
    });

    this.form.valueChanges.subscribe(val => {
      this.queryBuilder.setIndex(val.index);
      this.logService.getLogs();
    });
  }

  onCheckboxChanged(index: string): void {
    if (this.queryBuilder.isIndexSet(index)) {
      this.queryBuilder.removeIndex(index);
    } else {
      this.queryBuilder.setIndex(index);
    }
    this.logService.getLogs();
  }
}
