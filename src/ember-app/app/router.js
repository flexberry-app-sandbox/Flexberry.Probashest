import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probashest-гость-l');
  this.route('i-i-s-probashest-гость-e',
  { path: 'i-i-s-probashest-гость-e/:id' });
  this.route('i-i-s-probashest-гость-e.new',
  { path: 'i-i-s-probashest-гость-e/new' });
  this.route('i-i-s-probashest-док-рег-входа-l');
  this.route('i-i-s-probashest-док-рег-входа-e',
  { path: 'i-i-s-probashest-док-рег-входа-e/:id' });
  this.route('i-i-s-probashest-док-рег-входа-e.new',
  { path: 'i-i-s-probashest-док-рег-входа-e/new' });
  this.route('i-i-s-probashest-док-регист-карты-l');
  this.route('i-i-s-probashest-док-регист-карты-e',
  { path: 'i-i-s-probashest-док-регист-карты-e/:id' });
  this.route('i-i-s-probashest-док-регист-карты-e.new',
  { path: 'i-i-s-probashest-док-регист-карты-e/new' });
  this.route('i-i-s-probashest-должности-l');
  this.route('i-i-s-probashest-должности-e',
  { path: 'i-i-s-probashest-должности-e/:id' });
  this.route('i-i-s-probashest-должности-e.new',
  { path: 'i-i-s-probashest-должности-e/new' });
  this.route('i-i-s-probashest-карты-l');
  this.route('i-i-s-probashest-карты-e',
  { path: 'i-i-s-probashest-карты-e/:id' });
  this.route('i-i-s-probashest-карты-e.new',
  { path: 'i-i-s-probashest-карты-e/new' });
  this.route('i-i-s-probashest-комнаты-l');
  this.route('i-i-s-probashest-комнаты-e',
  { path: 'i-i-s-probashest-комнаты-e/:id' });
  this.route('i-i-s-probashest-комнаты-e.new',
  { path: 'i-i-s-probashest-комнаты-e/new' });
  this.route('i-i-s-probashest-сотрудник-l');
  this.route('i-i-s-probashest-сотрудник-e',
  { path: 'i-i-s-probashest-сотрудник-e/:id' });
  this.route('i-i-s-probashest-сотрудник-e.new',
  { path: 'i-i-s-probashest-сотрудник-e/new' });
});

export default Router;
