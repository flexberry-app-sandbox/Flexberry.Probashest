import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-probashest-гость-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-probashest-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-probashest-гость-l.title'),
            icon: 'building',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-probashest-карты-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-карты-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-карты-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-probashest-должности-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-должности-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-probashest-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-сотрудник-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-probashest-комнаты-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-комнаты-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probashest-комнаты-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.документы.caption'),
            title: i18n.t('forms.application.sitemap.отель.документы.title'),
            children: [{
              link: 'i-i-s-probashest-док-рег-входа-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probashest-док-рег-входа-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probashest-док-рег-входа-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-probashest-док-регист-карты-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probashest-док-регист-карты-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probashest-док-регист-карты-l.title'),
              icon: 'building',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})