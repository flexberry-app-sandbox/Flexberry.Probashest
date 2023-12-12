import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-probashest-сотрудник', { inverse: null, async: false }),
  докРегВхода: DS.belongsTo('i-i-s-probashest-док-рег-входа', { inverse: 'входСотрудника', async: false })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-probashest-вход-сотрудника.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докРегВхода: {
    descriptionKey: 'models.i-i-s-probashest-вход-сотрудника.validations.докРегВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходСотрудникаE', 'i-i-s-probashest-вход-сотрудника', {
    сотрудник: belongsTo('i-i-s-probashest-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 1, hidden: true }),
      должности: belongsTo('i-i-s-probashest-должности', '', {
        должность: attr('', { index: 2 })
      }, { index: -1, hidden: true }),
      карты: belongsTo('i-i-s-probashest-карты', '', {
        кодКарты: attr('', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });
};
