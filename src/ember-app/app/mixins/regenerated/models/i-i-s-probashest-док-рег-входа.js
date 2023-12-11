import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  комнаты: DS.belongsTo('i-i-s-probashest-комнаты', { inverse: null, async: false }),
  входГостя: DS.hasMany('i-i-s-probashest-вход-гостя', { inverse: 'докРегВхода', async: false }),
  входСотрудника: DS.hasMany('i-i-s-probashest-вход-сотрудника', { inverse: 'докРегВхода', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probashest-док-рег-входа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  комнаты: {
    descriptionKey: 'models.i-i-s-probashest-док-рег-входа.validations.комнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  входГостя: {
    descriptionKey: 'models.i-i-s-probashest-док-рег-входа.validations.входГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  входСотрудника: {
    descriptionKey: 'models.i-i-s-probashest-док-рег-входа.validations.входСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокРегВходаE', 'i-i-s-probashest-док-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комнаты: belongsTo('i-i-s-probashest-комнаты', 'Комната', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    входГостя: hasMany('i-i-s-probashest-вход-гостя', 'Вход гостя', {
      гость: belongsTo('i-i-s-probashest-гость', 'Гость', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' }),
      карты: belongsTo('i-i-s-probashest-карты', 'Карта', {
        кодКарты: attr('Код карты', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'кодКарты' })
    }),
    входСотрудника: hasMany('i-i-s-probashest-вход-сотрудника', 'Вход сотрудника', {
      сотрудник: belongsTo('i-i-s-probashest-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 1, hidden: true }),
        должности: belongsTo('i-i-s-probashest-должности', '', {
          должность: attr('', { index: 2 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ДокРегВходаL', 'i-i-s-probashest-док-рег-входа', {
    дата: attr('Дата', { index: 0 }),
    комнаты: belongsTo('i-i-s-probashest-комнаты', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
