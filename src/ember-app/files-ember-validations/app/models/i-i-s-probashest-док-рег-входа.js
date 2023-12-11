import {
  defineNamespace,
  defineProjections,
  Model as ДокРегВходаMixin
} from '../mixins/regenerated/models/i-i-s-probashest-док-рег-входа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокРегВходаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
