import {
  defineNamespace,
  defineProjections,
  Model as ДокРегистКартыMixin
} from '../mixins/regenerated/models/i-i-s-probashest-док-регист-карты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокРегистКартыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
