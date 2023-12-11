import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-probashest-гость', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-probashest-карты', { inverse: null, async: false }),
  докРегВхода: DS.belongsTo('i-i-s-probashest-док-рег-входа', { inverse: 'входГостя', async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-probashest-вход-гостя.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-probashest-вход-гостя.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докРегВхода: {
    descriptionKey: 'models.i-i-s-probashest-вход-гостя.validations.докРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходГостяE', 'i-i-s-probashest-вход-гостя', {
    гость: belongsTo('i-i-s-probashest-гость', 'Гость', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    карты: belongsTo('i-i-s-probashest-карты', 'Карта', {
      кодКарты: attr('Код карты', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'кодКарты' })
  });
};
