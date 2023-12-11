import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  серНомПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-probashest-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-probashest-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-probashest-сотрудник.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probashest-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-probashest-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-probashest-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-probashest-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должности: belongsTo('i-i-s-probashest-должности', 'Должности', {
      должность: attr('Должность', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'должность' }),
    датаРождения: attr('Дата рождения', { index: 3 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 4 }),
    телефон: attr('Телефон', { index: 5 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-probashest-сотрудник', {
    фИО: attr('ФИО', { index: 0 }),
    должности: belongsTo('i-i-s-probashest-должности', 'Должность', {
      должность: attr('Должность', { index: 1 })
    }, { index: -1, hidden: true }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 3 }),
    телефон: attr('Телефон', { index: 4 })
  });
};
