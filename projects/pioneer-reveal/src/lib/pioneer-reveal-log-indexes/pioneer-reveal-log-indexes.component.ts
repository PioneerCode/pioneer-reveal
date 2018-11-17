import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PioneerRevealRepository } from '../pioneer-reveal.repository';
import { Index } from '../models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pioneer-reveal-log-indexes',
  templateUrl: './pioneer-reveal-log-indexes.component.html',
  styleUrls: ['./pioneer-reveal-log-indexes.component.scss']
})
export class PioneerRevealLogIndexesComponent implements OnInit {
  @Output() indexSelected: EventEmitter<string> = new EventEmitter();

  form: FormGroup;
  indices = [] as Index[];

  constructor(private pioneerRevealRepository: PioneerRevealRepository,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      index: [{}]
    });
    this.pioneerRevealRepository.getIndices()
      .subscribe(indices => this.indices = indices);

    this.form.valueChanges.subscribe(val => {
      this.indexSelected.emit(val.index);
    });
  }
}
