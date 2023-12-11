import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  почта: DS.attr('string'),
  серНомПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-probashest-гость.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-probashest-гость.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серНомПаспорта: {
    descriptionKey: 'models.i-i-s-probashest-гость.validations.серНомПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-probashest-гость.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-probashest-гость.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостьE', 'i-i-s-probashest-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('Почта', { index: 4 })
  });

  modelClass.defineProjection('ГостьL', 'i-i-s-probashest-гость', {
    фИО: attr('ФИО', { index: 0 }),
    датаРождения: attr('Дата рождения', { index: 1 }),
    серНомПаспорта: attr('Сер ном паспорта', { index: 2 }),
    телефон: attr('Телефон', { index: 3 }),
    почта: attr('Почта', { index: 4 })
  });
};
