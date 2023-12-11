import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probashest-сотрудник', 'Unit | Model | i-i-s-probashest-сотрудник', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probashest-вход-гостя',
    'model:i-i-s-probashest-вход-сотрудника',
    'model:i-i-s-probashest-гость',
    'model:i-i-s-probashest-док-рег-входа',
    'model:i-i-s-probashest-док-регист-карты',
    'model:i-i-s-probashest-должности',
    'model:i-i-s-probashest-карты',
    'model:i-i-s-probashest-комнаты',
    'model:i-i-s-probashest-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
