import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { Index } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PioneerRevealLogQueryBuilder } from '../pioneer-reveal-log-query-builder';

@Component({
  selector: 'pioneer-reveal-log-indexes',
  templateUrl: './pioneer-reveal-log-indexes.component.html',
  styleUrls: ['./pioneer-reveal-log-indexes.component.scss']
})
export class PioneerRevealLogIndexesComponent implements OnInit {
  @Output() indexSelected: EventEmitter<void> = new EventEmitter();

  form: FormGroup;
  indices = [] as Index[];

  constructor(
    private pioneerRevealRepository: PioneerRevealRepository,
    private queryBuilder: PioneerRevealLogQueryBuilder,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      index: [{}]
    });
    this.pioneerRevealRepository.getIndices()
      .subscribe(indices => this.indices = indices);

    this.form.valueChanges.subscribe(val => {
      this.queryBuilder.setIndex(val.index);
      this.indexSelected.emit();
    });
  }

  onCheckboxChanged(val: Index): void {
    if (this.queryBuilder.isIndexSet(val.index)) {
      this.queryBuilder.removeIndex(val.index);
    } else {
      this.queryBuilder.setIndex(val.index);
    }
    this.indexSelected.emit();
  }
}
