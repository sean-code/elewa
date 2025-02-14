import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MultiLangModule } from '@ngfi/multi-lang';
import {
  MaterialDesignModule,
  MaterialBricksModule,
} from '@iote/bricks-angular';
import { ConvsMgrBlockOptionsModule } from '@app/features/convs-mgr/stories/blocks/library/block-options';

import { KeywordJumpBlockEditComponent } from './components/keyword-jump-block-edit/keyword-jump-block-edit.component';
import { OpenEndedQuestionEditComponent } from './components/open-ended-question-edit/open-ended-question-edit.component';
import { MessageBlockEditComponent } from './components/message-block-edit/message-block-edit.component';
import { EmailBlockEditComponent } from './components/email-block-edit/email-block-edit.component';
import { PhoneBlockEditComponent } from './components/phone-block-edit/phone-block-edit.component';
import { NameBlockEditComponent } from './components/name-block-edit/name-block-edit.component';
import { WebhookEditComponent } from './components/webhook-edit/webhook-edit.component';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiLangModule,
    ConvsMgrBlockOptionsModule,
    MaterialBricksModule,
    MaterialDesignModule,
  ],
  
  declarations: [
    KeywordJumpBlockEditComponent,
    OpenEndedQuestionEditComponent,
    MessageBlockEditComponent,
    NameBlockEditComponent,
    EmailBlockEditComponent,
    PhoneBlockEditComponent,
    WebhookEditComponent,
    DefaultComponent,
  ],
})
export class ConvsMgrEditBlockModule {}
