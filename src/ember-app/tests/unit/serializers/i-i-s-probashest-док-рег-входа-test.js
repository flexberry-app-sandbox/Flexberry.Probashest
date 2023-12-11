import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probashest-док-рег-входа', 'Unit | Serializer | i-i-s-probashest-док-рег-входа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probashest-док-рег-входа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probashest-вид-карты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
