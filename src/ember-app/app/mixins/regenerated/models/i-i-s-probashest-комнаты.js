import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колвоМест: DS.attr('number'),
  номер: DS.attr('number'),
  этаж: DS.attr('number')
});

export let ValidationRules = {
  колвоМест: {
    descriptionKey: 'models.i-i-s-probashest-комнаты.validations.колвоМест.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-probashest-комнаты.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-probashest-комнаты.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатыE', 'i-i-s-probashest-комнаты', {
    номер: attr('Номер', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    колвоМест: attr('Колво мест', { index: 2 })
  });

  modelClass.defineProjection('КомнатыL', 'i-i-s-probashest-комнаты', {
    номер: attr('Номер', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    колвоМест: attr('Колво мест', { index: 2 })
  });
};
