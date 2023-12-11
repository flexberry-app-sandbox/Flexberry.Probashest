import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbashestГостьLForm from './forms/i-i-s-probashest-гость-l';
import IISProbashestДокРегВходаLForm from './forms/i-i-s-probashest-док-рег-входа-l';
import IISProbashestДокРегистКартыLForm from './forms/i-i-s-probashest-док-регист-карты-l';
import IISProbashestДолжностиLForm from './forms/i-i-s-probashest-должности-l';
import IISProbashestКартыLForm from './forms/i-i-s-probashest-карты-l';
import IISProbashestКомнатыLForm from './forms/i-i-s-probashest-комнаты-l';
import IISProbashestСотрудникLForm from './forms/i-i-s-probashest-сотрудник-l';
import IISProbashestГостьEForm from './forms/i-i-s-probashest-гость-e';
import IISProbashestДокРегВходаEForm from './forms/i-i-s-probashest-док-рег-входа-e';
import IISProbashestДокРегистКартыEForm from './forms/i-i-s-probashest-док-регист-карты-e';
import IISProbashestДолжностиEForm from './forms/i-i-s-probashest-должности-e';
import IISProbashestКартыEForm from './forms/i-i-s-probashest-карты-e';
import IISProbashestКомнатыEForm from './forms/i-i-s-probashest-комнаты-e';
import IISProbashestСотрудникEForm from './forms/i-i-s-probashest-сотрудник-e';
import IISProbashestВходГостяModel from './models/i-i-s-probashest-вход-гостя';
import IISProbashestВходСотрудникаModel from './models/i-i-s-probashest-вход-сотрудника';
import IISProbashestГостьModel from './models/i-i-s-probashest-гость';
import IISProbashestДокРегВходаModel from './models/i-i-s-probashest-док-рег-входа';
import IISProbashestДокРегистКартыModel from './models/i-i-s-probashest-док-регист-карты';
import IISProbashestДолжностиModel from './models/i-i-s-probashest-должности';
import IISProbashestКартыModel from './models/i-i-s-probashest-карты';
import IISProbashestКомнатыModel from './models/i-i-s-probashest-комнаты';
import IISProbashestСотрудникModel from './models/i-i-s-probashest-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probashest-вход-гостя': IISProbashestВходГостяModel,
    'i-i-s-probashest-вход-сотрудника': IISProbashestВходСотрудникаModel,
    'i-i-s-probashest-гость': IISProbashestГостьModel,
    'i-i-s-probashest-док-рег-входа': IISProbashestДокРегВходаModel,
    'i-i-s-probashest-док-регист-карты': IISProbashestДокРегистКартыModel,
    'i-i-s-probashest-должности': IISProbashestДолжностиModel,
    'i-i-s-probashest-карты': IISProbashestКартыModel,
    'i-i-s-probashest-комнаты': IISProbashestКомнатыModel,
    'i-i-s-probashest-сотрудник': IISProbashestСотрудникModel
  },

  'application-name': 'Probashest',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probashest',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probashest',
          title: 'Probashest'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        probashest: {
          caption: 'Probashest',
          title: 'Probashest',
          'i-i-s-probashest-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-probashest-карты-l': {
            caption: 'Карты',
            title: ''
          },
          'i-i-s-probashest-комнаты-l': {
            caption: 'Комнаты',
            title: ''
          },
          'i-i-s-probashest-док-регист-карты-l': {
            caption: 'Док регист карты',
            title: ''
          },
          'i-i-s-probashest-док-рег-входа-l': {
            caption: 'Док рег входа',
            title: ''
          },
          'i-i-s-probashest-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-probashest-гость-l': {
            caption: 'Гость',
            title: ''
          }
        },
        клиенты: {
          caption: 'Клиенты',
          title: 'Клиенты',
          'i-i-s-probashest-гость-l': {
            caption: 'ГостьL',
            title: 'Гость'
          }
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-probashest-карты-l': {
            caption: 'КартыL',
            title: 'Карты'
          },
          'i-i-s-probashest-должности-l': {
            caption: 'ДолжностиL',
            title: 'Должности'
          },
          'i-i-s-probashest-сотрудник-l': {
            caption: 'СотрудникL',
            title: 'Сотрудник'
          },
          'i-i-s-probashest-комнаты-l': {
            caption: 'КомнатыL',
            title: 'Комнаты'
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-probashest-док-рег-входа-l': {
              caption: 'ДокРегВходаL',
              title: 'Док рег входа'
            },
            'i-i-s-probashest-док-регист-карты-l': {
              caption: 'ДокРегистКартыL',
              title: 'Док регист карты'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probashest-гость-l': IISProbashestГостьLForm,
    'i-i-s-probashest-док-рег-входа-l': IISProbashestДокРегВходаLForm,
    'i-i-s-probashest-док-регист-карты-l': IISProbashestДокРегистКартыLForm,
    'i-i-s-probashest-должности-l': IISProbashestДолжностиLForm,
    'i-i-s-probashest-карты-l': IISProbashestКартыLForm,
    'i-i-s-probashest-комнаты-l': IISProbashestКомнатыLForm,
    'i-i-s-probashest-сотрудник-l': IISProbashestСотрудникLForm,
    'i-i-s-probashest-гость-e': IISProbashestГостьEForm,
    'i-i-s-probashest-док-рег-входа-e': IISProbashestДокРегВходаEForm,
    'i-i-s-probashest-док-регист-карты-e': IISProbashestДокРегистКартыEForm,
    'i-i-s-probashest-должности-e': IISProbashestДолжностиEForm,
    'i-i-s-probashest-карты-e': IISProbashestКартыEForm,
    'i-i-s-probashest-комнаты-e': IISProbashestКомнатыEForm,
    'i-i-s-probashest-сотрудник-e': IISProbashestСотрудникEForm
  },

});

export default translations;
