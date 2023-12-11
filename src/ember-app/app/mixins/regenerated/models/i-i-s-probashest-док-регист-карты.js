import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  гость: DS.belongsTo('i-i-s-probashest-гость', { inverse: null, async: false }),
  карты: DS.belongsTo('i-i-s-probashest-карты', { inverse: null, async: false }),
  комнаты: DS.belongsTo('i-i-s-probashest-комнаты', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-probashest-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probashest-док-регист-карты.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гость: {
    descriptionKey: 'models.i-i-s-probashest-док-регист-карты.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  карты: {
    descriptionKey: 'models.i-i-s-probashest-док-регист-карты.validations.карты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комнаты: {
    descriptionKey: 'models.i-i-s-probashest-док-регист-карты.validations.комнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-probashest-док-регист-карты.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокРегистКартыE', 'i-i-s-probashest-док-регист-карты', {
    дата: attr('Дата', { index: 0 }),
    гость: belongsTo('i-i-s-probashest-гость', 'Гость', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    комнаты: belongsTo('i-i-s-probashest-комнаты', 'Комната', {
      номер: attr('Номер', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'номер' }),
    карты: belongsTo('i-i-s-probashest-карты', 'Карты', {
      кодКарты: attr('Код карты', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'кодКарты' }),
    сотрудник: belongsTo('i-i-s-probashest-сотрудник', 'Ответственный', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ДокРегистКартыL', 'i-i-s-probashest-док-регист-карты', {
    дата: attr('Дата', { index: 0 }),
    сотрудник: belongsTo('i-i-s-probashest-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    комнаты: belongsTo('i-i-s-probashest-комнаты', 'Номер', {
      номер: attr('Номер', { index: 2 })
    }, { index: -1, hidden: true }),
    карты: belongsTo('i-i-s-probashest-карты', 'Код карты', {
      кодКарты: attr('Код карты', { index: 3 })
    }, { index: -1, hidden: true }),
    гость: belongsTo('i-i-s-probashest-гость', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
